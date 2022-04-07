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

  const response = await fetch('https://bared-timer-1780628-1310797887.ap-shanghai.run.tcloudbase.com' + url,{
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
      url: '/auth/login/test',
      needToken: false,
      payload: { id: 5 }
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