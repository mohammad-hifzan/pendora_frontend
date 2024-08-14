import ProductSidebar from './product/productSidebar'
import TrendingProduct from './product/trendingProduct'
import RecentProduct from './product/recentProduct'
import PopularProduct from './product/popularProduct'
import LiveProduct from './product/liveProduct'
function ProductSection() {
	return (
    <section className="product spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            {/* Trending products */}
            <TrendingProduct />
            {/* Popular products */}
            <PopularProduct />
            {/* Recent products */}
            <RecentProduct />
            {/* Live products */}
            <LiveProduct />
          </div>
          {/* product sidebar */}
          <div className="col-lg-4 col-md-6 col-sm-8">
            <ProductSidebar />
          </div>
        </div>
      </div>
    </section>
		)
}

export default ProductSection