import { Link } from "react-router-dom"
function RecentProduct(props) {
  let mangaList = null
  let enablefullPage = null
  if (props) {
    enablefullPage = props.enablefullPage
    mangaList = props.mangas.slice(0, props.breakPoint).map(manga => (
        <div className="col-lg-4 col-md-6 col-sm-6" key={manga.id}>
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
              <h5>{manga.title}</h5>
            </div>
          </div>
        </Link>
      </div>
    ))
  }

	return (
    <>
      {
        enablefullPage ?
              <>
                <div className="product__page__content">
                  <div className="product__page__title">
                    <div className="row">
                      <div className="col-lg-8 col-md-8 col-sm-6">
                        <div className="section-title">
                          <h4>Romance</h4>
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
                <div className="product__pagination">
                  <a href="#" className="current-page">1</a>
                  <a href="#">2</a>
                  <a href="#">3</a>
                  <a href="#">4</a>
                  <a href="#">5</a>
                  <a href="#"><i className="fa fa-angle-double-right"></i></a>
                </div>
              </>
        :
        <div className="recent__product">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-8">
              <div className="section-title">
                <h4>Recently Added Shows</h4>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
              <div className="btn__all">
                <a href="#" className="primary-btn">View All <span className="arrow_right"></span></a>
              </div>
            </div>
          </div>
          <div className="row">
            {mangaList ? mangaList : <div>No content</div>}
          </div>
        </div>
      }
    </>
		
		)
}


export default RecentProduct