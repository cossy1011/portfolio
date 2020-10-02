import React from 'react';
import PcView from './PcView';
import MobileView from './MobileView';

function App() {

  const width = window.innerWidth;
  const height = window.innerHeight;

  return (
    <div>
      {width > height ? <PcView/> : <MobileView/>}
    </div>
  );
}

export default App;