import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const AddSupportModal = ({
	supportTools,
	setSupportTools,
	showModal,
	handleClose
}) => {

	const [supportInfo, setSupportInfo ] = useState({
		name: ''
	})

	const handleInputChange = e => {
		setSupportInfo({ ...supportInfo, [e.target.name]: e.target.value })
	}

	const handleSubmit = e => {
		e.preventDefault()
		const newSupportTool = Object.assign(supportTools)
		newSupportTool.push(supportInfo)
		setSupportTools(newSupportTool)
		setSupportInfo({
			name: ''
		})
		handleClose()
	}

	const { name } = supportInfo;

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
								value={name} />
						</Form.Group>
					</Form.Row>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
						</Button>
					<Button variant="primary" type='submit'>
						Create Support
						</Button>
				</Modal.Footer>
			</Form>
		</Modal>
	)
}

export default AddSupportModal