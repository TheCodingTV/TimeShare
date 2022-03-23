import { useState, useEffect, useRef } from 'react'
import TimerController from '../TimerController'
import TimerRow from '../TimerRow'

const defaultConfig = [
  { id: 1, totalSeconds: 120, Component: TimerRow },
  { id: 2, totalSeconds: 240, Component: TimerRow }
]

export default function Timer ({ config = defaultConfig, timerId }) {
  const [runningId, setRunningId] = useState(null)
  const [ended, setEnded] = useState([])
  const timerRef = useRef([])

  const pauseTimer = id => {
    timerRef.current[id].stop()
  }

  const onRun = id => {
    if (runningId) {
      pauseTimer(runningId)
    }
    setRunningId(id)
    setEnded(ended.filter(i => i !== id))
  }

  const onPause = () => {
    // What if one timer paused ?
  }

  const onEnd = id => {
    if (config.length === 2 && ended.length === 0) {
      const another = config.find(i => i.id !== id)
      timerRef.current[another.id].run()
    }
    setEnded(ended.concat([id]))
  }
  
  return (
    <div>
      {config.map(item => {
        return (
          <TimerController
            Component={item.Component}
            key={item.id}
            totalSeconds={item.totalSeconds}
            type={item.type || 'primary'}
            onRun={() => onRun(item.id)}
            onPause={() => onPause(item.id)}
            onEnd={() => onEnd(item.id)}
            ref={ref => { timerRef.current[item.id] = ref }}
            timerId={timerId}
          />
        )
      })}
    </div>
  )
}
