import axios from "axios";

const STORAGE_USER_TOKEN = "token";
const instance = axios.create({
  baseURL: "http://ongapi.alkemy.org/api",
  headers: { "Content-Type": "application/json" },
});

instance.interceptors.request.use(function (config) {
  const token = localStorage.getItem(STORAGE_USER_TOKEN);

  if (token) config.headers.common["Authorization"] = "Bearer " + token;

  return config;
});

export default instance;
