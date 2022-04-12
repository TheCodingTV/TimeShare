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
    <div style={{ marginTop: 100 }}>
      <Timer
        config={[{ totalSeconds: 90, componentType: 'row' }]}
        onMoveNext={() => {}}
        sectionId={1}
        hasNextStep={false}
      />
    </div>
  )
}