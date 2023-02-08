import "./App.css";
import react,{useState,useEffect, useContext} from "react"
import HomeNavbar from "./components/HomeNavbar";
import { Route, Routes } from "react-router-dom";
import AdminNav from "./Admin/AdminNav";
import StudentNav from "./Student/StudentNav";
// import AddStudent from "./Admin/AddStudent";
import Books from "./Admin/Books";
import SignUp from "./components/SignUp";
import ViewStudent from "./Admin/ViewStudent";
import AdminReqSec from "./Admin/AdminReqSec";
import Stunotify from "./Student/Stunotify";
import AdminNotify from "./Admin/AdminNotify";
// import AddFaculty from "./Admin/AddFaculty";
import ViewFaculty from "./Admin/ViewFaculty";
import IssueBook from "./Admin/IssueBook";
import EditBooks from "./Admin/EditBooks";
import AddBooks from "./Admin/AddBooks";
import EditStudent from "./Admin/EditStudent";
import EditFac from "./Admin/EditFac";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile"
import Login from "./components/Login"
import { AppContext } from './Context/Context';
import AddData from "./components/AddData"
import { Home } from "./Student/Home";
import "./App.css"


function App() {
  const {state} = useContext(AppContext)
  return (
    <>
        <Navbar/>
      <Routes>
  {/* <Route path="/admin" element={<AdminLogIn />} /> */}
 {/* <Route path="/student" element={<StudentLogin />}/> */}
 <Route path="/login" element={<Login/>}/>
 <Route path="/signup" element={<SignUp/>}/>
 <Route path="/profile" element={<Profile/>}/>
 {/* <Route path="/nav" element={<Navbar />}/> */}
 {/* <Route path="/viewbooks" element={<ViewBooks />}/> */}
 {/* <Route path="/studentsignup" element={<StudentSignUp />}/> */}
 {/* <Route path="/adminsignup" element={<AdminSignUp />}/> */}
 {/* <Route path="/addstudent" element={<AddStudent />}/> */}
 <Route path="/studentnav" element={<StudentNav />}/>
 <Route path="adminnav" element={<AdminNav/>}> </Route>
 <Route path="/books" element={ <Books /> }/>
 <Route path="/addfacstu/:url" element={ <AddData /> }/>
 <Route path="/viewstudent" element={<ViewStudent />}/>
 <Route path="/stunotify" element={<Stunotify />}/> 
 <Route path="/stuhome" element={<Home />}/> 
 <Route path="/adminnotify" element={<AdminNotify />}/> 
 {/* <Route path="/addfaculty" element={<AddFaculty />}/>  */}
 <Route path="/viewfaculty" element={<ViewFaculty />}/> 
 <Route path="/issuebook" element={<IssueBook />}/> 
 <Route path="/editdata/:id" element={<EditBooks />}/> 
 <Route path="/edit/:id" element={<EditStudent />}/> 
 <Route path="/editfac/:id" element={<EditFac/>}/> 
 {/* <Route path="/profile" element={<AdminProfile/>}/>  */}
 <Route path="/addbooks" element={<AddBooks/>}/> 
</Routes>   
    </>
  );
}

export default App;