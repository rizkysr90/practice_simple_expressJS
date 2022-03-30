const userService = require('../../services/user/user.services');

function get(req, res, next) {
    try {
        const result = userService.getAllData();
        res.json(result);
    } catch(err) {
        next(err);
    }
}
async function create(req,res,next) {
    try {
        const result = await userService.createData(req.body);
        res.json(result);
    } catch(err) {
        next(err);
    }
}

module.exports = {
    get,
    create
}