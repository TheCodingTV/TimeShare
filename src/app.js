import Taro from '@tarojs/taro'
import './Style/index.css'

wx.Taro = Taro

export default function TaroApp ({ children }) {
  return children
}
