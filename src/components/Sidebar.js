import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Link, useRouteMatch } from 'react-router-dom';

const SideBar = () => {
    const match = useRouteMatch();

    return (
        <Col md={2} className='border-right bg-dark text-white shadow dashboard-sidebar'>
            <Row>
                <Col>
                    <Link to='/dashboard'>Logmint</Link>
                </Col>
            </Row>
            <Row>
                <ul>
                    <li>
                        <Link to={`${match.url}/ci-cd`}>CI/CD</Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/support`}>Support</Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/environments`}>Environments</Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/users`}>Users & Groups</Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/your-account`}>Your account</Link>
                    </li>
                </ul>
            </Row>
            
        </Col>
        
    )
}

export default SideBar