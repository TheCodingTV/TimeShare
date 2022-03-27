import { useEffect, useRef } from 'react'
import PlaySVG from '../../Assets/play.svg'
import PauseSVG from '../../Assets/pause.svg'
import './style.css'

const height = 300
const width = 480

export default function TimerCard ({
  onRunClick,
  totalSeconds,
  isRunning,
  id,
  seconds,
  colorType = 1
}) {
  
  const canvasRef = useRef(null)
  const min = parseInt(seconds / 60)
  const sec = seconds % 60

  const draw = canvas => {
    const ctx = canvas.getContext('2d')
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    canvas.style.width = width + "px"
    canvas.style.height = height + "px";

    const scale = window.devicePixelRatio
    canvas.width = Math.floor(width * scale)
    canvas.height = Math.floor(height * scale)

    ctx.scale(scale, scale);

    ctx.fillStyle = 'rgba(33, 33, 52, 1)'
    ctx.moveTo(width / 2, height / 2)  // center

    // start angle: -0.5 * pi
    // end angle: -0.5 - 1.5
    const step = parseFloat((totalSeconds - seconds) / totalSeconds, 2)
    const endAngle = (step * 2 - 0.5) * Math.PI
    ctx.arc(width / 2, height / 2, 300, -0.5 * Math.PI, endAngle)
    ctx.lineTo(width / 2, height / 2)
    ctx.fill()
  }

  useEffect(() => {
    if (global.type === 'Taro') {
      return
    }

    const canvas = canvasRef.current
    if (seconds !== totalSeconds) {
      draw(canvas)
    } 
  }, [seconds, totalSeconds])

  return (
    <div className={`
      timer-card
      timer-color-${colorType}
    `} style={{ width, height }}>
      <div className='timer-canvas-container' style={{ width, height }}>
        <canvas
          type='2d'
          id={id}
          width={width + 'px'}
          height={height + 'px'}
          ref={canvasRef}
        />
      </div>
      <div className='timer-card-control' onClick={onRunClick}>
        <div className='timer-text'>{min < 10 ? `0${min}` : min}:{sec < 10 ? `0${sec}` : sec}</div>
        <div className='timer-button'>
          {isRunning ? <img src={PauseSVG} alt='pause' /> : <img src={PlaySVG} alt='play' />}
        </div>      
      </div>
    </div>
  )
}