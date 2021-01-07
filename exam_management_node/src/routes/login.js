const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const Userinfo = require('../models/userinfo')
router.post('/login', function (req, res) {
    //1.先检查是否存在该用户,检查数据库
    //console.log(req.body.form);
    var data = JSON.parse(req.body.form);
    //console.log(req.body);
    //const project = await Userinfo.findOne({ where: { title: 'My Title' } });
   
   (async()=>{
     var userinfos =await Userinfo.findOne({
        where: {
            name: data.name,
            id_card: data.id_card,
        }
    });
    console.log('userinfos:'+userinfos);
   
    if (userinfos!=null) {
        //2.生成token
        let token = jwt.sign(data, 'zzj', {
            expiresIn: 24*60 * 60
        })
        //console.log(token)

        //3.在res头部设置一个token作为返回值
        res.set("Access-Control-Expose-Headers", "token");
        res.set('token', token);
        res.send({
            message: 'login success',
            code: 200,
        })
    } else {
        res.send({
            message: '此用户不存在',
            code: 502,
        })
    }
   })();



    //4.验证token在入口文件最前面做一个中间件
    // jwt.verify(token, 'zzj', function (err, data) {
    //     if (err) console.log(err)
    //     console.log('解析的数据', data)
    // })
})


module.exports = router