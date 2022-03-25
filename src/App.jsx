import { useState } from 'react'
import Layout from './Controllers/Layout'
import Timer from './Pages/Timer'
import CreateTimer from './Pages/CreateTimer'

export default function App () {
  const [route, setRoute] = useState('create-timer')
  const [timerConfig, setTimerConfig] = useState()
  const [timerId, setTimerId] = useState(null)
  const [timerTitle, setTimerTitle] = useState('')

  const onTimerClick = (timer, idx) => {
    setTimerConfig(timer.config)
    setTimerId(timer.id || (`local_${idx}`))
    setTimerTitle(timer.title)
    setRoute('timer')
  }

  const onCreateClick = () => {
    setRoute('create-timer')
  }

  return (
    <Layout onTimerClick={onTimerClick} onCreateClick={onCreateClick}>
      {route === 'create-timer' && <CreateTimer />}
      {route === 'timer' && <Timer timerConfig={timerConfig} timerId={timerId} timerTitle={timerTitle} />}
    </Layout>
  )
}