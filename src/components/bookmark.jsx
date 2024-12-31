import React, { useState, useEffect, useMemo } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProductSidebar from '../common/product/productSidebar'
import HeroSection from '../common/heroSection'
import PaginatedList from '../common/paginatedList'
import {get} from '../common/utility/toolbox'       
// Needs UI improvment 
function Bookmark(props) {
  const mangaState = useSelector((state) => state.manga);
  const [mangas, setMangas] = useState([]);
  const location = useLocation();
  const filterQuery = useMemo(() => ([]), []);
  
  useEffect(() => {
    getMangas().then(result => {
      setMangas(mangaState.bookmark || result.data['bookmarked_mangas'])
    })
  }, [mangaState.bookmark]);


  let mangaList = []
  if (mangas.length > 0) {
    if (mobileType()) {
      mangaList = mangas.slice(0, props.breakPoint).map(manga => (
          <div className="product__sidebar__comment__item" key={manga.id}>
            <Link to={`/mangas/${manga.id}`} style={{display: 'block'}}>
              <div className="product__sidebar__comment__item__pic">
                <img src={manga.thumbnail} alt="" style={{width: '100px', height: 'auto'}}/>
              </div>
              <div className="product__sidebar__comment__item__text">
                <ul>
                  <li>Active</li>
                  <li>Movie</li>
                </ul>
                <h5><a>{manga.title}</a></h5>
                <span><i className="fa fa-eye"></i> 19.141 Viewes</span>
              </div>
            </Link>
          </div>
      ))
    } else {
      mangaList = mangas.slice(0, 6).map(manga => (
          <div className="col-lg-4 col-md-6 col-sm-6" key={manga.id} >
            <Link to={`/mangas/${manga.id}`}>
            <div className="product__item">
              <div className="product__item__pic set-bg" style={{backgroundImage: `url(${manga.thumbnail})`}}>
                <div className="ep">18 / 18</div>
                <div className="comment"><i className="fa fa-comments"></i> 11</div>
                <div className="view"><i className="fa fa-eye"></i> 9141</div>
              </div>
              <div className="product__item__text">
                <ul>
                  <li style={{width: 250, height: 30, padding: 5, fontSize: 15}}>Chapter 1</li>
                </ul>
                <h5><a>{manga.title}</a></h5>
              </div>
            </div>
            </Link>
        </div>
      ))
    }
  }

  return (
    <>
      <HeroSection />
      <section className={"product-page spad"}>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
            </div>
            <div className="col-lg-8">
              <div className="product__page__content">
                  <div className="product__page__title">
                    <div className="row">
                      <div className="col-lg-8 col-md-8 col-sm-6">
                        <div className="section-title">
                          <h4>Bookmark</h4>
                        </div>
                      </div>
                      <div className="col-lg3 col-md-4 col-sm-6">
                        <div className="product__page__filter">
                          <p>Order by:</p>
                          <select>
                            <option value="">A-Z</option>
                            <option value="">1-10</option>
                            <option value="">10-50</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={mobileType() ? 'row container' : 'row'}>
                    {mangaList ? mangaList : <div>No content</div>}
                  </div>
                </div>
                <PaginatedList url="v2/mangas/bookmarked" filterQuery={filterQuery} /> 
            </div>
            {/* product sidebar */}
            <div className="col-lg-2">
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
function getDeviceType() {
  const userAgent = navigator.userAgent;

  if (/mobile/i.test(userAgent)) {
    return "Mobile";
  } else if (/tablet/i.test(userAgent) || /iPad/.test(userAgent)) {
    return "Tablet";
  } else {
    return "Laptop/Desktop";
  }
}

function mobileType() {
  return getDeviceType() === "Mobile"
}

const getMangas = async () => {
  try {
    const response = await get('v2/mangas/bookmarked')
    return response.data;
  } catch (error) {
    console.error("Error fetching mangas:", error);
    throw error;
  }
};
export default Bookmark;