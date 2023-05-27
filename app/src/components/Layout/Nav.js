import { NavLink } from "react-router-dom";
const Nav=()=>{
    return (
     <ul className="nav nav-pills nav-justified">
        <li className="nav-item"><NavLink  className="nav-link"  activeclassname="active" to="/">Home</NavLink></li>
        <li className="nav-item"><NavLink  className="nav-link"  activeclassname="active" to="team">Team</NavLink></li>
        <li className="nav-item"><NavLink  className="nav-link" activeclassname="active" to="login">Login</NavLink></li>
        <li className="nav-item"><NavLink  className="nav-link" activeclassname="active" to="about">About</NavLink></li>
     </ul>   
    )
}

export default Nav;