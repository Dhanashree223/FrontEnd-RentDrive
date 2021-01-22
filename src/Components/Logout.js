import React from 'react';
import Navbar from '../Navbars/Navbar';
import Alert from 'react-bootstrap/Alert';
import logout from '../Images/logout.jpg';

class Login extends React.Component{

    constructor(props) {
        super(props);
        localStorage.removeItem("token");
    }

    render()
    {
        return(
            <div>
                <Navbar/>
            <div className="container">
                <Alert variant="success">Logged-Out Successfully....</Alert>
                <img
                     className="center d-block w-100"
                    src={logout}
                    alt="Vehicle"
                    width="250"
                    height="450"/>     
            </div>
            </div>
        );
    }
}
export default Login;