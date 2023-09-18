import React, { useState } from "react";
import axios from "axios";
const UserForm = (props) => {
  //keep track of what is being typed via useState hook
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  //handler when the form is submitted
  const onSubmitHandler = (e) => {
    //prevent default behavior of the submit
    e.preventDefault();
    //make a post request to create a new person
    axios
      .post("http://localhost:8000/api/user", {
        title,
        price,
        description,
      })
      .then((res) => {
        console.log(res);
        props.fetchData();
      })
      .catch((err) => console.log(err));
    setTitle("");
    setPrice(0);
    setDescription("");
  };
  return (
    <form className="mx-auto card w-50 m-5 shadow-lg" onSubmit={onSubmitHandler}>
      <div className="m-3">
        <label className="form-label">Title</label>
        <br />
        <input
          className="form-control"
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </div>
      <div className="m-3">
        <label className="form-label">Price</label>
        <br />
        <input
          className="form-control"
          type="number"
          min={0}
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />
      </div>
      <div className="m-3">
        <label className="form-label">Description</label>
        <br />
        <input
          className="form-control"
          type="text"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
      </div>
      <div> 
        <input className="btn btn-primary m-3" type="submit" />
      </div>
    </form>
  );
};

export default UserForm;
