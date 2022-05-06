import axios from 'axios';

const BASE_URL = "http://localhost:5000/api/";
let TOKEN;
try {
    TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken
}
catch(err) {
    console.log(err);
}

export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {
        token: `Bearer ${TOKEN}`
    }
})