import  mongoose  from 'mongoose'

const messageSchema = mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    subject:{
      type:String,
      required:true
    },
    message:{
        type:String,
        required:true
    }
})

const message = mongoose.model('Message',messageSchema)

export default message