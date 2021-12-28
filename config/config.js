require('dotenv').config();

const config = {
    baseUrl: "/api/v1.0",
    port: process.env.PORT || 6969,
    mongo_url: process.env.MONGO_URL,
    saltRound: process.env.SALT,
    jwt: {
        secret: process.env.JWT_SECRET,
        option: { expiresIn: 86400 }
    }
}

module.exports = config;
