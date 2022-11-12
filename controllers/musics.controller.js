const models = require('../models')
const { musics, users } = models;

const setMusics = (req, res, next) => {
  musics.create(req.body).then((data) => {
    res.send(data)
    console.log(data.dataValues)
  }).catch(next)
}

const getMusics = async (req, res) => {
  try {
    const data = await musics.findAll({
      attributes: ['music'],
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



module.exports = { setMusics, getMusics }