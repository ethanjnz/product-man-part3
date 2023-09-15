import React, { useEffect, useState } from 'react'
import UserForm from '../components/UserForm'
import axios from 'axios';
import UserList from '../components/UserList';



const Main = (props) => {
    const [user, setUser] = useState([]);
    const [loaded, setLoaded] = useState(false)

    const fetchData = () => {
        axios.get('http://localhost:8000/api')
            .then(res => {
                setUser(res.data);
                setLoaded(true);
            })
            .catch(err => console.log(err));
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div>
            <UserForm fetchData={fetchData} />
            <hr />
            {loaded && <UserList user={user} />}


        </div>
    )
}

export default Main
