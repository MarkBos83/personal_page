import React from "react";
import { useState, useEffect } from 'react';
import './EllipsisWeb.css';
import Websiteform from './../forms/websiteform'

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
                    <li className="ellipsis-menu-item" onClick={()=>props.deleteWebsite(props.website.name)}>Delete</li>
                </ul>
            )}
            <div>
                {showForm && <Websiteform saveButton={'Save changes'} setShowForm={setShowForm} showForm={showForm} name={props.website.name} description={props.website.description} url={props.website.url} icon={props.website.icon} clicks={props.website.clicks} websites={props.websites} setWebsites={props.setWebsites} />}
            </div>
        </div>
    );
};

export default EllipsisMenu;