import { useEffect, useState } from 'react'
import SideBar from '../../Components/SideBar'
import Timer from '../../Controllers/Timer'
import * as Api from '../../Api'

export default function App () {
  const [timerId, setTimerId] = useState(null)
  const [timerSectionStep, setTimerSectionStep] = useState(0)
  const [myTimers, setMyTimers] = useState([])

  const onSideBarClick = idx => {
    setTimerSectionStep(idx)
  }

  const getMyTimers = async () => {
    const data = await Api.getMyTimers()
    setMyTimers(data)
    setTimerId(data[0].id)
  }

  const onMyTimersClick = ({ id }) => {
    setTimerId(id)
    setTimerSectionStep(0)
  }

  useEffect(() => {
    getMyTimers()
  }, [])

  const currentTimerConfig = (myTimers[0] && typeof timerId === 'number')
    ? myTimers.find(i => i.id === timerId).config
    : []

  const onMoveNext = () => {
    if (currentTimerConfig[timerSectionStep + 1]) {
      setTimerSectionStep(timerSectionStep + 1)
    }
  }
  

  const sideBarConfig = [
    {
      title: '我的收藏',
      items: myTimers.map(_ => ({
        title: _.title,
        active: _.id === timerId,
        onClick: () => { onMyTimersClick(_) }
      }))
    },
    {
      title: '当前计时器',
      items: currentTimerConfig
        ? currentTimerConfig.map((_, idx) => ({
          title: _.title,
          active: idx === timerSectionStep,
          onClick: () => onSideBarClick(idx)
        }))
        : []
    }
  ]

  const currentTimerSection = currentTimerConfig[timerSectionStep] || {
    title: '',
    description: '',
    timerConfig: []
  }

  return (
    <div className="app">
      <SideBar config={sideBarConfig} />
      <div className='content'>
        <h1>{currentTimerSection.title}</h1>
        <div className='subtitle'>{currentTimerSection.description}</div>
        <Timer
          config={currentTimerSection.timerConfig}
          sectionId={`${timerId}_${timerSectionStep}`}
          onMoveNext={onMoveNext}
          hasNextStep={currentTimerConfig.length !== timerSectionStep + 1}
        />
      </div>
    </div>
  )
}