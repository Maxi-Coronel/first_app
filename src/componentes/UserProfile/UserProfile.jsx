const UserProfile = ({currentUser}) => {
    const {first, last} = currentUser.name
    const {medium} = currentUser.picture
    return(
        <>
        <h1>Soy {first} {last}</h1>
        <img src={medium} alt="" />
        </>
    )
}

export default UserProfile