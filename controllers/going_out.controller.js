const models = require('../models')
const { going_out, users } = models;

const setGoingOut = (req, res, next) => {
  going_out.create(req.body).then((data) => {
    res.send(data)
    console.log(data.dataValues)
  }).catch(next)
}

const getGoingOut = async (req, res) => {
  try {
    const data = await going_out.findAll({
      attributes: ['location'],
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



module.exports = { setGoingOut, getGoingOut }