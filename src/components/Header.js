import React from 'react';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

const Header = ({showSignUp, setShowSignUp, showSignIn, setShowSignIn }) => {

	const handleClick = () => {
		setShowSignIn(!showSignIn)
		setShowSignUp(!showSignUp)
	}

	return (
		<Navbar fixed='top' className='header-nav'>
			<Col className='text-center pt-3'>
				<h2>Welcome to Log<span className='mint-color'>mint</span></h2>
			</Col>
			<Col className='pt-3'>
				<Button onClick={handleClick}>
					Already a member? Sign In
				</Button>
			</Col>
		</Navbar>
	)
}

export default Header