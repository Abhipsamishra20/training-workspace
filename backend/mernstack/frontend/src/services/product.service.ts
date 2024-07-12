import axios, { AxiosResponse } from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:9999/api/products/";


export const getProducts = ():Promise<AxiosResponse> => {
  return axios.get(API_URL , { headers: authHeader() });
};

