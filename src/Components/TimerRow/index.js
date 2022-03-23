import './style.css'

export default function TimerRow ({
  onRunClick,
  isRunning,
  seconds = 0,
  totalSeconds = 1,
  type = 'primary'
}) {
  let percentage = 1 - seconds / totalSeconds
  if (percentage > 1) percentage = 1
  if (percentage < 0) percentage = 0

  const min = parseInt(seconds / 60)
  const sec = seconds % 60

  return (
    <div
      className={`
        timer-row
        timer-row-${type}
        ${isRunning ? `timer-row-${type}-focus` : ''}
      `}
      onClick={onRunClick}
    >
      <div className="timer-row-coverer" style={{ width: `${percentage * 100}%` }} />
      <div className={`timer-row-text ${isRunning ? 'timer-row-text-focus' : ''}`}>{min < 10 ? `0${min}` : min}:{sec < 10 ? `0${sec}` : sec}</div>
    </div>
  )
}