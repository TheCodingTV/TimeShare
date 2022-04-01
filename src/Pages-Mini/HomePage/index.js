import { useEffect } from 'react'
import Taro from '@tarojs/taro'
import CreateTimer from '../../Controllers/CreateTimer'
import './style.css'

export default function HomePage () {
  useEffect(() => {
    Taro.navigateTo({ url: "/Pages-Mini/TimerPage/index" })
  }, [])

  return (
    <div className='mini-page'>
    </div>
  )
}