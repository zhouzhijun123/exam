const model=require('../model')
model.sync.then(() => { 

    console.log('init db ok.'); 

    process.exit(0); 

}).catch((e) => { 

    console.log(`failed:${e}`); 

    process.exit(0); 

});