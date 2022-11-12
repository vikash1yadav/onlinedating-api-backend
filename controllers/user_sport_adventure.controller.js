const models = require('../models')
const { user_sports_adventures } = models;

const UserSports = (req, res, next) => {
    user_sports_adventures.create(req.body).then((data) => {
        res.send(data)
        console.log(data.dataValues)
    }).catch(next)
}
module.exports = { UserSports }