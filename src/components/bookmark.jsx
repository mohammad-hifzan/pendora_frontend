import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import ProductSidebar from '../common/product/productSidebar'
import HeroSection from '../common/heroSection'
import PaginatedList from '../common/paginatedList'
import {get} from '../common/utility/toolbox'       

function Bookmark(props) {
  const [mangas, setMangas] = useState([]);
  const location = useLocation();
  useEffect(() => {
    getMangas().then(result => {
      setMangas(result.data['updated_chapters'])
    })
  }, []);
  let mangaList = []
  if (mangas.length > 0) {  
    mangaList = mangas.slice(0, 6).map(manga => (
        <div className="col-lg-6 col-md-6 col-sm-6" key={manga.id}>
          <Link to={`/mangas/${manga.id}`}>
          <div className="product__item">
            <div className="product__item__pic set-bg" style={{backgroundImage: `url(${manga.thumbnail})`}}>
              <div className="ep">18 / 18</div>
              <div className="comment"><i className="fa fa-comments"></i> 11</div>
              <div className="view"><i className="fa fa-eye"></i> 9141</div>
            </div>
            <div className="product__item__text">
              <ul>
                <li>Active</li>
                <li>Movie</li>
              </ul>
              <h5><a>{manga.title}</a></h5>
            </div>
          </div>
          </Link>
      </div>
    ))
  }

  return (
    <>
      <HeroSection />
      <section className={"product-page spad"}>
        <div className="container">
          <div className="row">
            <div className="col-lg-2">
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
                      <div className="col-lg-4 col-md-4 col-sm-6">
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
                  <div className="row">
                    {mangaList ? mangaList : <div>No content</div>}
                  </div>
                </div>
                <PaginatedList /> 
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

const getMangas = async () => {
  try {
    const response = await get('v2/mangas')
    return response.data;
  } catch (error) {
    console.error("Error fetching mangas:", error);
    throw error;
  }
};
export default Bookmark;