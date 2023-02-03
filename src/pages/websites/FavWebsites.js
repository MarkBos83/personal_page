import React, { useState } from 'react';
import EllipsisWeb from './../../ellipsis/EllipsisWeb'
import Websiteform from './../../forms/websiteform'

export default function FavWebsites(props) {
    const [showForm, setShowForm] = useState(false);

    const goToWebsite = (website) => {
        window.open(website);
    }

    const clickedCounter = (website) => {
        const index = props.websites.findIndex(websitesingle => websitesingle.name === website);
        const updatedWebsites = props.websites
        updatedWebsites[index].clicks += 1
        props.setWebsites(updatedWebsites)
    }

    function noWebsite() {
        if (props.websites.length === 0) {
            return (<p className=''>no websites</p>)
        }
    }

    return (
        <div className='my-tasks fav'>
            <h2>Favorite websites</h2>
            <div className='favwebsites'>
                {props.websites.map((website, index) =>
                    <div key={website.name} className='task website'>
                        <div className='flex'>
                            <span className='website-img' onClick={() => { goToWebsite(website.url); clickedCounter(website.name) }}><img src={website.icon} alt='loading...' />&ensp;</span>
                            <h3 onClick={() => { goToWebsite(website.url); clickedCounter(website.name) }} className='website-name'>{website.name}</h3>
                        </div>
                        <p className='web-desc'>{website.description}</p>
                        <div className='ellipsis'>
                            <EllipsisWeb
                                deleteWebsite={props.deleteWebsite}
                                website={website}
                                websites={props.websites}
                                setWebsites={props.setWebsites}
                            />
                        </div>
                    </div>
                )}
                <div className='noWebsites'>{noWebsite()}</div>
            </div>
            <div className='addTasks'><button className='addTasksButton' onClick={() => setShowForm(true)}>+</button>
                {showForm && <Websiteform setShowForm={setShowForm} showForm={showForm} saveButton={'Add website'} websites={props.websites} setWebsites={props.setWebsites} />}
            </div>
        </div>
    )
}
