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



app.listen(PORT,()=>console.log(`Server Running on http://${HOST}:${PORT}`))