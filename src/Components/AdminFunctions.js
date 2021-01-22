import React from 'react';
import LoginNavbar from '../Navbars/LoginNavbar';
import Alert from 'react-bootstrap/Alert';
import { Redirect } from 'react-router';

class AdminFunctions extends React.Component
{
     constructor(props)
    {
        super(props);
        const token = localStorage.getItem("token");

        let loggedIn = true;
        if(token==null)
        {
            loggedIn=false;
        }
        this.state={
            id : localStorage.getItem("token"),
            type : '',
            brand : '',
            user : {},
            vehiclelist : [],
            loggedIn
        }
       this.saveVehicle=this.saveVehicle.bind(this);
    }
    

    saveVehicle(){
        this.props.history.push('/saveVehicle');
    }

    render(){
        if(this.state.loggedIn===false){
            return <Redirect to="/login"/>
        }
        return(
            <div>
                <LoginNavbar/>
            <div className="container">
                <Alert variant="success">Welcome Admin {this.state.user.name}</Alert>
            
                <form className="mt-3">
                
                <button className="mb-2 mr-sm-2 btn btn-primary" onClick={() => this.saveVehicle()}>Save Vehicles</button>
                </form>
            </div>
            </div>
        )
    }
}
export default AdminFunctions;