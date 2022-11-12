const models = require('../models')
const { hobbies, users } = models;

const setHobbies = async (req, res, next) => {
    hobbies.create(req.body).then((data) => {
        res.send(data)
        console.log(data.dataValues)
    }).catch(next)
}


const getHobbies = async (req, res) => {
    try {
        const data = await hobbies.findAll({
            attributes: ['hobby'],
            include: [{
                model: users,
                attributes: ["first_name", "id"],
                through: {
                    attributes: [],
                }
            }],
            where: { id: req.params.id }
        })
        return res.send(data)

    } catch (err) {
        return res.send(err.message)
    }

}

module.exports = { setHobbies, getHobbies }