import { createContext, useEffect, useReducer } from "react";
import Axios from 'axios';
import BookReducer from "../Reducer/BookReducer";

export const BookContext = createContext();

export const BookProvider = ({children}) => {
    const initialState = {
       bookReqs:[]
    }
    let books = JSON.parse(localStorage.getItem("books"));
    const [state,reqDispatch] = useReducer(BookReducer,books);
    useEffect( () => {
     localStorage.setItem("books",JSON.stringify(state))
    },[state])
    return <BookContext.Provider value={{...state,reqDispatch}}>
          {children}
    </BookContext.Provider>
}
