import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import AdminLogin from './Components/AdminLogin';
import Logout from './Components/Logout';
import Home from './Components/Home';
import NotFound from './Components/NotFound';
import GetVehicles from './Components/getVehicles';
import GetVehiclesByBrand from './Components/getVehiclesByBrand';
import GetVehiclesByType from './Components/getVehiclesByType';
import UserFunctions from './Components/UserFunctions';
import ViewVehicle from './Components/ViewVehicle';
import BookVehicle from './Components/BookVehicle';
import GetBooking from './Components/GetBooking';
import UpdateUser from './Components/UpdateUser';
import AdminFunctions from './Components/AdminFunctions';
import OurVehicles from './Components/OurVehicles';
import SaveVehicle from './Components/SaveVehicle';
import TestImage from './Components/extra';
import ForgetPassword from './Components/ForgetPassword';
import ConfirmNewPassword from './Components/ConfirmNewPassword';
import GetAllBookings from './Components/GetAllBookings';

function App() {
  return (
    <Router>
   
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/testImage' component={TestImage}/>
      <Route exact path='/ourVehicles' component={OurVehicles}/>
      <Route exact path="/signUp" component={SignUp}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/forgetPassword" component={ForgetPassword}/>
      <Route exact path="/confirmPassword" component={ConfirmNewPassword}/>
      <Route exact path="/adminLogin" component={AdminLogin}/>
      <Route exact path="/adminFunctions" component={AdminFunctions}/>
      <Route exact path="/Logout" component={Logout}/>
      <Route exact path="/getVehicles" component={GetVehicles}/>
      <Route exact path = "/vehicleByType/:type" component = {GetVehiclesByType}></Route>
      <Route exact path = "/vehicleByBrand/:brand" component = {GetVehiclesByBrand}></Route>
      <Route exact path = "/userFunctions" component = {UserFunctions}></Route>
      <Route exact path = "/saveVehicle" component = {SaveVehicle}></Route>
      <Route exact path = "/updateUser" component = {UpdateUser}></Route>
      <Route exact path = "/getMyBooking" component = {GetBooking}></Route>
      <Route exact path = "/getAllBooking" component = {GetAllBookings}></Route>
      <Route exact path = "/viewVehicle/:vehicleId" component = {ViewVehicle}></Route>
      <Route exact path = "/bookVehicle/:vehicleId" component = {BookVehicle}></Route>
      <Route component={NotFound}/>
    </Switch>
    </Router>
  );
}
export default App;
