require('dotenv').config()
const express =require('express')
const app=express()
const jwt = require('jsonwebtoken')
const bcrypt=require('bcrypt')

app.use(express.json())

const users =[]

const posts = [
    {
        username: 'admin',
        position: 'Admin Panel Manager'
    }
]

app.get('/users', (req, res) => {
    res.json(users)
})

app.post('/users', async (req,res) =>{
    try{
        const salt = bcrypt.genSalt()
        let password=req.body.password.toString()
        const hashedPassword = bcrypt.hash(password, 10)
        console.log(salt)
        salt.then(function(result){
            console.log(result)
        })
        console.log(hashedPassword)
        hashedPassword.then(function(result2){
            console.log(result2)
        })
        const user={username: req.body.username, password: hashedPassword}
        users.push(user)
        res.status(201).send("User Added")
    } catch{
        res.status(500).send()
    }
})

app.get('/posts', authenticateToken, (req,res) =>{
    res.json(posts.filter(post => post.username === req.user.username))
})

app.post('/posts', (req,res) =>{
    //Authentication of User
    const username = req.body.username
    const position = req.body.position
    const user ={ username: username, position:  position}
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
    res.json({accessToken: accessToken})
    console.log(accessToken)
})

function authenticateToken(req, res, next){
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if(token==null) return res.sendStatus(401)

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err,user)=>{
        if(err) return res.sendStatus(403)
        req.user = user
        next()
    })
}

app.listen(4000)