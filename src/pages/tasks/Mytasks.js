import React from 'react';
import { NavLink } from 'react-router-dom';
import { Outlet } from "react-router-dom";
import Taskform from "./../../forms/Taskform"
import { useState } from 'react';


export default function MyTasks(props) {
    const [showForm, setShowForm] = useState(false);

    return (
        <div className='my-tasks'>
            <h2>My tasks</h2>
            <div className='flex'>
                <NavLink to={"/" + props.id + "/All"}>All tasks</NavLink>&emsp;
                <NavLink to={"/" + props.id + "/School"}>School</NavLink>&emsp;
                <NavLink to={"/" + props.id + "/Social"}>Social</NavLink>&emsp;
                <NavLink to={"/" + props.id + "/Home"}>Home</NavLink>&emsp;
                <NavLink to={"/" + props.id + "/Misc"}>Misc</NavLink>&emsp;
                {props.seeAll}
            </div>
            <div className={'singleTasks ' + props.class}>
                <Outlet />
            </div>
            <div className='addTasks'><button className='addTasksButton' onClick={() => setShowForm(true)}>+</button>
                {showForm && <Taskform setShowForm={setShowForm} showForm={showForm} saveButton={'Add task'} tasks={props.tasks} setTasks={props.setTasks} state={'in progress'}/>}
            </div>
        </div>
    )
}
