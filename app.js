const express = require('express')
const app = express()

const port = process.env.PORT || 3000

app.use(express.json())

app.use('/', require('./routers'))

app.listen(port, () => {
    console.log('Listening to port: ', port)
})