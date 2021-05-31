import '../css/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import NotFound from './components/notFound';
import NavBarLink from './components/navBarLink';
import DemonstrationsContainer from './containers/demonstrationsContainer';
import InfoPage from './containers/infoPage';
import InfoPageData from '../data/infoPage.json'


const App = () => {

  
  return (

    // needs to change to a Single page with a bunch of links maybe with a small bit to explain what it is at the top
    <Router>
      <NavBarLink route={'/'}>Home</NavBarLink>
      <NavBarLink route={'/about'}>About</NavBarLink>

      <Switch>
        <Route exact path='/'>
          <DemonstrationsContainer />
        </Route>
        <Route path='/about'>
          <InfoPage data={InfoPageData.about}/>
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
