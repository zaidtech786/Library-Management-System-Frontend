import React,{useContext, useEffect} from 'react'
import { userContext } from "../App";
import StudentNav from '../Student/StudentNav';
import AdminNav from '../Admin/AdminNav';
import HomeNavbar from './HomeNavbar';
import { RenderNav } from '../Student/StudentNav';
import { RenderMenu } from '../Admin/AdminNav';
import { AppContext } from './../Context/Context';

const Navbar = () => {
    const {state}=useContext(AppContext);
    // console.log("State",state)
    return (
        <>
         { 
            state.admin.email
            ?
            <AdminNav/>
            :
            state.student.email
            ?
            <StudentNav/>
            :
            <HomeNavbar/>

         }
        </>
    )
}

export default Navbar