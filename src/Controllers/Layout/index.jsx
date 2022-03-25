import { useEffect, useState } from 'react'
import SideBar from '../../Components/SideBar'
import * as Api from '../../Api'
import New from './new.svg'

export default function Layout ({ children, onTimerClick, onCreateClick }) {
  const [publicTimers, setPublicTimers] = useState([])
  const [localTimers, setLocalTimers] = useState([])

  const getPublicTimers = async () => {
    const data = await Api.getMyTimers()
    setPublicTimers(data)
  }

  useEffect(() => {
    
    getPublicTimers()

    const storage = window.localStorage
    const localTimers = storage.getItem('timer-share-local')
    if (localTimers) {
      setLocalTimers(JSON.parse(localTimers))
    }

  }, [])

  const sideBarConfig = [
    {
      title: '',
      items: [{
        title: <>
          <img src={New} alt='new-icon' />
          <span>创建我的计时器</span>
        </>,
        active: false,
        onClick: onCreateClick,
        className: 'create-new-button'
      }]
    },
    {
      title: '本地计时器',
      items: localTimers.map((_, idx) => ({
        title: _.title,
        active: false,
        onClick: () => { onTimerClick(_, idx) }
      }))
    },
    {
      title: '公共计时器',
      items: publicTimers.map(_ => ({
        title: _.title,
        active: false,
        onClick: () => { onTimerClick(_) }
      }))
    }
  ]

  return (
    <div className="app">
      <SideBar config={sideBarConfig} />
      {children}
    </div>
  )
}