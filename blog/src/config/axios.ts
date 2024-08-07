const axios = require('axios');

module.exports = () => {
    const options = {
        baseURL: process.env.BASE_API_URL,
        timeout: 1000,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `bearer ${process.env.STRAPI_API_TOKEN}`,
        },
    };
    const instance = axios.create(options);
    return instance;
};