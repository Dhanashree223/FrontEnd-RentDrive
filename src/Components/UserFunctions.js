import React from 'react';
import LoginNavbar from '../Navbars/LoginNavbar';
import UserService from '../Service/UserService';
import Alert from 'react-bootstrap/Alert';
import { Redirect } from 'react-router';

class UserFunctions extends React.Component
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
            user : {},
            vehiclelist : [],
            loggedIn
        }
    }
    componentDidMount()
    {
        UserService.getUser(this.state.id).then( (res) => {
            this.setState({ user: res.data});
        })
        UserService.getVehicles().then((res) => {
            this.setState({ vehiclelist: res.data});
            //console.log("After vehicle=>" + JSON.stringify(this.state.vehicles));
        });

    }
    viewVehicle(vehicleId){
        this.props.history.push('/viewVehicle/'+ vehicleId);
    }

    bookVehicle(vid){
        this.props.history.push(`/viewVehicle/${vid}`);
    }

    render(){
        if(this.state.loggedIn===false){
            return <Redirect to="/login"/>
        }
        return(
            <div>
                <LoginNavbar/>
            <div className="container">
                <Alert variant="success">Welcome {this.state.user.name}</Alert>
            
            <div className='row'>
            <div className="dropdown">
            <button type="button" class="btn btn-primary dropdown-toggle ml-3 mt-3" data-toggle="dropdown">
                Vehicle Type
            </button>
            <div className="dropdown-menu">
                <a className="dropdown-item" href="/vehicleByType/Car">Car</a>
                <a className="dropdown-item" href="/vehicleByType/Truck">Truck</a>
            </div>
            </div>
            <div className="dropdown">
            <button type="button" class="btn btn-primary dropdown-toggle ml-3 mt-3" data-toggle="dropdown">
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
               this.state.vehiclelist.map(
                                     (value) =>
              <div className="col-sm-4" key = {value.vid}>
                    <div className="card bg-light border-dark mb-3">
                        
                            <img
                                className="center card-img-top d-block w-100"
                                src={value.image}
                                alt="Third slide"
                                width="170"
                                height="170"/>     
                       
                        <div className="card-body text-center">
                            <h6 className="card-title">Type : {value.vtype}</h6>
                            <h6 className="card-title">Brand : {value.vbrand}</h6>
                            <div className="card-text">
                            <button style={{marginLeft: "10px"}} 
                                onClick={ () => this.viewVehicle(value.vid)} 
                                className="btn btn-primary"> View </button>

                            <button disabled={!this.state.loggedIn} style={{marginLeft: "10px"}} 
                                onClick={ () => this.bookVehicle(value.vid)} 
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
        )
    }
}
export default UserFunctions;