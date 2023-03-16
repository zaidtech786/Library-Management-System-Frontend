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
  const [bookAuthor,setBookAuthor] = useState("");
 const [file, setFile] = useState("");
 const [bookPdf,setBookPdf] = useState("");
 const [loading,setLoading] = useState(false)

//  Getting file url
  const handleUpload =  async() => {
    setLoading(true)
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "Zaid-Bolte-Chote");
    data.append("cloud_name", "zaidsiddiqui");

   const res = await fetch("https://api.cloudinary.com/v1_1/zaidsiddiqui/image/upload",{
    method:"post",
    body:data
   })
   const datas = await res.json();
   console.log(datas.url)
   setBookPdf(datas.url)
   setLoading(false)

  };


  const postData = async () => {
       Axios.post("http://localhost:4000/books",{
        bookName,
        Quantity,
        bookLang,
        bookAuthor,
        bookPdf
       })
       .then( res => alert(res.data.message))
       navigate("/Books")

  };
  return (
    <>
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


          <div className="input_Upload_field ">
            <label className="label">Upload file</label>
            <br />
            <input
              type="file"
              name="myFile"
              onChange={(e)=>setFile(e.target.files[0])}
              className="fileUpload"
            />
          <button  onClick={()=>handleUpload()} className="btn-upload">{loading ? "Loading..." : "Upload"}</button>
          </div>


          <div className="submit_btn">
          <input type="submit"
            className="buttonbtn" value="Submit"
            onClick={()=>postData()}
          >
          </input>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default AddBooks;
