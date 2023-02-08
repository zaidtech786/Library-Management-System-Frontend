import React, { useState } from "react";
import "../CSS/SignUp.css";
import Axios from "axios";
// import  Navigate  from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const AddBooks = () => {
  const navigate= useNavigate()

  const [bookName,setBookName] = useState("")
  const [Quantity,setQuantity] = useState("")
  const [bookLang,setBookLang] = useState("")
  const [bookAuthor,setBookAuthor] = useState("")

  const postData = async (e) => {
    e.preventDefault();
       Axios.post("http://localhost:4000/books",{
        bookName,
        Quantity,
        bookLang,
        bookAuthor
       })
       .then( res => alert(res.data.message))
       navigate("/Books")

  };
  return (
    <>
    <form method='post' action='/books' name="form" encType='multipart/form-data'>
      <div className="formCont">
        <div className="form-cont">
          <h3 className="Title  text-center mt-3">Add Books</h3>
          <div className="input_field">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Book Name
            </label>
            <input
              type="text"
              className="inputUser"
              name="bookName"
              placeholder="Book Name"
              value={bookName}
              onChange={(e)=>setBookName(e.target.value)}
            />
          </div>
          <div className="input_field">
            <label htmlFor="exampleInputEmail1" className="form-label" name="">
              Quantity
            </label>
            <input
              type="text"
              className="inputUser"
              name="Quantity"
              placeholder="Book Quantity"
              value={Quantity}
              onChange={(e)=>setQuantity(e.target.value)}
            />
          </div>
          <div className="input_field">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Book Language
            </label>
            <input
              type="text"
              className="inputUser"
              placeholder="Book Language"
              name="bookLang"
              value={bookLang}
              onChange={(e)=>setBookLang(e.target.value)}
            />
          </div>

          <div className="input_field">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Book Author
            </label>
            <input
              type="text"
              className="inputUser"
              placeholder="Book Author"
              name="bookAuthor"
              value={bookAuthor}
              onChange={(e)=>setBookAuthor(e.target.value)}
            />
          </div>
          {/* <div className="input_field">
            <label className="label">Upload file</label>
            <br />
            <input
              type="file"
              name="myFile"
              onChange={(e)=>handleFile(e)}
              className="inputUser"
            />
          </div> */}
          <input type="submit"
            className="buttonbtn" value="Submit"
            onClick={postData}
          >
          </input>
        </div>
      </div>
      </form>
    </>
  );
};

export default AddBooks;
