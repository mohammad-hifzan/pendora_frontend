import React, { useState, useEffect } from 'react';
import axios from 'axios';
function Mangas() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // fetch('http://localhost:3000/v2/mangas', {
    //     mode: 'no-cors'
    //   }).then(response => response.json())
    //   .then(data => setPosts(data))
    //   .catch(error => console.error('Error fetching posts:', error));
    getMangas().then(result => {
      setPosts(result)
    })
  }, []);
  return (
    <div>
      <h1>Posts List</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
const API_URL = 'http://localhost:3000'; // Rails server URL

const getMangas = async () => {
  try {
    const response = await axios.get(`${API_URL}/v2/mangas`);
    return response.data;
  } catch (error) {
    console.error("Error fetching mangas:", error);
    throw error;
  }
};
export default Mangas;