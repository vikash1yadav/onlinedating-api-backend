const models = require('../models')
const { user_hobby } = models;

const UserHobby = (req, res, next) => {
    user_hobby.create(req.body).then((data) => {
        res.send(data)
        console.log(data.dataValues)
    }).catch(next)
}
module.exports = { UserHobby }