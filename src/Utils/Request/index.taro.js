import Taro from '@tarojs/taro'

const request = async ({
  method,
  url,
  needToken,
  payload,
  jwt
}) => {

  let header = {}
  if (needToken) {
    header.Authorization = `Bearer ${jwt}`
  }

  const response = await Taro.request({
    url: 'https://bared-cms-1804794-1311017114.ap-shanghai.run.tcloudbase.com' + url,
    method,
    data: payload,
    header
  })

  console.log(response)
  const data = response.data
  return data
}

export default request