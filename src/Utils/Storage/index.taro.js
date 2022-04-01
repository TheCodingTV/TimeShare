const Storage = {
  getItem: key => {
    return wx.getStorageSync(key)
  },

  setItem: (key, value) => {
    return wx.setStorageSync(key, value)
  }
}

export default Storage