import React from 'react';
import './Logo.css';

function Logo() {
  return (
    <div id="Logo">
      <div className="box">
        <span>Y</span>
      </div>

      <div className="wordmark">
        <h1>The Front Page</h1>
        <h6>Powered by Hacker News</h6>
      </div>
    </div>
  );
}

export default Logo;
