import React from 'react';
import { useLinkClickHandler } from 'react-router-dom';

export default function MostClicks(props) {


    const goToWebsite = (website) => {
        window.open(website);
    }

    const clickedCounter = (website) => {
        const index = props.websites.findIndex(websitesingle => websitesingle.name === website);
        const updatedWebsites=props.websites
        updatedWebsites[index].clicks+=1
        props.setWebsites(updatedWebsites)
    }

    return (
        <div className='mostClicks'>
            <h2>Most clicks</h2>
            <div className='flex height'>
                {props.websites.map((website, index) => {
                    if (index < 4) {
                        return (
                            <div key={website.name} className='mostClicksSite' onClick={()=>{goToWebsite(website.url);clickedCounter(website.name)}}>
                                <span className='icon-mostclicks'><img src={website.icon}/></span>
                                <p className='clicks'>{website.clicks}</p>
                            </div>
                        )
                    }
                    return (null)
                }
                )}
            </div>
        </div>
    )
}
