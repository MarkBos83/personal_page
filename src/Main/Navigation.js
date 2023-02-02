import React from 'react';
import { NavLink } from 'react-router-dom';
import dashboard from './../img/dashboard.png';
import tasks from './../img/tasks.png';
import websites from './../img/websites.png';
import logo from './../img/tele.png';
import Loremlogo from './../img/lorem.jpg'

export default function Navigation(props) {
    return (
        <div className='navigation'>
            <div>
                <nav className='loremlogo'><img src={Loremlogo} alt='' />
                    Lorem</nav>
            </div>
            <div className='logo'>
                <img src={logo} alt='' />
                <div>{props.account.username}</div>
            </div>

            <ul>
                <li><NavLink to="/Dashboard"><img src={dashboard} alt='' /> Dashboard</NavLink></li>
                <li><NavLink to="/Tasks"><img src={tasks} alt='' /> Tasks</NavLink></li>
                <li><NavLink to="/Websites"><img src={websites} alt='' /> Websites</NavLink></li>
            </ul>
        </div>
    )
}

