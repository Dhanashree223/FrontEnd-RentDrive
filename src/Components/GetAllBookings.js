import React, { Component } from 'react'
import UserService from '../Service/UserService';
import Navbar from '../Navbars/Navbar';
//import AdminNavbar from '../Navbars/AdminNavbar';
import AdminService from '../Service/AdminService';

class GetAllBookings extends Component {
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
            bookings: [],
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
        AdminService.fetchAllBookings().then( res => {
            this.setState({bookings: res.data});
        })
        
    }

    render() {
        return (
            <div>  
                {/* <AdminNavbar/>  */}
                <br></br>
  <h2 className="text-center mt-2">Bookings</h2>
             
             <div className = "row">
  <div className = "column" >
                     <table className = "table table-striped table-bordered mt-2">

                         <thead>
                             <tr>
                                 
                                 <th>User Name</th>                                      
                                 <th>Vehicle Type</th>
                                 <th>Vehicle Brand</th>
                                 <th> Vehicle Number</th>
                                 <th>From</th>
                                 <th>To</th>
                                 <th> Status</th>
                                 <th>Action</th>
                             </tr>
                         </thead>
                         <tbody>
                         
                             {
                                this.state.bookings.map((booking) =>
               			    <tr>
                            <td> { booking.user.name }</td>
                          <td> { booking.vehicle.vtype }</td>
                       
                            <td> { booking.vehicle.vbrand }</td>
                       
                            <td> { booking.vehicle.vnumber }</td>
                       
                            <td> { booking.fromDate }</td>
                        
                            <td> { booking.toDate }</td>
                            
                       	    <td> { booking.status }</td>
                            <td><button>confirm</button></td>
                        </tr>
                                )}
                </tbody>
                </table>
                             
                   </div>
                   </div>
                            <button disabled={this.state.value}  
                                                onClick={ () => this.back()} 
                                                className="btn btn-primary"> Back </button>
                    
            </div>
        )
    }
}
export default GetAllBookings;
