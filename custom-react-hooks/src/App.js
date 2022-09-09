import React from 'react';
import BackwardCounter from './components/BackwardCounter';
import ForwardCounter from './components/ForwardCounter';
import Forw from './components/Forw';
import Back from './components/Back';

function App() {
  return (
    <React.Fragment>
      <Forw />
      {/* <ForwardCounter /> */}
      <Back />
      {/* <BackwardCounter /> */}
    </React.Fragment>
  );
}

export default App;
