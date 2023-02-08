import React,{useState} from "react";
import Axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";


const AddStudent = () => {
  const navigate=useNavigate();
  const {url} = useParams();
  console.log(url)
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    Mobileno: "",
    email: "",
    password:""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const postFacData= () => {
    // console.log(faculty.firstName+faculty.lastName+faculty.email+faculty.Mobileno)
    const {firstName,lastName,Mobileno,email,password}=user
    if (firstName && lastName && Mobileno && email && password  ) {
      Axios.post("http://localhost:4000/postfacultyData",{
        firstName,
        lastName,
        Mobileno,
        email,
        password
      }).then( res=> alert(res.data.message))
      navigate("/viewfaculty")
    }
    else{
     alert("Invalid Input")
    }
  }

  const postStuData= () => {
    console.log(user.firstName+user.lastName+user.email+user.Mobileno)
    const {firstName,lastName,Mobileno,email}=user
    if (firstName && lastName && Mobileno && email   ) {
      Axios.post("http://localhost:4000/poststudata",{
        firstName,
        lastName,
        Mobileno,
        email,
      }).then( res=> alert(res.data.message))
      navigate("/viewstudent")
    }
    else{
     alert("Invalid Input")
    }
  }



  return (
    <>
      <div className="formCont">
        <div className="form-cont">
          <h3 className="Title"> {url==="student" ? "Add Student" : "Add Faculty"}</h3>

          <div className="input_field">
            <label className="label">First Name</label>
            <br />
            <input
              type="text"
              name="firstName"
              value={user.firstName}
              onChange={handleChange}
              className="inputUser"
              placeholder="First Name"
            />
          </div>

          <div className="input_field">
            <label className="label">Last name</label>
            <br />
            <input
              type="text"
              name="lastName"
              value={user.lastName}
              onChange={handleChange}
              className="inputUser"
              placeholder="Last Name"
            />
          </div>

          <div className="input_field">
            <label className="label">Email</label>
            <br />
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              className="inputUser"
              placeholder="Email"
            />
          </div>

          <div className="input_field">
            <label className="label">Phone No</label>
            <br />
            <input
              type="number"
              name="Mobileno"
              value={user.Mobileno}
              onChange={handleChange}
              className="inputUser"
              placeholder="+91 1234 5678 90"
            />
          </div>
          <div className="input_field">
            <label className="label">Password</label>
            <br />
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              className="inputUser"
              placeholder="Enter Password"
            />
          </div>

          <input type="button" className="buttonbtn" onClick={url==="student" ? postStuData : postFacData} value="Submit" />
        </div>
      </div>
    </>
  );
};

export default AddStudent;
