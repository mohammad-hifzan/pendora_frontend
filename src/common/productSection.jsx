import ProductSidebar from './product/productSidebar'
import TrendingProduct from './product/trendingProduct'
import RecentProduct from './product/recentProduct'
import PopularProduct from './product/popularProduct'
import LiveProduct from './product/liveProduct'
import ProductBreadCrumb from './product/productBreadCrumb'
function ProductSection(props) {
  let trendingProductVisible = null
  let popularProductVisible = null
  let recentProductVisible = null
  let liveProductVisible = null

  let breakPoint = props.products == 'all' ? 6 : 18
  let enableFullPage = props.products != 'all' 
  if (props) {
    trendingProductVisible = props.products && (props.products.includes('trendingProduct') || props.products.includes('all'))
    popularProductVisible = props.products && (props.products.includes('popularProduct') || props.products.includes('all'))
    recentProductVisible = props.products && (props.products.includes('recentProduct') || props.products.includes('all'))
    liveProductVisible = props.products && (props.products.includes('liveProduct') || props.products.includes('all'))
  }
	return (
    <>
      {enableFullPage && <ProductBreadCrumb />}
      <section className={enableFullPage ? "product-page spad" : "product spad"}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {/* Trending products */}
              { trendingProductVisible ? <TrendingProduct /> : null}
              {/* Popular products */}
              { popularProductVisible ? <PopularProduct /> : null}
              {/* Recent products */}
              { recentProductVisible ? <RecentProduct mangas={props.mangas} breakPoint={breakPoint} enablefullPage={enableFullPage}/> : null}
              {/* Live products */}
              { liveProductVisible ? <LiveProduct /> : null}
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