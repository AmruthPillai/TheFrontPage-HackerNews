import React from 'react';
import './Navigation.css';

function Navigation() {
  return (
    <nav id="Navigation">
      <ul className="mb-0">
        <li>
          <a href="/#" className="active">new</a>
        </li>
        <li>
          <a href="/#">past</a>
        </li>
        <li>
          <a href="/#">comments</a>
        </li>
        <li>
          <a href="/#">ask</a>
        </li>
        <li>
          <a href="/#">show</a>
        </li>
        <li>
          <a href="/#">jobs</a>
        </li>
        <li>
          <a href="/#">submit</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
