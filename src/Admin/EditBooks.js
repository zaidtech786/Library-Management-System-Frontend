import React,{useState,useEffect} from 'react'
import {getBook,EditBook} from "./Api";
import { useParams,useNavigate } from 'react-router-dom';

const EditBooks = () => {
  // const [books,setBooks]=useState('');
  const [bookData, setBookData] = useState({
    bookName: "",
    Quantity: "",
    bookLang: "",
    bookAuthor: "",
  });

  const {id} =useParams();
  const navigate=useNavigate()

  const handleChange = (e) => {
        const { name, value } = e.target;
        setBookData({
          ...bookData,
          [name]: value,
        });
      };
    
      const loadUserDetails = async () => {
          const response = await getBook(id);
          setBookData(response.data);
      }
      useEffect(() => {
        loadUserDetails();
    }, []);


    const editBooks = async() => {
        const response = await EditBook(id, bookData).then( (res) => {
          alert(res.data.message)
          console.log(res.data)
          navigate("/books")
          console.log(response);
        })
        
    }
  return (
    <>
    <div className="formCont">
        <div className="form-cont">
          <h3 className="Title  text-center mt-3">Edit Books</h3>
          <div className="input_field">
            <label for="exampleInputPassword1" className="form-label">
              Book Name
            </label>
            <input
              type="text"
              className="inputUser"
              name="bookName"
              value={bookData.bookName}
              onChange={handleChange}
            />
          </div>
          <div className="input_field">
            <label for="exampleInputEmail1" className="form-label" name="">
              Quantity
            </label>
            <input
              type="text"
              className="inputUser"
              name="Quantity"
              value={bookData.Quantity}
              onChange={handleChange}
            />
          </div>
          <div className="input_field">
            <label for="exampleInputPassword1" className="form-label">
              Book Language
            </label>
            <input
              type="text"
              className="inputUser"
              name="bookLang"
              value={bookData.bookLang}
              onChange={handleChange}
            />
          </div>

          <div className="input_field">
            <label for="exampleInputPassword1" className="form-label">
              Book Author
            </label>
            <input
              type="text"
              className="inputUser"
              name="bookAuthor"
              value={bookData.bookAuthor}
              onChange={handleChange}
            />
          </div>
          <input type="button"
            className="buttonbtn" value="Submit"
            onClick={editBooks}
          >
          </input>
        </div>
      </div>
    
    </>
  )
}

export default EditBooks