const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const indexRouter = require('./src/routes/index.js')
const tokenRouter = require('./src/tool/tokenCheck')
const loginRouter = require('./src/routes/login')
const userinfoRouter = require('./src/routes/userinfo')
//const router= require('./src/router')

const port = 3000
// 配置解析表单 POST 请求体插件（注意：一定要在 app.use(router) 之前 ）
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}))
// parse application/json
app.use(bodyParser.json())
app.use(cors())
//不需要token验证的路由先挂载
app.use(loginRouter)
app.use(userinfoRouter)
//
app.use(tokenRouter)
app.use(indexRouter)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))