import React,{useContext} from 'react';
import "../CSS/SignUp.css"
import { IoMdLogOut } from 'react-icons/io';
import { NavLink } from 'react-router-dom'
import { userContext } from "../App";
import { FaUser } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import HomeNavbar from '../components/HomeNavbar';
import { useNavigate } from 'react-router-dom';
import { AppContext } from './../Context/Context';

export const RenderMenu = () => {
  const navigate=useNavigate();
  const saved=JSON.parse(localStorage.getItem("user"));
  const {dispatch,setIsStuFac} = useContext(AppContext);

  const clearLs = () => {
    dispatch({type:"ADMIN_LOGOUT"});
    navigate("/login")

  }
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
<div className="container-fluid">
<a className="navbar-brand text-center" href="#">Library Management System</a>
<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarSupportedContent">
  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        View
      </a>
      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
        <li><NavLink className="dropdown-item" to="/viewstudent" >View Student</NavLink></li>
        <li><NavLink className="dropdown-item" to="Books">View Books</NavLink></li> 
        <li><NavLink className="dropdown-item" to="/viewfaculty" >View Faculty</NavLink></li>
      </ul>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link " aria-current="page" to="/adminnotify">Book Request</NavLink>
      {/* <span>Zaid</span> */}
    </li>

    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        ADD
      </a>
      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
        <li><NavLink className="dropdown-item" to={`addfacstu/${"student"}`}>Add Student</NavLink></li>
        <li><NavLink className="dropdown-item" to="/addbooks">Add Books</NavLink></li>
        <li><NavLink className="dropdown-item" to={`addfacstu/${"faculty"}`}>Add Faculty</NavLink></li> 
      </ul>
    </li>

    <li className="nav-item">
      <NavLink className="nav-link " aria-current="page" to="/profile">Profile</NavLink>
    </li>
    <li className="nav-item dropdown">
     <a className="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown">{saved.firstName}</a>
     <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
     <li> <a className="dropdown-item menu-active text-dark" onClick={clearLs}><IoMdLogOut/>LogOut</a></li>
     </ul>
    </li>
  </ul>
</div>8
</div>
</nav>
    </>
  )
}

const AdminNav = () => {

return <RenderMenu/>
  
};

export default AdminNav;
