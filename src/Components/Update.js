import axios from 'axios';

import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Update = () => {
const [id, setId] = useState(0);
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const navigate = useNavigate ();

useEffect(() => {
   
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
}, []);

const handelUpdate = (e)=>{
    e.preventDefault();
    axios.put (`https://6458edff4eb3f674df818906.mockapi.io/crud/api/CrudApi/${id}`,
    {
        name: name,
        email: email,
      }
    ).then(()=>{
        navigate("/read")
    })
    .catch(err => {
      console.log(err);
    });
}

  return (
    <>
    <h2 className='text-center'>Update</h2>
     <form className="form mt-5" >
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            name="name"
            type="text"
            value={name}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Email
          </label>
          <input
            name="email"
            type="email"
            value={email}
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='d-flex gap-5'>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={handelUpdate}
        >
          Update
        </button>
        <Link to='/read'>
        <button
          type="submit"
          className="btn btn-success"
        //   onClick={handelUpdate}
        >
          Back
        </button>
        </Link>
        </div>
      </form>
    </>
  )
}

export default Update;