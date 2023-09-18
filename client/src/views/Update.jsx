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
        <div className='m-5'>
            <h1>Update</h1>
            <form className="mx-auto card w-50 m-5 shadow-lg" onSubmit={updateUser}>
                <div className='m-3'>
                    <label className='form-label'>Title</label><br />
                    <input className='form-control' type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
                </div>
                <div className='m-3'>
                    <label className='form-label'>Price</label><br />
                    <input className='form-control' type="number" onChange={(e) => setPrice(e.target.value)} value={price} />
                </div>
                <div className='m-3'>
                    <label className='form-label'>Description</label><br />
                    <input className='form-control' type="text" onChange={(e) => setDescription(e.target.value)} value={description} />
                </div>
                <div ><input className='btn btn-primary m-3' type="submit" /></div>
            </form>
        </div>
    )
}

export default Update