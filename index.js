const express = require('express')
const PORT = process.env.PORT || 3000

const userRoutes = require('./routes')

const app = express()
app.use(express.json())

// routes
app.use('/', userRoutes)

app.listen(PORT, () =>{
    console.log('Running server on PORT 3000')
})