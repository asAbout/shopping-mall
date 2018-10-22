let express = require('express');
let router = express.Router();
let User = require('./../models/users')
require('./../util/util')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

function error(res, message) {
  res.json({
    status: '1',
    msg: message,
    result: ''
  })
}

function success(res, suc) {
  res.json({
    status: '0',
    msg: '',
    result:suc || ''
  })
}
// 登陆
router.post('/login', function (req, res, next) {
  let param = {
    userName : req.body.userName,
    userPwd: req.body.userPwd
  }
  User.findOne(param, function (err, doc) {
    if (err) {
      let errMessage = err.message
      error(res, errMessage)
    } else {
      if (doc) {
        res.cookie("userId", doc.userId,{
          path: '/',
          maxAge: 1000*60*60
        })
        res.cookie("userName", doc.userName,{
          path: '/',
          maxAge: 1000*60*60
        })
        let user = {
          userName: doc.userName
        }
        success(res, user)
      } else {
        let message = '账号或密码错误'
        error(res, message)
      }
    }
  })
})

// 登出
router.post('/logout', function (req, res, next) {
  res.cookie("userId", "",{
    path: '/',
    maxAge: -1
  })
  success(res)
})

// 登陆拦截

router.get('/checkLogin', function (req, res, next) {
  if (req.cookies.userId) {
    let userName = req.cookies.userName
    success(res, userName)
  } else {
    let message = '未登录'
    error(res, message)
  }
})

// 查询商品数量
router.get('/goodsCount', (req, res, next) => {
  let userId = req.cookies.userId
  User.findOne({
    userId
  }, (err, doc) => {
    if (err) {
      let message = err.message
      error(res, message)
    } else {
      if (doc) {
        let number = 0
        doc.cartList.forEach((item) => {
          number += parseInt(item.productNum)
        })
        let list = {
          goodsNum: number
        }
        success(res, list)
      }
    }
  })
})

// 购物车列表
router.get('/cartList', function (req, res, next) {
  let userId = req.cookies.userId
  User.findOne({userId}, (err, doc) => {
    if (err) {
      res.json({
        status: '1',
        msg: err.message,
        result: '未成功'
      })
    } else {
      if (doc) {
        let list = doc.cartList
        success(res, list)
      }
    }
  })
})

// 购物车删除商品
router.post('/cartDel', function (req, res, next) {
  let userId = req.cookies.userId
  let productId = req.body.productId
  console.log(userId, productId);
  User.update({
    userId
  },{
    $pull:{
      'cartList': {
        'productId':productId
      }
    }
  }, function (err, doc) {
    if (err) {
      let errMessage = err.message
      error(res, errMessage)
    } else {
      success(res, doc)
    }
  })
})

// 商品编辑
router.post('/cartEdit', (req, res, next) => {
  let userId = req.cookies.userId,
      productId = req.body.productId,
      checked = req.body.checked,
      productNum = req.body.productNum
      console.log(userId, productId, checked, productNum);
  User.update({
    'userId':userId,
    'cartList.productId':productId
  },{
    'cartList.$.productNum':productNum,
    'cartList.$.checked':checked
  }, (err, doc) => {
    if (err) {
      let errMessage = err.message
      error(res, errMessage)
    } else {
      let suc = 'suc'
      success(res, suc)
    }
  })
})


// 全选
router.post('/checkedAll', (req, res, next) => {
  let userId = req.cookies.userId
  let checkedAllFlag = req.body.checkedAllFlag ? '1':'0'
  console.log(checkedAllFlag);
  User.findOne({
    userId
  }, (err, doc) => {
    if (err) {
      let errMessage = err.message
      error(res, errMessage)
    } else {
      if (doc) {
        doc.cartList.forEach((item, i) => {
          item.checked = checkedAllFlag
        })
        doc.save((err, doc) => {
          if (err) {
            let errMessage = err.message
            error(res, errMessage)
          } else {
           let suc = 'suc'
           success(res, suc)
          }
        })
      }
    }
  })
})


// 地址查询
router.get('/address', function (req, res, next) {
  let userId = req.cookies.userId
  User.findOne({
    userId
  }, (err, doc) => {
    if (err) {
      let errMessage = err.message
      error(res, errMessage)
    } else {
      if (doc) {
        let list = doc.addressList
        success(res, list)
      }
    }
  })
})

// 设置默认地址
router.post('/defaultAddress', function (req, res, next) {
  let userId = req.cookies.userId,
      addressId = req.body.addressId
  if (!addressId) {
    res.json({
      status: '10001',
      msg: 'addressId is no defined',
      result:''
    })
  }
  User.findOne({
    userId
  }, (err, doc) => {
    if (err) {
      let errMessage = err.message
      error(res, errMessage)
    } else {
      if (doc) {
        doc.addressList.forEach((item) => {
          if (item.addressId == addressId) {
            item.isDefault = true
          } else {
            item.isDefault = false
          }
          console.log(item.isDefault);
        })
        doc.save((err1, doc1) => {
          if (err1) {
            let errMessage = err1.message
            error(res, errMessage)
          } else {
            success(res)
          }
        })
      }
    }
  })
})

// 删除地址
router.post('/delAddress', function (req, res, next) {
  let userId = req.cookies.userId
  let addressId = req.body.addressId
  console.log(userId, addressId);
  User.update({
    userId
  },{
    $pull:{
      'addressList': {
        'addressId':addressId
      }
    }
  }, function (err, doc) {
    if (err) {
      let errMessage = err.message
      error(res, errMessage)
    } else {
      let suc = 'suc'
      success(res, suc)
    }
  })
})

router.post('/payment', (req, res, next) => {
  let userId = req.cookies.userId
      orderTotal = req.body.orderTotal,
      addressId = req.body.addressId;
  User.findOne({
    userId
  }, (err, doc) => {
    if (err) {
      let errMessage = err.message
      error(res, errMessage)
    } else {
      if (doc) {
        let address = '',
            item = '',
            goodsList = [],
            platform = '622',
            r1 = Math.floor(Math.random()*10),
            r2 = Math.floor(Math.random()*10),
            sysDate = new Date().Format('yyyyMMddhhmmss'),
            createDate = new Date().Format('yyyy-MM-dd hh:mm:ss');
        orderId = platform + r1 + sysDate + r2
        doc.addressList.forEach((item) => {
          if (item.addressId = addressId) {
            address = item
          }
        })
        doc.cartList.forEach((item) => {
          if (item.checked == '1') {
            goodsList.push(item)
          }
        })
        let order = {
          orderId,
          orderTotal,
          addressInfo: address,
          goodsList,
          orderStatus: '1',
          createDate
        }
        doc.orderList.push(order)
        doc.save((err1, doc1) => {
          if (err1) {
            let errMessage = err1.message
            error(res, errMessage)
          } else {
            if (doc1) {
              let list = {
                orderId
              }
              success(res, list)
            }
          }
        })
      }
    }
  })
})

router.get('/orderSuccess', (req, res, next) => {
  let userId = req.cookies.userId
      orderId = req.query.orderId
  User.findOne({
    userId
  }, (err, doc) => {
    if (err) {
      let errMessage = err.message
      error(res, errMessage)
    } else {
      if (doc) {
        let orderTotal = 0
        doc.orderList.forEach((item) => {
          if (item.orderId = orderId) {
            orderTotal = item.orderTotal
          }
        })
        if (orderTotal > 0) {
          let list = {
            orderId,
            orderTotal
          }
          success(res, list)
        } else {
          let message = '没有此订单'
          error(res, message)
        }
      }
    }
  })
})
module.exports = router;
