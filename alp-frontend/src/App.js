import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import PageDefaultContainer from './containers/pageDefaultContainer';
import NotFound from './components/notFound';
import NavBarLink from './components/navBarLink';
import MainPageRoutes from './data/mainPageRoutes';
import DemonstrationsContainer from './containers/demonstrationsContainer';


const App = () => {

  
  return (
    <Router>
      <NavBarLink route={'/'}>Home</NavBarLink>
      <NavBarLink route={'/about'}>About</NavBarLink>
      <NavBarLink route={'/projects'}>Projects</NavBarLink>
      <NavBarLink route={'/accessibility'}>Accessibility</NavBarLink>
      
      <Switch>
      <Route exact path='/'>
          <PageDefaultContainer page={MainPageRoutes.home}/>
        </Route>
        <Route path='/about'>
          <PageDefaultContainer page={MainPageRoutes.about}/>
        </Route>
        <Route path='/projects'>
          <PageDefaultContainer page={MainPageRoutes.projects}/>
        </Route>
        <Route path='/accessibility'>
          <DemonstrationsContainer/>
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
