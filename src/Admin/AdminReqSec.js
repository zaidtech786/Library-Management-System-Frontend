import React,{useState,useEffect}from 'react';
import Axios from 'axios';

const AdminReqSec = () => {
    const [stuData,setStuData]=useState([])
    const [Req,setReq]=useState([])
    const getData= () => {
        Axios.get("http://localhost:4000/getreq").then( (res) => {
            setReq(res.data)
           console.log(res.data)
        })
      }
  
    const getStuData= () => {
        Axios.get("http://localhost:4000/getStuData").then( (res) => {
            setStuData(res.data)
           console.log(res.data)
        })
      }
  
      useEffect(() => {
        getData();
        getStuData()
      }, []);
  
  return (
    <>
  {
    Req.map( (curElem)=> {
        const{bookName,reason}=curElem;
    return(
        <div key={curElem._id}>
          <span>Book Name :</span><p>{bookName}</p>
          <span>reason :</span><p>{reason}</p>
        </div>
    )
    })
}
{

    stuData.map( (curElem)=> {
        const{firstName,lastName,email,mobileNo,libraryNo}=curElem
        return(
        <div>
           <p>first name :</p><span>{firstName}</span>
           <p>last name :</p><span>{lastName}</span>
           <p>email :</p><span>{email}</span>
           <p>mobileNo :</p><span>{mobileNo}</span>
           <p>libraryNo :</p><span>{libraryNo}</span>
        </div>
        )
    })
}
  

    </>
  )
}

export default AdminReqSec