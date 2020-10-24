import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { useRouteMatch, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SideBar = () => {

	const match = useRouteMatch();
	const [ key, setKey ] = useState('management')

	return (
		<Col md={2} className='border-right bg-dark text-white shadow dashboard-sidebar'>
			<Row className='brand py-3'>
				<Col xs={12} className='text-center'>
					<NavLink to='/dashboard' activeClassName='active'>
						Log<span className='mint-color'>mint</span>
					</NavLink>
				</Col>
			</Row>
			<Tabs
				className='justify-content-center'
				activeKey={key}
				onSelect={k => setKey(k)}>
				<Tab eventKey='workspace' title='Workspace'>

				</Tab>
				<Tab eventKey='management' title='Management'>
					<Row className='dashboard-nav-links pt-4'>
						<Col xs={12}>

							<NavLink to={`${match.url}/ci-cd`} activeClassName='active'>
								<Row className='py-3'>
									<Col xs={{ span: 2, offset: 1 }} className='text-center'>
										<FontAwesomeIcon
											icon={['fas', 'clipboard-list']} />
									</Col>
									<Col xs={{ span: 8, offset: 1 }}>
										CI/CD
								</Col>
								</Row>
							</NavLink>

							<NavLink to={`${match.url}/support`} activeClassName='active'>
								<Row className='py-3'>
									<Col xs={{ span: 2, offset: 1 }} className='text-center'>
										<FontAwesomeIcon
											icon={['fas', 'headset']} />
									</Col>
									<Col xs={{ span: 8, offset: 1 }}>
										Support
								</Col>
								</Row>
							</NavLink>

							<NavLink to={`${match.url}/environments`} activeClassName='active'>
								<Row className='py-3'>
									<Col xs={{ span: 2, offset: 1 }} className='text-center'>
										<FontAwesomeIcon
											icon={['fas', 'stream']} />
									</Col>
									<Col xs={{ span: 8, offset: 1 }}>
										Environments
								</Col>
								</Row>
							</NavLink>

							<NavLink to={`${match.url}/users`} activeClassName='active'>
								<Row className='py-3'>
									<Col xs={{ span: 2, offset: 1 }} className='text-center'>
										<FontAwesomeIcon
											icon={['fas', 'users']} />
									</Col>
									<Col xs={{ span: 8, offset: 1 }}>
										Users & Groups
								</Col>
								</Row>
							</NavLink>

							<NavLink to={`${match.url}/your-account`} activeClassName='active'>
								<Row className='py-3'>
									<Col xs={{ span: 2, offset: 1 }} className='text-center'>
										<FontAwesomeIcon
											icon={['fas', 'cogs']} />
									</Col>
									<Col xs={{ span: 8, offset: 1 }}>
										Your account
								</Col>
								</Row>
							</NavLink>

						</Col>
					</Row>
				</Tab>
			</Tabs>
		</Col>
	)
}

export default SideBar