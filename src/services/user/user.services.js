const userData = require('./../../../users.json');
const fs = require('fs').promises;

function getAllData() {
    if (userData) {
        if (userData.length > 0) {
            const baseResponse = {
                code : 200,
                message : 'OK - Request has succeeded',
                data : userData
            };
            return baseResponse;
        } else {
            const baseResponse = {
                code : 204,
                message : 'No Content - Request has succeeded',
                data : userData
            };
            return baseResponse;
        }
    } else {
        throw new Error(`Internal Server Error`);
    }
}
async function createData(resBody) {
    // VALIDASI resBody
    if (resBody.name === undefined || resBody.name === '' ||
       resBody.username === undefined || resBody.username === '' ||
       resBody.age === undefined || resBody.age === 0 ||
       resBody.position === undefined || resBody.position === '') 
    {
        Error.statusCode = 400;
        throw new Error('Bad Request - Please Check Your Input');
    }
    // Grouping new data user with id,the id start from one
    const newUserData = {id : 1,...resBody};

    //Auto Increment Id,if userData is null,so user id will be 1
    //otherwise,we will find the last element array
    //accessing the object and get id
    //increment by 1
    if (userData.length > 0) {
        newUserData.id = userData[userData.length - 1].id + 1;
    }
    userData.push(newUserData);
    try {
        await fs.writeFile('users.json',JSON.stringify(userData,null,4));
        const baseResponse = {
            code : 201,
            message : 'Created -  request has succeeded and a new resource has been created as a result',
            data : newUserData
        };
        return baseResponse;
    } catch(err) {
        console.log(err);
    }
}

module.exports = {
    getAllData,
    createData
}