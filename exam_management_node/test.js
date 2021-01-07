const {
    Sequelize
} = require('sequelize');

const sequelize = new Sequelize('test', 'root', 'a123', {
    host: 'localhost',
    dialect: 'mysql' /* 选择 'mysql' | 'mariadb' | 'postgres' | 'mssql' 其一 */
});

try {
    (async function (){await sequelize.authenticate();})()
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

//模型定义
var Pet = sequelize.define('pet', {
    id: {
        type: Sequelize.STRING(50),
        primaryKey: true
    },
    name: Sequelize.STRING(100),
    gender: Sequelize.BOOLEAN,
    birth: Sequelize.STRING(10),
    createdAt: Sequelize.BIGINT,
    updatedAt: Sequelize.BIGINT,
    version: Sequelize.BIGINT
}, {
    timestamps: false
}, 
);
var now = Date.now();
//增加
Pet.sync({alter: true});
// Pet.create({
//         id: 'g-' + now,
//         name: 'Gaffey',
//         gender: false,
//         birth: '2007-07-07',
//         createdAt: now,
//         updatedAt: now,
//         version: 0
//     }).then(function (p) {
//         console.log('created.' + JSON.stringify(p));
//     }).catch(function (err) {
//         console.log('failed: ' + err);
//     });

//查询
(async () => {
    var pets = await Pet.findAll({
        where: {
            name: 'zhouzhijun'
        }
    });
    console.log('pets'+pets);
    console.log(`find ${pets.length} pets:`);
    for (let p of pets) {
        console.log(JSON.stringify(p));
    }
})();


//更新？
// (async () => {
//     var p = await queryFromSomewhere({
//         where: {
//             name: 'Gaffey'
//         }
//     });
//     p.gender = true;
//     p.updatedAt = Date.now();
//     p.version ++;
//     await p.save();
// })();

//改
// (async () => {
    
//     await Pet.update({ gender:true }, {
//         where: {
//             name:"Gaffey"
//         }
//       });
// })();
//删
// (async () => {
//     await Pet.destroy({
//         where: {
//           name: "Gaffey"
//         }
//       });
// })();