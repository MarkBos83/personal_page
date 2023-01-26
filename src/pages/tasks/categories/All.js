import React from 'react';

import SingleTask from './SingleTask'

export default class All extends React.Component {

    render() {
        return (
            <div className='tasks'>
                {this.props.tasks.map((task, index) =>
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