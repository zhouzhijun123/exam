const Userinfo = require('../models/userinfo')
Userinfo.sync({alter:true})
Userinfo.create({
    name: "test2",
    id_card: "test",
    type: 1,
    salary_number: "test",
    sno: "test",
    bank: "test",
    bank_number: "test",
    call_phone: "test",
    office_phone: "test",
    home_phone: "test",
    organization: "test",
    department: "test",
    class: "test",
    e_mail: "test",
    weixin: "test",
    qq: "test",
    photo: "test",
    
}).then(function (p) {
    console.log('created.' + JSON.stringify(p));
}).catch(function (err) {
    console.log('failed: ' + err);
});