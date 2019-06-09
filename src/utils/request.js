import Axios from "axios";
import {message} from "antd"

// http request 拦截器
Axios.interceptors.request.use(
  config => {
      // if (store.state.token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
      //     config.headers.Authorization = `token ${store.state.token}`;
      // }
      return config;
  },
  err => {
      return Promise.reject(err);
  });

// http response 拦截器
Axios.interceptors.response.use(
  response => {
      return response;
  },
  error => {
      if (error.response&&error.response!=200) {
        message.error(error.response)
      }
      return Promise.reject(error.response.data)   // 返回接口返回的错误信息
  });
  export default Axios