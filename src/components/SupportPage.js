import React, { useState } from 'react';

import AddSupportModal from './AddSupportModal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SupportPage = () => {

	const [showModal, setShowModal] = useState(false);
	const [supportTools, setSupportTools] = useState([]);

	const handleShow = () => setShowModal(true);
	const handleClose = () => setShowModal(false);	


	return (
		<>
			<div>
				<Row className='pt-3'>

					<Col md={12}>
						<h2>Support</h2>
					</Col>
				</Row>
				<Row className='pb-4'>
					<Col md={12} className='text-right'>
						<Button onClick={handleShow}>
							<FontAwesomeIcon
								icon={['fas', 'headset']} />
						&nbsp;
						Add Support Tool
					</Button>
					</Col>
				</Row>
			</div>
			<Row className='bg-light h-100 pt-5'>
				{
					supportTools.length === 0 ? (
						<Col className='text-center pt-3'>
							<FontAwesomeIcon
								size='3x'
								icon={['fas', 'headset']} />
							<h3>You don't have any support tools added yet.</h3>
							<p>Add support tools to begin tracking now</p>
							<Button onClick={handleShow}>
								<FontAwesomeIcon
									icon={['fas', 'headset']} />
								&nbsp;
								Add Support Tool
							</Button>
						</Col>
					) : (
							<Col>

								{supportTools.map((supportTool, index) => {
									return (
										<Row key={index} className='border-bottom'>
											<Col>
												{supportTool.name}
												<Button>
													Edit
										</Button>
											</Col>

										</Row>
									)
								})}
							</Col>
						)
				}

			</Row>
			<AddSupportModal 
				supportTools={supportTools}
				setSupportTools={setSupportTools}
				showModal={showModal}
				handleClose={handleClose}/>
		</>
	)
}

export default SupportPage