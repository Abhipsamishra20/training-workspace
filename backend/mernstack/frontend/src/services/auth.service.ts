import axios from "axios";

const API_URL = "http://localhost:9999/api/users/";

export const register = (name: string, email: string, password: string) => {
  return axios.post(API_URL , {
    name,
    email,
    password,
    isAdmin:true
  });
};

export const login = (email: string, password: string) => {
  return axios
    .post(API_URL + "login", {
      email,
      password,
    })
    .then((response) => {

      
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

export const logout = () => {
  localStorage.removeItem("user");
};

export const getCurrentUser = () => {
  const userStr = localStorage.getItem("user");
  if (userStr) return JSON.parse(userStr);

  return null;
};
