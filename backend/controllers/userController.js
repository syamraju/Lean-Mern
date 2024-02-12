const { bgCyan } = require('colors')
const User = require('../model/uderModel')
const asyncHandler = require('express-async-handler')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const registerUser = asyncHandler(async(req,res) => {
    const {name , email , password} = req.body

    if(!name && !email && !password){
        res.status(400)
        throw new Error('please enter all fields')
    }

    const userExist = await User.findOne({email})
    if(userExist){
        res.status(400)
        throw new Error ('user already Exist')
    }

    const salt =  await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password,salt)

    const user = await User.create({
        name,
        email,
        password : hashedPassword,
    })

    if(user){
        res.status(201)
        res.json({
            _id : user.id,
            name : user.name,
            email : user.email,  
        })
    }else{
        res.status(400)
        throw new Error('user not registered')
    }
    res.json({message:'regiser user'})
})

const tokengenerate = (id) => {
    jwt.sign
}

const loginUser = asyncHandler(async(req,res) => {
    const {email , password} = req.body
    const user = await User.findOne({email})

    if(user && (await bcrypt.compare(password, user.password))){
        res.json({
            _id: user.id,
            name : user.name,
            email : user.email
        })
    }else{
        res.status(200)
        throw new Error('invalid')
    }
    res.json({message: 'usr login'})
})

const getme = (req,res) => {
    res.json({message : 'user get'})
}

module.exports = {
    registerUser,
    loginUser, 
    getme
}