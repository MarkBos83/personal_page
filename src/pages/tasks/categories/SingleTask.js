import React from 'react';

export default class All extends React.Component {

    render() {
        return (
            <div className='task'>
                {this.props.name}
                {this.props.category}
                {this.props.deadlineDate}
                {this.props.deadlineTime}
                {this.props.index}
                <br />
                <br />
                
            </div>
        )
    }
}