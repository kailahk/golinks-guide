import { useState } from "react"
import Login from "./Login.css"

export default function LoginForm({user, setUser}) {
    const [userData, setUserData] = useState({
        name: '',
        password: '',
    })
    function handleChange(evt) {
        setUserData({...userData, [evt.target.name]:evt.target.value})
    }
    function handleSubmit(evt) {
        evt.preventDefault();
        setUser(userData)
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={userData.name} onChange={handleChange} />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" value={userData.password} onChange={handleChange} />
            <button type="submit">Login</button>
        </form>
    )
}