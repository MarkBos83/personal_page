import React from 'react';

export default function Progress(props) {
    const totalTasks = props.tasks.length
    const finishedTasks = props.tasks.filter(task => task.state === 'done').length
    const unfinishedTasksToday = props.tasks.filter(task => task.state !== 'done').filter(task => {
        const deadlineDate = new Date(task.deadlineDate);
        const today = new Date();
        return deadlineDate.getFullYear() === today.getFullYear() &&
            deadlineDate.getMonth() === today.getMonth() &&
            deadlineDate.getDate() === today.getDate();
    }).length

    return (
        <div className='progress'>
            <h2>Progress</h2>
            <div className='flex hw'>
                <div className='Taskstoday progressblock'>
                    <div>
                        <p className='bold'>{unfinishedTasksToday}</p>
                        <p className='progresstext'>tasks left <br />
                            today</p></div>
                </div>
                <div className='amountdone progressblock'>
                    <div>
                        <p className='bold'>{finishedTasks} / {totalTasks}</p> 
                        <p className='progresstext'>done</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
