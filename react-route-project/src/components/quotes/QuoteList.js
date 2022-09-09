import { Fragment } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const sortingQuotes = (quotes, isSorting) => {
  return quotes.sort((quoteA, quoteB) => {
      if(isSorting !== "asc"){
          return quoteA.author > quoteB.author? 1: -1;
      }
      else{
        return quoteA.author > quoteB.author ? -1 : 1;
      }
  });
};

const QuoteList = (props) => {
  const history = useHistory();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const isSorting = queryParams.get('sort') === "asc" ? "desc": "asc";

  const sortedQuotes = sortingQuotes(props.quotes, isSorting);

  const onSortingQuotes = () => {    
    //history.push(`${location.pathname}?sort=${isSorting}`);  
    history.push({
      pathname: location.pathname,
      search: `?sort=${isSorting}`
    })    
  }

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={onSortingQuotes}>Sort {isSorting === "asc" ? "Ascending" : "Descending"}  </button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
