import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Storage from '@Storage'
import SideBar from '../../Components/SideBar'
import * as Api from '../../Api'
import New from './new.svg'

export default function Layout ({ children, onTimerClick, onCreateClick }) {
  const [publicTimers, setPublicTimers] = useState([])
  const [localTimers, setLocalTimers] = useState([])

  const user = useSelector(state => state.auth.user)
  const myTimers = useSelector(state => state.timer.myTimers)
  const dispatch = useDispatch()

  const getPublicTimers = async () => {
    const data = await Api.getMyTimers()
    setPublicTimers(data)
  }

  useEffect(() => {
    
    getPublicTimers()
    const localTimers = Storage.getItem('timer-share-local')
    if (localTimers) {
      setLocalTimers(JSON.parse(localTimers))
    }

    dispatch({ type: 'AUTH_LOGIN' })

  }, [])

  const deleteLocalTimer = (idx) => {
    const localTimers = Storage.getItem('timer-share-local')
    let localTimersDeleted = JSON.parse(localTimers).filter(
      (_, index) => index !== idx
    )
    Storage.setItem('timer-share-local', JSON.stringify(localTimersDeleted))
    setLocalTimers(localTimersDeleted)
  }

  const onDeleteMyTimer = t => {
    dispatch({ type: 'DELETE_MY_TIMER', id: t.id })
  }

  function onLogin () {
    dispatch({ type: 'AUTH_LOGIN' })
  }

  const sideBarConfig = [
    {
      title: '',
      items: [{
        title: <>
          <img src={New} alt='new-icon' className='icon' />
          <span>创建我的计时器</span>
        </>,
        active: false,
        onClick: onCreateClick,
        className: 'create-new-button'
      }]
    },
    {
      title: '我的计时器',
      items: myTimers.map((_, idx) => ({
        title: _.title,
        active: false,
        canDelete: true,
        onDelete: () => { onDeleteMyTimer(_) },
        onClick: () => { onTimerClick(_) }
      }))
    },
    {
      title: '本地计时器',
      items: localTimers.map((_, idx) => ({
        title: _.title,
        active: false,
        canDelete: true,
        onDelete: () => { deleteLocalTimer(idx) },
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
      <SideBar
        config={sideBarConfig}
        user={user}
        onLogin={onLogin}
        // Footer={user.id ? <AuthFooter username={user.username} avatar={user.avatar} /> : null}
      />
      {children}
    </div>
  )
}
