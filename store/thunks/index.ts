import axios from "axios";
import { backUrl } from "../../config/config";

axios.defaults.baseURL = backUrl;
axios.defaults.withCredentials = true;

const instance = axios.create({
  baseURL: backUrl, // cors
  withCredentials: true, // cookie (user info)
});
// instance.interceptors.request.use(function (instance) {
//   const kakao_authorization = localStorage.getItem("kakao_authorization");
//   const Token = localStorage.getItem("Authorization");
//   const Retoken = localStorage.getItem("refresh-Token");
//   instance.headers["Authorization"] = Token;
//   instance.headers["refresh-Token"] = Retoken;
//   instance.headers["kakao_authorization"] = kakao_authorization;
//   return instance;
// });

export default instance;
