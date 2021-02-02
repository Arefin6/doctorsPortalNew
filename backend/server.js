import  express from 'express'
import  dotEnv from 'dotenv'
import connectDb from './config/connectDb.js';

dotEnv.config()

connectDb()
const app = express()
app.use ( express.json())

app.get('/',(req,res)=>{
    res.send("Hi Buddy Arefin")
})

const port = process.env.PORT
app.listen(port||5000,console.log(`listening to port ${port}`))
