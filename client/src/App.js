import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {Container} from 'react-bootstrap';
import HomeScreen from '../src/components/screens/HomeScreen/HomeScreen'

function App() {
  return (
    <>
     <Router>
       <Container>
          <Switch>
            <Route path='/' exact>
              <HomeScreen></HomeScreen>
            </Route>
          </Switch>
         </Container> 
      </Router> 
    </>
  );
}

export default App;
