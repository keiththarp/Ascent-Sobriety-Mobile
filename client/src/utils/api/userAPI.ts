import axios from 'axios';
import { API_URL } from "@env";
import { IUser } from "../../interfaces/interfaces";

export default {
  signUp : (user: IUser) => {
      return axios.post(`${API_URL}/auth/signup`,user);
  },

  signIn : (email: string, password: string) => {
    return axios.post(`${API_URL}/auth/login`, { email, password});
  },

  update : (user: IUser, JWT_TOKEN: string) => {
    return axios.post(`${API_URL}/api/user`, user, {
      headers: {
        'Authorization': `Bearer ${JWT_TOKEN}`
      }
    });
  },

  getProfile : (id: string, JWT_TOKEN: string) => {
    return axios.get(`${API_URL}/api/user/${id}`, {
      headers: {
        'Authorization': `Bearer ${JWT_TOKEN}`
      }
    });
  }

}




