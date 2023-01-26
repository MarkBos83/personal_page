import React from 'react';
import { NavLink } from 'react-router-dom';
import { Outlet } from "react-router-dom";


class MyTasks extends React.Component {

    render() {
        return (
            <div className='my-tasks'>
                <h2>My tasks</h2>
                <div className='flex'>
                    <NavLink to={"/" + this.props.id + "/All"}>All tasks</NavLink>&emsp;
                    <NavLink to={"/" + this.props.id + "/School"}>School</NavLink>&emsp;
                    <NavLink to={"/" + this.props.id + "/Social"}>Social</NavLink>&emsp;
                    <NavLink to={"/" + this.props.id + "/Home"}>Home</NavLink>&emsp;
                    <NavLink to={"/" + this.props.id + "/Misc"}>Misc</NavLink>&emsp;
                </div>
                <div className={'singleTasks' + " " + this.props.class}>
                    <Outlet />
                </div>
            </div>
        )
    }
}

export default MyTasks;