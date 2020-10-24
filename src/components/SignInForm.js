import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SignInForm = ({
	setShowSignUp, 
	setShowSignIn
}) => {

	const [ user, setUser ] = useState({
		email: '',
		password: ''
	})

	const [ validated, setValidated ] = useState(false);

	const handleClick = () => {
		setShowSignIn(false)
		setShowSignUp(true)
	}

	const handleSubmit = e => {
		const form = e.currentTarget;
		e.preventDefault();
		if (form.checkValidity() === false) {
			e.stopPropagation();	
		}
		setValidated(true)
	}

	const handleInputChange = e => {
		setUser({...user, [e.target.name]: e.target.value})
	}

	const { email, password } = user;

	return (
		<Form noValidate validated={validated} onSubmit={handleSubmit}>

			<Form.Group>
				<Form.Label>Email</Form.Label>
				<Form.Control
					required 
					type='text'
					name='email'
					value={email}
					placeholder='email'
					onChange={handleInputChange}/>
			</Form.Group>

			<Form.Group>
				<Form.Label>Password</Form.Label>
				<Form.Control
					required
					type='password'
					name='password'
					value={password}
					placeholder='password'
					onChange={handleInputChange}/>
			</Form.Group>

			<div className='text-right'>
				<Button 
					onClick={handleClick}
					className='mr-1'> Cancel</Button>
				<Button type='submit'>
					Sign in
				</Button>
			</div>

			<Row className='pt-2'>
				<Col className='text-center pb-1'>
					<h6><span>or</span></h6>
				</Col>
				<Button className='my-2' block>
					<FontAwesomeIcon 
						icon={['fab', 'google']}/>
						&nbsp;
					Sign in with Google
				</Button>
				<br/>
				<Button block>
					<FontAwesomeIcon
						icon={['fab', 'microsoft']} />
						&nbsp;
					Sign in with Microsoft
				</Button>
			</Row>
		</Form>
	)
}

export default SignInForm