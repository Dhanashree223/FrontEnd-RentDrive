import React from 'react';
import { Link } from 'react-router-dom';
class LoginNavbar extends React.Component{
    render()
    {
        return(
            <div>
            <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
            <ul className="navbar-nav">  
                <li> 
                    <h5 className="text-white mt-2">Rent & Drive</h5>
                </li>
            </ul> 
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/getMyBooking">My Booking</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/updateUser">Update Personal Info</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/Logout">Logout</Link>
                </li>
            </ul>
            </nav>
            </div>
        );
    }
}
export default LoginNavbar;