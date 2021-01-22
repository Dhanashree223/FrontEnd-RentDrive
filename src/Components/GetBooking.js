import React, { Component } from 'react'
import UserService from '../Service/UserService';
import LoginNavbar from '../Navbars/LoginNavbar';


class GetBooking extends Component {
    constructor(props) {
        super(props)
        const token = localStorage.getItem("token");

        let loggedIn = true;
        if(token==null)
        {
            loggedIn=false;
        }

        this.state = {
            userId: localStorage.getItem("token"),
            booking: {},
            user:{},
            vehicle:{},
            status:'',
            loggedIn
        }
        
    }

    back(){
        this.props.history.goBack();
    }

    componentDidMount(){
        console.log("User Id : "+ this.state.userId);
        UserService.getbooking(this.state.userId).then( res => {
            this.setState({booking: res.data});
            this.setState({user: this.state.booking.user});
            this.setState({vehicle: this.state.booking.vehicle});
            if(this.state.booking.status===0)
                this.setState({status:'Not Confirmed'})
            else if(this.state.booking.status===1)
                this.setState({status:'Confirmed'})
        })
        .catch( (error) => {
            alert("You dont have any Bookings...");
            this.props.history.push('/userFunctions');
        })
    }

    render() {
        return (
            <div>  
                <LoginNavbar/> 
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> Your Booking Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                        <img
                                className="center d-block w-100"
                                src={ process.env.PUBLIC_URL + this.state.vehicle.image}
                                alt="Vehicle"
                                width="250"
                                height="250"/>     
                            <label> User Name : </label>
                            <div> { this.state.user.name }</div>
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
                            <label> From Date : </label>
                            <div> { this.state.booking.fromDate }</div>
                        </div>
                        <div className = "row">
                            <label> To Date : </label>
                            <div> { this.state.booking.toDate }</div>
                        </div>
                        <div className = "row">
                            <label> To Date : </label>
                            <div> { this.state.booking.toDate }</div>
                        </div>
                        <div className = "row">
                            <label> Status : </label>
                            <div> { this.state.status }</div>
                        </div>
                        <div>
                            <button disabled={this.state.value}  
                                                onClick={ () => this.back()} 
                                                className="btn btn-primary"> Back </button>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
export default GetBooking;
