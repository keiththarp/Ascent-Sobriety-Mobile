import axios from 'axios';
import { IUser } from "../../interfaces/interfaces";
import { API_URL } from "@env";

const userAPI = () => {
  fetch(`${process.env.API_URL}/users`)
    .then(response => {
      console.log(response);

    })
}

export const signUpUserAPI = (user: IUser) => {
  return axios.post(`${API_URL}/auth/signup`, user);
  // return axios.post(`http://ascentsobrietymobile-env.eba-rw6cfpmf.us-east-2.elasticbeanstalk.com/auth/signup`, user);


}

