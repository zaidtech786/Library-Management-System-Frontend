import React, { useState, useEffect, useContext } from "react";
import Axios from "axios";
// import BookData from '../../../Backend/Models/BookSchema';
import { AppContext } from "./../Context/Context";
import { BookContext } from "../Context/BookReqContext";

const AdminNotify = () => {
  const { admin, dispatch } = useContext(AppContext);
  const [stuBookData, setStuBookData] = useState([]);
  const [approved, setApproved] = useState(false);
  const { reqDispatch } = useContext(BookContext);

  const getData = () => {
    Axios.get("http://localhost:4000/getAllReq").then((res) => {
      setStuBookData(res.data);
      console.log(res.data)
      reqDispatch({ type: "GETALLREQ", payload: res.data });
    });
  };
  useEffect(() => {
    getData();
  }, []);

  const rejectReq = (id) => {
    Axios.get(`http://localhost:4000/deleteReq/${id}`).then((res) => {
      setStuBookData(
        stuBookData.filter((val) => {
          return val._id != id;
        })
      );
    });
  };

  const AcceptReq = (id, bookId, studentId) => {
    let findBook;
    findBook = stuBookData.findIndex((item, index) => {
      if (item._id === id) {
        return index;
      }
    });
    // setStuBookData([...stuBookData,findBook])
    console.log("findBook", findBook);
    Axios.put(`http://localhost:4000/acceptreq/${id}`, {
      bookId,
      adminId: admin._id,
      studentId,
    }).then((res) => {
      console.log(res.data);
      const newData = stuBookData.map((item) => {
        if (item._id === res.data.book._id) {
          return res.data.book;
        } else {
          return item;
        }
      });
      console.log("NewData : ", newData);
      setStuBookData(newData);
    });
    //    Axios.get('http://localhost:4000/getAllReq').then((res)=>{
    //     setStuBookData(res.data)
    //     reqDispatch({type:"GETALLREQ",payload:res.data})
    //   console.log(res.data)
    // })
  };

  //  useEffect( () => {
  //     getData();
  //     console.log("Data Triggered")
  //  },[stuBookData])

  return (
    <>
      <div className="table_container">
        <h2 className="text-center h2">Book Request </h2>

{
  stuBookData.length > 0
  ?
  <table className="table">
  <thead>
    <tr>
      <th> Student Name </th>
      <th> Book Name </th>
      <th> Book Language </th>
      <th> Book Quantity </th>
      <th> operation </th>
    </tr>
  </thead>
  {stuBookData.map((curElem) => {
          return (
            <tbody key={curElem._id}>
            {
              curElem.approved === false 
              ? 
              <>
           
              <tr>
              <td data-label="Student Name">
                {curElem.studentId.firstName}
                {curElem.studentId.lastName}
              </td>
              <td data-label="Book Name">{curElem.bookId?.bookName}</td>
              <td data-label="Book Language">
                {curElem.bookId?.bookLang}
              </td>
              <td data-label="Book Quantity">
                {curElem.bookId?.Quantity}
              </td>
              <td data-label="Operation">
                {curElem.approved ? (
                  <p>--</p>
                ) : (
                  <>
                    <button
                      className="btn btn-success Accept"
                      onClick={() =>
                        AcceptReq(
                          curElem._id,
                          curElem.bookId._id,
                          curElem.studentId._id
                        )
                      }
                    >
                      Accept
                    </button>
                    <button
                      className="btn btn-danger Reject"
                      onClick={() => rejectReq(curElem._id)}
                    >
                      Reject
                    </button>
                  </>
                )}
              </td>
              
            </tr>
            </>
            :
            // <h1>No Issue Book Found</h1>
            ""
            
        
            
            }
           
          </tbody>
          );
       
  })}
</table>
:
<h1 style={{marginTop:"200px",fontStyle:"italic"}}>No data Found</h1>
}
       
      </div>
    </>
  );
};

export default AdminNotify;
