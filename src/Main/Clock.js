import { useState, useEffect } from 'react';
function Clock() {
    const [date, setDate] = useState(new Date());

    function refreshClock() {
        setDate(new Date());
    }
    
    useEffect(() => {
        const timerId = setInterval(refreshClock, 1000);
        return function cleanup() {
            clearInterval(timerId);
        };
    }, []);
    return (
        <>
            <span id='date'>{date.toLocaleDateString('nl-NL')}</span>
            <span id='time'>{date.toLocaleTimeString('nl-NL')}</span>
        </>
    );
}
export default Clock;
