import { SEND_MESSAGE_FAIL, SEND_MESSAGE_REQUEST, SEND_MESSAGE_SUCCESS} from '../Constants/messageConstants'


export const sendMessageReducer = (state={},action) =>{

    switch( action.type){
        case SEND_MESSAGE_REQUEST:
           return {...state,loading:true}
        case SEND_MESSAGE_SUCCESS:
            return {loading:false,success:true} 
            
        case SEND_MESSAGE_FAIL:
            return {loading:false,error:action.payload,success:false}        
         default :
         return state   
    }
}