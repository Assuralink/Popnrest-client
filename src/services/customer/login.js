import axios from 'axios';

const headers = {
    "Content-Type": "application/json"
};
const burl = "http://localhost:8080";

export default{
    login: function(email, password){
        return axios.post(
            burl + "/customers/login", 
            {
                email: email,
                password: password
            },
            headers
        )
    }
}