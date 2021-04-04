import axios from 'axios';
import { IUser } from "../../interfaces/interfaces";
import { API_URL } from "@env";

export const signUpUserAPI = (user: IUser) => {
  return axios.post(`${API_URL}/auth/signup`, user);
  // return axios.post(`http://ascentsobrietymobile-env.eba-rw6cfpmf.us-east-2.elasticbeanstalk.com/auth/signup`, user);


}

export const signInUserAPI = (email: string, password: string) => {
  return axios.post(`${API_URL}/auth/login`, { email, password });
}

