import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const LogsPage = () => {
	
	return (
		<>
			<Row>
				<Col md={12}>
					<h1>CI/CD</h1>
				</Col>
			</Row>
			<Row className='pb-4'>
				<Col md={12} className='text-right'>
					<Button>
						<FontAwesomeIcon 
							icon={['fas','clipboard-list']} />
						&nbsp;
						Add CI/CD
					</Button>
				</Col>
			</Row>
			<Row className='bg-dark h-100'>
				<Col>
					You haven't added any logs yet.
				</Col>
			</Row>
		</>
	)
}

export default LogsPage