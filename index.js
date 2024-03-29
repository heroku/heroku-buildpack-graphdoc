const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000

app.use(serveStatic(path.join(__dirname, 'doc/schema')))

app.listen(port, () => console.log(`listening on port ${port}`))
