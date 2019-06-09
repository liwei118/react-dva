import Axios from './../utils/request';
export async function Get(url, params) {
  return Axios.get(url, {
    params: {
      ...params
    }
  })
}
export async function Post(url, params) {
  return Axios.get(url, {
    ...params
  })
}
