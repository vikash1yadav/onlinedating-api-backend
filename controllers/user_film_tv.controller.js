const models = require('../models')
const { user_film_tv } = models;

const UserFilmTv = (req, res, next) => {
    user_film_tv.create(req.body).then((data) => {
        res.send(data)
        console.log(data.dataValues)
    }).catch(next)
}
module.exports = { UserFilmTv }