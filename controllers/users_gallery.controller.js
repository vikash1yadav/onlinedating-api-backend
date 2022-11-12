const models = require('../models')
const { users_gallery } = models;

const setUsersGallery = (req, res, next) => {
    users_gallery.create(req.body).then((data) => {
        res.send(data)
        console.log(data.dataValues)
    }).catch(next)
}

const getUsersGallery = async (req, res) => {
    try {
        const data = await users_gallery.findAll()
        return res.send(data)
    }
    catch (err) {
        return res.send(err.message)
    }
}

module.exports = { setUsersGallery, getUsersGallery }