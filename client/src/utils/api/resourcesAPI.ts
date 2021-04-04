import axios from 'axios';
import { API_URL } from "@env";

export default {
    getAll : (JWT_TOKEN: string) => {
        axios.get(`${API_URL}/api/resources`, {
            headers: {
                'Authorization': `Bearer ${JWT_TOKEN}`
            }
        });
    },
    
    getOne : (id: string, JWT_TOKEN: string) => {
        axios.get(`${API_URL}/api/resources/${id}`, {
            headers: {
                'Authorization': `Bearer ${JWT_TOKEN}`
            }
        })
    }
}