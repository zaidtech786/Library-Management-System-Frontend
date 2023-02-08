import React, {useState,useEffect} from 'react'
import Axios from 'axios';
import {getIssueBook} from "./Api"
import { useParams } from 'react-router-dom';

const IssueBook = () => {
  const {id} =useParams();
    const [Books, setBooks] = useState({
        bookName: "",
        studentName: "",
        email: "",
        pdf:"",
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setBooks({
          ...Books,
          [name]: value,
        });
      };

      const loadUserDetails = async () => {
        const response = await getIssueBook(id);
        setBooks(response.data);
    }
    useEffect(() => {
      loadUserDetails();
  }, []);
  return (
    <>
      <div className="formCont">
        <div className="form-cont">
          <h3 className="Title text-dark"> Issue Book </h3>

         
          <div className="input_field">
            <label className="label">Student Name</label>
            <br />
            <input
              type="text"
              name="studentName"
              value={Books.studentName}
              onChange={handleChange}
              className="inputUser"
              placeholder="Student Name"
            />
          </div>

          <div className="input_field">
            <label className="label">Email</label>
            <br />
            <input
              type="email"
              name="email"
              value={Books.email}
              onChange={handleChange}
              className="inputUser"
              placeholder="Email"
            />
          </div>
          <div className="input_field">
            <label className="label">Book Name</label>
            <br />
            <input
              type="text"
              name="bookName"
              value={Books.bookName}
              onChange={handleChange}
              className="inputUser"
              placeholder="Book Name"
            />
          </div>

       

          <input type="button" className="buttonbtn" value="Issue Book" />
        </div>
      </div>
    </>
  )
}

export default IssueBook