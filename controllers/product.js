'use strict'

const Product = require('../models/product.js')


function getProduct(req, res){
  let productId = req.params.productId
  Product.findById(productId, (err, product)=>{
    if(err) return res.status(500).send({message: `Error de busca ${err}`})
    if(!product) return res.status(404).send({message: 'product does not exist'})

    res.status(200).send({product})
  })
}
function getProducts(req, res){
  Product.find({}, (err, products)=>{
    if(err) return res.status(500).send({message: `Error de busca ${err}`})
    if(!products) return res.status(404).send({message: 'Does not exist produts'})
    res.status(200).send({products})
  })
}
function saveProduct(req, res){
  let product = new Product()
  product.name = req.body.name
  product.picture = req.body.picture
  product.price = req.body.price
  product.category = req.body.category
  product.description = req.body.description

  product.save((err, productStored) =>{
    if (err) res.status(500).send({message:`erro ao salvar ${err}`})

    res.status(200).send({product: productStored})
  })
}
function updateProduct(req, res) {
  let productId = req.params.productId
  let update = req.body

  Product.findByIdAndUpdate(productId, update, (err, productUpdated)=>{
    if(err) return res.status(500).send({message: `Error ao atualizar ${err}`})

    res.status(200).send({product: productUpdated})
  })
}
function deleteProduct(req,res){
  let productId = req.params.productId

  Product.findById(productId, (err, product)=>{
    if(err) return res.status(500).send({message: `Error ao deletar ${err}`})
    if(!product) return res.status(404).send({message: 'product does not exist'})

    product.remove(err =>{
      if (err) res.status(500).send({message:`erro ao deletar ${err}`})
      res.status(200).send({message: 'produto apagado'})
    })
  })
}

module.exports = {
  getProduct,
  getProducts,
  saveProduct,
  updateProduct,
  deleteProduct
}
