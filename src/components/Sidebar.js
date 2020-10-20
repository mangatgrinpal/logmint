import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Link, useRouteMatch } from 'react-router-dom';

const SideBar = () => {
    const match = useRouteMatch();

    return (
        <Col md={2} className='border-right bg-dark text-white'>
            <Row>
                <Col>
                    <h2 className='text-white'>Logmint</h2>
                </Col>
            </Row>
            <Row>
                <ul>
                    <li>
                        <Link to={`${match.url}/logs`}>Logs</Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/users`}>Users & Groups</Link>
                    </li>
                </ul>
            </Row>
            
        </Col>
        
    )
}

export default SideBar