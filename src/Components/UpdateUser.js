import React from 'react';
import UserService from '../Service/UserService';
import LoginNavbar from '../Navbars/LoginNavbar';

class UpdateUser extends React.Component{
    constructor(props) {
        super(props)
        const token = localStorage.getItem("token");

        let loggedIn = true;
        if(token==null)
        {
            loggedIn=false;
        }

        this.state = {
            id: localStorage.getItem("token"),
            email: '',
            name: '',
            role: '',
            address : '',
            contact : '',
            password: '',
            user:{},
            loggedIn
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeAddressHandler = this.changeAddressHandler.bind(this);
        this.changeRoleHandler = this.changeRoleHandler.bind(this);
    }
    componentDidMount(){
        
        UserService.getUser(this.state.id).then( (res) => { 
            this.setState({user: res.data});
            this.setState({email: this.state.user.email});
            this.setState({name: this.state.user.name});
            this.setState({role: this.state.user.role});
            this.setState({address: this.state.user.address});
            this.setState({contact: this.state.user.contact});
            this.setState({password: this.state.user.password});
        });
        
    }
    
    changeNameHandler= (event) => {
        this.setState({name: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({email: event.target.value});
    }

    changeAddressHandler= (event) => {
        this.setState({address: event.target.value});
    }

    changeContactHandler= (event) => {
        this.setState({contact: event.target.value});
    }

    changePasswordHandler= (event) => {
        this.setState({password: event.target.value});
    }

    changeRoleHandler= (event) => {
        this.setState({role: event.target.value});
    }

    save = (e) => {
        e.preventDefault();
        let user = {
                            uid: this.state.id,
                            name: this.state.name,
                            email: this.state.email,
                            contact: this.state.contact,
                            address : this.state.address,
                            role : this.state.role,
                            password : this.state.password
                        };
        console.log('user => ' + JSON.stringify(user));
    
        UserService.updateUser(this.state.id, user).then( (res) =>{
                console.log("UserUpdated");
                alert("User Updated Successfully....");
        });
        
    }
    cancel(){
        this.props.history.goBack();
    }
    render()
    {
        return(
            <div>
                <LoginNavbar/>
            <form className="container">
                <div className="form-group">
                    <label>Email address:</label>
                    <input type="email" className="form-control" name="email" placeholder="Enter email" 
                    value={this.state.email} onChange={this.changeEmailHandler}/>
                </div>
                <div className="form-group">
                    <label >Name:</label>
                    <input className="form-control" placeholder="Enter Name" name="name"
                    value={this.state.name} onChange={this.changeNameHandler} />
                </div>
                <div className="form-group">
                    <label >Mobile Number:</label>
                    <input className="form-control" placeholder="Enter Mobile" name="contact"
                    value={this.state.contact} onChange={this.changeContactHandler}/>
                </div>
                <div className="form-group">
                    <label >Address:</label>
                    <input className="form-control" placeholder="Enter Address" name="address"
                    value={this.state.address} onChange={this.changeAddressHandler}/>
                </div>
                <div className="form-group">
                    <label >Password:</label>
                    <input type="text" className="form-control" placeholder="Enter password" name="password"
                    value={this.state.password} onChange={this.changePasswordHandler} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.save}>Update</button>
                <button type="reset" className="btn btn-danger ml-3" onClick={this.cancel.bind(this)}>Cancel</button>
            </form>
            </div>
        );
    }
}
export default UpdateUser;