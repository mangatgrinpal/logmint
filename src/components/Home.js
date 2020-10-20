import React from 'react';

import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { CSSTransition } from 'react-transition-group';

const Home = ({ showSignUp, setShowSignUp, showSignIn, setShowSignIn }) => {

	return (
		<Row>

			<Container fluid={true}>
				<Row className='hero-image vh-100' />
			</Container>

			<CSSTransition
				in={showSignUp}
				timeout={600}
				unmountOnExit
				classNames='complete-fade'>

				<Container
					fluid={true}
					className='position-absolute main-content'>
					<Row>
						<Col
							className='border rounded sign-up-form-container pt-3 pb-5 my-4 bg-light h-75'
							md={{ span: 3, offset: 7 }}>
							<Row>
								<Col className='mx-2'>
									<h4>Save precious dev hours</h4>
									<p>Sign up today dudes</p>
								</Col>
							</Row>
							<Row>
								<Col className='mx-2'>
									<SignUpForm />
								</Col>
							</Row>
						</Col>
					</Row>
				</Container>
			</CSSTransition>
			<CSSTransition
				in={showSignIn}
				timeout={600}
				unmountOnExit
				classNames='complete-fade'>

				<Container
					fluid={true}
					className='position-absolute main-content'>
					<Row>
						<Col
							className='border rounded sign-up-form-container pt-3 pb-5 my-4 bg-light h-75'
							md={{ span: 3, offset: 7 }}>
							<Row>
								<Col className='mx-2'>
									<h4>Welcome back, sign in</h4>
								</Col>
							</Row>
							<Row className='dividing-line'>
								<Col className='mx-2'>
									<SignInForm
										showSignUp={showSignUp}
										setShowSignUp={setShowSignUp}
										showSignIn={showSignIn}
										setShowSignIn={setShowSignIn} />
								</Col>
							</Row>
						</Col>
					</Row>
				</Container>
			</CSSTransition>
		</Row>

	)
}

export default Home