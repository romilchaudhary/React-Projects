import React from "react";
import { useState, useEffect } from "react";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const QuoteDetails = () => {
    const params = useParams();
    const routeMatch = useRouteMatch();
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

    const quote = quotes.find(quote => quote.id === params.quoteId);

    if(loading){
        return <div className="centered"><LoadingSpinner /></div>
    }

    if(!quote){
        return <div className="centered">NO QUOTE FOUND!</div>
    }
    return (
        <React.Fragment>
            <HighlightedQuote text={quote.text} author={quote.author} />
            <Route path={`${routeMatch.path}`} exact>
                <div className="centered">
                    <Link className="btn--flat" to={`${routeMatch.url}/comments`}>Load Comment</Link>
                </div>
            </Route>            
            <Route path={`${routeMatch.path}/comments`}>
                <Comments />
            </Route>         
        </React.Fragment>        
    )
};

export default QuoteDetails;