import axios from 'axios';

const setAuthToken = token => {
    if(token) {
        // Adding header type for HTTP Request
        axios.defaults.headers.common['Authorization'] = token;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
};

export default setAuthToken
