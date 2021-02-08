import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomeScreen from '../src/components/screens/HomeScreen/HomeScreen'
import LoginScreen from "./components/screens/LoginScreen/LoginScreen";

function App() {
  return (
    <>
     <Router>
       
          <Switch>
            <Route path='/' exact>
              <HomeScreen></HomeScreen>
            </Route>
            <Route path='/login' exact>
              <LoginScreen></LoginScreen>
            </Route>
          </Switch>
          
      </Router> 
    </>
  );
}

export default App;
