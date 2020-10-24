import React from 'react';
import LogsPage from './LogsPage';
import UsersPage from './UsersPage';
import SupportPage from './SupportPage';
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
				<Route path={`${match.path}/ci-cd`} component={LogsPage}/>						
				<Route path={`${match.path}/users`} component={UsersPage}/>
				<Route path={`${match.path}/support`} component={SupportPage}/>
			</Switch>
		</Col>
	)
}

export default DashboardMainContentContainer