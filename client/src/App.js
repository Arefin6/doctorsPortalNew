import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomeScreen from '../src/components/screens/HomeScreen/HomeScreen'
import LoginScreen from "./components/screens/LoginScreen/LoginScreen";
import SignUpScreen from "./components/screens/SignUpScreen/SignUpScreen";

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
          </Switch>
          
      </Router> 
    </>
  );
}

export default App;
