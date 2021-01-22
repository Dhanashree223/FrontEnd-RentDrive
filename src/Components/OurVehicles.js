import React from 'react';
import Navbar from '../Navbars/Navbar';
import LoginNavbar from '../Navbars/LoginNavbar';
import UserService from '../Service/UserService';
//import _ from 'lodash';

class OurVehicles extends React.Component{
    
    constructor(props)
    {
        super(props);
        
        const token = localStorage.getItem("token");

        let loggedIn = true;
        if(token==null)
        {
            loggedIn=false;
        }
        this.state = {
            type : '',
            brand : '',
            vehicles : [],
            loggedIn
        }
    }
    
    componentDidMount(){
        console.log("Login State :"+this.state.loggedIn);
        UserService.getVehicles().then((res) => {
            this.setState({ vehicles: res.data});
            //console.log("Vehicles=>"+ JSON.stringify(this.state.vehicles));
        });

    } 
    viewVehicle(vehicleId){
        this.props.history.push('/viewVehicle/'+ vehicleId);
    }

    bookVehicle(vid){
        this.props.history.push(`/viewVehicle/${vid}`);
    }    
    render()
    {
        //const VehicleImages = getVehicleImages;
        //let vehicles = _.zip(this.state.vehicles, this.state.VehicleImages);
        return(
             <div>
                {this.state.loggedIn && <LoginNavbar/>} 
                {!this.state.loggedIn && <Navbar/>}  
            <div className="container">
            
            <div className='row'>
            <div className="dropdown">
            <button type="button" class="btn btn-primary dropdown-toggle mt-3" data-toggle="dropdown">
                Vehicle Type
            </button>
            <div className="dropdown-menu">
                <a className="dropdown-item" href="/vehicleByType/Car">Car</a>
                <a className="dropdown-item" href="/vehicleByType/Truck">Truck</a>
            </div>
            </div>
            <div className="dropdown">
            <button type="button" className="btn btn-primary dropdown-toggle ml-3 mt-3" data-toggle="dropdown">
                Vehicle Brand
            </button>
            <div className="dropdown-menu">
                <a className="dropdown-item" href="/vehicleByBrand/Audi">Audi</a>
                <a className="dropdown-item" href="/vehicleByBrand/Ford">Ford</a>
                <a className="dropdown-item" href="/vehicleByBrand/Honda">Honda</a>
                <a className="dropdown-item" href="/vehicleByBrand/BMW">BMW</a>
            </div>
            </div>
            </div>
         
            <h2 className="text-center mt-2">Vehicle List</h2>
            <div className = "row">
            {
               this.state.vehicles.map(
                                     (vehicle) =>
              <div className="col-sm-4" key = {vehicle.vid}>
                    <div className="card bg-light border-dark mb-3">
                        <img
                            className="center card-img-top d-block w-100"
                            src={process.env.PUBLIC_URL + vehicle.image}
                            alt="Vehicle"
                            width="170"
                            height="170"/>     
                       
                        <div className="card-body text-center">
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
            </div>
            </div>
        );
    }
}
export default OurVehicles;