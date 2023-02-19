import axios from "axios";

axios.defaults.baseURL = "http://172.20.10.4:8000/api";

axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    return Promise.reject(error);
  }
);

export default axios;
