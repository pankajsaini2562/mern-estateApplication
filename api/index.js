import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv';
import authRouter from './routes/authRoute.js'


dotenv.config()
const app =express()
app.use(express.json())

mongoose.connect(process.env.MONGO).then(()=>{
console.log('database is connected')
app.listen(3000,()=>{
  console.log('server is running at port 3000!!!')
})
})
.catch((err)=>{
  console.log(err)


})
app.use('/api/auth',authRouter)
