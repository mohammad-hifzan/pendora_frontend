import ProductSidebar from './product/productSidebar'
import UpdatedManga from './product/updatedManga'
import RecentProduct from './product/recentProduct'
import PopularProduct from './product/popularProduct'
import LiveProduct from './product/liveProduct'
import ProductBreadCrumb from './product/productBreadCrumb'
import { useLocation } from 'react-router-dom';
function ProductSection(props) {
  let updatedMangaVisible = null
  let popularProductVisible = null
  let recentProductVisible = null
  // let liveProductVisible = null
  const location = useLocation();
  const page = new URLSearchParams(location.search).get('type') || 'root';

  let breakPoint = page === 'root' ? 6 : 3
  let enableFullPage = page !== 'root' 
  if (props) {
    updatedMangaVisible = page === 'root' ? true : page === 'updated' ? true : false
    popularProductVisible = page === 'root' ? true : page === 'popular' ? true : false
    recentProductVisible = page === 'root' ? true : page === 'new' ? true : false
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

              { updatedMangaVisible ? <UpdatedManga mangas={props.mangas} breakPoint={breakPoint} type={page} enablefullPage={enableFullPage}/> : null}
              {/* Popular products */}
              { popularProductVisible ? <PopularProduct mangas={props.mangas} breakPoint={breakPoint} type={page} enablefullPage={enableFullPage}/> : null}
              {/* Recent products */}
              { recentProductVisible ? <RecentProduct mangas={props.mangas} breakPoint={breakPoint} type={page} enablefullPage={enableFullPage}/> : null}
              {/* Live products */}
              {/* { liveProductVisible ? <LiveProduct /> : null} */}
            </div>
            {/* product sidebar */}
            <div className="col-lg-4 col-md-6 col-sm-8">
              <ProductSidebar />
            </div>
          </div>
        </div>
      </section>
    </>
		)
}

export default ProductSection