import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


const LogsPage = () => {
	return (
		<>
			<Row>
				<Col md={12}>
					<h1>CI/CD</h1>
				</Col>
			</Row>
			<Row>
				<Col md={12}>
					<Button>Add CI/CD</Button>
				</Col>
			</Row>
		</>
	)
}

export default LogsPage