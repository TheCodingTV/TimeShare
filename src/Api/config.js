import fetch from 'unfetch'
import request from '@Request'

const api = {
  authLocal: async () => {
    return await request({
      method: 'post',
      url: '/api/auth/login/local',
      needToken: false,
      payload: { 
        username: 'root', 
        password: 'root'
      }
    })
  },
  addTimer: async (payload, jwt) => {
    return await request({
      method: 'post',
      url: '/papi/timer/add',
      needToken: true,
      payload,
      jwt
    })
  },
  getMyTimers: async (payload, jwt) => {
    return await request({
      method: 'get',
      url: '/papi/timer/my',
      needToken: true,
      payload,
      jwt
    })
  },
  deleteTimer: async (payload, jwt) => {
    return await request({
      method: 'post',
      url: '/papi/timer/delete',
      needToken: true,
      payload,
      jwt
    })
  }
}

export default api