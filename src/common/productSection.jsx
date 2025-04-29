import React, { useState, useEffect } from 'react';
import ProductSidebar from './product/productSidebar'
import LiveProduct from './product/liveProduct'
import ProductBreadCrumb from './product/productBreadCrumb'
import SubProduct from './product/subProduct'
import { useLocation } from 'react-router-dom';
import {get} from '../common/utility/toolbox'  
function ProductSection(props) {
  const [mangas, setMangas] = useState([]);
  let updatedMangaVisible = null
  let popularProductVisible = null
  let recentProductVisible = null
  let ongoingProductVisible = null
  let completedProductVisible = null
  const location = useLocation();
  const page = new URLSearchParams(location.search).get('type') || 'root';

  useEffect(() => {
    getMangas(page).then(result => {
      setMangas(result)
    })
  }, []);

  // let liveProductVisible = null
  

  let breakPoint = page === 'root' ? 6 : 12
  let enableFullPage = page !== 'root' 
  
  if (props) {
    updatedMangaVisible = page === 'root' ? true : page === 'updated' ? true : false
    popularProductVisible = page === 'root' ? true : page === 'popular' ? true : false
    recentProductVisible = page === 'root' ? true : page === 'new' ? true : false
    ongoingProductVisible = page === 'root' ? true : page === 'ongoing' ? true : false
    completedProductVisible = page === 'root' ? true : page === 'completed' ? true : false
    // liveProductVisible = props.products && (props.products.includes('liveProduct') || props.products.includes('all'))
  }
	return (
    <>
      {enableFullPage && <ProductBreadCrumb />}
      <section className={enableFullPage ? "product-page spad" : "product spad"}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {/* Trending products */}

              { updatedMangaVisible ? <SubProduct mangas={mangas} breakPoint={breakPoint} type={page} productSubType="updatedManga" enablefullPage={enableFullPage}/> : null}
              {/* Popular products */}
              { popularProductVisible ? <SubProduct mangas={mangas} breakPoint={breakPoint} type={page} productSubType="popularManga" enablefullPage={enableFullPage}/> : null}
              {/* Recent products */}
              { recentProductVisible ? <SubProduct mangas={mangas} breakPoint={breakPoint} type={page} productSubType="newManga" enablefullPage={enableFullPage}/> : null}
              {/* Ongoing products */}
              { ongoingProductVisible && page != 'root' ? <SubProduct mangas={mangas} breakPoint={breakPoint} type={page} productSubType="ongoingManga" enablefullPage={enableFullPage}/> : null}
              {/* Completed products */}
              { completedProductVisible && page != 'root' ? <SubProduct mangas={mangas} breakPoint={breakPoint} type={page} productSubType="completedManga" enablefullPage={enableFullPage}/> : null}
              {/* Live products */}
              {/* { liveProductVisible ? <LiveProduct /> : null} */}
            </div>
            {/* product sidebar */}
            <div className="col-lg-4 col-md-6 col-sm-8">
              <ProductSidebar mangas={mangas} />
            </div>
          </div>
        </div>
      </section>
    </>
		)
}

const getMangas = async (type) => {
  try {
    const response = await get('v2/mangas', {type: type})
    return response.data;
  } catch (error) {
    console.error("Error fetching mangas:", error);
    throw error;
  }
};

export default ProductSection