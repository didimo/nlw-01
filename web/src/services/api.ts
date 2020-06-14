import axios from 'axios';

const api = axios.create({
    baseURL: 'https://ecoleta2020-backend.herokuapp.com/'
});


export default api;