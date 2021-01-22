import React from 'react';
import UserService from '../Service/UserService';
import Navbar from '../Navbars/Navbar';

class ForgetPassword extends React.Component{

    constructor(props) {
        super(props)

        this.state = {
            email: '',
            contact:'',
            password: '',
            user : {}
        }

        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeContactHandler = this.changeContactHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.validate = this.validate.bind(this);
    }
    
    changePasswordHandler= (event) => {
        this.setState({password: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({email: event.target.value});
    }

    changeContactHandler= (event) => {
        this.setState({contact: event.target.value});
    }

    validate = (e) =>
    {
        e.preventDefault();
        
        UserService.getUserByEmail(this.state.email).then( (res) =>{
           if(res.status===200)
            {
                this.setState({ user: res.data});
                if(this.state.user.contact===this.state.contact)
                {
                    localStorage.setItem("email",this.state.user.email);
                    this.props.history.push('/confirmPassword');
                }
                else
                {
                    alert("Please Enter Registered Contact");
                }
            }
        })
        .catch( (error) => {
            console.log("Please Enter Correct Email");
            alert("Please Enter Registered Email");
        });
    }

    back(){
        this.props.history.push("/login");
    }

    render()
    {
        return(
            <div>
                <Navbar/>
            <div className="bgLogin">
            <form className="form1">
                <h2>Change Password</h2>
                <br></br>
                <div className="form-group">
                    <label>Registered Email address:</label>
                    <input type="email" className="form-control" placeholder="Enter email" 
                    value={this.state.email} onChange={this.changeEmailHandler}/>
                </div>
                <div className="form-group">
                    <label>Registered Contact:</label>
                    <input className="form-control" placeholder="Enter Contact" 
                    value={this.state.contact} onChange={this.changeContactHandler}/>
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.validate}>Submit</button>
                <button className="btn btn-danger ml-3" onClick={() => this.back()}>Back</button>
            </form>
            </div>
            </div>
        );
    }
}
export default ForgetPassword;