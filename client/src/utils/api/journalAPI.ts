import axios from 'axios';
import { IJournalEntry } from "../../interfaces/interfaces";
import { API_URL } from "@env";

export const addEntryAPI = (entry: IJournalEntry, JWT_TOKEN: string) => {
    return axios.post(`${API_URL}/api/journal-entry`, entry, {
        headers: {
            'Authorization': `Bearer ${JWT_TOKEN}`
        }
    });
}