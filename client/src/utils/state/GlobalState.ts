import React, { createContext, useReducer, useContext } from "react";
import { IUser } from "../../interfaces/interfaces";

type State = {
    currentUser: IUser;
    loading: boolean;
}

const initialState: State = {
    currentUser: {
        _id: "",
        email: "",
        password: "",
        name: "",
        initialSobrietyDate: "",
        totalSoberDays: 0,
        newSobrietyDate: "",
        consecutiveSoberDays: 0,
        profileImage: ""
    },
    loading: false
}



export const storeContext = createContext(initialState);