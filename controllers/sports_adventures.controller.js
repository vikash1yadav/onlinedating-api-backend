const models = require('../models')
const { sports_adventures, users } = models;

const setSportsAdevnture = (req, res, next) => {
    sports_adventures.create(req.body).then((data) => {
        res.send(data)
        console.log(data.dataValues)
    }).catch(next)
}


const getSportsAdevnture = async (req, res) => {
    try {
        const data = await sports_adventures.findAll({
            attributes: ['sport_adventure'],
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


module.exports = { setSportsAdevnture, getSportsAdevnture }