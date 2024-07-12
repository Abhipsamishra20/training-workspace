import User from '../model/userModel.js'
import asyncHandler from 'express-async-handler'

import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'


const registerUser = asyncHandler(async(req,res) => {
    const {name,email,password} = req.body
    if(!name|| !email || !password){
        res.status(400)
        throw new Error('Please include all fields')
    } 

    const userExists = await User.findOne({email})
    if(userExists){
        res.status(400)
        throw new Error ('User already exists')
    }

    //Hash the password 
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password,salt)
    const user = await User.create({name,email,password:hashedPassword})

    if(user){
        res.status(201).json({
            _id:user.id,
            name:user.name,
            email:user.email,
            token: generateToken(user._id)
        })
    }
    else{
        res.status(401)
        throw new Error("Invalid details")
    }
    
})

const loginUser = asyncHandler(async(req,res) => {
    const {email,password} = req.body
    
    const userExists = await User.findOne({email})
    if(userExists && (await bcrypt.compare(password,userExists.password))){
        res.status(200).json({
            _id:userExists.id,
            name:userExists.name,
            email:userExists.email,
            token: generateToken(userExists._id)
        })
       
    }
    else{
        res.status(401)
        throw new Error("Invalid credentials")
    }
   
})

const generateToken = id => jwt.sign({id},'password',{expiresIn:'30d'})


export default {registerUser,loginUser}