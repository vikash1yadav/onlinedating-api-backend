const models = require('../models')
const {user_food}=models;

const Userfoods = (req,res,next)=>{
user_food.create(req.body).then((data)=>{
    res.send(data)
    console.log(data.dataValues)
}).catch(next)
}
module.exports = {Userfoods}