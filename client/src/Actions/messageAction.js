import axios from 'axios';
import { MESSAGE_LIST_FAIL, MESSAGE_LIST_REQUEST, MESSAGE_LIST_SUCCESS, SEND_MESSAGE_FAIL, SEND_MESSAGE_REQUEST, SEND_MESSAGE_SUCCESS} from '../Constants/messageConstants'
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

export const getMessageList = () =>async(dispatch,getState)=>{
    try {
       dispatch({
           type:MESSAGE_LIST_REQUEST
       }) 

       const {userLogin:{userInfo}}=getState()
     
    

       const config = {
           headers:{
               'Content-type':'application/json',
               Authorization:`Bearer ${userInfo.token}`
           }
       }

       const {data} = await axios.get('/api/message/all',
           config) 
       
       dispatch({
           type:MESSAGE_LIST_SUCCESS,
           payload:data
       })
    

    } catch (error) {
        dispatch({
            type:MESSAGE_LIST_FAIL,
            payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        })   
    }
}

