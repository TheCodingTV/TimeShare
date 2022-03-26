import ButtonMenu from '../ButtonMenu'
import Logo from '../../Assets/timeshare-full.svg'
import './style.css'

const defaultConfig = [
  {
    title: '我的收藏',
    items: [
      { title: '辩论1', active: true, onClick: () => {} },
      { title: '辩论2', active: false, onClick: () => {} }
    ]
  },
  {
    title: '当前计时',
    items: [
      { title: '一辩陈词 - 正方', active: true, onClick: () => {} },
      { title: '一辩陈词 - 反方', active: false, onClick: () => {} },
      { title: '对辩', active: false, onClick: () => {} },
    ]
  }
]

export default function SideBar ({ config = defaultConfig, secondary = false, title }) {
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
    </div>
  )
}