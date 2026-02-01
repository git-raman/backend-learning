const express = require("express")
const app = express()

app.get('/',(req,res)=>{
    res.send("server chl rhal ba...")
})

app.listen(3000)