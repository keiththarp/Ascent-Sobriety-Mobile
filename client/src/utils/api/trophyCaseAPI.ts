import axios from 'axios';
import { ITrophy, IUser } from "../../interfaces/interfaces";
import { API_URL } from "@env";

export default {
    getAll : (userID: string, JWT_TOKEN: string) => {
        return axios.get(`${API_URL}/api/trophy-case/${userID}`, {
            headers: {
                'Authorization': `Bearer ${JWT_TOKEN}`
            }
        });
    },

    create : (trophy: ITrophy, JWT_TOKEN: string) => {
        return axios.post(`${API_URL}/api/trophy-case`, trophy, {
            headers: {
                'Authorization': `Bearer ${JWT_TOKEN}`
            }
        })
    },

    delete : (id: string, JWT_TOKEN: string) => {
        return axios.delete(`${API_URL}/api/trophy-case/${id}`, {
            headers: {
                'Authorization': `Bearer ${JWT_TOKEN}`
            }
        })
    }
}