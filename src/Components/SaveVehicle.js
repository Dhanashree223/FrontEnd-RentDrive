import React from 'react';
import AdminService from '../Service/AdminService';
import Navbar from '../Navbars/Navbar';

class SaveVehicle extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            vtype:'',
            vbarnd:'',
            vnumber:'',
            image:''
            
        }
        this.changeTypeHandler = this.changeTypeHandler.bind(this);
        this.changeBrandHandler = this.changeBrandHandler.bind(this);
        this.changeNumberHandler = this.changeNumberHandler.bind(this);
        this.changeImageHandler = this.changeImageHandler.bind(this);
    }
    
    changeTypeHandler= (event) => {
        this.setState({vtype: event.target.value});
    }

    changeBrandHandler= (event) => {
        this.setState({vbarnd: event.target.value});
    }

    changeNumberHandler= (event) => {
        this.setState({vnumber: event.target.value});
    }

    changeImageHandler= (event) => {
        this.setState({image: event.target.value});
    }

    save = (e) => {
        e.preventDefault();
        let vehicle = {
                            vtype: this.state.vtype,
                            brand: this.state.vbarnd,
                            vnumber: this.state.vnumber,
                            image : this.state.image,
                        };
        console.log('user => ' + JSON.stringify(vehicle));
    
        AdminService.createVehicle(vehicle).then( (res) =>{
                alert("Vehical added Successfully....");
        })
        .catch( (error) => {
            alert("Failed...");
        });
        
    }
    cancel(){
        this.props.history.goBack();
    }
    render()
    {
        return(
            <div>
                <Navbar/>
            <div className="container">
                <form className="form2 mb-3">
                
                <h1>Add Vehicle</h1>
                <br></br>
                <div className="form-group">
                    <label>Vehicle Type</label>
                    <input type="text" className="form-control" name="vtype" placeholder="Enter type" 
                    value={this.state.vtype} onChange={this.changeTypeHandler}/>
                </div>
                <div className="form-group">
                    <label >Vehicle Brand:</label>
                    <input className="form-control" placeholder="Enter Brand" name="vbarnd"
                    value={this.state.vbrand} onChange={this.changeBrandHandler} />
                </div>
                <div className="form-group">
                    <label >Vehicle Number:</label>
                    <input className="form-control" placeholder="Enter Number" name="number"
                    value={this.state.vnumber} onChange={this.changeNumberHandler}/>
                </div>
                <div className="form-group">
                    <label >Image:</label>
                    <input type="file" className="form-control" name="image"
                    value={this.state.image} onChange={this.changeImageHandler}/>
                </div>
                <div className="row ">
                <button type="submit" className="btn btn-success ml-3" onClick={this.save}>Submit</button>
                </div>
            </form>
            </div>
            </div>
        );
    }
}
export default SaveVehicle;