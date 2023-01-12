const express = require('express')
const cors = require('cors')
const crypto = require("crypto")

function createHash(str){
    if(str.length > 0){
        let hash = crypto.createHmac('sha256', 'rtbsdsjqqpo')
        let update = hash.update(str)
        let digest = update.digest('hex')
        return digest
    } else { return false}
}

const port = 5000
const app = express()
const mysql = require("mysql")

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "reactApp",
})


app.use(cors())
app.use(express.json());

app.post('/login', (req,res)=>{

    db.query("SELECT * FROM usuarios WHERE email = ? AND password = ?", [req.body.email, createHash(req.body.password)], (err, response)=>{
        if(err){res.send(err)} 
        if(response.length > 0) {
            res.send({msg: "Logado com sucesso!"})
        } else {
            res.send({msg: "Usuario não encontrado!"})
        }
    })
})


app.post('/auth', (req,res)=>{
    

    db.query("SELECT * FROM usuarios WHERE email = ? AND password = ?", [req.body.email, req.body.token], (err, response)=>{
        if(err){res.send(err)} 
        if(response.length > 0) {
            res.send({msg: "autorizado"})
        } else {
            res.send({msg: "recusado"})
        }
    })
})




app.post('/singIn', (req,res)=>{ 

    let newUser = {
        email: req.body.email,
        password: createHash(req.body.password)
    }

    db.query("SELECT * FROM usuarios WHERE email = ?", [newUser.email], (err, result)=>{
        if(err) res.send(err)
        if(result.length === 0){
            db.query("INSERT INTO usuarios (email, password) VALUES (?,?)", [newUser.email, newUser.password], (err, result)=>{
                if(err) res.send(err)
                res.send({msg: "Cadastrado com sucesso!"})
            })
        } else {res.send({msg: "Usuario ja cadastrado!"})}
    })
})

app.listen(port,()=>{
    console.log("Ligou!")
})