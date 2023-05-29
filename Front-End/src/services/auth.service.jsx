import axios from "axios";

const API_URL = "http://10.30.118.183:8080/api/v1/auth";

const signup = (firstname,lastname,email,password) => {
  return axios
    .post(API_URL + "/register", {
      firstname,
      lastname,
      email,
      password,
    })
    .then((response) => {
      console.log(response);
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};

const login = (name, password) => {
  return axios
    .post(API_URL + "/authenticate", {
      name,
      password,
    })
    .then((response) => {
      console.log(response);
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const auth = {
  signup,
  login,
  logout,
  getCurrentUser,
};

export default auth;