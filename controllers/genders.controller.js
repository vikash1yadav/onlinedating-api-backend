const models = require('../models')
const {genders}=models;

const setGenders = (req,res,next)=>{
    genders.create(req.body).then((data)=>{
        res.send(data)
        console.log(data.dataValues)
    }).catch(next)
    }

    const getGenders = async(req,res)=>{
        try{
            const data = await genders.findAll()
        return res.send(data)
        }
        catch (err){
            return res.send(err.message)
        }
    }

module.exports = {setGenders,getGenders}