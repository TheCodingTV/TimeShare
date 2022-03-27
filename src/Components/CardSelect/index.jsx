import './style.css'

export default function CardSelect ({
  selected,
  title,
  description,
  Component,
  onClick = () => {},
  className
}) {
  return (
    <div onClick={onClick} className={`
      card-select
      ${selected ? 'card-select-active' : ''}
      ${className ? className : ''}
    `}> 
      <div className='card-select-ratio'>
        <div className='card-select-ratio-circle'>
          {selected && <div className='card-select-ratio-circle-inner' />}
        </div>
      </div>
      <div className='card-select-content'>
        <div className='card-select-title'>{title}</div>
        {description && <div className='card-select-description'>{description}</div>}
        {Component ? Component : null}
      </div>
    </div>
  )
} 