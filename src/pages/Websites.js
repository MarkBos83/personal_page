import React from 'react';
import FavWebsites from './websites/FavWebsites';
import MostClicks from './websites/MostClicks';
import QuoteofDay from './websites/QuoteofDay';

export default function Websites(props) {
    return (
        <div className='marg'>
            <h1>Websites</h1>
            <div className='grid-container'>
                <div className='grid-item__one grid-item'>
                    <FavWebsites websites={props.websites} setWebsites={props.setWebsites}/>
                </div>
                <div className='grid-item__two grid-item'>
                    <MostClicks websites={props.websites} setWebsites={props.setWebsites} />
                </div>
                <div className='grid-item__three grid-item'>
                    <QuoteofDay />
                </div>
            </div>
        </div>
    )
}
