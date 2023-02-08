import React, { useEffect, useReducer, useState } from "react";
import {Reducer} from "../Reducer/useReducer"


export const AppContext = React.createContext({});

export const AppProvider = ({children}) => {
    const initialState = {
        student:[],
        admin:[],
    };
    const [stateName,setStateName] = useState("");
    const [loading,setLoading] = useState(false)

    let userInfo = JSON.parse(localStorage.getItem("user"));
    const [state,dispatch] = useReducer(Reducer,userInfo);
    useEffect(() => {
      console.log("Loading :",loading)
    },[loading])
    useEffect( () => {
        localStorage.setItem("user",JSON.stringify(state))
        console.log(state)
    },[state])
    return <AppContext.Provider value={{...state,dispatch,state,stateName,setStateName,loading,setLoading}}>
        {children}
    </AppContext.Provider>
}


