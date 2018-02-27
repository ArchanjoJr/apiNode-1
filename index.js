'use strict'

const mongoose = require('mongoose')

const app = require('./app')
const config = require('./config')

mongoose.connect(config.db,(err, res)=>{
  if(err) throw console.log(`error: ${err}`)
  console.log('conected')

  app.listen(config.port, ()=>{
    console.log(`api rest em localhost:${config.port}`);
  })

})
