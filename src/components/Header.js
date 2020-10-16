import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import Navbar from 'react-bootstrap/Navbar';

import SignInForm from './SignInForm';

const Header = () => {
	return (
		<Navbar fixed='top' className='header-nav'>
			<Col className='text-center pt-3'>
				<h2>Welcome to Log<span className='mint-color'>mint</span></h2>
			</Col>
			<Col className='text-center'>
				<Dropdown>
					<Dropdown.Toggle>
						Already a member? Sign In
					</Dropdown.Toggle>
					<Dropdown.Menu>
						<Col xs={12}>

							<SignInForm />
							
						</Col>
					</Dropdown.Menu>
				</Dropdown>
			</Col>
		</Navbar>
	)
}

export default Header