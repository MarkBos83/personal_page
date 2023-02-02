import React, { useState } from 'react';
import './form.css';

const Form = (props) => {
  const [name, setName] = useState(props.name||'');
  const [deadlineDate, setDeadlineDate] = useState(props.deadlineDate||'');
  const [deadlineTime, setDeadlineTime] = useState(props.deadlineTime||'');
  const [category, setCategory] = useState(props.category||'');
  const newTask = [{name: name, deadlineDate: deadlineDate, deadlineTime: deadlineTime, category: category, state: props.state}]

  const handleSubmit = () => {
    if (!name || !category) {
      return;
    }
    const index = props.tasks.findIndex(task => task.name === props.name && task.deadlineDate === props.deadlineDate);
    const edittedTasks = props.tasks.filter(task => task !== props.tasks[index]);
    props.setTasks(newTask.concat(edittedTasks))
    props.setShowForm(false);
    resetValues()
  };

  const resetValues = ()=> {
    setName(props.name||'');
    setDeadlineDate(props.deadlineDate||'');
    setDeadlineTime(props.deadlineTime||'');
    setCategory(props.category||'');
  }


  return (
    <div>
      {props.showForm && (
        <>
          <div className="backdrop"></div>
          <form onSubmit={handleSubmit} className="form">
            <input
              type="text"
              placeholder="Task Name"
              maxLength={30}
              required
              value={name}
              onChange={(event) => setName(event.target.value)}
            /> <br/>
            <input
              type="date"
              value={deadlineDate}
              onChange={(event) => setDeadlineDate(event.target.value)}
            /> <br/>
            <input
              type="time"
              value={deadlineTime}
              onChange={(event) => setDeadlineTime(event.target.value)}
            /> <br/>
            <select
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              required
            >
              <option value="">Category</option>
              <option value="school">School</option>
              <option value="social">Social</option>
              <option value="home">Home</option>
              <option value="misc">Misc</option>
            </select> <br/> 
            <button type="submit">{props.saveButton}</button>
            <button onClick={() => {props.setShowForm(false);resetValues()}}>cancel</button>
          </form>
        </>
      )}
    </div>
  );
};

export default Form;