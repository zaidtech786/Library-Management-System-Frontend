import React,{useState,useContext,useEffect} from 'react'
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { updatedata } from './Context'
import { useParams } from 'react-router-dom';
import Axios from "axios"

const Edit = () => {
  
  const {updata, setUPdata} = useContext(updatedata)
  const navigate=useNavigate()
    const [bookData,setBookData]=useState({
        bookName:"",
        Quantity:"",
        bookLang:"",
        bookAuthor:"",
        issueBook:"",
      });

        const handleChange = (e) => {
            const {name,value }=e.target;
            setBookData({
              ...bookData,
              [name]:value
            })
          }

          const { id } = useParams("");
          console.log(id);


        //   const getdata = async () => {
        //     const res = await fetch(`/getuser/${id}`, {
        //         method: "GET",
        //         headers: {
        //             "Content-Type": "application/json"
        //         }
        //     });
    
        //     const data = await res.json();
        //     console.log(data);
    
        //     if (res.status === 422 || !data) {
        //         console.log("error ");
    
        //     } else {
        //         setBookData(data)
        //         console.log("get data");
    
        //     }
        // }

        const getData= () => {
          Axios.get(`http://localhost:4000/getuser/${id}`).then( (res) => {
             setBookData(res.data)
             console.log(res.data)
          })
        }
    
        useEffect(() => {
          getData();
        }, []);
    
    
    const UpdateData = async (e) => {
      e.preventDefault();

      const {bookName,Quantity,bookLang,bookAuthor,issueBook} = bookData;
  
      const res2 = await fetch(`/updateuser/${id}`,{
          method: "PATCH",
          headers: {
              "Content-Type": "application/json"
          },
          body:JSON.stringify({
            bookName,Quantity,bookLang,bookAuthor,issueBook
          })
      });
  
      const data2 = await res2.json();
      console.log(data2);
  
      if(res2.status === 422 || !data2){
          alert("fill the data");
      }else{
        alert("Update data successfully")
         navigate("/books")
          setBookData(data2);
      }
  
    }

  return (
    <div>
        <h3 className='title text-center mt-5'>Edit Data</h3>
  <div className="container wrapper" style={{ marginTop: "3%" }}>
      <form>
          <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Book Name</label>
              <input type="text" class="form-control" name="bookName"  value={bookData.bookName} onChange={handleChange}/>
          </div>
          <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label" name="">Quantity</label>
              <input type="text" class="form-control"  name="Quantity" value={bookData.Quantity} onChange={handleChange}/>

          </div>
          <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Book Language</label>
              <input type="text" class="form-control"   name="bookLang" value={bookData.bookLang} onChange={handleChange}/>
          </div>
        
          <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Book Author</label>
              <input type="text" class="form-control" name="bookAuthor" value={bookData.bookAuthor} onChange={handleChange}/>
          </div>
          <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Issue Book</label>
              <input type="text" class="form-control" name="issueBook" value={bookData.issueBook} onChange={handleChange}/>
          </div>
        
        
          <br />
          <button type="button" class="btn btn-primary d-block m-auto" onClick={UpdateData}  >Submit</button>
      </form>
  </div>
    </div>
  )
}

export default Edit