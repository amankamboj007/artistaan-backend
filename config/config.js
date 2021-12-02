require('dotenv').config();

const config = {
    baseUrl: "/api/v1.0",
    port: process.env.PORT || 6969,
    mongo_url:process.env.MONGO_URL  
}

module.exports = config;
