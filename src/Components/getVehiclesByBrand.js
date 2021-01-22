import React from 'react';
import UserService from '../Service/UserService';
import LoginNavbar from '../Navbars/LoginNavbar';
import Navbar from '../Navbars/Navbar';

class GetVehiclesByBrand extends React.Component
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
            brand: this.props.match.params.brand,
            id : this.props.match.params.id,
            vehicleList : [],
            loggedIn,
        }
    }
    componentDidMount(){
        UserService.getVehiclesByBrand(this.state.brand).then((res) => {
            this.setState({ vehicleList: res.data});
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
            <div>
                {this.state.loggedIn && <LoginNavbar/>} 
                {!this.state.loggedIn && <Navbar/>}  
            <div className="container">
            <h2 className="text-center mt-2">{this.state.brand} List</h2>
            <div className = "row">
            {
               this.state.vehicleList.map(
                                     (vehicle) =>
              <div className="col-sm-4" key = {vehicle.vid}>
                    <div className="card bg-light border-dark mb-3">
                         <img
                            className="center card-img-top d-block w-100"
                            src={process.env.PUBLIC_URL + vehicle.image}
                            alt="Vehicle"
                            width="170"
                            height="170"/>     
                        
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
                <button className="btn btn-primary mr-sm-2" onClick={() => this.back()}>Back</button>
            </div>
        </div>
        )
    }
}
export default GetVehiclesByBrand;