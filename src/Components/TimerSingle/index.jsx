import React from 'react'
import TimerController from '../TimerController'

function TimerSingle ({ cover, ...props }) {
  return (
    <div className='timer-container'>
      {cover && <div style={{ backgroundImage: `url(${cover})` }} className='timer-cover' />}
      <TimerController {...props} />
    </div>
  )
}

export default TimerSingle