import './style.css'

export default function ButtonMenu ({ className, Icon, text, active, onClick }) {
  return (
    <div 
      className={`
        menu-button
        ${active ? 'menu-button-active' : ''}
        ${className ? className : ''}
      `}
      onClick={onClick}
    >
      {Icon && <Icon />}
      <div className="menu-button-text">
        {text}
      </div>
    </div>
  )
}