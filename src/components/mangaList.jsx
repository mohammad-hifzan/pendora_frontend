import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProductSection from '../common/productSection'
import HeroSection from '../common/heroSection'
import {get} from '../common/utility/toolbox'       

function MangaList(props) {
  const [posts, setPosts] = useState([]);
  const location = useLocation();
  const mangaType = new URLSearchParams(location.search).get('type') || 'all';
  useEffect(() => {
    getMangas().then(result => {
      setPosts(result)
    })
  }, []);

  return (
    <>
      <HeroSection />
      <ProductSection mangas={posts} />
    </>
  );
}

const getMangas = async () => {
  try {
    const response = await get('v2/mangas')
    return response.data;
  } catch (error) {
    console.error("Error fetching mangas:", error);
    throw error;
  }
};
export default MangaList;