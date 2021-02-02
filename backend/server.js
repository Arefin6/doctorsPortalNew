import  express from 'express'
import  dotEnv from 'dotenv'

dotEnv.config()

//connectDb()
const app = express()
app.use ( express.json())

app.get('/',(req,res)=>{
    res.send("Hi Buddy Arefin")
})

const port = process.env.PORT
app.listen(port||5000,console.log(`listening to port ${port}`))
