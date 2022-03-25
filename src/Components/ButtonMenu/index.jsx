import './style.css'

export default function ButtonMenu ({ Icon, text, active, onClick }) {
  return (
    <div 
      className={`
        menu-button
        ${active ? 'menu-button-active' : ''}
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