import  mongoose  from 'mongoose'


const appointmentsSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true,
    },
    weight:{
        type:Number,
        required:true,
    }
    ,service:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        required:true,
    }

 },{
   timestamps:true 
 }
)

const Appointment = mongoose.model('Appointment',appointmentsSchema)

export default Appointment;