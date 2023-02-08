import React,{useState,useEffect, useContext} from 'react';
import StudentNav from "../Student/StudentNav"
import "../CSS/StuProfile.css"
import image from "../Student/Student Icon/student.png"
import { AppContext } from './../Context/Context';
const StudentProfile = () => {
  const {student,admin} = useContext(AppContext)
  return (
    <>
      <div className='Container'>
         <div className='box'>
           <div className='imageSec'>
             <img src={image} className="img" alt="StudentIcon" />
           </div>
           <div className='contentt'>
              <h5>First Name : {student.email ? student.firstName : admin.firstName} </h5> 
              <h5>Last Name :  { student.email ? student.lastName : admin.lastName}</h5>
              <h5>Email : {student.email ? student.email : admin.email}</h5>
              <h5>Phone No :{student.email ? student.Mobileno :admin.Mobileno} </h5>
            
           </div>
         </div>  

      </div>
    </>
)
};

export default StudentProfile;
