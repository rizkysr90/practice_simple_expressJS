const userService = require('../../services/user/user.services');

function get(req, res, next) {
    const result = userService.getAllData();
    if (result) {
        res.status(result.code).json(result);
    } else {
        next();
    }
}
async function create(req,res,next) {
    try {
        const result = await userService.createData(req.body);
        if (result) {
            res.status(result.code).json(result);
        } else {
            throw new Error('Internal Server Error');
        }
    } catch(err) {
        next(err);
    }
}

async function update(req,res,next) {
    try {
        const result = await userService.updateData(req.params,req.body);
        if (result) {
            res.status(result.code).json(result);
        } else {
            throw new Error('Internal Server Error');
        }
    } catch(err) {
        next(err);
    }
}
async function deleteData(req,res,next) {
    try {
        const result = await userService.deleteData(req.params);
        if (result) {
            res.status(result.code).json(result);
        } else {
            throw new Error('Internal Server Error');
        }
    } catch (err) {
        next(err);
    }
}
function getById(req, res, next) {
    const result = userService.getById(req.params);
    if (result) {
        res.status(result.code).json(result);
    } else {
        next();
    }
}
module.exports = {
    get,
    create,
    update,
    deleteData,
    getById
}