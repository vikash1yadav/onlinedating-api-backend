const models = require('../models')
const {user_going_out}=models;

const UserGoing = (req,res,next)=>{
    user_going_out.create(req.body).then((data)=>{
    res.send(data)
    console.log(data.dataValues)
}).catch(next)
}
module.exports = {UserGoing}