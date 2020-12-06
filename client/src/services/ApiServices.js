import axios from 'axios';

const ApiClient = axios.create({
    baseURL: 'http://localhost:3001/api'
})

export default ApiClient;