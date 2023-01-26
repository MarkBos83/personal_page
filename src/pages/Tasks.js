import React from 'react';

import MyTasks from './tasks/Mytasks'
import Progress from './tasks/Progress'
import FinishedTasks from './tasks/FinishedTasks';

class Tasks extends React.Component {




    render() {
        return (
            <div className='marg'>
                <h1>Tasks</h1>
                <div className='grid-container'>  
                <div className='grid-item__one grid-item'>
                    <MyTasks id="Tasks" class="tasks-overflow"/>
                </div>
                <div className='grid-item__two grid-item'>
                    <Progress />
                </div>
                <div className='grid-item__three grid-item'>
                    <FinishedTasks />
                </div>
            </div>
            </div>
        )
    }
}

export default Tasks;