import React from 'react'
import Timer from '../../Controllers/Timer'

export default function HomePage () {
  return (
    <Timer
      config={[
        { totalSeconds: 210, componentType: 'card' },
      ]}
      onMoveNext={() => {}}
      sectionId={'abc'}
      hasNextStep={false}
    />
  )
}