import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios';

const Update = (props) => {
    const { id } = useParams();
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("")
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/user/${id}`)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);

            })
    }, [])

    const updateUser = (e) => {
        e.preventDefault();
        // on submit, you must use patch to update a certain document
        axios.patch(`http://localhost:8000/api/user/${id}`, {
            title,
            price,
            description
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
        setTitle("");
        setPrice(0);
        setDescription("");
        navigate("/")
    }


    return (
        <div>
            <h1>test</h1>
            <form onSubmit={updateUser}>
                <p>
                    <label>Title</label><br />
                    <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
                </p>
                <p>
                    <label>Price</label><br />
                    <input type="text" onChange={(e) => setPrice(e.target.value)} value={price} />
                </p>
                <p>
                    <label>Description</label><br />
                    <input type="text" onChange={(e) => setDescription(e.target.value)} value={description} />
                </p>
                <input type="submit" />
            </form>
        </div>
    )
}

export default Update