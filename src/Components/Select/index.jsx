import Uncheck from './uncheck.svg'
import Check from './check.svg'
import './style.css'

export default function Select ({
  selected = false,
  label = '',
  onClick={onClick}
}) {
  return (
    <div className='select' onClick={onClick}>
      <img src={selected ? Check : Uncheck} className='select-svg' alt='checkbox' />
      {label && <div className='select-label'>{label}</div>}
    </div>
  )
}