const { ErrorHandler } = require('../../shared/error');
const axios = require('axios');

const axiosInstance = axios.create({
    baseURL: 'http://localhost:1337/api'
});

// Add a response interceptor
axiosInstance.interceptors.response.use((res) => {
    return res.data;
}, (error) => { console.log(error);
    const { errorMsg, inputErrors } = error.response.data;
    const err = new ErrorHandler(error.response.status, errorMsg, inputErrors);
    return Promise.reject(err);
});

module.exports = axiosInstance;