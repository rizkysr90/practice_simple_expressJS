let userData = require('./../../../users.json');
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
    if (resBody.name === undefined || resBody.name === '') {
        Error.statusCode = 400;
        throw new Error('Bad Request - Nama wajib diisi saat menambahkan data');
    }
    if (resBody.username === undefined || resBody.username === '') {
        Error.statusCode = 400;
        throw new Error('Bad Request - Username wajib diisi saat menambahkan data');
    }
    if (resBody.age === undefined || resBody.age === '') {
        Error.statusCode = 400;
        throw new Error('Bad Request - Umur wajib diisi saat menambahkan data');
    }
    if (resBody.position === undefined || resBody.position === '') {
        Error.statusCode = 400;
        throw new Error('Bad Request - Posisi Pekerjaan wajib diisi saat menambahkan data');
    }
    
    // Grouping new data user with id,the id start from 1
    const newUserData = {id : 1,...resBody};

    //Auto Increment for Id,if userData is null (or length = 0),so user id will be 1
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