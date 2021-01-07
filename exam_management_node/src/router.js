const express = require('express')
const userinfo = require('./models/userinfo')
var router = express.Router()
const Userinfo = require('./models/userinfo')

router.post('/userinfo', function (req, res) {
    
    console.log(req.body.form)
    Userinfo.create(JSON.parse(req.body.form))
        .then(function (p) {
            res.send('has created')
            console.log('created.' + JSON.stringify(p));
        }).catch(function (err) {
            res.send('failed')
            console.log('failed: ' + err);
        });

})


module.exports = router