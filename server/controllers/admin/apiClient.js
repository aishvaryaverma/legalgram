const config = require('config');
const { ErrorHandler } = require('../../shared/error');
const axios = require('axios');

const server = config.get('server');
const axiosInstance = axios.create({
    baseURL: `http://${server.hostname}:${server.port}/api`
});

// Add a response interceptor
axiosInstance.interceptors.response.use((res) => {
    return Promise.resolve(res.data);
}, 
(error) => { //console.log(error);
    const { errorMsg, inputErrors } = error.response.data;
    const err = new ErrorHandler(error.response.status, errorMsg, inputErrors);
    return Promise.reject(err);
});

module.exports = axiosInstance;