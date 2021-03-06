import { APPOINTMENT_BOOK_FAIL, APPOINTMENT_BOOK_REQUEST, APPOINTMENT_BOOK_SUCCESS, APPOINTMENT_MY_FAIL, APPOINTMENT_MY_REQUEST, APPOINTMENT_MY_SUCCESS } from "../Constants/appointmentConstants"

export const appointmentBookReducer = (state={},action) =>{

    switch( action.type){
        case APPOINTMENT_BOOK_REQUEST:
           return {loading:true}
        case APPOINTMENT_BOOK_SUCCESS:
            return {loading:false,success:true} 
            
        case APPOINTMENT_BOOK_FAIL:
            return {loading:false,success:false, error:action.payload}
         default :
         return state   
    }
}

export const appointmentMyReducer = (state={appointments:[]},action) =>{

    switch( action.type){
        case APPOINTMENT_MY_REQUEST:
           return {...state,loading:true}
        case APPOINTMENT_MY_SUCCESS:
            return {
                loading:false,
                appointments:action.payload
            } 
        case APPOINTMENT_MY_FAIL:
            return {
                loading:false, 
                error:action.payload}
         default :
         return state   
    }
}
