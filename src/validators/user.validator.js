function createNewData(reqBody) {
    const err = new Error();
    err.statusCode = 400;
    if (reqBody.name === undefined || reqBody.name === '') {
        err.message = 'Bad Request - Nama wajib diisi saat menambahkan data';
        throw err;
    } else if (reqBody.username === undefined || reqBody.username === '') {
        err.message = 'Bad Request - Username wajib diisi saat menambahkan data';
        throw err;
    } else if (reqBody.age === undefined || reqBody.age < 0) {
        err.message = 'Bad Request - Umur wajib diisi saat menambahkan data';
        throw err;
    } else if (reqBody.position === undefined || reqBody.position === '') {
        err.message = 'Bad Request - Posisi Pekerjaan wajib diisi saat menambahkan data';
        throw err;
    }
}
function findUser(ArrUserData,user_id_request) {
    for (let i = 0; i < ArrUserData.length; i++) {
        if (ArrUserData[i].id === Number(user_id_request)) {
            return i;
        }
    }
    const err = new Error();
    err.statusCode = 404;
    err.message = 'Not Found - Server cannot find the user'
    throw err;
}
function checkBeforeUpdate(reqBody) {
    const err = new Error();
    err.statusCode = 400;
    if (reqBody.name !== undefined && reqBody.name === '') {
        err.message = 'Bad Request - Nama wajib diisi saat menambahkan data';
        throw err;
    } else if (reqBody.username !== undefined && reqBody.username === '') {
        err.message = 'Bad Request - Username wajib diisi saat menambahkan data';
        throw err;
    } else if (reqBody.age !== undefined && reqBody.age < 0) {
        err.message = 'Bad Request - Umur wajib diisi saat menambahkan data';
        throw err;
    } else if (reqBody.position !== undefined && reqBody.position === '') {
        err.message = 'Bad Request - Posisi wajib diisi saat menambahkan data';
        throw err;
    }
    return true;
}
module.exports = {
    createNewData,
    findUser,
    checkBeforeUpdate
}