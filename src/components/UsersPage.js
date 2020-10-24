import React, { useState } from 'react';
import AddUserModal from './AddUserModal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const UsersPage = () => {

	const [ showModal , setShowModal] = useState(false);
	const [ users, setUsers ] = useState([]);
	const handleShow = () => setShowModal(true);
	const handleClose = () => setShowModal(false);	

	return (
		<>
			<div>
				<Row className='pt-3'>
					<Col md={12}>
						<h2>Users & Groups</h2>
					</Col>
				</Row>
				<Row className='pb-4'>
					<Col md={12} className='text-right'>
						<Button onClick={handleShow}>
							<FontAwesomeIcon
								icon={['fas', 'user']} />
						&nbsp;
						Add User
					</Button>
					</Col>
				</Row>
			</div>

			<Row className='bg-light h-100 pt-5'>
				{
					users.length === 0 ? (
						<Col className='text-center pt-3'>
							<FontAwesomeIcon
								size='3x'
								icon={['fas', 'user-friends']} />
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
						<Col>
							{users.map((user, index)=> {
								return (
									<Row key={index} className='border-bottom'>
										<Col>
											{user.email}
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

			<AddUserModal
				users={users}
				setusers={setUsers} 
				showModal={showModal}
				handleClose={handleClose}/>
		</>
		
		
	)
}

export default UsersPage