'use strict'
/* -------------------------------------------------------------------------- */
/*                               LIBRARY ASSIGNMENT                           */
/* -------------------------------------------------------------------------- */

const express= require('express')
const app= express()
require('dotenv').config()
const PORT=process.env.PORT
const HOST=process.env.HOST

app.all('/',(req,res)=>{
    res.send('WELCOME LİBRARY PROJECT')
})

require('express-async-errors')



app.use(express.json())
app.use(require('./app/errorHandler.js'))

app.listen(PORT,()=>console.log(`Server Running on http://${HOST}:${PORT}`))