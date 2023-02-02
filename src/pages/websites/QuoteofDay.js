import React, { useState, useEffect } from 'react';

export default function QuoteofDay(props) {
    const [quoteIndex, setQuoteIndex] = useState(0);
    const [quotes, setQuotes] = useState([]);

    useEffect(() => {
        const today = new Date().toLocaleDateString();
        const storedDate = localStorage.getItem('quoteDate');
        if (!storedDate || storedDate !== today) {
            localStorage.setItem('quoteDate', today);
            setQuoteIndex(Math.floor(Math.random() * quotes.length));
        }
    }, [quotes]);

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
            <h2>Quote of the day</h2>
            <div className='quote'>
                {quotes.length > 0 && (
                    <div>{quotes[quoteIndex].text}</div>
                )}
            </div>

        </div>
    )
}