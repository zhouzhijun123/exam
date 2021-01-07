const express = require('express')
var router = express.Router()
const Userinfo = require('../models/userinfo')

router.post('/userinfo', function (req, res) {

    console.log(req.body.form)
    Userinfo.create(JSON.parse(req.body.form))
        .then(function (p) {
            res.send({
                message: '注册成功',
                code: 200,
            })
            console.log('created.' + JSON.stringify(p));
        }).catch(function (err) {
            if (err.name == 'SequelizeUniqueConstraintError') {
                res.send({
                    message: '此用户已存在',
                    code: 502,
                })
                console.log('failed: ' + err);

            } else {
                res.send({
                    message: "其他数据库操作错误",
                    code: 503,
                })
            }
        });


})

router.get('/userinfo', function (req, res) {
    console.log(req.query);

    //查询数据
    (async () => {
         var userinfos = await Userinfo.findOne({
            where: {
                name: req.query.name,
                id_card: req.query.id_card,
            }
        });
        console.log(JSON.stringify(userinfos));
        res.send(userinfos)
    })();
    
})

router.post('/userinfoChange',function(req,res){
//     console.log(req.body.form)
//     console.log(JSON.parse(req.body.form));
// //改
  const data=JSON.parse(req.body.form);
  console.log(data);
(async () => {
    
    await Userinfo.update(data, {
        where: {
            name:data.name,
            id_card:data.id_card,
        }
      });
      res.send({
        message:"用户已更新",
        code:200,
    })
    
})();
})
module.exports = router