import React, { useState, useContext } from "react";
import "../CSS/Form.css";
import { Link } from "react-router-dom";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { AppContext } from './../Context/Context';


const AdminLogIn = () => {
  const {  dispatch,state,stateName } = useContext(AppContext)
  const [email, setEmail] = useState(""); 
  // const {} = useContext(AppContext)

  const [Password, setPassowrd] = useState("");
  console.log(stateName)

  // Define history hooks
  const Navigate = useNavigate();

  // Posting Data from frontend to Backend
  
  const postAdminData = async () => {
    let result=await fetch('http://localhost:4000/adminsignin',{
      method:'post',
      body:JSON.stringify({email,Password}),
      headers:{
        "Content-type":'application/json'
      }
    });
    result=await result.json();
    // console.log(result.user._id)
    if(result.token){
      alert(result.Message);
      Navigate("/books")
      // Navigate("/viewbooks")
      dispatch({type:"ADMINLOGIN", payload:result.user});
      return
    }else{
      alert("Please Enter Correct Details");
    }

  }


  const postStudentData = async () => {console.log("first")
    let result=await fetch('http://localhost:4000/studentsignin',{
      method:'post',
      body:JSON.stringify({email,Password}),
      headers:{
        "Content-type":'application/json'
      }
    });
    result=await result.json();
    console.log(result)
    // console.log(result.user._id)
    if(result.Token){
      alert("Login SuccessFully");
      dispatch({type:"STUDENTLOGIN", payload:result.user});
      Navigate("/stuhome")
      return;
    }else{
      alert("Please Enter Correct Details");
    }

  }
  return (
    <>
      <div className="formContainer">
        <div className="form">
          <h3 className="heading">{ stateName === "admin" ?"Admin Login" : "Student Login"}</h3>
          <label className="label">Email</label>
          <input
            type="email"
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <br></br>
          <label className="label">Password</label>
          <input
            type="Password"
            className="input"
            value={Password}
            placeholder="Password"
            onChange={(e) => setPassowrd(e.target.value)}
          />
          <br />
          <input
            type="button"
            className="button"
            value="Login"
            onClick={stateName==="admin" ?  postAdminData :postStudentData  }
          />
          <p>
            New Accont <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default AdminLogIn;
