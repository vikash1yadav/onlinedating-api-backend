const models = require('../models')
const { foods, users } = models;

const setFoods = (req, res, next) => {
  foods.create(req.body).then((data) => {
    res.send(data)
    console.log(data.dataValues)
  }).catch(next)
}

const getFoods = async (req, res) => {
  try {
    const data = await foods.findAll({
      attributes: ['food'],
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

module.exports = { setFoods, getFoods }