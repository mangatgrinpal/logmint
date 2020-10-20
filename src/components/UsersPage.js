import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const UsersPage = () => {
	return (
		<>
			<Row>
				<Col md={12}>
					<h3>Users & Groups</h3>
				</Col>
			</Row>
			<Row>
				<Col md={12} className='text-right'>
					<Button>
						<FontAwesomeIcon 
							icon={['fas','user']}/>
						&nbsp;
						Add User
					</Button>
			</Col>
			</Row>
		</>
		
		
	)
}

export default UsersPage