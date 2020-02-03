import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Post from './components/Post/Post';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const topStories = await axios.get('https://hacker-news.firebaseio.com/v0/topstories.json');
      topStories.data.slice(0, 20).map(async (x) => {
        const res = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${x}.json`);
        setPosts((p) => [...p, res.data]);
      });
    }

    fetchData();
  }, []);

  return (
    <div className="container-fluid mt-3">
      <Header />

      <hr className="my-3" />

      <div className="container">
        {
          posts.map((x) => <Post key={x.id} post={x} />)
        }
      </div>
    </div>
  );
}

export default App;
