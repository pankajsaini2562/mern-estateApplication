import User from '../models/userModel.js'
import bcryptjs from 'bcryptjs'
export const signup = async (req,res) =>{
 const{username,email,password}= req.body
 const hashedPassword = bcryptjs.hashSync(password,10)
 const newUser =new User({username,email,password:hashedPassword})

 try{
  await newUser.save()
  res.status(201).json('new user has created')
 }
 catch(err){
  res.status(401).json(err.errmsg)
 }






}