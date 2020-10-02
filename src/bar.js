import React from 'react';
import './bar.css';

function Bar(props) {
  return (
    <>
        <div className="bar-container">
            <h1>{props.num}</h1>
        </div>
    </>
  );
}

export default Bar;