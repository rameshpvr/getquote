import React, { useState, useEffect, Fragment } from 'react';

function Quote() {

    const [quoteInfo, setQuoteInfo] = useState({});
    const APIURL = 'https://api.quotable.io/random';

    useEffect(() => {
        getQuote();
    }, []);

    const getQuote = async() => {
        try {
            const res = await fetch(APIURL);
            const data = await res.json();
            setQuoteInfo(data); 
        } catch (error) {
            setQuoteInfo({});
        }
        
    }

    const { content, author } = quoteInfo;

    return (
        
        <div className="quote">
        {
            (content && author) ?  
                <Fragment>
                    <blockquote>
                        {quoteInfo.content ? quoteInfo.content : ""}
                        <p id="author">- {quoteInfo.author ? quoteInfo.author : ""}</p>
                    </blockquote>
                    <button id="getNewQuote" onClick={() => getQuote()}>Get New Quote</button>
                </Fragment> 
            :
                <p>Loading!, Kindly Wait</p>
            
        }
        </div>
    )
}

export default Quote;
