const Message = {
    userAdded: 'User Has Been Added',
    errorInAdding: 'Error In Adding The User',
    userfetched: 'User Has Been Fetched',
    listfetched: 'List Has Been Fetched',
    errorListFetch: 'Error In Listing ',
    userNotExists: 'User Does Not Exists',
    invalidPass: ' Password Is Invalid'
}

const httpStatus = {
    success: 200,
    badrequest: 400,
    unAuthorized: 401,
    notFound: 404,
    internalServer: 500
}


module.exports = {
    Message,
    httpStatus
}