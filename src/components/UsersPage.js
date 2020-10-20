import React, { useState } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const UsersPage = () => {

	const [ showModal , setShowModal] = useState(false);
	const [ users, setUsers ] = useState([]);
	const [ userInfo, setUserInfo ] = useState({
		email: ''
	})

	const handleShow = () => setShowModal(true);
	const handleClose = () => setShowModal(false);

	const handleInputChange = e => {
		setUserInfo({...userInfo, [e.target.name]: e.target.value})
	}

	const handleSubmit = e => {
		e.preventDefault()
		const newUsers = Object.assign([])
		newUsers.push(userInfo)
		setUsers(newUsers)

	}

	const { email } = userInfo;

	return (
		<>
			<Row className='pt-3'>
				<Col md={12}>
					<h2>Users & Groups</h2>
				</Col>
			</Row>
			<Row className='pb-4'>
				<Col md={12} className='text-right'>
					<Button onClick={handleShow}>
						<FontAwesomeIcon 
							icon={['fas','user']}/>
						&nbsp;
						Add User
					</Button>
				</Col>
			</Row>
			<Row className='bg-light h-100 pt-5'>
				{
					users.length === 0 ? (
						<Col className='text-center pt-3'>
							<FontAwesomeIcon
								size='3x'
								icon={['fas', 'cloud-upload-alt']} />
							<h3>You don't have any users added yet.</h3>
							<p>Add users to begin tracking now</p>
							<Button onClick={handleShow}>
								<FontAwesomeIcon
									icon={['fas', 'user']} />
								&nbsp;
								Add User
							</Button>
						</Col>
					) : (
						
						users.map((user, index)=> {
							return (
								<Row key={index}>
									<Col>
										{user.email}
									</Col>
								</Row>
							)
						})
					)
				}
				
			</Row>
			<Modal show={showModal} onHide={handleClose} centered>
				<Modal.Header closeButton>
					<Modal.Title>Modal heading</Modal.Title>
				</Modal.Header>
				<Form onSubmit={handleSubmit}>
					<Modal.Body>
						<Form.Row>
							<Form.Group as={Col}>
								<Form.Label>Name</Form.Label>
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
						<Button variant="primary" type='submit' onClick={handleClose}>
							Create CI/CD
						</Button>
					</Modal.Footer>
				</Form>
			</Modal>
		</>
		
		
	)
}

export default UsersPage