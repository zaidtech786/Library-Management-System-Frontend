import React,{useContext, useState} from 'react';
import "../CSS/Form.css";
import {NavLink, useNavigate} from "react-router-dom";
import Axios from "axios"
import { AppContext } from '../Context/Context';

const AdminSignUp = () => {
    const {stateName} = useContext(AppContext);
    const navigate=useNavigate()
  const [user,setUser]=useState({
    firstName:"",
    lastName:"",
    Mobileno:"",
    email:"",
    Password:"",
    cPassword:"",
  });
   
  const handleChange = (e) => {
    const {name,value }=e.target;
    setUser({
      ...user,
      [name]:value
    })
  }

  const postAdminData = () => {
    // console.log(user.firstName+user.lastName+user.email+user.Mobileno+user.libraryNo+user.Password+user.cPassword)
    const {firstName,lastName,Mobileno,email,Password,cPassword}=user
    if (firstName && lastName && Mobileno && email  && Password && (Password===cPassword) ) {
      Axios.post("http://localhost:4000/adminsignup",{
        firstName,
        lastName,
        Mobileno,
        email,
        Password,
      }).then( res=> alert(res.data.message))
      navigate("/login")
    }
    else{
     alert("Invalid Input")
    }
  }

  const postStudentData= () => {
    // console.log(user.firstName+user.lastName+user.email+user.Mobileno+user.libraryNo+user.Password+user.cPassword)
    const {firstName,lastName,Mobileno,email,Password,cPassword}=user
    if (firstName && lastName && Mobileno && email  && Password && (Password===cPassword) ) {
      Axios.post("http://localhost:4000/studentsignup",{
        firstName,
        lastName,
        Mobileno,
        email,
        Password,
      }).then( res=> alert(res.data.message))
      navigate("/login")
    }
    else{
     alert("Invalid Input")
    }
  }


  return (
    <>
     <div className='formCont'>
          <div className='form-cont'>
          <h3 className='Title'>{stateName === "admin" ? "Admin SignUp" : "Student Signup"}</h3>
           
           <div className='input_field'>
           <label className='label'>First Name</label><br/>
           <input type="text" name="firstName" value={user.firstName} onChange={ handleChange} className='inputUser' placeholder="First Name"/>
           </div>
                
           <div className='input_field'>
           <label className='label'>Last name</label><br/>
           <input type="text"name="lastName" value={user.lastName} onChange={handleChange}  className='inputUser' placeholder="Last Name"/>
           </div>
          
           <div className='input_field'>
          <label className='label'>Email</label><br/>
           <input type="email" name="email" value={user.email} onChange={handleChange} className='inputUser' placeholder="Email"/>
           </div>
             
           <div className='input_field'>
           <label className='label'>Phone No</label><br/>
           <input type="number" name="Mobileno" value={user.Mobileno} onChange={handleChange}  className='inputUser' placeholder="+91 1234 5678 90"/>
           </div>
                  
           <div className='input_field'>
           <label className='label'>password</label><br/>
           <input type="password" name="Password" value={user.Password} onChange={handleChange}  className='inputUser' placeholder="password"/>
           </div>
           
           <div className='input_field'>
           <label className='label'>Confirm Password</label><br/>
           <input type="text" name="cPassword" value={user.cPassword} onChange={handleChange} className='inputUser' placeholder="Confirm Password"/>
           </div>
           <input type="button" className='buttonbtn' value="Sign Up" onClick={stateName==="admin" ? postAdminData : postStudentData}/>
           <p>Already Have an account  <NavLink to="/login">Sign in</NavLink></p>
       
          </div>

        </div>
    </>
  )
};

export default AdminSignUp;
