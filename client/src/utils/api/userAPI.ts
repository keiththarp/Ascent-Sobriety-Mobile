import axios from 'axios';
import { IUser } from "../../interfaces/interfaces";

const userAPI = () => {
  fetch(`${process.env.API_URL}/users`)
    .then(response => {
      console.log(response);

    })
}

export const signUpUserAPI = (user: IUser) => {
    return axios.post(`http://localhost:3000/auth/signup`,user);

}

