let mongoose = require('mongoose')
let Schema = mongoose.Schema

let goodsSchema = new Schema({
  "productId":String,
  "productName":String,
  "salePrice": Number,
  "checked":String,
  "productNum":Number,
  "productImage":String
})

module.exports = mongoose.model('Good', goodsSchema)
