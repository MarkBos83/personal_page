import React from 'react';
import { NavLink } from 'react-router-dom';

import MyTasks from './tasks/Mytasks'

export default function Dashboard(props) {
    return (
        <div className='marg'>
            <h1>Dashboard</h1>
            <div className='grid-container'>
                <div className='grid-item__one grid-item'>
                    <MyTasks id="Dashboard" class="dashboard-overflow" seeAll={<NavLink className='blue' to={"/tasks/all"}>see all...</NavLink>} tasks={props.tasks} setTasks={props.setTasks}/>
                </div>
                <div className='grid-item__two grid-item background-white'>

                </div>
                <div className='grid-item__three grid-item'>

                </div>
            </div>
        </div>
    )
}
