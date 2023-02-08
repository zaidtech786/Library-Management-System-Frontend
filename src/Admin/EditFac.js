import React,{useState,useEffect} from 'react'
import { getFaculty,editFaculty } from './Api';
import { useParams,useNavigate } from 'react-router-dom';

const EditFac = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    Mobileno: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };


  const {id} =useParams();
  const navigate=useNavigate()

      const loadUserDetails = async () => {
          const response = await getFaculty(id);
          setUser(response.data);
      }
      useEffect(() => {
        loadUserDetails();
    }, []);


    const editData = async() => {
        const response = await editFaculty(id, user).then( (res) => {
          alert(res.data.message)
          console.log(res)
          console.log(res.data)
          navigate("/viewfaculty")
          console.log(response);
        })
        
    }
  return (
    <>
       <div className="formCont">
        <div className="form-cont">
          <h3 className="Title"> Edit Faculty </h3>

          <div className="input_field">
            <label className="label">First Name</label>
            <br />
            <input
              type="text"
              name="firstName"
              value={user.firstName}
              onChange={handleChange}
              className="inputUser"
              placeholder="First Name"
            />
          </div>

          <div className="input_field">
            <label className="label">Last name</label>
            <br />
            <input
              type="text"
              name="lastName"
              value={user.lastName}
              onChange={handleChange}
              className="inputUser"
              placeholder="Last Name"
            />
          </div>

          <div className="input_field">
            <label className="label">Email</label>
            <br />
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              className="inputUser"
              placeholder="Email"
            />
          </div>

          <div className="input_field">
            <label className="label">Phone No</label>
            <br />
            <input
              type="number"
              name="Mobileno"
              value={user.Mobileno}
              onChange={handleChange}
              className="inputUser"
              placeholder="+91 1234 5678 90"
            />
          </div>

          <input type="button" className="buttonbtn" onClick={()=>editData()} value="Submit" />
        </div>
      </div>
    </>
  )
}

export default EditFac