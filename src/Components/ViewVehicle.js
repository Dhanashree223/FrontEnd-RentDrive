import React, { Component } from 'react'
import UserService from '../Service/UserService';
import Navbar from '../Navbars/Navbar';
import LoginNavbar from '../Navbars/LoginNavbar';


class ViewVehicle extends Component {
    constructor(props) {
        super(props)
        const token = localStorage.getItem("token");

        let loggedIn = true;
        if(token==null)
        {
            loggedIn=false;
        }

        this.state = {
            vehicleId: this.props.match.params.vehicleId,
            vehicle: {},
            loggedIn
        }
        
    }

    back(){
        this.props.history.goBack();
    }

    bookVehicle(vid){
        this.props.history.push(`/bookVehicle/${vid}`);
    }

    componentDidMount(){
        console.log("Vehicle Id : "+ this.state.vehicleId);
        UserService.getVehicle(this.state.vehicleId).then( res => {
            this.setState({vehicle: res.data});
        })
    }

    render() {
        return (
            <div>  
                {this.state.loggedIn && <LoginNavbar/>} 
                {!this.state.loggedIn && <Navbar/>}  
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Vehicle Details</h3>
                    <div class="card-header">
                            <img
                                className="center d-block w-100"
                                src={ process.env.PUBLIC_URL + this.state.vehicle.image}
                                alt="Vehicle"
                                width="250"
                                height="250"/>     
                        </div>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Vehicle Type: </label>
                            <div> { this.state.vehicle.vtype }</div>
                        </div>
                        <div className = "row">
                            <label> Vehicle Brand : </label>
                            <div> { this.state.vehicle.vbrand }</div>
                        </div>
                        <div className = "row">
                            <label> Vehicle Number : </label>
                            <div> { this.state.vehicle.vnumber }</div>
                        </div>
                        <div>
                            <button disabled={this.state.value}  
                                                onClick={ () => this.back()} 
                                                className="btn btn-primary"> Back </button>
                            <button disabled={!this.state.loggedIn}  
                                                onClick={ () => this.bookVehicle(this.state.vehicle.vid)} 
                                                className="btn btn-primary ml-4"> Book </button>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
export default ViewVehicle;
