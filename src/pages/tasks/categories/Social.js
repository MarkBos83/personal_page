import React from 'react';

import SingleTask from './SingleTask'

export default function Social(props) {
    return (
        <div className='tasks'>
            {props.tasks.filter(task => task.category === 'social').map((task, index) =>
                <SingleTask
                    index={index}
                    deadlineDate={task.deadlineDate}
                    deadlineTime={task.deadlineTime}
                    name={task.name}
                    category={task.category}
                    key={index}
                />
            )}
        </div>
    )
}