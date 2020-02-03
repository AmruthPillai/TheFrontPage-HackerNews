import React from 'react';
import Header from './components/Header/Header';
import Post from './components/Post/Post';

function App() {
  return (
    <div className="container-fluid mt-3">
      <Header />

      <hr className="my-3" />

      <div className="container">
        <Post upvoted />
      </div>
    </div>
  );
}

export default App;
