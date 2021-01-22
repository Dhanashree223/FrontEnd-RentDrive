import React from 'react';
import UserService from '../Service/UserService';
import Navbar from '../Navbars/Navbar';

class ForgetPassword extends React.Component{

    constructor(props) {
        super(props)

        this.state = {
            email: localStorage.getItem("email"),
            password: '',
            user : {}
        }
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.validate = this.validate.bind(this);
        this.back = this.back.bind(this);
    }
    
    changePasswordHandler= (event) => {
        this.setState({password: event.target.value});
    }

    validate = (e) =>
    {
        e.preventDefault();
        this.setState({email : localStorage.getItem("email")});
        UserService.getUserByEmail(this.state.email).then( (res) =>{
            if(res.status===200)
            {
                this.setState({ user: res.data});
            }
        });
        //console.log("User=>"+JSON.stringify(this.state.user));
        let user = {
                        uid : this.state.user.uid,
                        name: this.state.user.name,
                        email: this.state.user.email,
                        contact: this.state.user.contact,
                        address : this.state.user.address,
                        role : 'User',
                        password : this.state.password

        };
        console.log(this.state.user.uid);
        UserService.updateUser(this.state.user.uid, user).then( (res) =>{ 
            alert("Password Changed Successfully....")
            this.props.history.push('/login');
        })
        .catch( (error) => {
            console.log("Operation Failed");
            alert("Operation Failed");
        });
    }

    back(){
        this.props.history.push("/forgetPassword");
    }

    render()
    {
        return(
            <div>
                <Navbar/>
            <div className="bgLogin">
            <form className="form1">
                <h2>New Password</h2>
                <br></br>
                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" className="form-control" placeholder="Enter password" 
                    value={this.state.password} onChange={this.changePasswordHandler}/>
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.validate}>Submit</button>
                <button className="btn btn-danger ml-3"  onClick={() => this.back()}>Back</button>
            </form>
            </div>
            </div>
        );
    }
}
export default ForgetPassword;