import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom"
function ProductBreadCrumb() {
  const location = useLocation();
  const page = new URLSearchParams(location.search).get('type')
  const pageText = page.charAt(0).toUpperCase() + page.substring(1).toLowerCase()
	return (
    <div className="breadcrumb-option">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="breadcrumb__links">
              <Link to="/"><i className="fa fa-home"></i> Home</Link>
              <span>{pageText}</span>
            </div>
          </div>
        </div>
      </div>
			</div>
		)
}

export default ProductBreadCrumb