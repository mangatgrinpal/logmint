import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const SignUpForm = () => {
	return (
		<Form>
			<Form.Group>
				<Form.Label>Organization</Form.Label>
				<Form.Control 
					type='text'
					name='organization'
					placeholder='organization'/>

			</Form.Group>
			<Form.Group>
				<Form.Label>First Name</Form.Label>
				<Form.Control 
					type='text'
					name='firstName'
					placeholder='First Name'/>

			</Form.Group>
			<Form.Group>
				<Form.Label>Last Name</Form.Label>
				<Form.Control 
					type='text'
					name='lastName'
					placeholder='Last Name'/>

			</Form.Group>
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
					placeholder='Password confirmation'/>
			</Form.Group>
			<Button block>
				Register
			</Button>
		</Form>
	)
}

export default SignUpForm