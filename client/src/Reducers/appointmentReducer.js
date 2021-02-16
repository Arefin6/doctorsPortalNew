import { APPOINTMENT_BOOK_FAIL, APPOINTMENT_BOOK_REQUEST, APPOINTMENT_BOOK_SUCCESS } from "../Constants/appointmentConstants"

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