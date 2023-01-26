import React from 'react';

import SingleTask from './SingleTask'

export default class Home extends React.Component {

    render() {
        return (
            <div className='tasks'>
                {this.props.tasks.filter(task => task.category === 'home').map((task, index) =>
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