/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import axios from "axios";

const API_URL = "http://localhost:5000/api/v1";

const register = (username: any, email: any, password: any) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
  });
};

const login = (email: any, password: any) => {
  console.log(email, password, "from action");
  return axios
    .post(API_URL + "/auth/login", {
      email,
      password,
    })
    .then((response) => {
      if (response.data) {
        console.log("frofm response", response.data.data);
      }

      return response.data;
    });
};
const createUser = (email: any, name: any, password: any) => {
  console.log(email, password, name, "from action");
  return axios
    .post(API_URL + "/auth/signup", {
      email,
      name,
      password,
    })
    .then((response) => {
      if (response.data) {
        console.log("frofm response", response.data.data);
      }

      return response.data;
    });
};

const authService = {
  register,
  login,
  createUser,
};

export default authService;
