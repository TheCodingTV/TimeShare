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

  return (
    <div
      className={`timer-row timer-row-${type} ${isRunning ? 'timer-row-running' : ''}`}
      onClick={onRunClick}
    >
      <div className="timer-row-coverer" style={{ width: `${percentage * 100}%` }} />
    </div>
  )
}