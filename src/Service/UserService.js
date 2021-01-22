import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8083/user";

class UserService {

    getVehicles(){
        return axios.get(USER_API_BASE_URL + '/getAllVehicles');
    }

    getVehiclesByBrand(brand){
        return axios.get(USER_API_BASE_URL + '/vehicleByBrand/'+ brand);
    }

    getVehiclesByType(type){
        return axios.get(USER_API_BASE_URL + '/vehicleByType/'+ type);
    }

    createUser(user){
        return axios.post(USER_API_BASE_URL + '/newUser', user);
    }

    login(login){
        return axios.post(USER_API_BASE_URL + '/login' , login);
    }

    getUser(userId){
        return axios.get(USER_API_BASE_URL + '/getUser/' + userId);
    }

    getUserByEmail(email){
        return axios.get(USER_API_BASE_URL + '/getUserByEmail/' + email);
    }

    updateUser(userId, user){
        return axios.put(USER_API_BASE_URL + '/updateUser/' + userId, user);
    }

    getVehicle(vehicleId){
        return axios.get(USER_API_BASE_URL + '/getVehicle/' + vehicleId);
    }

    getbooking(userId){
        return axios.get(USER_API_BASE_URL + '/getBooking/' + userId);
    }


    bookVehicle(booking){
        return axios.post(USER_API_BASE_URL + '/bookVehicle' , booking);
    }

    addEnquiry(enquiry){
        return axios.post(USER_API_BASE_URL + '/addEnquiry' , enquiry);
    }
}

export default new UserService()