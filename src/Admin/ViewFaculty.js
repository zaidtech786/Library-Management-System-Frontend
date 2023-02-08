import React,{ useState,useEffect }from 'react'
import Axios from "axios";
import {Link} from "react-router-dom";
import "../CSS/notes.css";

const ViewFaculty = () => {
    const [FacultyData,setFacultyData]=useState([]);
    const [search,setSearch]=useState("")

    const getData= () => {
      Axios.get('http://localhost:4000/getfacdata').then((res)=>{
        setFacultyData(res.data)
        console.log(res.data)
      })
    }
    useEffect( () => {
     getData()
     },[])

     const deleteFac = (id) => {
        Axios.get(`http://localhost:4000/deletefac/${id}`).then( () => {
          setFacultyData(
            FacultyData.filter( (val) => {
              return val._id!= id;
            })
          );
        });
         
     }

     const handleSearchFac =async (e) => {
      // console.log(search)h
     let key=e.target.value;
      console.log(key)
      await fetch(`http://localhost:4000/search/${key}`, {
        method: 'GET',
    })
    .then (response => response.json ())
    .then (response => {
        console.log(response)
        setFacultyData(response)
    })
    .catch (error => {
        console.error (error);
        getData()
    });
    };
  
  return (
   
    <>
      <div className="table_container">
        <h1 className="text-center my-5">Faculty List</h1>
        <input type="search" className="search" placeholder="Search" value={search} onChange={(e)=>setSearch(e.target.value)}/>
         <div className='table-container'>
         <div className='tbl-fixed'>
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
        FacultyData.length>0? FacultyData.filter( (val) => {
          if(search==""){
            return val;
          }
          else if( val.firstName.toLowerCase().includes(search.toLowerCase())){
            return val;
          }
        } ).map( (curElem,index)=>{
          const { firstName,  lastName, Mobileno,  email}=curElem
          return (
        <tbody key={curElem._id} >
            <tr >
              <td data-label="Sr No.">       
                {index+1}
              </td>
              <td data-label="First Name" >{firstName}</td>
              <td data-label="Last Name" >{lastName}</td>
              <td data-label="Email" >{email}</td>
              <td data-label="Mobile No" >{Mobileno}</td>
              <td data-label="Operation" >
                <Link to={`/editfac/${curElem._id}`} type="button" className="btn btn-primary edit" >Edit</Link>
                <a href="#" type="button" onClick={()=>deleteFac(curElem._id)} className="btn btn-danger delete">Delete</a>
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

export default ViewFaculty