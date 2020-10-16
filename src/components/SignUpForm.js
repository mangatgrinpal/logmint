import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const SignInForm = () => {
	return (
		<Form>
			<Form.Group>
				<Form.Label>Email</Form.Label>
				<Form.Control 
					type='text'
					name='email'
					placeholder='email'/>

			</Form.Group>
			<Form.Group>
				<Form.Label>Password</Form.Label>
				<Form.Control
					type='password'
					placeholder='password'/>
			</Form.Group>
			<Form.Group>
				<Form.Label>Password Confirmation</Form.Label>
				<Form.Control
					type='password'
					placeholder='password'/>
			</Form.Group>
		</Form>
	)
}

export default SignInForm