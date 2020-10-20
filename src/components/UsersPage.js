import React, { useState } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const UsersPage = () => {

	const [ showModal , setShowModal] = useState(false);

	const handleShow = () => setShowModal(true);
	const handleClose = () => setShowModal(false);

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
			</Row>
			<Modal show={showModal} onHide={handleClose} centered>
				<Modal.Header closeButton>
					<Modal.Title>Modal heading</Modal.Title>
				</Modal.Header>
				<Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
          </Button>
					<Button variant="primary" onClick={handleClose}>
						Save Changes
          </Button>
				</Modal.Footer>
			</Modal>
		</>
		
		
	)
}

export default UsersPage