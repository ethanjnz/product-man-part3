import axios from "axios"
import { Link } from "react-router-dom"

const UserList = (props) => {
    return (
        <div>
            <h2>All Products</h2>
            {props.user.map((user, i) => {
                // remember to return in a map function!
                return (
                    <p key={i}>
                        {/* link must be capital! */}
                        <Link to={`/users/${user._id}`} >{user.title}</Link>
                    </p>

                )
            }
            )}
        </div>
    )
}

export default UserList