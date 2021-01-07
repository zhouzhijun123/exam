const Cost = require('../models/cost')
Cost.sync()
Cost.create({
    test_order: "2019秋",
    course_code:"230771",
    course_name:"教育督导学",
    sum: 1000,
    type: 1,
    name: "test1",
    phone: "test",
    assign: "test",
}).then(function (p) {
    console.log('created.' + JSON.stringify(p));
}).catch(function (err) {
    console.log('failed: ' + err);
});