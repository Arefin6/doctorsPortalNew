import  express from 'express'
import  dotEnv from 'dotenv'
import connectDb from './config/connectDb.js';
import userRoute from './routes/userRoute.js';
import appointmentRoute from './routes/appointmentRoute.js';
import messageRoute from './routes/messageRoutes.js';

dotEnv.config()

connectDb()
const app = express()
app.use ( express.json())

app.get('/',(req,res)=>{
    res.send("Hi Buddy Arefin")
})

app.use('/api/users',userRoute)
app.use('/api/appointment',appointmentRoute)
app.use('/api/message',messageRoute)

const port = process.env.PORT
app.listen(port||5000,console.log(`listening to port ${port}`))
