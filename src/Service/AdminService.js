import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8083/admin";

class AdminService {

    getVehicles(){
        return axios.get(USER_API_BASE_URL + '/getAllVehicles');
    }

    getVehiclesByBrand(brand){
        return axios.get(USER_API_BASE_URL + '/vehicleByBrand/'+ brand);
    }

    fetchAllBookings(){
        return axios.get(USER_API_BASE_URL + '/getBookings');
    }

    createVehicle(vehicle){
        return axios.post(USER_API_BASE_URL + '/saveVehicle', vehicle);
    }

    adminLogin(login){
        return axios.post(USER_API_BASE_URL + '/login' , login);
    }

    getUser(userId){
        return axios.get(USER_API_BASE_URL + '/getUserById/' + userId);
    }

    getVehicle(vehicleId){
        return axios.get(USER_API_BASE_URL + '/getVehicle/' + vehicleId);
    }


    bookVehicle(booking){
        return axios.post(USER_API_BASE_URL + '/bookVehicle' , booking);
    }
}

export default new AdminService()