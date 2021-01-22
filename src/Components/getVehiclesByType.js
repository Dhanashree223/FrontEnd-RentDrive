import React from 'react';
import UserService from '../Service/UserService';
import LoginNavbar from '../Navbars/LoginNavbar';
import Navbar from '../Navbars/Navbar';

class GetVehiclesByType extends React.Component
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
            type: this.props.match.params.type,
            id : localStorage.getItem("token"),
            loggedIn,
            vehiclelist : [],
        }
        this.back=this.back.bind(this);
    }
    componentDidMount(){
        console.log("In byType : "+this.state.type);
        UserService.getVehiclesByType(this.state.type).then((res) => {
            this.setState({ vehiclelist: res.data});
            console.log(JSON.stringify(this.state.vehiclelist));
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
            
            <h2 className="text-center mt-2">{this.state.type} List</h2>
            <div className = "row">
            {
               this.state.vehiclelist.map(
                                     (vehicle) =>
              <div className="col-sm-4" key = {vehicle.vid}>
                    <div className="card bg-light border-dark mb-3">
                       
                            <img
                                className="center card-img-top d-block w-100"
                                src={process.env.PUBLIC_URL + vehicle.image}
                                alt="vehicle"
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
            <div classNam="row"> 
                <button className="btn btn-primary" onClick={() => this.back()}>Back</button>
            </div> 
            </div>
        </div>
        )
    }
}
export default GetVehiclesByType;