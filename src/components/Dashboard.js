import React from 'react'
import Sidebar from './Sidebar';
import DashboardMainContentContainer from './DashboardMainContentContainer';
import Row from 'react-bootstrap/Row';

const Dashboard = () => {

    return (
			<Row className='vh-100'>
				<Sidebar/>
				<DashboardMainContentContainer />
			</Row>
    )
}

export default Dashboard