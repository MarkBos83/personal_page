import React from 'react';

export default function FavWebsites(props) {
    const goToWebsite = (website) =>{
        console.log(website)
        window.open(website);
    }

    return (
        <div className='my-tasks fav'>
            <h2>Favorite websites</h2>
            <div className='favwebsites'>
                {props.websites.map((website, index) =>
                    <div className='task website'>
                        <div className='flex'>
                        <span className='website-img' onClick={()=>goToWebsite(website.url)}><img src={website.icon} alt='loading...' />&ensp;</span>
                        <h3 onClick={()=>goToWebsite(website.url)} className='website-name'>{website.name}</h3>
                        </div>
                        <p className='web-desc'>{website.description}</p>
                    </div>
                )}
            </div>
        </div>
    )
}
