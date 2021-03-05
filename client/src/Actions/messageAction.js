import axios from 'axios';
import { SEND_MESSAGE_FAIL, SEND_MESSAGE_REQUEST, SEND_MESSAGE_SUCCESS} from '../Constants/messageConstants'
export const sendMessageAction = (message) =>async(dispatch)=>{
    try {
       dispatch({
           type:SEND_MESSAGE_REQUEST
       }) 
     
       const config = {
           headers:{
               'Content-type':'application/json'
           }
       }

       const {data} = await axios.post('/api/message/create',
           message,
           config
       ) 
       
       dispatch({
           type:SEND_MESSAGE_SUCCESS,
           payload:data
       })

    } catch (error) {
        dispatch({
            type:SEND_MESSAGE_FAIL,
            payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        })   
    }
}
