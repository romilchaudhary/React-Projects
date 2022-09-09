import React from "react";
import { useEffect, useState } from "react";
import QuoteList from "../components/quotes/QuoteList";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const AllQuotes = () => {
    const [quotes, setQuotes] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('https://react-6d977-default-rtdb.firebaseio.com/quotes.json').then((response)=>{
            if(response.ok) {
                setLoading(false);
            }
            return response.json();
        }).then((data)=> 
        {
            const transformedQuotes = []
            for (const key in data){
                const quoteObj = {
                    id: key,
                    ...data[key]
                }
                transformedQuotes.push(quoteObj);
            };            
            setQuotes(transformedQuotes);            
        });
    }, []);

    return (
        <React.Fragment>
            {
                loading ? <div className="centered"><LoadingSpinner /></div> : ""
            }
            <QuoteList quotes={quotes} />
        </React.Fragment>        
    )
};

export default AllQuotes;