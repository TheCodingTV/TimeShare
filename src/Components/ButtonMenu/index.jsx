import Delete from '../CardAddTimerSection/delete.svg'
import './style.css'

export default function ButtonMenu ({
  className,
  Icon,
  text,
  active,
  onClick,
  canDelete = false,
  onDelete
}) {

  const onSelfDelete = (e) => {
    e.stopPropagation()
    onDelete()
  }

  return (
    <div 
      className={`
        menu-button
        ${active ? 'menu-button-active' : ''}
        ${className ? className : ''}
      `}
      onClick={onClick}
    >
      <div className='flex-row flex1'>
        {Icon && <Icon />}
        <div className="menu-button-text">
          {text}
        </div>
      </div>
      {canDelete && (
        <div className='icon-button-menu' onClick={onSelfDelete}>
          <img src={Delete} alt='delete-icon' />
        </div>
      )}
    </div>
  )
}