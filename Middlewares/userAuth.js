// const jwt = require('jsonwebtoken');

//  const VerifyToken=(req, res, next)=> {
//     const bearerHeader = req.headers['authorization'];
//     const token = bearerHeader.split('')[1]
//     // console.log(bearer[1])
//     // req.token = bearer[1]
//     if(token==null){
//         return res.sendStatus(401).send({message:"unauthorized access"})
//     }
//     jwt.verify(token, secretkey, (err,authData) => {
//         console.log(authData)
//         if (err) {
//             res.json({ result: err })
//         }
//         else {
//             req.user=authData
//             next();
//         }

//     })
// }
// module.exports = {VerifyToken}