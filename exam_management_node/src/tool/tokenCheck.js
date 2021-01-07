const jwt = require('jsonwebtoken')
const express = require('express')
var router = express.Router()
module.exports = router.use(function (req, res, next) {
  console.log(req.headers.token)
  const token = req.headers.token
  //验证token
  jwt.verify(token, 'zzj', function (err, data) {
    if (err) {
      console.log(err);
      res.send({
        code: 502,
        message: 'token error! 登陆时间已超期'
      })
    } else {
      console.log('解析的数据', data)
      next()
    }
  })

})