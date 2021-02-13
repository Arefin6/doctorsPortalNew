import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomeScreen from '../src/components/screens/HomeScreen/HomeScreen'
import ContactScreen from "./components/screens/ContactScreen/ContactScreen";
import GetAppointmentScreen from "./components/screens/GetAppointment/GetAppointmentScreen";
import LoginScreen from "./components/screens/LoginScreen/LoginScreen";
import SignUpScreen from "./components/screens/SignUpScreen/SignUpScreen";
import UserAppointment from "./components/screens/UserAppoinrtment/userAppointment";

function App() {
  return (
    <>
     <Router>
       
          <Switch>
            <Route path='/' exact>
              <HomeScreen></HomeScreen>
            </Route>
            <Route path='/login'>
              <LoginScreen></LoginScreen>
            </Route>
            <Route path='/signup'>
              <SignUpScreen></SignUpScreen>
            </Route>
            <Route path='/contact'>
             <ContactScreen></ContactScreen>
            </Route>
            <Route path='/appointment'>
             <GetAppointmentScreen></GetAppointmentScreen>
            </Route>
            <Route path='/dashboard/appointment'>
              <UserAppointment></UserAppointment>
            </Route>
          </Switch>
          
      </Router> 
    </>
  );
}

export default App;
