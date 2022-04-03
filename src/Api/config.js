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

  const response = await fetch('http://localhost:1337' + url,{
    method,
    headers,
    body: JSON.stringify(payload)
  })
  const data = await response.json()
  return data
}

const api = {
  authTest: async () => {
    return await request({
      method: 'post',
      url: '/api/auth/test',
      needToken: false
    })
  },
  addTimer: async (payload, jwt) => {
    return await request({
      'method': 'post',
      url: '/api/timer/add',
      needToken: true,
      payload,
      jwt
    })
  },
  getMyTimers: async (payload, jwt) => {
    return await request({
      method: 'get',
      url: '/api/timer/my',
      needToken: true,
      payload,
      jwt
    })
  },
  deleteTimer: async (payload, jwt) => {
    return await request({
      method: 'post',
      url: '/api/timer/delete',
      needToken: true,
      payload,
      jwt
    })
  }
}

export default api