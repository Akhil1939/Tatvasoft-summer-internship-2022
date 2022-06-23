import { useState } from "react"
type AuthUser={
    name:string
    email:string
}
export const User =()=>{
    const[user, setUser] = useState<AuthUser | null>(null)
    const handleLogin =()=>{
       setUser({
            name:"akhil",
            email:"akhil@df.com",
        })
    }
    const handleLogout =()=>{
        setUser(null)

    }
    return(
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout </button>
            <h2>user name is {user?.name}</h2>
            <h2>user email is{user?.email}</h2>
        </div>
    )
}