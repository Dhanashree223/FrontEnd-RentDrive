import React from 'react';
import UserService from '../Service/UserService';
import ServiceImg from '../Images/rental2.jpg';

class GetVehicles extends React.Component {

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
            id : localStorage.getItem('token'),
            vehicles : [],
            loggedIn
        }
        
    }

    componentDidMount(){
        console.log("Login State :"+this.state.loggedIn);
        UserService.getVehicles().then((res) => {
            this.setState({ vehicles: res.data});
        });
    } 

    viewVehicle(vehicleId){
        this.props.history.push('/viewVehicle/'+ vehicleId);
    }

    bookVehicle(vid){
        this.props.history.push(`/viewVehicle/${vid}`);
    }


    back(){
        this.props.history.goBack();
    }
 
    render()
    {
        return(
            <div className="container">
            <h2 className="text-center mt-2">Vehicle List</h2>
            <div className = "row">
            {
              this.state.vehicles.map(
                                     vehicle => 
              <div className="col-sm-4" key = {vehicle.vid}>
                    <div className="card bg-light border-dark mb-3">
                        <div class="card-header">
                            <img
                                className="center d-block w-100"
                                src={ServiceImg}
                                alt="Third slide"
                                width="150"
                                height="150"/>     
                        </div>
                        <div className="card-body">
                            <h6 className="card-title">Type : {vehicle.vtype}</h6>
                            <h6 className="card-title">Brand : {vehicle.vbrand}</h6>
                            <div className="card-text">
                            <button style={{marginLeft: "10px"}} 
                                onClick={ () => this.viewVehicle(vehicle.vid)} 
                                className="btn btn-primary"> View </button>

                            <button disabled={!this.state.loggedIn} style={{marginLeft: "10px"}} 
                                onClick={ () => this.bookVehicle(vehicle.vid)} 
                                className="btn btn-primary"> Book </button>
                                         
                        </div>
                    </div>
                </div>
                </div>
              )
            }                         
            </div>
            <button className="btn btn-primary" onClick={() => this.back()}>Back</button>
            </div>
        )
    }
}

export default GetVehicles;