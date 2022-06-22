import React,{useState} from "react"
export const LoggedIn =()=>{
    const[isLogeedIn, setIsLoggedIn] = useState(false)
    const handleLogin =()=>{
        setIsLoggedIn(true)
    }
    const handleLogout =()=>{
        setIsLoggedIn(false)

    }
    return(
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout </button>
            <h2>user is out{isLogeedIn ? 'Logged in' : 'Logged Out'}</h2>
        </div>
    )
}
