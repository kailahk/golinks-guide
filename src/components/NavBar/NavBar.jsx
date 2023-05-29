import "./NavBar.css"
import { Link } from "react-router-dom"

export default function NavBar() {
    return (
        <>
            <Link to="/searchrepos">Search Repos</Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <Link to="/myrepos">My Repos</Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <Link to="/">Home</Link>
        </>
    )
}