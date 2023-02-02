import React from 'react';

import MyTasks from './tasks/Mytasks'
import Progress from './tasks/Progress'
import FinishedTasks from './tasks/FinishedTasks';

export default function Tasks(props) {
    return (
        <div className='marg'>
            <h1>Tasks</h1>
            <div className='grid-container'>
                <div className='grid-item__one grid-item'>
                    <MyTasks id="Tasks" class="tasks-overflow" tasks={props.tasks} setTasks={props.setTasks}/>
                </div>
                <div className='grid-item__two grid-item'>
                    <Progress tasks={props.tasks} />
                </div>
                <div className='grid-item__three grid-item'>
                    <FinishedTasks 
                    tasks={props.tasks} 
                    setTasks={props.setTasks} 
                    donefunc={props.donefunc} 
                    deleteTask={props.deleteTask}
                    showMenu={props.showMenu} 
                    setShowMenu={props.setShowMenu} 
                    handleOutsideClick={props.handleOutsideClick}
                    />
                </div>
            </div>
        </div>
    )
}