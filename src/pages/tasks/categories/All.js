import React from 'react';

import SingleTask from './SingleTask'

export default function All(props) {
    return (
        <div className='tasks'>
            {props.tasks.map((task, index) =>
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