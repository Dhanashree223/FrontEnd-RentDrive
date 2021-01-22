import React, { Component } from 'react';
import UserService from '../Service/UserService';
import Navbar from '../Navbars/Navbar';
import LoginNavbar from '../Navbars/LoginNavbar';
import AdminService from '../Service/AdminService';

class BookVehicle extends Component {
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
            userId : localStorage.getItem("token"),
            loggedIn,
            vehicle: {},
            user : {},
            bookings : [],
            hasBooking : {},
            fromDate : '',
            toDate : '',
        }
        this.bookVehicle=this.bookVehicle.bind(this);
    }

    componentDidMount(){
        UserService.getVehicle(this.state.vehicleId).then( res => {
            this.setState({vehicle: res.data});
        });
        UserService.getUser(this.state.userId).then( res => {
            this.setState({user: res.data});
        });
        AdminService.getBookings().then( res => {
            this.setState({bookings: res.data});
        });
    }

    changeFromDateHandler= (event) => {
        this.setState({fromDate: event.target.value});
    }

    changeToDateHandler= (event) => {
        this.setState({toDate: event.target.value});
    }

    bookVehicle = (e) => {
        e.preventDefault();
        this.setState({hasBooking: this.state.bookings.filter(newUser => newUser.uid === this.state.userId)});
        if(this.state.hasBooking===null)
        {
        let booking = {
                            user: this.state.user,
                            vehicle: this.state.vehicle,
                            toDate : this.state.toDate,
                            fromDate : this.state.fromDate
                        };
        console.log('booking => ' + JSON.stringify(booking));
    
        UserService.bookVehicle(booking).then( (res) =>{
            alert("Your Booking is done... Wait for Confirmation");
        });
        }
        else
        {
            alert("Sorry!!!... You can not book vehicle now");
        }
        
    }

    back(){
        this.props.history.goBack();
    }

    render() {
        return (
            <div> 
                {this.state.loggedIn && <LoginNavbar/>} 
                {!this.state.loggedIn && <Navbar/>}  
                <br></br>
                <form className="needs-validation">
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> Book Vehicle </h3>
                    <img
                        className="center d-block w-100"
                        src={process.env.PUBLIC_URL + (this.state.vehicle.image)}
                        alt="Third slide"
                         width="250"
                        height="250"/>     
                    <div className = "card-body">
                    <div className = "row">
                            <label> User Name: </label>
                            <div> { this.state.user.name }</div>
                        </div>
                        <div className = "row">
                            <label> Email : </label>
                            <div> { this.state.user.email }</div>
                        </div>
                        <div className = "row">
                            <label> Mobile : </label>
                            <div> { this.state.user.contact }</div>
                        </div>
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
                        <div className = "row">
                            <div className="form-group">
                                <label>From Date:</label>
                                <input type="date" className="form-control" placeholder="From Date" 
                                value={this.state.email} onSelect={this.changeFromDateHandler} required/>
                                <div class="invalid-feedback">
                                    Please Enter From-Date.
                                </div>
                            </div>
                        </div>
                        <div className = "row">
                            <div className="form-group ">
                                <label>To Date:</label>
                                <input type="date" className="form-control" placeholder="To Date" 
                                value={this.state.password} onSelect={this.changeToDateHandler} required/>
                                <div class="invalid-feedback">
                                    Please Enter To-Date.
                                </div>
                            </div>
                        </div>
                        <div className = "row">
                            <button onClick={ () => this.back()} 
                                className="btn btn-primary"> Back </button>
                            <button  type="submit" onClick={this.bookVehicle} 
                                className="btn btn-primary ml-3"> Confirm Booking </button>
                        </div>
                    </div>   
                </div>
                </form>
            </div>
        )
    }
}

export default BookVehicle;