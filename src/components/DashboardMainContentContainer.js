import React from 'react';

import LogsPage from './LogsPage';
import UsersPage from './UsersPage';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { 
		Switch, 
		Route, 
		useRouteMatch 
} from 'react-router-dom';


const DashboardMainContentContainer = () => {

		const match = useRouteMatch();



		return (
				<Col 
					md={{span: 10, offset: 2}} 
					className='overflow-auto position-absolute vh-100'>
					<Switch>
						<Route exact path={`${match.path}`}>
							<Row className='pt-3'>
								<Col xs={12}>
									<h2>Welcome to Logmint</h2>
								</Col>
							</Row>
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