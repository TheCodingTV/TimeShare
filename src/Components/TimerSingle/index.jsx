import React from 'react'
import TimerController from '../TimerController'

function TimerSingle ({ title, cover, ...props }) {
  return (
    <div className='timer-container'>
      {cover && <div style={{ backgroundImage: `url(${cover})` }} className='timer-cover' />}
      {title && <div>{title}</div>}
      <TimerController {...props} />
    </div>
  )
}

export default TimerSingle