import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomeScreen from '../src/components/screens/HomeScreen/HomeScreen'

function App() {
  return (
    <>
     <Router>
       
          <Switch>
            <Route path='/' exact>
              <HomeScreen></HomeScreen>
            </Route>
          </Switch>
          
      </Router> 
    </>
  );
}

export default App;
