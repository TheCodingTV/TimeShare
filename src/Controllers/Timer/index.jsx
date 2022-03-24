import { useEffect, useState, useRef } from 'react'
import TimerController from '../TimerController'
import Select from '../../Components/Select'
import TimerCard from '../../Components/TimerCard'
import TimerRow from '../../Components/TimerRow'

export default function Timer ({ config, onMoveNext, sectionId, hasNextStep }) {
  /* give each section a id based on index */
  config = config.map((_, idx) => ({ ..._, id: sectionId + '_' + (idx + 1) }))
  
  const [runningId, setRunningId] = useState(null)
  const [autoNextSection, setAutoNextSection] = useState(true)
  const [autoStartSection, setAutoStartSection] = useState(false)
  const [ended, setEnded] = useState([])
  const timerRef = useRef([])

  const pauseTimer = id => {
    timerRef.current[id]?.stop()
  }

  const onRun = id => {
    if (runningId && (id !== runningId)) {
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

  useEffect(() => {
    if (autoNextSection && ended.length === config.length) {
      onMoveNext()
    }
  }, [ended])

  useEffect(() => {
    if (autoStartSection) {
      const firstId = config[0].id
      timerRef.current[firstId].run()
    }

    setEnded([])
  }, [sectionId])

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
            sectionId={sectionId}
          />
        )
      })}
      {hasNextStep &&
        <Select
          onClick={() => { setAutoNextSection(!autoNextSection) }}
          selected={autoNextSection}
          label='自动进入下一环节'
        />}
      {hasNextStep &&
        <Select
          onClick={() => { setAutoStartSection(!autoStartSection) }}
          selected={autoStartSection}
          label='自动开始下一环节'
        />}
    </div>
  )
}
