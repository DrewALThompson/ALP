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
                <Route exact path='/accessibility'>
                    <HomeContainer />
                </Route>
                <Route path={`${path}/:demoId`}><DemoPage /></Route>
            </Switch>
        </Router>
    )
}

export default DemonstrationsContainer