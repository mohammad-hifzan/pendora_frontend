import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import ProductSection from '../common/productSection'
import HeroSection from '../common/heroSection'
const API_URL = 'http://localhost:3000'; // Rails server URL

function MangaList(props) {
  const [posts, setPosts] = useState([]);
  const location = useLocation();
  const mangaType = location.state?.products || 'all';

  useEffect(() => {
    getMangas().then(result => {
      setPosts(result)
    })
  }, []);

  return (
    <>
      <HeroSection />
      <ProductSection mangas={posts} products={mangaType} />
    </>
  );
}

const getMangas = async () => {
  try {
    const response = await axios.get(`${API_URL}/v2/mangas`, {withCredentials: true});
    return response.data;
  } catch (error) {
    console.error("Error fetching mangas:", error);
    throw error;
  }
};
export default MangaList;