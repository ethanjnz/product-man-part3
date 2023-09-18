import axios from "axios"
import { Link } from "react-router-dom"

const UserList = (props) => {

    const deleteHandler = (userId) => {
        axios.delete(`http://localhost:8000/api/user/${userId}`)
        .then(res => {props.removeFromDom(userId)})
        .catch(err => console.log(err));
    }

    return (
        <div className="mx-auto card w-50 m-5 shadow-lg">
            <h2 className="card-title">All Products</h2>
            {props.user.map((user, i) => {
                // remember to return in a map function!
                return (
                    
                        <div className="border p-3 d-flex justify-content-center align-items-center " key={i}>
                            {/* Link must be capital! */}
                            <Link className="mx-2" to={`/users/${user._id}`} >{user.title}</Link>
                            {/* button is inside the p tag because of the key index */}
                            <button className="btn btn-danger mx-2" onClick={(e) => {deleteHandler(user._id)}}>Delete</button>
                        </div>
                   

                )
            }
            )}
        </div>
    )
}

export default UserList