import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom"
import ProductSidebarComment from './productSidebarComment'
import {get} from '../utility/toolbox' 
function ProductSidebar(props) {
  const [popularManga, setPopularManga] = useState([]);
  const [daterange, setDaterange] = useState('day')
  const mangaState = useSelector((state) => state.manga);
  useEffect(() => {
    updateDaterange('day')
  }, [mangaState.popularManga, props.mangasEE]);
  let mangaList = null;
  
  if (popularManga.length > 0) {
      mangaList = popularManga.slice(0, 6).map(manga => (
        <Link to={`/mangas/${manga.id}`} style={{display: 'block'}}> 
          <div className="product__sidebar__view__item set-bg mix day years"
            style={{backgroundImage: `url(${manga.thumbnail})`}}>
            <div className="ep">18 / ?</div>
            <div className="view"><i className="fa fa-eye"></i> 9141</div>
            <h5><a href="#">{manga.title}</a></h5>
          </div>
        </Link>
      ))
  }

  const updateDaterange = async(daterange) => {
    getMangas(daterange).then(result => {
      setPopularManga(result.data.mangas)
      setDaterange(daterange)
    })
  }

  const handleDaterange = (daterange) => {
    updateDaterange(daterange)
  }

	return (
  		<div className="product__sidebar">
        <div className="product__sidebar__view">
          <div className="section-title">
            <h5>Top Views</h5>
          </div>
          <ul className="filter__controls">
            <li className={daterange == 'day' ? "active" : ''} data-filter="*" onClick={() => (handleDaterange('day'))} >Day</li>
            <li className={daterange == 'week' ? "active" : ''} data-filter=".week" onClick={() => (handleDaterange('week'))} >Week</li>
            <li className={daterange == 'month' ? "active" : ''} data-filter=".month" onClick={() => (handleDaterange('month'))} >Month</li>
            <li className={daterange == 'year' ? "active" : ''} data-filter=".years" onClick={() => (handleDaterange('year'))} >Years</li>
          </ul>
          <div className="filter__gallery">
            {mangaList}
            {/* <div className="product__sidebar__view__item set-bg mix day years" */}
            {/*   style={{backgroundImage: `url("theme/img/anime/details-pic.jpg")`}}> */}
            {/*   <div className="ep">18 / ?</div> */}
            {/*   <div className="view"><i className="fa fa-eye"></i> 9141</div> */}
            {/*   <h5><a href="#">Boruto: Naruto next generations</a></h5> */}
            {/* </div> */}
            {/* <div className="product__sidebar__view__item set-bg mix month week" */}
            {/* style={{backgroundImage: `url("theme/img/sidebar/tv-2.jpg")`}}> */}
            {/*   <div className="ep">18 / ?</div> */}
            {/*   <div className="view"><i className="fa fa-eye"></i> 9141</div> */}
            {/*   <h5><a href="#">The Seven Deadly Sins: Wrath of the Gods</a></h5> */}
            {/* </div> */}
            {/* <div className="product__sidebar__view__item set-bg mix week years" */}
            {/* style={{backgroundImage: `url("theme/img/sidebar/tv-3.jpg")`}}> */}
            {/*   <div className="ep">18 / ?</div> */}
            {/*   <div className="view"><i className="fa fa-eye"></i> 9141</div> */}
            {/*   <h5><a href="#">Sword art online alicization war of underworld</a></h5> */}
            {/* </div> */}
            {/* <div className="product__sidebar__view__item set-bg mix years month" */}
            {/* style={{backgroundImage: `url("theme/img/sidebar/tv-4.jpg")`}}> */}
            {/*   <div className="ep">18 / ?</div> */}
            {/*   <div className="view"><i className="fa fa-eye"></i> 9141</div> */}
            {/*   <h5><a href="#">Fate/stay night: Heaven's Feel I. presage flower</a></h5> */}
            {/* </div> */}
            {/* <div className="product__sidebar__view__item set-bg mix day" */}
            {/*   style={{backgroundImage: `url("theme/img/sidebar/tv-5.jpg")`}}> */}
            {/*   <div className="ep">18 / ?</div> */}
            {/*   <div className="view"><i className="fa fa-eye"></i> 9141</div> */}
            {/*   <h5><a href="#">Fate stay night unlimited blade works</a></h5> */}
            {/* </div> */}
          </div>
        </div>
        {/* product sidebar comment */}
        {/* <ProductSidebarComment /> */}
      </div>
		)
}

const getMangas = async (daterange) => {
  try {
    const response = await get('v2/mangas/filter_date_range', {daterange: daterange})
    return response.data;
  } catch (error) {
    console.error("Error fetching mangas:", error);
    throw error;
  }
};

export default ProductSidebar