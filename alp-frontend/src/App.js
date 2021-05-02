import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import MainPageContainer from './containers/mainPageContainer';
import NotFound from './components/notFound';
import NavBarLink from './components/navBarLink';
import MainPageRoutes from './data/mainPageRoutes';


const App = () => {

  
  return (
    <Router>
      <NavBarLink route={'/'}>Home</NavBarLink>
      <NavBarLink route={'/about'}>About</NavBarLink>
      <NavBarLink route={'/projects'}>Projects</NavBarLink>
      
      <Switch>
      <Route exact path='/'>
          <MainPageContainer page={MainPageRoutes.home}/>
        </Route>
        <Route path='/about'>
          <MainPageContainer page={MainPageRoutes.about}/>
        </Route>
        <Route path='/projects'>
          <MainPageContainer page={MainPageRoutes.projects}/>
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
