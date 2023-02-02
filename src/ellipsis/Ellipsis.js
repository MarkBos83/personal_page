import React from "react";
import { useState, useEffect } from 'react';
import './Ellipsis.css';
import Taskform from './../forms/Taskform'

const EllipsisMenu = (props) => {

    const [showMenu, setShowMenu] = useState(false);
    const [showForm, setShowForm] = useState(false);

    const handleClick = () => {
        setTimeout(() => {
            setShowMenu(!showMenu);
        }, 5);
    };

    useEffect(() => {
        setShowMenu(false);
    }, [props.showMenu]);

    return (
        <div onClick={handleClick} className="ellipsis-button">
            <span>...</span>
            {showMenu && (
                <ul onClick={props.handleOutsideClick} className="ellipsis-menu">
                    <li className="ellipsis-menu-item" onClick={()=>setShowForm(true)}>Edit</li>
                    <li className="ellipsis-menu-item" onClick={()=>props.deleteTask(props.name, props.deadlineDate)}>Delete</li>
                </ul>
            )}
            <div>
                {showForm && <Taskform saveButton={'Save changes'} setShowForm={setShowForm} showForm={showForm} name={props.name} category={props.category} deadlineDate={props.deadlineDate} deadlineTime={props.deadlineTime} tasks={props.tasks} setTasks={props.setTasks} state={props.state}/>}
            </div>
        </div>
    );
};

export default EllipsisMenu;