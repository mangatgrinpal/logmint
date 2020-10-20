import React, { useState } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const LogsPage = () => {

	const [ showModal, setShowModal ] = useState(false);
	const [ logs, setLogs ] = useState([])
	const [ logInfo, setLogInfo ] = useState({
		logName: ''
	})
	
	const handleShow = () => setShowModal(true)
	const handleClose = () => setShowModal(false)

	const handleInputChange = e => {
		setLogInfo({...logInfo, [e.target.name]: e.target.value})
	}

	const handleSubmit = e => {
		e.preventDefault()
		const newLogs = Object.assign([])
		newLogs.push(logInfo)
		setLogs(newLogs)

	}

	const { logName } = logInfo;

	return (
		<>
			<Row className='pt-3'>
				<Col md={12}>
					<h2>CI/CD</h2>
				</Col>
			</Row>
			<Row className='pb-4'>
				<Col md={12} className='text-right'>
					<Button onClick={handleShow}>
						<FontAwesomeIcon 
							icon={['fas','clipboard-list']} />
						&nbsp;
						Add CI/CD
					</Button>
				</Col>
			</Row>
			<Row className='bg-light h-100 pt-5'>
				{
					logs.length === 0 ? (
						<Col className='text-center pt-3'>
							<FontAwesomeIcon
								size='3x'
								icon={['fas', 'cloud-upload-alt']} />
							<h3>You haven't added any logs yet.</h3>
							<p>Add a CI/CD to begin tracking now</p>
							<Button onClick={handleShow}>
								<FontAwesomeIcon
									icon={['fas', 'clipboard-list']} />
								&nbsp;
								Add CI/CD
							</Button>
						</Col>
					) : (

							logs.map((log, index)=> {
								return (
									<Row key={index}>
										<Col>
											{log.logName}
										</Col>
									</Row>
								)
							})

					)
				}
				
			</Row>
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
									value={logName}/>
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

export default LogsPage