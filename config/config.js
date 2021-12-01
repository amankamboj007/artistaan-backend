require('dotenv').config();

const config = {
    baseUrl: "/api/v1.0",
    port: process.env.PORT || 6969
}

module.exports = config;
