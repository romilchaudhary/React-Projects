import QuoteForm from "../components/quotes/QuoteForm";
import { useHistory } from "react-router-dom";

const NewQuotes = () => {
    const history = useHistory();
    const onAddNewQuoteHandler = (quotedData) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(quotedData)
        };
        console.log(quotedData);
        fetch('https://react-6d977-default-rtdb.firebaseio.com/quotes.json', requestOptions).then((response)=>{
            return response.json();

        }).then((data)=> 
        {
            history.push("/quotes"); // wo can go back
            // history.replace("/quotes"); // you can't go back            
        });
        
        
    };

    return (
        <QuoteForm onAddQuote={onAddNewQuoteHandler} />
    )
};

export default NewQuotes;