import React from 'react';

import MyTasks from './tasks/Mytasks'

class Dashboard extends React.Component {




    render() {
        return (
            <div className='marg'>
                <h1>Dashboard</h1>
                <div className='grid-container'>  
                <div className='grid-item__one grid-item'>
                    <MyTasks id="Dashboard" class="dashboard-overflow"/>
                </div>
                <div className='grid-item__two grid-item'>

                </div>
                <div className='grid-item__three grid-item'>

                </div>
            </div>
            </div>
        )
    }
}

export default Dashboard;