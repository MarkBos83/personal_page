import React from 'react';

export default function SingleTask(props) {

    function calculateDays() {
        if (props.deadlineDate === '') {
            return ('no deadline')
        } else {
            const date1 = new Date(props.deadlineDate)
            const date2 = new Date()

            const Difference_In_Time = date1.getTime() - date2.getTime();
            const Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
            if (isNaN(Difference_In_Days)){
                return('deadline expired')
            } else{
                return (Math.floor(Difference_In_Days) + ' days left')
            }
        }
    }

    return (
        <div className='task'>
            <div>{props.category}</div>
            <h3>{props.name}</h3>
            {calculateDays()}&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            {props.deadlineDate} &emsp;
            {props.deadlineTime} <br />
        </div>
    )
}