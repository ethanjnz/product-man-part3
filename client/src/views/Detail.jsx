import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Detail = (props) => {
  const [user, setUser] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/user/${id}`)
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err));
  }, []);

  const deleteHandler = (userId) => {
    axios
      .delete(`http://localhost:8000/api/user/${userId}`)
      .then((res) => {
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="mx-auto border rounded w-50 m-5 shadow-lg p-3">
      <p>Title: {user.title}</p>

      <p>Price: ${user.price}</p>

      
          <p className="align-text-center">Description: {user.description}</p>
     
    <div className="d-flex justify-content-center align-items-center m-3">
      <Link className="mx-2" to={`/user/${user._id}/edit`}>Edit</Link>
      <button className="mx-2 btn btn-danger" onClick={() => deleteHandler(user._id)}>Delete</button>

    </div>

      {/* remember to have a arrow function inide event unless you want to auto refresh */}
    </div>
  );
};

export default Detail;
