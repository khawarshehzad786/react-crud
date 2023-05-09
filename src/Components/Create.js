import React, { useState } from "react";
import "../Components/style.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const history = useNavigate();

  // const header = { "Access-Control-Allow-Origin": "*" };

  const handelSubmit = (e) => {
    e.preventDefault();
    // console.log("clicked");
    axios
      .post("https://6458edff4eb3f674df818906.mockapi.io/crud/api/CrudApi", {
        name: name,
        email: email,
      })
      .then(() => {
        history("/read");
      })
       .catch(err => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="createDiv " style={{width:"60%",}} >
        <h2 className="text-center "></h2>
        <Link to='/read'>
        <button className="btn btn-primary">Show Data</button>
        </Link>
      </div>
      <h2 className="text-center ">Create</h2>
      <form className="form mt-5">
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            name="name"
            type="text"
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
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={handelSubmit}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Create;
