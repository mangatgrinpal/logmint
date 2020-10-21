import React, { useState } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import AddLogsModal from './AddLogsModal';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const LogsPage = () => {

	const [ showModal, setShowModal ] = useState(false);

	const [ logs, setLogs ] = useState([])
	
	
	const handleShow = () => setShowModal(true)
	const handleClose = () => setShowModal(false)

	

	

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
						<Col>
							{logs.map((log, index)=> {
								return (
									<Row key={index} className='border-bottom'>
										<Col>
											{log.logName}
										</Col>
										
										<Button>
											Edit
										</Button>

										
									</Row>
								)
							})}
						</Col>
					)
				}
				
			</Row>
			<AddLogsModal
				logs={logs} 
				setLogs={setLogs}
				showModal={showModal}
				handleClose={handleClose}/>
		</>
	)
}

export default LogsPage