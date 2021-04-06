import React, { createContext, useReducer, useContext } from "react";
import { IUser } from "../../interfaces/interfaces";

/*

******** Everything below here is just bits and pieces of
******** Copy paste to help gt me started



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

const reducer = (state: State, action: any) => {
    switch (action.type) {
        case "LOGIN":
            localStorage.setItem("user", JSON.stringify(action.payload.user));
            localStorage.setItem("token", JSON.stringify(action.payload.token));
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload.user,
                token: action.payload.token
            };
        case "LOGOUT":
            localStorage.clear();
            return {
                ...state,
                isAuthenticated: false,
                user: null,
                token: null,
            };
        default:
            return state;
    }
};

const StoreContext = createContext<State>(initialState);

const StoreProvider = () => {
    return <StoreContext.Provider value={ initialState } />
}

*/