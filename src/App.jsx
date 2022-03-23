import { useState } from 'react'
import SideBar from './Components/SideBar'
import Timer from './Components/Timer'

const myTimers = [
  { title: '辩论1', active: true, onClick: () => {} }
]

const currentTimerConfig = (onItemClick, activeIndex) => [
    { 
      title: '一辩陈词 - 正方',
      description: '学生就业压力大有利于成才 - 正方发言4分钟，阐述本方观点',
      active: activeIndex === 0,
      onClick: () => onItemClick(0),
      timerConfig: [
        { id: 1, totalSeconds: 240 },
      ]
    },
    { 
      title: '一辩陈词 - 反方',
      description: '学生就业压力大有利于成才 - 反方发言4分钟，阐述本方观点',
      active: activeIndex === 1,
      onClick: () => onItemClick(1),
      timerConfig: [
        { id: 1, totalSeconds: 240 },
      ]
    },
    {
      title: '对辩',
      description: '学生就业压力大有利于成才 - 正反双方对辩，交替发言',
      active: activeIndex === 2,
      onClick: () => onItemClick(2),
      timerConfig: [
        { id: 1, totalSeconds: 120 },
        { id: 2, totalSeconds: 120, type: 'secondary' },
      ]
    },
]

export default function App () {
  const [timerIndex, setTimerIndex] = useState(0)

  function onItemClick (index) {
    setTimerIndex(index)
  }

  const currentConfig = currentTimerConfig(onItemClick, timerIndex)
  const sideBarConfig = [
    { title: '我的收藏', items: myTimers },
    { title: '当前计时器', items: currentConfig}
  ]

  return (
    <div className="app">
      <SideBar config={sideBarConfig} />
      <div className='content'>
        <h1>{currentConfig[timerIndex].title}</h1>
        <div className='subtitle'>{currentConfig[timerIndex].description}</div>
        <Timer config={currentConfig[timerIndex].timerConfig} timerId={timerIndex} />
      </div>
    </div>
  )
}