import axios from 'axios';

const token = localStorage.getItem('token');

const headers = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+localStorage.getItem('token')
    }
};
const burl = "http://localhost:8080";


export default{
    update_firstname: function(value){
        return axios.post(
            burl + "/customers/firstname", 
            {
                userId: localStorage.getItem('userId'),
                firstname: value
            },
            headers
        )
    },
    update_lastname: function(value){
        return axios.post(
            burl + "/customers/lastname", 
            {
                userId: localStorage.getItem('userId'),
                lastname: value
            },
            headers
        )
    },
    update_phone_number: function(value){
        return axios.post(
            burl + "/customers/phone_number", 
            {
                userId: localStorage.getItem('userId'),
                phone_number: value
            },
            headers
        )
    },
    update_email: function(value){
        return axios.post(
            burl + "/customers/email", 
            {
                userId: localStorage.getItem('userId'),
                email: value
            },
            headers
        )
    }
}