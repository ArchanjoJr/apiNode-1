'use strict'

const express = require('express')
const api = express.Router()
const auth = require('../middlewares/auth')
const productController = require('../controllers/product')
const authController = require('../controllers/auth')
const userController = require('../controllers/user')


api.get('/product', auth, productController.getProducts)
api.get('/product/:productId', auth, productController.getProduct)
api.post('/product', productController.saveProduct)
api.put('/product/:productId', productController.updateProduct)
api.delete('/product/:productId', productController.deleteProduct)

api.post('/signup', authController.signUp)
api.post('/signin', authController.signIn)

api.get('/user', userController.getUsers)
api.get('/user/:userId', userController.getUser)
api.get('/private', auth, (req, res)=>{
  res.status(200).send({message: "Access granted"})
})

module.exports = api
