const models = require('../models')
const {user_music} = models;

const UserMusic = (req,res,next)=>{
    user_music.create(req.body).then((data)=>{
    res.send(data)
    console.log(data.dataValues)
}).catch(next)
}
module.exports = {UserMusic}