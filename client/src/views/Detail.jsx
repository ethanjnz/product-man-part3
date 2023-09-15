import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom'

const Detail = (props) => {
    const [user, setUser] = useState({});
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/user/${id}`)
            .then(res => setUser(res.data))
            .catch(err => console.log(err))
    }, [])
    return (
        <div>

            <p>Title: {user.title}</p>
            <p>Price: ${user.price}</p>
            <p>Description: {user.description}</p>

        </div>
    )
}

export default Detail