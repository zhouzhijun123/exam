const Invigilate = require('../models/invigilate')
Invigilate.sync({alter:true})

// Invigilate.create({
//     name:"test",
//     type:"监考,省内巡考"
// }).then(function (p) {
//     console.log('created.' + JSON.stringify(p));
// }).catch(function (err) {
//     console.log('failed: ' + err);
// });