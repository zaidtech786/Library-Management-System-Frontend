// import React,{ useState,useEffect, useContext }from 'react'
// import Axios from "axios";
// import {Link, useParams} from "react-router-dom";
// import "../CSS/notes.css";
// import { AppContext } from './../Context/Context';

// const ViewStudent = () => {
//     const [data,setData]=useState([])
//     const [search,setSearch]=useState("");
//     const {loading,setLoading} = useContext(AppContext)
//     const {name} = useParams()
//     console.log(name)


//     const getData= () => {
//         setLoading(true)
//       Axios.get(`http://localhost:4000/${name}`).then((res)=>{
//         setData(res.data)
//         console.log(res.data)
//         setLoading(false)
//       });
//     }
//     useEffect( () => {
//       getData()
//      },[])

//      const DeleteStu = (id) => {
//         Axios.get(`http://localhost:4000/delete/${id}`).then( () => {
//             setData(
//             data.filter( (val) => {
//               return val._id!=id;
//             })
//           );
//         });
//      }
  
//   return (
//     <>
//     {
//         loading 
//         ? 
//         "Loading..." 
//         :
//       <div className="table_container">
//         <h1 className="text-center my-5">{name === "getStuData" ? "Student List" : "Faculty List"}</h1>
//         <input type="search" className="search" value={search}  placeholder="Search" onChange={(event)=>setSearch(event.target.value)}/>
//         <div className= {data.length>7 ?'table-container' : ""}   >
//         <div className={data.length>7 ?'table-container' : ""}>
//         <table className='table'>
//         <thead>
//           <tr>
//             <th>Sr No.</th>
//             <th>First Name</th>
//             <th>Last Name</th>
//             <th>Email</th>
//             <th>Mobile No</th>
//             <th>Operation</th>
//           </tr>
//         </thead>
//         {
//         data.length>0?data.filter( (val) => {
//            if(search==""){
//              return val;
//            }
//            else if( val.firstName.toLowerCase().includes(search.toLowerCase())){
//              return val;
//            }
//         } ).map( (curElem,index)=>{
//           const { firstName,  lastName, Mobileno,  email}=curElem
//           return (
//         <tbody key={curElem._id}>
//             <tr >
//               <td data-label="Sr No."> {index+1}</td>
//               <td data-label="First Name" >{firstName}</td>
//               <td data-label="Last Name" >{lastName}</td>
//               <td data-label="Email" >{email}</td>
//               <td data-label="Mobile No" >{Mobileno}</td>
//               <td data-label="Operation" >
//                 <Link to={`/edit/${curElem._id}`} type="button" className="btn btn-primary edit" >Edit</Link>
//                 <a href="#" type="button" onClick={()=>DeleteStu(curElem._id)}className="btn btn-danger delete">Delete</a>
//               </td>
//           </tr>    
//         </tbody>
//           )
//         })
//         :
//         <h2 className='text-center'>No Data Found</h2>
//       }
      
//         </table>
//         </div>
//         </div>
//       </div>
// }
//       </> 
//   )
// }

// export default ViewStudent