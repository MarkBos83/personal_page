import React from 'react';

import Clock from './Clock';

export default function Header(props) {
    return (
        <header>
            <div className='datetime'>
                <Clock />
            </div>
        </header>
    )
}