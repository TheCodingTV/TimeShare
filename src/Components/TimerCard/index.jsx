import { useEffect, useRef } from 'react'
import PlaySVG from '../../Assets/play.svg'
import PauseSVG from '../../Assets/pause.svg'
import './style.css'

const height = 240
const width = 400

export default function TimerCard ({
  onRunClick,
  totalSeconds,
  isRunning,
  sectionId,
  seconds,
  colorType = 1
}) {
  
  const canvasRef = useRef(null)
  const min = parseInt(seconds / 60)
  const sec = seconds % 60

  const draw = ctx => {
    ctx.fillStyle = 'rgba(33, 33, 52, 1)'
    ctx.moveTo(200, 150)  // center

    // start angle: -0.5 * pi
    // end angle: -0.5 - 1.5
    const step = parseFloat((totalSeconds - seconds) / totalSeconds, 2)
    const endAngle = (step * 2 - 0.5) * Math.PI
    ctx.arc(200, 150, 300, -0.5 * Math.PI, endAngle)
    ctx.lineTo(200, 150)
    ctx.fill()
  }

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (seconds !== totalSeconds) {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      draw(ctx)
    } 
  }, [seconds, totalSeconds])

  return (
    <div className={`
      timer-card
      timer-color-${colorType}
    `} style={{ width, height }}>
      <div className='timer-canvas-container' style={{ width, height }}>
        <canvas id={sectionId} width={width} height={height} ref={canvasRef} />
      </div>
      <div className='timer-card-control'>
        <div className='timer-text'>{min < 10 ? `0${min}` : min}:{sec < 10 ? `0${sec}` : sec}</div>
        <div className='timer-button' onClick={onRunClick}>
          {isRunning ? <img src={PauseSVG} alt='pause' /> : <img src={PlaySVG} alt='play' />}
        </div>      
      </div>
    </div>
  )
}