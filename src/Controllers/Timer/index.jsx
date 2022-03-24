import { useState, useRef } from 'react'
import TimerController from '../TimerController'
import TimerCard from '../../Components/TimerCard'
import TimerRow from '../../Components/TimerRow'

export default function Timer ({ config, timerId }) {
  /* give each section a id based on index */
  config = config.map((_, idx) => ({ ..._, id: idx + 1 }))
  
  const [runningId, setRunningId] = useState(null)
  const [ended, setEnded] = useState([])
  const timerRef = useRef([])

  const pauseTimer = id => {
    timerRef.current[id]?.stop()
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
    <div className='timer-wrapper'>
      {config.map(item => {
        let Component = TimerRow
        if (item.component === 'card') Component = TimerCard
        return (
          <TimerController
            Component={Component}
            key={item.id}
            totalSeconds={item.totalSeconds}
            type={item.type}
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
