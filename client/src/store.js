import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { userDetailsReducer, userLoginReducer, userRegisterReducer,userProfileUpdateReducer } from './Reducers/userRedeucer'
import {appointmentBookReducer, appointmentMyReducer} from './Reducers/appointmentReducer'
import {sendMessageReducer} from './Reducers/messageReducer';
const reducer = combineReducers({
    userLogin:userLoginReducer,
    userRegister:userRegisterReducer,
    userDetails:userDetailsReducer,
    userUpdate:userProfileUpdateReducer,
    appointmentBook:appointmentBookReducer,
    appointmentMy:appointmentMyReducer,
    sendMessage:sendMessageReducer,

})

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')):null

const initialState = {
    
    userLogin:{userInfo:userInfoFromStorage}
  }
  
  const middleware = [thunk]
  
  const store = createStore(
  
      reducer,
      initialState,
      composeWithDevTools(applyMiddleware(...middleware))
      
  )
  
  export default store