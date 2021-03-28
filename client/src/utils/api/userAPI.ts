import { API_URL } from '@env';
import axios from 'axios';
import { IUser } from "../../interfaces/interfaces";

// const userAPI = () => {
//   fetch(`${process.env.API_URL}/users`)
//     .then(response => {
//       console.log(response);

//     })
// }

export const signUpUserAPI = (user: IUser) => {
  //console.log(API_URL);
  return axios.post(`${API_URL}/auth/signup`, user);
  //return axios.post ("http://ascentsobrietymobile-env.eba-rw6cfpmf.us-east-2.elasticbeanstalk.com/auth/signup", user);
}

