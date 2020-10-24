import React, { useState } from 'react';

import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const AddLogsModal = ({
	logs,
	setLogs,
	showModal,
	handleClose
}) => {

	const [logInfo, setLogInfo] = useState({
		logName: ''
	})

	const handleInputChange = e => {
		setLogInfo({ ...logInfo, [e.target.name]: e.target.value })
	}

	const handleSubmit = e => {
		e.preventDefault()
		const newLogs = Object.assign(logs)
		newLogs.push(logInfo)
		setLogs(newLogs)
		setLogInfo({
			logName: ''
		})
		handleClose()
	}

	const { logName } = logInfo;

	return (
		<Modal show={showModal} onHide={handleClose} centered>
			<Modal.Header closeButton>
				<Modal.Title>Add CI/CD</Modal.Title>
			</Modal.Header>
			<Form onSubmit={handleSubmit}>
				<Modal.Body>
					<Form.Row>
						<Form.Group as={Col}>
							<Form.Label>Name</Form.Label>
							<Form.Control
								name='logName'
								type='text'
								onChange={handleInputChange}
								value={logName} />
						</Form.Group>
					</Form.Row>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
						</Button>
					<Button variant="primary" type='submit'>
						Create CI/CD
						</Button>
				</Modal.Footer>
			</Form>
		</Modal>
	)
}

export default AddLogsModal