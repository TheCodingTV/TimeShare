import { useState, useEffect } from 'react'
import SideBar from '../../Components/SideBar'
import Timer from '../../Controllers/Timer'

export default function TimerPage ({ timerConfig, timerId }) {
  const { config, title } = timerConfig
  const [timerSectionStep, setTimerSectionStep] = useState(0)

  useEffect(() => {
    setTimerSectionStep(0)
  }, [timerId])

  const onSideBarClick = idx => {
    setTimerSectionStep(idx)
  }

  const onMoveNext = () => {
    if (config[timerSectionStep + 1]) {
      setTimerSectionStep(timerSectionStep + 1)
    }
  }

  const sideBarConfig = [
    {
      title: '当前计时器',
      items: config
        ? config.map((_, idx) => ({
          title: _.title,
          active: idx === timerSectionStep,
          onClick: () => onSideBarClick(idx)
        }))
        : []
    }
  ]

  const currentTimerSection = config[timerSectionStep] || {
    title: '',
    description: '',
    timerConfig: []
  }

  return (
    <div className="app">
      <SideBar config={sideBarConfig} secondary title={title} />
      <div className='content'>
        <h1>{currentTimerSection.title}</h1>
        <div className='subtitle'>{currentTimerSection.description}</div>
        <Timer
          config={currentTimerSection.timerConfig}
          sectionId={`${timerId}_${timerSectionStep}`}
          onMoveNext={onMoveNext}
          hasNextStep={config.length !== timerSectionStep + 1}
        />
      </div>
    </div>
  )
}