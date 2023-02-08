import React,{useContext, useState}from 'react';
import { IoMdLogOut } from 'react-icons/io';
import { Link } from 'react-router-dom'
import  "../CSS/HomeNav.css"
import { userContext } from "../App";
import HomeNavbar from '../components/HomeNavbar';
import { AppContext } from './../Context/Context';
import { useNavigate } from 'react-router-dom';

 export const RenderNav = () => {
  const saved=JSON.parse(localStorage.getItem("user"));
  const {dispatch} = useContext(AppContext);
  const [state,setState] = useState("");
  const navigate = useNavigate()
  console.log(saved)

  const clearLS = () => {
    dispatch({type:"STUDENT_LOGOUT"});
    navigate("/login")
  }
  return (
    <>
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" to="studentnav">Library Management System</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse text-uppercase" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={state==="home" ? "menu-active nav-link" : "nav-link"} aria-current="page" to="/stuhome" onClick={()=>setState("home")}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className={state==="books" ? "menu-active nav-link" : "nav-link"} onClick={()=>setState("books")} to="/books">View Books</Link>
        </li>
        <li className="nav-item">
          <Link   className={state==="noti" ? "menu-active nav-link" : "nav-link"}  onClick={()=>setState("noti")} to="/stunotify">Notifications</Link>
        </li>
        <li className="nav-item">
          <Link   className={state==="profile" ? "menu-active nav-link" : "nav-link"}  onClick={()=>setState("profile")} to="/profile">Profile</Link>
        </li>
        <li className="nav-item dropdown">
     <a className="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown">{saved.firstName}</a>
     <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
     <li> <a className="dropdown-item menu-active" onClick={clearLS} ><IoMdLogOut/>LogOut</a></li>
     </ul>
    </li>
      </ul>
    </div> 
  </div>
</nav>

    </>
  )
}
const StudentNav = () => {
  return <RenderNav/>
};

export default StudentNav;