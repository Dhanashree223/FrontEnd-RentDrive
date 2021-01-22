import React from 'react';
import { Link } from 'react-router-dom';
class Navbar extends React.Component{
    render()
    {
        return(
            <div>
            <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
            <ul className="navbar-nav">  
                <li> 
                    <h5 className="text-white mt-2">Rent & Drive</h5>
                </li>
                <li className="nav-item ml-3">
                    <Link className="nav-link font-weight-bold mt-1" to="/">Home</Link>
                </li>
            </ul> 
            <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                    <Link className="nav-link" to="/ourVehicles">Our Vehicles</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/signUp">SignUp</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                </li>
            </ul>
            </nav>
            </div>
        );
    }
}
export default Navbar;