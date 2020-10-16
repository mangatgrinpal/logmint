import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
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
			<Button>
				Submit
			</Button>
			<Row className='pt-5'>
  			<Button>Google</Button>
  			<Button>Microsoft</Button>
  		</Row>
		</Form>
	)
}

export default SignInForm