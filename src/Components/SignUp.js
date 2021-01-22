import React from 'react';
import UserService from '../Service/UserService';
import Navbar from '../Navbars/Navbar';

class SignUp extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            email: '',
            name: '',
            role: 'User',
            address : '',
            contact : '',
            password: ''
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeAddressHandler = this.changeAddressHandler.bind(this);
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

    save = (e) => {
        e.preventDefault();
        let user = {
                            name: this.state.name,
                            email: this.state.email,
                            contact: this.state.contact,
                            address : this.state.address,
                            role : 'User',
                            password : this.state.password
                        };
        console.log('user => ' + JSON.stringify(user));
    
        UserService.createUser(user).then( (res) =>{
                alert("Registration Successfull.... You Can login now....");
                this.props.history.push('/login');
        })
        .catch( (error) => {
            alert("Registration Failed.. Have You Registered Allready?");
        });
        
    }
    cancel(){
        this.props.history.push('/signUp');
    }
    render()
    {
        return(
            <div className="bgSignUp">
                <Navbar/>
            <div className="container">
                <form className="form2 mb-3">
                
                <h1>Registration</h1>
                <br></br>
                <div className="form-group">
                    <label>Email address:</label>
                    <input type="email" className="form-control" name="email" placeholder="Enter email" 
                    value={this.state.email} onChange={this.changeEmailHandler} required={true}/>
                </div>
                <div className="form-group">
                    <label >Name:</label>
                    <input className="form-control" placeholder="Enter Name" name="name"
                    value={this.state.name} onChange={this.changeNameHandler} required/>
                </div>
                <div className="form-group">
                    <label >Mobile Number:</label>
                    <input className="form-control" placeholder="Enter Mobile" name="contact"
                    value={this.state.contact} onChange={this.changeContactHandler} required/>
                </div>
                <div className="form-group">
                    <label >Address:</label>
                    <input className="form-control" placeholder="Enter Address" name="address"
                    value={this.state.address} onChange={this.changeAddressHandler}/>
                </div>
                <div className="form-group">
                    <label >Password:</label>
                    <input type="password" className="form-control" placeholder="Enter password" name="password"
                    value={this.state.password} onChange={this.changePasswordHandler} required/>
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
export default SignUp;