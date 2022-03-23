import MenuButton from '../MenuButton'
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

export default function SideBar ({ config = defaultConfig }) {
  return (
    <div className='side-bar'>
      {config.map((section, index) => {
        return (
          <div className='side-bar-section' key={index}>
            <div className='side-bar-label'>{section.title}</div>
            {section.items.map(item => {
              return <MenuButton
                key={item.title}
                active={item.active}
                onClick={item.onClick}
                text={item.title}
              />
            })}
          </div>
        )
      })}
    </div>
  )
}