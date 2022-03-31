let userData = require('./../../../users.json');
const userValidator = require('../../validators/user.validator');
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
async function createData(reqBody) {
    // VALIDASI reqBody
    userValidator.createNewData(reqBody);
    const idForNewData = userData.length + 1;
    // Grouping new data user with id,the id start from 1
    const newUserData = {id : idForNewData,...reqBody};
    if (userData.length > 0) {
        newUserData.id = userData[userData.length - 1].id + 1;
    }
    userData.push(newUserData);
    try {
        await fs.writeFile('users.json',JSON.stringify(userData,null,4));
        const baseResponse = {
            code : 201,
            message : 'Created -  request has succeeded and a new resource has been created as a result',
            data : newUserData.id
        };
        return baseResponse;
    } catch(err) {
        console.log(err);
    }
}
async function updateData({userId},reqBody) {
    // Find user index in the user data array
    const userIndex = userValidator.findUser(userData,userId);
    // validate befor updating data
    userValidator.checkBeforeUpdate(reqBody);
    userData[userIndex] = {...userData[userIndex],...reqBody};
    try {
        await fs.writeFile('users.json',JSON.stringify(userData,null,4));
        const baseResponse = {
            code : 200,
            message : 'OK -  Data has been updated',
            data : userData[userIndex].id
        };
        return baseResponse;
    } catch(err) {
        console.log(err);
    }
}
async function deleteData({userId}) {
    userValidator.findUser(userData,userId);
    userData = userData.filter((elm) => elm.id !== Number(userId));
    try {
        await fs.writeFile('users.json',JSON.stringify(userData,null,4));
        const baseResponse = {
            code : 200,
            message : 'OK -  Data has been deleted',
            data : userId
        };
        return baseResponse;
    } catch(err) {
        console.log(err);
    }
}
function getById({userId}) {
    const userIndex = userValidator.findUser(userData,userId);
    const baseResponse = {
        code : 200,
        message : 'OK - Request has succeeded',
        data : userData[userIndex]
    };

    return baseResponse;

}
module.exports = {
    getAllData,
    createData,
    updateData,
    deleteData,
    getById
}