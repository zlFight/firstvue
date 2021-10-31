'use strict';
import axios from 'axios';
axios.defaults.withCredentials=true;
axios.defaults.baseURL = process.env.VUE_APP_API_URL;
axios.interceptors.request.use(config => {
  const userName = localStorage.getItem('userName');
  const isAdmin = localStorage.getItem('isAdmin');
  config.params = {
    userName: userName,
    isAdmin:isAdmin,
    ...config.params
  }
  console.log(config);
    return config;
});


axios.interceptors.response.use(res => {
    console.log(res);
    return res;
});


export default axios;
