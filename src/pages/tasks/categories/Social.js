import React from 'react';

import SingleTask from './SingleTask'

export default class Social extends React.Component {
    
    render() {
        return (
            <div className='tasks'>
                {this.props.tasks.filter(task => task.category === 'social').map((task, index) =>
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
}