const models = require('../models');
const { users, pets, hobbies, genders, foods, films_tv, going_out, musics, sports_adventures, users_gallery, user_film_tv, user_food, user_going_out, user_hobby, user_music, user_pet, user_sports_adventures } = models;
const bcrypt = require('bcrypt');
const createJwtToken = require('../utils/token');
const exclude = [];

// To register new user
const signup = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const payload = { ...req.body, password: await bcrypt.hash(req.body.password, salt) }
    user = await users.create(payload);
    const userid = user.id;
    const token = createJwtToken(userid);
    res.status(201).json({ user, token: token })
  } catch (err) {
    switch (err.name) {
      case 'SequelizeUniqueConstraintError':
        return res.send('Email has been already used.');
      default:
        return res.send(err);
    }
  }
}

// for user login
const login = async (req, res) => {
  const payload = req.body;
  try {
    if (!payload.email || !payload.password) {
      return res.status(400).json({ error: "missing credentials" })
    }
    const user = await users.findOne({ where: { email: payload.email } });
    if (!user) return res.send('User does not exist. Please Enter valid email !!');
    if (user) {
      const password_valid = await bcrypt.compare(payload.password, user.password);
      if (password_valid) {
        const userid = user.id;
        const token = createJwtToken(userid);
        res.status(200).json({
          message: "Login successful",
          "id": user.id,
          "email": user.email,
          "firstname": user.firstname,
          // "password": user.password,
          "token": token,
        })
      } else {
        res.status(400).json({ error: "Password Incorrect" });
      }
    } else {
      res.status(404).json({ error: "User does not exist" });
    }

  } catch (err) {
    return res.send(err.message);
  }
}

// update users data
const updateuser = async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const payload = { ...req.body, password: await bcrypt.hash(req.body.password, salt) }
  try {
    const data = await users.update(
      payload,
      { where: { id: req.params.id } },
    )
    return res.send("user updated successfully")
  } catch (err) {
    return res.send(err.message)
  }
}
 
// get users data
const getuser = async (req, res) => {
  try {
    const user = await users.findAll({
      attributes: ['first_name', 'last_name'],
      include: [{
        model: genders,
        attributes: ["gender"],
      }, {
        model: foods,
        attributes: ["food"],
        through: {
          attributes: [],
        }
      },
      {
        model: users_gallery,
        attributes: ["user_id", "file_type"],
      },
      {
        model: musics,
        attributes: ["music"],
        through: {
          attributes: [],
        }
      }
        , {
        model: pets,
        attributes: ["pet"],
        through: {
          attributes: [],
        }
      }
        , {
        model: hobbies,
        attributes: ["hobby"],
        through: {
          attributes: [],
        }
      }
        , {
        model: going_out,
        attributes: ["location"],
        through: {
          attributes: [],
        }
      }
        , {
        model: films_tv,
        attributes: ["film_tv"],
        through: {
          attributes: [],
        }
      }
        , {
        model: sports_adventures,
        attributes: ["sport_adventure"],
        through: {
          attributes: [],
        }
      }],
      where: { id: req.params.id }
    })
    return res.send(user)
  } catch (err) {
    return res.send(err.message)
  }
  //   const attributes = { exclude: ['password', 'updatedAt', ...exclude] }
  //   try {
  //     const user = await users.findByPk(req.params.id, {
  //         attributes
  //     });
  //     return res.send(user)
  // } catch (err) {

  //     return res.send(err.message);
  //  }

}

// delete a user
const deleteUserById = async (req, res) => {
  try {
    const data = await users.destroy({
      where: { id: req.params.id }
    });
    return res.send("user succesfully deleted")
  }
  catch (err) {
    return res.send(err.message)
  }
}

// change users password
const changePassword = async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  try {
    const user = await users.findByPk(req.params.id)
    if (!user) {
      return res.send({ message: "user not exist" })
    }
    const isValid = await bcrypt.compare(req.body.currentPassword, user.password);
    if (!isValid) {
      return res.send({ message: "current pasword wrong" })
    }
    const hashPassword = await bcrypt.hash(req.body.newPassword, salt)
    await user.update({
      password: hashPassword
    })
    res.send({ message: "password updated successfully" })
  } catch (err) {
    return res.send(err.message)
  }

}


module.exports = { signup, login, updateuser, getuser, deleteUserById, changePassword }

