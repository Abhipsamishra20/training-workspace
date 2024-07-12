import jwt from 'jsonwebtoken'

import asyncHandler from 'express-async-handler'

import User from '../model/userModel.js'


//checks if a token is there and if it is valid or not
const secure = asyncHandler(async(req,res,next) => {

    let token

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer') ){

        try{
            token = req.headers.authorization.split(' ')[1]

            //verify token
            const decoded = jwt.verify(token,'password')
            req.user = await User.findById(decoded.id).select('-password')
            if(!req.user){
                res.status(401)
                throw new Error ('Not authorized')
            }
            next()
        }catch(error){

            console.log(error)
            res.status(401)
            throw new Error ('Not authorized')

        }
    }
    if(!token){
        res.status(401)
        throw new Error ('Not authorized')
    }

})

export default secure 