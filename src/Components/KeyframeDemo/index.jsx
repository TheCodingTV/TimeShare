import { useState } from 'react'
import './index.css'

export default function KeyframeDemo () {
  const [className, setClassName] = useState('demo')

  function onButtonClick () {
    if (className === 'demo') {
      setClassName("demo short")
    } else {
      setClassName("demo")
    }
  }

  return (
    <>
      <div className={className} />
      <button style={{marginTop: 100}} onClick={onButtonClick}>start / stop</button>
    </>
  )
}