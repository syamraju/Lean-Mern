const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
const {errorhandler} = require('./middleware/errhandle')

const app = express()

app.use(express.urlencoded({extended :false}))
app.use('/api/goals', require('./routes/goalRoutes'))
app.use(errorhandler)
app.listen(port, () => console.log(`Server started on Port ${port}`))