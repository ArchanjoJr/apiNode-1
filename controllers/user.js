'use strict'

const User = require('../models/user.js')


function getUser(req, res){
  let userId = req.params.userId
  User.findById(userId, (err, user)=>{
    if(err) return res.status(500).send({message: `Error de busca ${err}`})
    if(!user) return res.status(404).send({message: 'users does not exist'})

    res.status(200).send({user})
  })
}
function getUsers(req, res){
  User.find({}, (err, users)=>{
    if(err) return res.status(500).send({message: `Error de busca ${err}`})
    if(!users) return res.status(404).send({message: 'Does not exist produts'})
    res.status(200).send({users})
  })
}

module.exports = {
  getUser,
  getUsers
}
