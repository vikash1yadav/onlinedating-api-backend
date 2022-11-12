const models = require('../models')
const {user_pet} = models;

const UserPets = (req,res,next)=>{
    user_pet.create(req.body).then((data)=>{
    res.send(data)
    console.log(data.dataValues)
}).catch(next)
}
module.exports = {UserPets}