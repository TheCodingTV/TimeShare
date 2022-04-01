import { useState } from 'react'
import Layout from './Controllers/Layout'
import Timer from './Pages/Timer'
import CreateTimer from './Pages/CreateTimer'
import './Style/index.css'

window.COMPILE_TYPE = 'Vite'

export default function App () {
  const [route, setRoute] = useState('create-timer')
  const [timerConfig, setTimerConfig] = useState()
  const [timerId, setTimerId] = useState(null)

  const onTimerClick = (timer, idx) => {
    setTimerConfig(timer)
    setTimerId(timer.id || (`local_${idx}`))
    setRoute('timer')
  }

  const onCreateClick = () => {
    setRoute('create-timer')
  }

  return (
    <Layout onTimerClick={onTimerClick} onCreateClick={onCreateClick}>
      {route === 'create-timer' && <CreateTimer />}
      {route === 'timer' && <Timer timerConfig={timerConfig} timerId={timerId} />}
    </Layout>
  )
}