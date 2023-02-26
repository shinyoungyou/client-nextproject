import axios from "axios";

const instance = axios.create({
  baseURL: `http://localhost:3065`, // cors
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
