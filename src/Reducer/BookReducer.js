import React from 'react'

const BookReducer = (state,action) => {
 switch(action.type){
    case "GETALLREQ":
        return {
            ...state,
            bookReqs:action.payload,
        }
    // case "ACCEPTREQ":
    //     let filterData;
    //     filterData = state.bookReqs.filter(item => {
    //         return item._id===action.payload
    //     });
    //     filterData.approved = true
    //     console.log("filterData",filterData)
    //     return {
    //         ...state,
    //         bookReqs:{...state.bookReqs ,bookReqs:filterData }
            
    //     }
    default:
        return state
 }
}

export default BookReducer