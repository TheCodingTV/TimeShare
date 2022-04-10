import fetch from 'unfetch'

const request = async ({
  method,
  url,
  needToken,
  payload,
  jwt
}) => {

  const headers = {
    appid: 'test',
    'Content-Type': 'application/json'
  }

  if (needToken) {
    headers.Authorization = `Bearer ${jwt}`
  }

  const response = await fetch(import.meta.env.VITE_API_URL + url,{
    method,
    headers,
    body: JSON.stringify(payload)
  })
  const data = await response.json()
  return data
}

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