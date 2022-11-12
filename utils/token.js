const jwt = require('jsonwebtoken');
const secretkey = process.env.SECRET_KEY

const createJwtToken = (userid) => {

    const jwtPayload = {
        user: {
            id: userid
        }
    }

    return jwt.sign(jwtPayload, secretkey, { expiresIn: '1h' });
}

module.exports = createJwtToken;