import React from 'react';
import './App.css';
import Header from './components/Header';

import SignUpForm from './components/SignUpForm';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




function App() {

  return (
  	<Container fluid={true}>

  		<Header />
  		<Row>

  		<Container fluid={true}>
  			<Row className='hero-image vh-100'/>
  		</Container>
  		<Container fluid={true} className='position-absolute main-content'>
  			<Row>
  				<Col className='border rounded sign-up-form-container pt-3 pb-5 my-4 bg-light h-75' md={{span: 3, offset: 7}}>
  					<Row>
  						<Col className='mx-2'>
  							<h4>Save precious dev hours</h4>
  							<p>Sign up today dudes</p>
  						</Col>
  					</Row>
  					<Row>
  						<Col className='mx-2'>
  							<SignUpForm/>
  						</Col>
  					</Row>
  				</Col>
  			</Row>
  		</Container>
  		</Row>
  		
  	</Container>
  );
}

export default App;
