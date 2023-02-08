import React,{useContext, useState} from "react";
import HomeNav from "../CSS/HomeNav.css";
import { FaUser } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { Outlet } from "react-router-dom";
import { NavLink } from 'react-router-dom'
import { IoMdLogOut } from 'react-icons/io';
import { Link } from 'react-router-dom';
// import { userContext } from "../App";
import { AppContext } from './../Context/Context';

const HomeNavbar = () => {
  // const [state,setState] = useState("");
  const {stateName,setStateName} = useContext(AppContext)
  return (
    <>
      <div className=" nav-container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/homenav">
              Library Management System
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="text-success">
                  <NavLink   
                    to="login"
                    className={stateName==="admin" ? "nav-link menu-active" :"nav-link text-secondary" }
                    onClick={() => setStateName("admin")}
                  >
                    <FaUser /> 
                    Admin
                  </NavLink>
                </li>
                <li className="text-dark">
                  <NavLink to="login" className={stateName==="student" ? "nav-link menu-active" :"nav-link text-secondary" }
                   onClick={() => setStateName("student")}
                  >
                    <FaUserCircle />
                    Student
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default HomeNavbar;
