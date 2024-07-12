import express from 'express'
import userApi from '../controller/userController.js'
//step 4
const router = express.Router()

const {registerUser,loginUser} = userApi

router.post('/',registerUser)
router.post('/login',loginUser)




export default router