import React, { useState } from 'react';
import Ellipsis from './../../../ellipsis/Ellipsis'

export default function SingleTask(props) {
  const [checked, setChecked] = useState(false);

  function daysUntilDeadline(date) {
    let deadlineTime = 0;
    if (props.deadlineTime === "") {
      deadlineTime = "23:59:59"
    } else {
      deadlineTime = props.deadlineTime
    }
    if (!date) {
      return "no deadline";
    }
    const today = new Date();
    const deadline = new Date(date + " " + deadlineTime);
    if (deadline < (today)) {
      return "deadline expired";
    }
    if (deadline.toDateString() === today.toDateString()) {
      const timeDiff = deadline.getTime() - today.getTime();
      const diffHours = Math.floor(timeDiff / (1000 * 3600));
      if (diffHours === 0) {
        return (`${Math.floor(timeDiff / (1000 * 60))} minutes left`)
      }
      return `${diffHours} hours left`;
    }
    const timeDiff = deadline.getTime() - today.getTime();
    const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return `${diffDays} days left`;
  }

  const handleClick = () => {
    // call doneFunc when button is clicked
    setChecked(true);
    setTimeout(() => {
      props.donefunc(props.name, props.deadlineDate);
      setChecked(false)
    }, 250);
  }

  return (
    <div className='task'>
      <div>{props.category}</div>
      <h3>{props.name}</h3>
      {daysUntilDeadline(props.deadlineDate)}&emsp; <br />
      {props.deadlineDate} &emsp;
      {props.deadlineTime}
      <label className='checkbox-container'>
        <input
          type='checkbox'
          checked={checked}
          onChange={handleClick}
        />
        <span className='checkmark' />
      </label>
      <div className='ellipsis'><Ellipsis
        deadlineDate={props.deadlineDate}
        deadlineTime={props.deadlineTime}
        name={props.name}
        showMenu={props.showMenu}
        setShowMenu={props.setShowMenu}
        handleOutsideClick={props.handleOutsideClick}
        deleteTask={props.deleteTask}
        category={props.category}
        tasks={props.tasks}
        setTasks={props.setTasks} />
      </div>
    </div>
  )
}