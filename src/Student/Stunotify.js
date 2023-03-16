import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../CSS/StuNotify.css";
import Axios from "axios";
import { AppContext } from "./../Context/Context";

const Stunotify = () => {
  const { student } = useContext(AppContext);
  const [data, setData] = useState([]);

  const getData = () => {
    Axios.get(`http://localhost:4000/getissuedbook/${student._id}`).then(
      (res) => {
        console.log("StuNotify",res.data)
        setData(res.data.student);
      }
    );
  };

  const returnBook = (id) => {
    Axios.delete(`http://localhost:4000/deletereq/${id}`)
    .then(res => {
      console.log(res.data)
      setData(
        data.filter( (val) => {
          return val._id!= id;
        })
      );
    })
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="table_container">
        <h2 className="text-center h2">Issued Book </h2>

        <table className="table">
          <thead>
            <tr>
              <th> </th>
              <th> Book Language </th>
              <th> operation </th>
              <th> Approved By </th>
            </tr>
          </thead>
          {
            data.length>0 ? 
            <>
          {data.map((item) => {
            return (
              <>
                <tbody key={item._id} >
                  <tr>
                    <td data-label="Book Name">{item.bookId.bookName}</td>
                    <td data-label="Book Language">{item.bookId.bookLang}</td>
                    <td data-label="Operation" style={{padding:"10px"}}>
                      <button className="btn btn-success ms-2" style={{margin:" 0 10px"}}  onClick={ ()=>window.open(`${item.bookId.bookPdf}`, '_blank', 'noreferrer')}> Read Book</button>
                      <button className="btn btn-primary" onClick={() => returnBook(item._id)}>Return Book</button>
                    </td>
                    <td data-label="Approved">
                      <p>{item.approvedBy?.firstName} {item.approvedBy?.lastName}</p>
                    </td>
                  </tr>
                </tbody>
              </>
            );
          })}
              </>
              :
             ""
              }
        </table>
      </div>
    </>
  );
};
/*
1.removed book from issued book
2.Increment Quantity of a specific book
*/

export default Stunotify;
