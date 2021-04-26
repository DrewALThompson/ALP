import React, {useState} from 'react';
import {
    Route,
    Switch,
    useRouteMatch
} from "react-router-dom";

const DemonstrationsContainer = () => {

    let { path, url} = useRouteMatch();
    //useRouteMatch to create diverse Routes

    return (
        <Router>
            <NavBarLink route={'/home'}>Home</NavBarLink>
            <NavBarLink route={'/about'}>About</NavBarLink>
            <NavBarLink route={'/projects'}>Projects</NavBarLink>
            <NavBarLink route={'/accessability'}>Accessability</NavBarLink>
      
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
                <Route path='/accessability'>
                    <DemonstrationsContainer/>
                </Route>
            </Switch>
        </Router>
    )
}

export default DemonstrationsContainer