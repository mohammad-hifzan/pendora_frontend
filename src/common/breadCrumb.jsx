function BreadCrumb(props) {
	return(
		<section className="normal-breadcrumb set-bg" style={{backgroundImage: `url(${"theme/img/normal-breadcrumb.jpg"})`}}>
	    <div className="container">
	      <div className="row">
	        <div className="col-lg-12 text-center">
	          <div className="normal__breadcrumb__text">
	            <h2>{props.type == 'signup' ? 'Sign Up': 'Login'}</h2>
	            <p>Welcome to the official Anime blog.</p>
	          </div>
	        </div>
	      </div>
	    </div>
	  </section>
	 )
}

export default BreadCrumb