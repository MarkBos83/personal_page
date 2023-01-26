import React from 'react';

import Clock from './Clock';

class Header extends React.Component {

    render() {
        return (
            <header>
                <div className='datetime'>
                    <Clock/>
                </div>
            </header>
        )
    }
}

export default Header;