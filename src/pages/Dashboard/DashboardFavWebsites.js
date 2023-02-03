import { NavLink } from 'react-router-dom';

export default function Dashboard(props) {

    const goToWebsite = (website) => {
        window.open(website);
    }

    const clickedCounter = (website) => {
        const index = props.websites.findIndex(websitesingle => websitesingle.name === website);
        const updatedWebsites = props.websites
        updatedWebsites[index].clicks += 1
        props.setWebsites(updatedWebsites)
    }

    function noWebsite(){
        if (props.websites.length===0){
            return (<p className=''>no websites</p>)
        }
    }

    return (
        <div className="progress">
            <div className="flex-seeAll">
            <h2>My favorite websites</h2>
            <p className='right-side'><NavLink className='blue' to={"/websites/"}>see all...</NavLink></p>
            </div>
            <div className="flex-favWebsites">
                {props.websites.map((website, index) => {
                    if (index < 12) {
                        return (
                            <div key={website.name} className=''>
                                <div className='flex dash-favwebsites'>
                                    <span className='dash-img-web' onClick={() => { goToWebsite(website.url); clickedCounter(website.name) }}><img src={website.icon} alt='loading...' /></span>
                                    <h3 onClick={() => { goToWebsite(website.url); clickedCounter(website.name) }} className=''>{website.name}</h3>
                                </div>
                            </div>
                        )
                    }
                }
                )}
                <div className='noWebsites'>{noWebsite()}</div>
            </div>
        </div>
    )
}