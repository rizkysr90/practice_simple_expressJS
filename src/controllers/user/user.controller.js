const userService = require('../../services/user/user.services');

function get(req, res, next) {
    try {
        const result = userService.getAllData();
        res.json(result);
    } catch(err) {
        console.log('apsdj;asdjlasdja');
        next(err);
    }
}
async function create(req,res,next) {
    try {
        const result = await userService.createData(req.body);
        if (result) res.json(result);
        throw new Error('Internal Server Error');
    } catch(err) {
        next(err);
    }
}

module.exports = {
    get,
    create
}