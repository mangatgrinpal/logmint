import React from 'react';
import './App.css';
import SignInForm from './components/SignInForm';
import SignUpForm from './components/SignUpForm';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';


function App() {

  return (
  	<Container fluid={true}>
  		<Row>
  			<Col>
  				<h1>Welcome to Logmint</h1>
  			</Col>
  			<Col>
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
  		</Row>

  		<Row className='border-top hero-image vh-100'>
  			<Col className='border py-5 my-5 bg-light' xs={6} md={{span: 3, offset: 7}}>
  				<Row>
  					<Col>
  						<h1>Get signed up</h1>
  						
  					</Col>
  				</Row>
  				<Row>
  					<Col>
  						<SignUpForm/>
  					</Col>
  				</Row>
  				

  			</Col>
  			
  		</Row>
  		
  	</Container>
  );
}

export default App;
