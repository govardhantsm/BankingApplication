
import axios from "axios";

// const BASE_URL = "https://api.escuelajs.co/api/v1";
let BASE_URL = import.meta.env.VITE_API_BASE_URL;

// function getToken() {
//   const accessToken = window.localStorage.getItem("access_token");
//   console.log(accessToken)
//   return accessToken;
// }

export const AxiosInstancePublic = axios.create({
  baseURL: BASE_URL,
});

export const AxiosInstanceProtected = axios.create({
  baseURL: BASE_URL,
});

AxiosInstanceProtected.interceptors.request.use(config => {
  const token = window.localStorage.getItem("access_token");
  if (token) {
    config.headers["Authorization"] = "Bearer " + token;
  }
  return config;
});

AxiosInstanceProtected.interceptors.response.use(response => {
  if (response.status === 401) {
    window.location.reload();
  } else {
    return response;
  }
});
