import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomeScreen from '../src/components/screens/HomeScreen/HomeScreen'
import AllUser from "./components/screens/AllUserScreen/AllUser";
import AllMessage from "./components/screens/AllMessageScreen/AllMessage";
import ContactScreen from "./components/screens/ContactScreen/ContactScreen";
import Dashboard from "./components/screens/Dashbord/Dashboard";
import GetAppointmentScreen from "./components/screens/GetAppointment/GetAppointmentScreen";
import LoginScreen from "./components/screens/LoginScreen/LoginScreen";
import ProfileScreen from "./components/screens/Profilescreen/ProfileScreen";
import SignUpScreen from "./components/screens/SignUpScreen/SignUpScreen";
import UserAppointment from "./components/screens/UserAppoinrtment/userAppointment";
import AllAppointment from "./components/screens/All AppointmentScreen/AllAppointment";
import ConfirmEmail from "./components/screens/SignUpScreen/ConfirmEmail";
import ResetPassword from "./components/screens/ResetPassword";
import NewPassword from "./components/screens/NewPassword";

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
            <Route path='/dashboard/EditProfile'>
              <ProfileScreen></ProfileScreen>
            </Route>
            <Route path='/admin/dashboard/'>
              <Dashboard></Dashboard>
            </Route>
            <Route path='/confirm'>
              <ConfirmEmail></ConfirmEmail>
            </Route>
            <Route exact path='/reset'>
              <ResetPassword></ResetPassword>
            </Route>
            <Route path='/reset/:token'>
              <NewPassword></NewPassword>
            </Route>
            <Route path="/admin/appointment" exact>
              <AllAppointment></AllAppointment>
            </Route>
            <Route path="/admin/users" exact>
              <AllUser></AllUser>
            </Route>
            <Route path="/admin/message" exact>
              <AllMessage></AllMessage>
            </Route>
          </Switch>
          
      </Router> 
    </>
  );
}

export default App;
