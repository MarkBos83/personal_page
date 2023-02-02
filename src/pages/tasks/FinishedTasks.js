import React from 'react';
import Ellipsis from './../../ellipsis/Ellipsis'


export default function FinishedTasks(props) {

    const handleClick = (name, deadlineDate) => {
        setTimeout(() => {
            props.donefunc(name, deadlineDate);
        }, 500);
    }

    return (
        <div className='finishedTasks'>
            <h2>Finished Tasks</h2>
            <div className='finishedTasks-overflow'>
                {props.tasks.filter(task => task.state === 'done').map((task, index) =>
                    <div className='finishedTask' key={task.name}>
                        <p>{task.category}</p>
                        <h3>{task.name}</h3>
                        <input
                            type='checkbox'
                            defaultChecked
                            onClick={() => handleClick(task.name, task.deadlineDate, index)}
                        />
                        <div className='ellipsisFinishedTasks'><Ellipsis
                            deadlineDate={task.deadlineDate}
                            deadlineTime={task.deadlineTime}
                            name={task.name}
                            showMenu={props.showMenu}
                            setShowMenu={props.setShowMenu}
                            handleOutsideClick={props.handleOutsideClick}
                            deleteTask={props.deleteTask}
                            category={task.category}
                            tasks={props.tasks}
                            setTasks={props.setTasks}
                            state={task.state} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}