import React, { useState, useEffect, useContext } from "react";
import "../CSS/notes.css";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import { AppContext } from "./../Context/Context";


const Books = () => {
  // Initialize the hooks
  const Navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [bookDatas, setBookDatas] = useState([]);
  const { state ,student,setLoading,loading} = useContext(AppContext);

  const { id } = useParams();

  const getData = () => {
    setLoading(true)
    Axios.get("http://localhost:4000/getData").then((res) => {
      setBookDatas(res.data);
    });
    setLoading(false)
  };
  useEffect(() => {
    getData();
  }, []);

  const postBook = (id) => {
    console.log(student._id);
    console.log(id);
    Axios.post("http://localhost:4000/postBookData", {
      studentId: student._id,
      bookId: id,
    }).then((res) => {
      console.log(res);
      alert(res.data.message);
    });
  };

  const DeleteBook = (id) => {
    Axios.delete(`http://localhost:4000/delete/${id}`).then(() => {
      setBookDatas(
        bookDatas.filter((val) => {
          return val._id != id;
        })
      );
    });
  };
  if(loading){
    return <h1>Loading...</h1>
  }
  return (
    <>
      <div className="table_container universal">
        <h1 className="text-center my-5" >Available Books</h1>
        <input
          type="search"
          className="search"
          value={search}
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="table-container">
          <div className={bookDatas.length > 9? "tbl-fixed" : ""}>
            <div className="table-responsive">
            <table className="table ">
              <thead>
                <tr>
                  <th>Sr No.</th>
                  <th>Book Name</th>
                  <th>Book Author</th>
                  <th>Quantity</th>
                  <th>Book Lang</th>
                  <th>Issue Book</th>
                </tr>
              </thead>
              {bookDatas
                .filter((val) => {
                  if (search == " ") {
                    return val;
                  } else if (
                    val.bookName.toLowerCase().includes(search.toLowerCase())
                  ) {
                    return val;
                  }
                })
                .map((curElem, index) => {
                  const { bookName, Quantity, bookLang, bookAuthor } = curElem;
                  return (
                    <tbody key={curElem._id} >
                      <tr >
                        <td data-label="Sr No.">{index + 1}</td>
                        <td data-label="Book Name">{bookName}</td>
                        <td data-label="Book Author">{bookAuthor}</td>
                        <td data-label="Quantity">{Quantity}</td>
                        <td data-label="Book Lang">{bookLang}</td>
                        <td data-label="Issue Book">
                          {state.admin.email ? (
                            <>
                              <Link
                                to={`/editdata/${curElem._id}`}
                                type="button"
                                className="btn btn-primary edit"
                              >
                                Edit
                              </Link>

                              <Link
                                to={""}
                                type="button"
                                className="btn btn-danger delete"
                                onClick={() => DeleteBook(curElem._id)}
                              >
                                Delete
                              </Link>
                            </>
                          ) : (
                            
                              <Link
                                type="button"
                                className="btn btn-primary"
                                onClick={() => postBook(curElem._id)}
                              >
                                IssueBook
                              </Link>
                           
                          )}
                        </td>
                      </tr>
                    </tbody>
                  );
                })}
            </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default Books;
