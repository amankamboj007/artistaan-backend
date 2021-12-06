const sendResponse = (res, statusCode, message, data) => {
    try {
        let resp = {
            data: statusCode === 200 ? data : { error: JSON.stringify(data) },
            message: message,
            statusCode: statusCode,
            time: Date.now()
        }

        res.status(statusCode).json(resp);
    }
    catch (err) {
        console.log(err);
    }
}

module.exports = {
    sendResponse
}