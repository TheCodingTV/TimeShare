import { useState, useEffect } from 'react'
import Storage from '@Storage'
import Timer from '../../Controllers/Timer'

export default function TimerPage () {
  const [timer, setTimer] = useState([])

  useEffect(() => {
    const data = Storage.getItem('timer-share-local')
    if (data) {
      setTimer(JSON.parse(data))
    }
  }, [])

  return (
    <div>
      {timer.length > 0 &&
        <Timer
          config={[{ totalSeconds: 90, componentType: 'card' }]}
          onMoveNext={() => {}}
          sectionId={1}
          hasNextStep={false}
        />}
    </div>
  )
}