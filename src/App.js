import React from 'react';
import './App.css';
import SignInForm from './components/SignInForm';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


function App() {

  return (
  	<Container fluid={true}>
  		<Row>
  			<Col>
  				<h1>Welcome to Logmint</h1>
  			</Col>
  		</Row>
  		<Row>
  			<Col xs={6} md={3}>
  				<SignInForm />
  			</Col>
  		</Row>
  		<Row className='pt-5'>
  			<Button>Google</Button>
  			<Button>Microsoft</Button>
  		</Row>
  	</Container>
  );
}

export default App;
