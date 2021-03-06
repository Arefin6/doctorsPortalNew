import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { userDetailsReducer, userLoginReducer, userRegisterReducer,userProfileUpdateReducer, userListReducer } from './Reducers/userRedeucer'
import {appointmentAllReducer, appointmentBookReducer, appointmentMyReducer} from './Reducers/appointmentReducer'
import {messageListReducer, sendMessageReducer} from './Reducers/messageReducer';
const reducer = combineReducers({
    userLogin:userLoginReducer,
    userRegister:userRegisterReducer,
    userDetails:userDetailsReducer,
    userUpdate:userProfileUpdateReducer,
    userList:userListReducer,
    appointmentBook:appointmentBookReducer,
    appointmentMy:appointmentMyReducer,
    appointmentAll:appointmentAllReducer,
    sendMessage:sendMessageReducer,
    messageList:messageListReducer

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