import "./NavBar.css"
import { Link } from "react-router-dom"

export default function NavBar({setUser}) {
    function handleLogOut(evt) {
        setUser(null);
    }
    return (
        <>
            <Link to="/searchrepos">Search Repos</Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <Link to="/myrepos">My Repos</Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <Link to="/">Home</Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <Link to="" onClick={handleLogOut}>Log Out</Link>
        </>
    )
}