let mongoose = require('mongoose')

let userSchema = mongoose.Schema({
  "userId": String,
  "userName": String,
  "userPwd": String,
  "orderList": Array,
  "cartList": [
    {
      "productId":String,
      "productName":String,
      "salePrice":String,
      "productImage":String,
      "checked":String,
      "productNum":String
    }
  ],
  "addressList":[
    {
      "addressId" : String,
      "userName" : String,
      "streetName" : String,
      "postCode" : Number,
      "tel" : Number,
      "isDefault" : Boolean
    }
  ]
})

module.exports = mongoose.model('User', userSchema)


// [
//     {
//       "orderId":String,
//       "orderTotal":Number,
//       "addressInfo":[
//         {
//            "addressId" : String,
//             "userName" : String,
//             "streetName" : String,
//             "postCode" : Number,
//             "tel" : Number,
//             "isDefault" : Boolean
//         }
//       ],
//       "goodsList":[
//         {
//            "productImage" : String,
//             "salePrice" : String,
//             "productName" : String,
//             "productId" : String,
//             "_id" : Function,
//             "productNum" : String,
//             "checked" : String
//         }
//       ],
//       "orderStatus":String,
//       "createDate":String
//     }
//   ]
