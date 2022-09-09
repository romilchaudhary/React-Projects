import React, { useState, useEffect, useContext } from 'react';
import AuthContext from '../../store/auth-context';

function PageTitle() {
  const [count, setCount] = useState(0);
  const ctx = useContext(AuthContext);
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    console.log("update state")
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <div>
      {
        ctx.isLoggedIn && <button onClick={() => setCount(count + 1)}>
        Update Page Title
      </button>
      }      
    </div>
  );
}

export default PageTitle;