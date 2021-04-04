import axios from 'axios';
import { IJournalEntry } from "../../interfaces/interfaces";
import { API_URL } from "@env";

export default {
    addNew : (entry: IJournalEntry, JWT_TOKEN: string) => {
        return axios.post(`${API_URL}/api/journal-entry`, entry, {
            headers: {
                'Authorization': `Bearer ${JWT_TOKEN}`
            }
        });
    },

    delete : (entryID: string, JWT_TOKEN: string) => {
        return axios.delete(`${API_URL}/api/journal-entry/${entryID}`,{
            headers: {
                'Authorization': `Bearer ${JWT_TOKEN}`
            }
        });
    },

    getAll : (UserID: string, JWT_TOKEN: string) => {
        return axios.get(`${API_URL}/api/journal-entry/${UserID}`, {
            headers: {
                'Authorization': `Bearer ${JWT_TOKEN}`
            }
        });
    },

    getOne : (id: string, JWT_TOKEN: string) => {
        return axios.get(`${API_URL}/api/journal-entry/singleEntry/${id}`, {
            headers: {
                'Authorization': `Bearer ${JWT_TOKEN}`
            }
        })
    }

}


