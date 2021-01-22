import React from 'react';
import AdminService from '../Service/AdminService';
import Navbar from '../Navbars/Navbar';


class AdminLogin extends React.Component{

    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            user : {}
        }

        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.validate = this.validate.bind(this);
    }
    
    changePasswordHandler= (event) => {
        this.setState({password: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({email: event.target.value});
    }

    validate = (e) =>
    {
        e.preventDefault();
        let login = {
            email: this.state.email,
            password : this.state.password
        };
        console.log('login => ' + JSON.stringify(login));

       
        AdminService.adminLogin(login).then( (res) =>{
            
           if(res.status===200)
            {
                this.setState({ user: res.data});
                localStorage.setItem("token",this.state.user.uid);
                console.log("user=>" + JSON.stringify(this.state.user));
                this.props.history.push('/AdminFunctions');
            }
        })
        .catch( (error) => {
            console.log("Please Enter Correct Email and Password");
            console.log(error.response);
            alert(error.response.data);
        });
    }

    render()
    {
        return(
            <div>
                <Navbar/>
            <form className="container">
                <h2>Admin Login</h2>
                <div className="form-group">
                    <label>Email address:</label>
                    <input type="email" className="form-control" placeholder="Enter email" 
                    value={this.state.email} onChange={this.changeEmailHandler}/>
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" className="form-control" placeholder="Enter password" 
                    value={this.state.password} onChange={this.changePasswordHandler}/>
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.validate}>Submit</button>
                <button type="reset" className="btn btn-danger ml-3" >Cancel</button>
            </form>
            </div>
        );
    }
}
export default AdminLogin;