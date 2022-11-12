const models = require('../models')
const { films_tv, users } = models;

const setFilmsTv = (req, res, next) => {
  films_tv.create(req.body).then((data) => {
    res.send(data)
    console.log(data.dataValues)
  }).catch(next)
}

const getFilmsTv = async (req, res) => {
  try {
    const data = await films_tv.findAll({
      attributes: ['film_tv'],
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

module.exports = { setFilmsTv, getFilmsTv }