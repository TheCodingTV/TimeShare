import Taro from '@tarojs/taro'
import { Provider } from 'react-redux'
import configureStore from './Store'

import './Style/index.css'
const store = configureStore()
wx.Taro = Taro
wx.store = store

export default function TaroApp ({ children }) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}
