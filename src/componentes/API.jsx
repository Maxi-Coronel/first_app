import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserList from './UserList/UserList'
import UserProfile from './UserProfile/UserProfile'

function App() {

    const [currentUser, setCurrentUser] = useState({})
    const [users, setUsers] = useState([])
    const [letra, setLetra] = useState("")

    const onChange = (event) => {
        setLetra(event.nativeEvent.data)
        /* if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u") {
            alert("error")
        } */
    }
    console.log(letra);

    useEffect(() => {
        fetch('https://randomuser.me/api/?results=20')
        .then(response => response.json())
        .then(data => setUsers(data.results))
    }, [])

    return(
        <BrowserRouter>
        <input type="text" name="desafio" id="desafio" onChange={onChange}/>
            <Routes>
                <Route path='/' element={<UserList users={users} setCurrentUser={setCurrentUser}/> } />
                <Route path='/profile/:userID' element={<UserProfile currentUser={currentUser} /> } />
            </Routes>
        </BrowserRouter>
    );
}

export default App