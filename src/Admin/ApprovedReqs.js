import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import { useContext } from 'react';
import { AppContext } from './../Context/Context';

 const ApprovedReqs = () => {
    const [data,setData] = useState([]);
    const { admin } = useContext(AppContext);
    const getData = () => {
        Axios.get("http://localhost:4000/getAllReq").then((res) => {
            setData(res.data);
        //   reqDispatch({ type: "GETALLREQ", payload: res.data });
          console.log("All Approved REq",res.data);
        });
      };
      useEffect(() => {
        getData();
      }, []);
  return (
    <>
      <div className="table_container">
        <h2 className="text-center h2">Book Request </h2>

        {
          data.length > 0
          ?
        <table className="table">
          <thead>
            <tr>
              <th> Student Name </th>
              <th> Book Name </th>
              <th> Book Language </th>
              <th> Book Quantity </th>
             
              <th> Approved </th>
              <th> Date</th>
            </tr>
          </thead>
          
          {data.map((curElem) => {
                  return (
                    <tbody key={curElem._id}>
                    {
                      curElem.approved === true 
                      ? 
                      <>
                   
                      <tr>
                      <td data-label="Student Name">
                        {curElem.studentId.firstName}
                        {curElem.studentId.lastName}
                      </td>
                      <td data-label="Book Name">{curElem.bookId.bookName}</td>
                      <td data-label="Book Language">
                        {curElem.bookId.bookLang}
                      </td>
                      <td data-label="Book Quantity">
                        {curElem.bookId.Quantity}
                      </td>
                   
                      <td data-label="Approved">
                        {curElem.approved ? (
                          <p>
                            Approved By
                            {curElem.approvedBy?._id === admin._id
                              ? " Your Side"
                              : curElem.approvedBy?.firstName}
                          </p>
                        ) : (
                          <p>--</p>
                        )}
                      </td>
                      <td>
                        {curElem.createdAt}
                       
                      </td>
                    </tr>
                    </>
                    :
                    ""
                
                    
                    }
                   
                  </tbody>
                  );
               
          })}
        
        
        </table>
        :
        <h2 style={{marginTop:"200px",fontStyle:"italic",textAlign:"center"}}>No data Found</h2>
 }
      </div>
    </>
  )
}
export default ApprovedReqs;
