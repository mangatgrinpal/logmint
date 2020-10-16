import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

const SignInForm = ({
	setShowSignUp, 
	setShowSignIn
}) => {

	const [ user, setUser ] = useState({
		email: '',
		password: ''
	})

	const handleClick = () => {
		setShowSignIn(false)
		setShowSignUp(true)
	}

	const handleSubmit = e => {
		e.preventDefault();
		console.log(user)
	}

	const handleInputChange = e => {
		setUser({...user, [e.target.name]: e.target.value})
	}

	const { email, password } = user;

	return (
		<Form onSubmit={handleSubmit}>
			<Form.Group>
				<Form.Label>Email</Form.Label>
				<Form.Control 
					type='text'
					name='email'
					value={email}
					placeholder='email'
					onChange={handleInputChange}/>

			</Form.Group>
			<Form.Group>
				<Form.Label>Password</Form.Label>
				<Form.Control
					type='password'
					name='password'
					value={password}
					placeholder='password'
					onChange={handleInputChange}/>
			</Form.Group>
			<Button type='submit'>
				Sign in
			</Button>
			<Row className='pt-5'>
  			<Button>Google</Button>
  			<Button>Microsoft</Button>
  		</Row>
  		<Row>
  			<Button onClick={handleClick}> Cancel</Button>
  		</Row>
		</Form>
	)
}

export default SignInForm