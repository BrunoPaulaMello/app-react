const express = require('express')
const cors = require('cors')

const port = 5000
const app = express()


app.use(cors())
app.use(express.json());

app.post('/login', (req,res)=>{
    console.log(req.body)
    res.send({menssage: "oi"})
})

app.listen(port,()=>{
    console.log("Ligou!")
})