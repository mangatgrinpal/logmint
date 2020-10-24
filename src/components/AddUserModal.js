import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const AddUserModal = ({ 
	users,
	setUsers,
	showModal, 
	handleClose 
}) => {

	const [userInfo, setUserInfo] = useState({
		email: ''
	})

	const handleInputChange = e => {
		setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
	}

	const handleSubmit = e => {
		e.preventDefault()
		const newUsers = Object.assign(users)
		newUsers.push(userInfo)
		setUsers(newUsers)
		setUserInfo({
			email: ''
		})
		handleClose();
	}

	const { email } = userInfo;

	return (
		<Modal show={showModal} onHide={handleClose} centered>
			<Modal.Header closeButton>
				<Modal.Title>Add user</Modal.Title>
			</Modal.Header>
			<Form onSubmit={handleSubmit}>
				<Modal.Body>
					<Form.Row>
						<Form.Group as={Col}>
							<Form.Label>Email</Form.Label>
							<Form.Control
								name='email'
								type='text'
								onChange={handleInputChange}
								value={email} />
						</Form.Group>
					</Form.Row>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
						</Button>
					<Button variant="primary" type='submit'>
						Create user
						</Button>
				</Modal.Footer>
			</Form>
		</Modal>
	)
}

export default AddUserModal