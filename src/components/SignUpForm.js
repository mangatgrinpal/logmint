import React,{useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const SignUpForm = () => {

	const [ user, setUser ] = useState({
		organization: '',
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		passwordConfirmation: ''
	});

	const [validated, setValidated] = useState(false);

	const { organization, firstName, lastName, email, password, passwordConfirmation } = user;
	
	const handleInputChange = e => {
		setUser({...user, [e.target.name]: e.target.value})
	}

	const handleSubmit = e => {
		const form = e.currentTarget;
		e.preventDefault();
		if (form.checkValidity() === false) {
			
			e.stopPropagation();	
		}

		setValidated(true)

		if (form.checkValidity()=== true) {
			console.log(user)
		}

	}

	return (
	
		<Form noValidate validated={validated} onSubmit={handleSubmit}>
			<Form.Group>
				<Form.Label>Organization</Form.Label>
				<Form.Control
					required 
					type='text'
					name='organization'
					value={organization}
					placeholder='organization'
					onChange={handleInputChange}/>

			</Form.Group>
			<Form.Group>
				<Form.Label>First Name</Form.Label>
				<Form.Control
					required 
					type='text'
					name='firstName'
					value={firstName}
					placeholder='First Name'
					onChange={handleInputChange}/>

			</Form.Group>
			<Form.Group>
				<Form.Label>Last Name</Form.Label>
				<Form.Control
					required 
					type='text'
					name='lastName'
					value={lastName}
					placeholder='Last Name'
					onChange={handleInputChange}/>

			</Form.Group>
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
			<Form.Group>
				<Form.Label>Password Confirmation</Form.Label>
				<Form.Control
					required
					type='password'
					name='passwordConfirmation'
					value={passwordConfirmation}
					placeholder='Password confirmation'
					onChange={handleInputChange}/>
			</Form.Group>
			<Button type='submit' block>
				Register
			</Button>
		</Form>
	)
}

export default SignUpForm