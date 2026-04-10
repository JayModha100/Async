dotenv.config()
const express = require('express')
const app = express()
const port = 3000
app.get('/', (req,res)=>)
app.post('/', (req,res)=>
    const {name} = req.body
    res.send(`Hello ${name}`)

app.listen(port,()=>{console.log(`Server running on port ${port}`)})
