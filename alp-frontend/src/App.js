import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <NavBar />
      
      <Switch>
        <Route exact path='/'>
          <RouteContainer />
        </Route>
        <Route path='/about'>
          <UserContainer />
        </Route>
        <Route path='/projects'>
          <WordsContainer />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
