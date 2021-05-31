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
            <NavBarLink route={'/'}></NavBarLink>
      
            <Switch>
                <Route exact path='/accessibility'>
                    <DemonstrationsContainer/>
                </Route>
                <Route path={`${path}/:demoId`}><DemoPage /></Route>
            </Switch>
        </Router>
    )
}

export default DemonstrationsContainer