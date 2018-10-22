let express = require('express')
let router = express.Router()
let mongoose = require('mongoose')
let goods = require('./../models/goods')
let User = require('./../models/users')


mongoose.connect('mongodb://127.0.0.1:27017/demo')


mongoose.connection.on("connected", function () {
  console.log("MongoDB connected success");
})

mongoose.connection.on('error', function () {
  console.log("MongoDB connected fail");
})

mongoose.connection.on('disconnected', function () {
  console.log("MongDB connected disconnected");
})

router.get('/list', function (req, res, next) {
  let sort = parseInt(req.query.sort)
  let page = parseInt(req.query.page)
  let pageSize = parseInt(req.query.pageSize)
  let priceLevel = req.query.priceLevel
  console.log(sort, page, pageSize, priceLevel);
  let skip = (page - 1) * pageSize
  let priceGr =''
  let priceLte = ''
  let params = {}
  if (priceLevel != 'all') {
    switch(priceLevel) {
      case '0':
        priceGt = 0
        priceLte = 100
        break;
      case '1':
        priceGt = 100
        priceLte = 500
        break;
      case '2':
        priceGt = 500
        priceLte = 1000
        break;
      case '3':
        priceGt = 1000
        priceLte = 5000
        break;
    }
    params = {
      salePrice: {
        $gt: priceGt,
        $lte: priceLte
      }
    }
  }


  let goodsModel = goods.find(params).skip(skip).limit(pageSize)
  goodsModel.sort({'salePrice':sort})
  goodsModel.exec(function (err, doc) {
    if (err) {
      res.json({
        status: '1',
        msg: err.message
      })
      res.send(err.message)
    } else {
      res.json({
        status: '0',
        msg:'',
        result: {
          count: doc.length,
          list: doc
        }
      })
    }
  })
})

router.post('/addcart', function(req, res, next) {
  let userId = '100000077'
  let productId = req.body.productId
  User.findOne({
    userId
  }, function (err, userdoc) {
    if (err) {
      res.json({
        status: '1',
        msg: err.message
      })
    } else {
      if (userdoc) {
        let goodItem = ''
        userdoc.cartList.forEach((item) => {
          if (item.productId == productId) {
            goodItem = item
            item.productNum ++
          }
        })
        if (goodItem) {
          userdoc.save(function (err1, doc1) {
            if (err1) {
              res.json({
                status: '1',
                msg: err1.message
              })
            } else {
              res.json({
                status:'0',
                msg: '',
                result: 'suc'
              })
            }
          })
        } else {
          goods.findOne({
            productId
          },function (err, doc) {
            doc.productNum = 1
            doc.checked = 1
            if (err) {
              res.json({
                status: '1',
                msg: err.message
              })
            } else {
              if (doc) {
                console.log(doc);
                userdoc.cartList.push(doc)
                userdoc.save(function (err2, doc1) {
                  if (err2) {
                    res.json({
                      status: '1',
                      msg: err2.message
                    })
                  } else {
                    res.json({
                      status:'0',
                      msg: '',
                      result: 'suc'
                    })
                  }
                })
              }
            }
          })
        }

      }
    }
  })
})


module.exports = router
