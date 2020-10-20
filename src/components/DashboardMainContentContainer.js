import React from 'react';

import Col from 'react-bootstrap/Col';

import { Switch, Route, useRouteMatch } from 'react-router-dom';


const DashboardMainContentContainer = () => {
    const match = useRouteMatch();

    return (
        <Col md={10}>
            <h1>Main Content Container</h1>
            <Switch>
                <Route path={`${match.path}/users`}>
                    <h1>Users & Groups</h1>
                </Route>
            </Switch>
        </Col>
        
    )
}

export default DashboardMainContentContainer