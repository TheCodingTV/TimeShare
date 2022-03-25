import './style.css'

export default function Button ({
  size = 'm',
  type = 'primary',
  children,
  onClick,
  full = false,
  style = {},
  className
}) {
  return (
    <div style={style} onClick={onClick} className={`
      button
      button-${type}
      button-size-${size}
      ${full ? 'button-full' : ''}
      ${className ? className : ''}
    `}>
      {children}
    </div>
  )
}