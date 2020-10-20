import React from 'react';

import LogsPage from './LogsPage';
import UsersPage from './UsersPage';

import Col from 'react-bootstrap/Col';

import { 
    Switch, 
    Route, 
    useRouteMatch 
} from 'react-router-dom';


const DashboardMainContentContainer = () => {

    const match = useRouteMatch();



    return (
        <Col md={10}>
            <Switch>
                <Route exact path={`${match.path}`}>
                    Welcome to logmint
                </Route>
                <Route path={`${match.path}/ci-cd`}>
                    <LogsPage />
                </Route>
                <Route path={`${match.path}/users`}>
                    <UsersPage />
                </Route>
            </Switch>
        </Col>
        
    )
}

export default DashboardMainContentContainer