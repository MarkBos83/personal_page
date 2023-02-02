export default function Dashboard(props) {

    const goToWebsite = (website) =>{
        window.open(website);
    }

    const clickedCounter = (website) => {
        const index = props.websites.findIndex(websitesingle => websitesingle.name === website);
        const updatedWebsites=props.websites
        updatedWebsites[index].clicks+=1
        props.setWebsites(updatedWebsites)
    }

    return(
        <div className="progress">
            <h2>My favorite websites</h2>
            <div className="flex-favWebsites">
            {props.websites.map((website, index) =>
                    <div  key={website.name} className=''>
                        <div className=''>
                        <span className='' onClick={()=>{goToWebsite(website.url);clickedCounter(website.name)}}><img src={website.icon} alt='loading...' />&ensp;</span>
                        <h3 onClick={()=>{goToWebsite(website.url);clickedCounter(website.name)}} className=''>{website.name}</h3>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}