import React from 'react';

import SingleTask from './SingleTask'

export default function Misc(props) {
    function noTasks(){
        if (props.tasks.filter(task => task.category === 'misc').filter(task => task.state !== 'done').length===0){
            return (<p className='noTasks'>no tasks of category 'misc'</p>)
        }
    }
    return (
        <div className='tasks'>
            {props.tasks.filter(task => task.category === 'misc').filter(task => task.state !== 'done').map((task, index) =>
                <SingleTask
                    index={index}
                    deadlineDate={task.deadlineDate}
                    deadlineTime={task.deadlineTime}
                    name={task.name}
                    category={task.category}
                    key={index}
                    donefunc={props.donefunc}
                    showMenu={props.showMenu} 
                    setShowMenu={props.setShowMenu} 
                    handleOutsideClick={props.handleOutsideClick}
                    deleteTask={props.deleteTask}  
                    tasks={props.tasks}
                    setTasks={props.setTasks}
                />
            )}
            {noTasks()}
        </div>
    )
}