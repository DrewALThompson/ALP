import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import ProjectsContainer from './containers/projectsContainer';
import AboutContainer from './containers/aboutContainer';
import HomeContainer from './containers/homeContainer';
import NotFound from './components/notFound';
import NavBarLink from './components/navBarLink';


function App() {
  return (
    <Router>
      <NavBarLink route={'/'}>Home</NavBarLink>
      <NavBarLink route={'/about'}>About</NavBarLink>
      <NavBarLink route={'/projects'}>Projects</NavBarLink>
      
      <Switch>
        <Route exact path='/'>
          <HomeContainer />
        </Route>
        <Route path='/about'>
          <AboutContainer />
        </Route>
        <Route path='/projects'>
          <ProjectsContainer />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
