import './style.css'
import Logo from '../../Assets/timershare-logo.svg'

export default function AuthFooter ({ username, avatar }) {
  return (
    <div className="auth-footer">
      <img src={avatar || Logo} className='auth-avatar' />
      <div className='auth-username'>{username}</div>
    </div>
  )
}