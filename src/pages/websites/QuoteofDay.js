import React, { useState, useEffect } from 'react';

export default function QuoteofDay(props) {
    const [quotes, setQuotes] = useState([]);
    let [number, setNumber] = useState(0)

    function refreshQuote() {
        setNumber(Math.floor(Math.random() * quotes.length));
    }
    
    useEffect(() => {
        const timerId = setInterval(refreshQuote, 60000);
        return function cleanup() {
            clearInterval(timerId);
        };
    }, []);

    useEffect(() => {
        fetch("https://type.fit/api/quotes")
            .then(response => response.json())
            .then(data => {
                setQuotes(data)
            })
            .catch(error => console.error(error));
    }, []);

    return (
        <div className='QuoteOfDay'>
            <h2>Quote of the minute</h2>
            <div className='quote'>
                {quotes.length > 0 && (
                    <div>{quotes[number].text}</div>
                )}
            </div>

        </div>
    )
}