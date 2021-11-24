import { Link } from "react-router-dom";

const UserList = ({users ,setCurrentUser}) => {
    return(
        <>
            {
                users.map((user) =>{
                    const {first, last} = user.name;
                    const {username} = user.login
                    return(
                        <Link
                        to={`/profile/${username}`}
                        onClick={() => setCurrentUser(user)}
                        key={username}
                        >
                            <h1>Soy {first} {last}</h1>
                        </Link>
                    )
                })
            }
        </>
    )
}

export default UserList