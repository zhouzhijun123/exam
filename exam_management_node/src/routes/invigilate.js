// 登记报名信息
const express = require('express')
var router = express.Router()
const Invigilate = require('../models/invigilate')
//报名
router.post('/invigilate', function (req, res) {
    //获取信息，存入数据库，返回响应
    
    var data = JSON.parse(req.body.form);
    console.log(data);
    (async () => {
        //插入数据库
        await Invigilate.create(data).then(function (p) {
            console.log('created.' + JSON.stringify(p));
            //返回响应
            res.send({
                code:200,
                message:"报名成功",
            })
        }).catch(function (err) {
            console.log('failed: ' + err);
            res.send({
                code:500,
                message:"报名失败",
            })
        });


    })();

})
//获取somebody报名
router.get('/invigilate',function(req,res){
    //获取数据
    console.log(req.query);
    (async () => {
        var invigilates=await Invigilate.findAll({
           where: {
               name: req.query.name
           }
       });
       res.send(invigilates)
   })();
   
   
})
//获取所有报名
router.get('/invigilateAdmin',function(req,res){
    //获取数据
    console.log(req.query);
    (async () => {
        var invigilates=await Invigilate.findAll();
       res.send(invigilates)
   })();
   
   
})
//取消报名
router.get('/cancelInvigilate',function(req,res){
     //获取数据
     console.log(req.query);
     (async () => {
         await Invigilate.destroy({
            where: {
                id: req.query.id
            }
        });
        res.send({
             code:200,
             message:"已删除报名记录",
        })
    })();
})
//修改报名
router.post('/invigilateChange', function (req, res) {
    //获取信息，修改表数据，返回响应
    
    var data = JSON.parse(req.body.form);
    console.log(data);
    (async () => {
        //修改数据库
        await Invigilate.update(data,{
            where:{
                id:data.id
            }
        })
        .then(function (p) {
            console.log('updated.' + JSON.stringify(p));
            //返回响应
            res.send({
                code:200,
                message:"报名修改成功",
            })
        }).catch(function (err) {
            console.log('failed: ' + err);
            res.send({
                code:500,
                message:"报名修改失败",
            })
        });


    })();

})

module.exports = router