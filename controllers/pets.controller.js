const models = require('../models')
const { pets, users } = models;

const setPets = (req, res, next) => {
  pets.create(req.body).then((data) => {
    res.send(data)
    console.log(data.dataValues)
  }).catch(next)
}


const getPets = async (req, res) => {
  try {
    const data = await pets.findAll({
      attributes: ['pet'],
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


module.exports = { setPets, getPets }