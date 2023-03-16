import React,{ useState,useEffect }from 'react'
import Axios from "axios";
import {Link} from "react-router-dom";
import "../CSS/notes.css";

const ViewStudent = () => {
    const [StudentDatas,setStudentDatas]=useState([])
    const [search,setSearch]=useState("")

    const getData= () => {
      Axios.get('http://localhost:4000/getStuData').then((res)=>{
        setStudentDatas(res.data.student)
        console.log(res.data.student)
      })
    }
    useEffect( () => {
      getData()
     },[])

     const DeleteStu = (id) => {
        Axios.get(`http://localhost:4000/delete/${id}`).then( () => {
          setStudentDatas(
            StudentDatas.filter( (val) => {
              return val._id!==id;
            })
          );
        });
     }
  
  return (
    <>
      <div className="table_container">
        <h1 className="text-center my-5">Student List</h1>
        <input type="search" className="search" value={search}  placeholder="Search" onChange={(event)=>setSearch(event.target.value)}/>
        <div className= {StudentDatas.length>9?'table-container' : ""}   >
        <div className={StudentDatas.length>9?'tbl-fixed' : ""}>
        <table className='table'>
        <thead>
          <tr>
            <th>Sr No.</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Mobile No</th>
            <th>Operation</th>
          </tr>
        </thead>
        {
        StudentDatas.length>0?StudentDatas.filter( (val) => {
           if(search==""){
             return val;
           }
           else if( val.firstName.toLowerCase().includes(search.toLowerCase())){
             return val;
           }
        } ).map( (curElem,index)=>{
          const { firstName,  lastName, Mobileno,  email}=curElem
          return (
        <tbody key={curElem._id}>
            <tr >
              <td data-label="Sr No."> {index+1}</td>
              <td data-label="First Name" >{firstName}</td>
              <td data-label="Last Name" >{lastName}</td>
              <td data-label="Email" >{email}</td>
              <td data-label="Mobile No" >{Mobileno}</td>
              <td data-label="Operation" >
                <Link to={`/edit/${curElem._id}`} type="button" className="btn btn-primary edit" >Edit</Link>
                <a href="#" type="button" onClick={()=>DeleteStu(curElem._id)}className="btn btn-danger delete">Delete</a>
              </td>
          </tr>    
        </tbody>
          )
        })
        :
        <h2 className='text-center'>No Data Found</h2>
      }
      
        </table>
        </div>
        </div>
      </div></>
  )
}

export default ViewStudent