import ButtonMenu from '../ButtonMenu'
import Logo from '../../Assets/timeshare-full.svg'
import AuthFooter from '../../Components/AuthFooter'
import Button from '../../Components/Button'
import './style.css'

export default function SideBar ({ config = [], secondary = false, user, title, onLogin }) {
  return (
    <div className={`
      side-bar
      ${secondary ? 'side-bar-secondary' : ''}
    `}>
      {!secondary
        ? <div className='side-bar-top'>
            <img src={Logo} className='side-bar-logo' />
          </div>
        : <div className='side-bar-top-secondard'>
            <div>{title}</div>
            <div className='side-bar-divider' />
          </div>
      }
      <div className='side-bar-content'>
        {config.map((section, index) => {
          return (
            <div className='side-bar-section' key={index}>
              <div className='side-bar-label'>{section.title}</div>
              {section.items.map(item => {
                return <ButtonMenu
                  key={item.title}
                  active={item.active}
                  onClick={item.onClick}
                  text={item.title}
                  className={item.className}
                  canDelete={item.canDelete}
                  onDelete={item.onDelete}
                />
              })}
            </div>
          )
        })}
      </div>
      {
        !secondary 
        ? (user.id
            ? <AuthFooter username={user.username} avatar={user.avatar} /> 
            : <div style={{ padding: 20 }}>
              <Button onClick={onLogin} type='secondary' full>登录</Button>
            </div>)
        : null
      }
    </div>
  )
}