import fetch from 'unfetch'

const request = async ({
  method,
  url,
  needToken,
  payload,
  jwt
}) => {

  let headers = {
    'Content-Type': 'application/json'
  }
  if (needToken) {
    headers.Authorization = `Bearer ${jwt}`
  }

  const response = await fetch('https://bared-cms-1804794-1311017114.ap-shanghai.run.tcloudbase.com' + url, {
    method,
    headers,
    body: JSON.stringify(payload)
  })
  const data = await response.json()
  return data
}

export default request