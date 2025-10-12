import { useNavigate, Link } from 'react-router-dom';
function Error404() {
	const navigate = useNavigate();
	return (
			<>
			{
				window.location.pathname.includes("workspace") ?
				<div className="admin">
				

					<div className="stunning-header bg-primary-opacity">

						
						{/* <!-- Header Standard Landing  --> */}
						
						<div className="header--standard header--standard-landing" id="header--standard">
							<div className="container">
								<div className="header--standard-wrap">
						
									<a href="#" className="logo">
										<div className="img-wrap">
											<img loading="lazy" src="/themes/themeAuthor/img/logo.webp" alt="Olympus" width="34" height="34" />
											<img loading="lazy" src="/themes/themeAuthor/img/logo-colored-small.webp" width="34" height="34" alt="Olympus" className="logo-colored" />
										</div>
										<div className="title-block">
											<h6 className="logo-title">olympus</h6>
											<div className="sub-title">SOCIAL NETWORK</div>
										</div>
									</a>
						
									<a href="#" className="open-responsive-menu js-open-responsive-menu">
										<svg className="olymp-menu-icon"><use href="#olymp-menu-icon"></use></svg>
									</a>
						
									<div className="nav nav-pills nav1 header-menu">
										<div className="mCustomScrollbar">
											<ul>
												<li className="nav-item">
													<a href="#" className="nav-link">Home</a>
												</li>
												<li className="nav-item dropdown">
													<a className="nav-link dropdown-toggle" data-bs-hover="dropdown" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false" tabindex='1'>Profile</a>
													<div className="dropdown-menu">
														<a className="dropdown-item" href="#">Profile Page</a>
														<a className="dropdown-item" href="#">Newsfeed</a>
														<a className="dropdown-item" href="#">Post Versions</a>
													</div>
												</li>
												<li className="nav-item dropdown dropdown-has-megamenu">
													<a href="#" className="nav-link dropdown-toggle" data-bs-hover="dropdown" data-bs-toggle="dropdown" role="button" aria-haspopup="false" aria-expanded="false" tabindex='1'>Forums</a>
													<div className="dropdown-menu megamenu">
														<div className="row">
															<div className="col col-sm-3">
																<h6 className="column-tittle">Main Links</h6>
																<a className="dropdown-item" href="#">Profile Page<span className="tag-label bg-blue-light">new</span></a>
																<a className="dropdown-item" href="#">Profile Page</a>
																<a className="dropdown-item" href="#">Profile Page</a>
																<a className="dropdown-item" href="#">Profile Page</a>
																<a className="dropdown-item" href="#">Profile Page</a>
																<a className="dropdown-item" href="#">Profile Page</a>
															</div>
															<div className="col col-sm-3">
																<h6 className="column-tittle">BuddyPress</h6>
																<a className="dropdown-item" href="#">Profile Page</a>
																<a className="dropdown-item" href="#">Profile Page</a>
																<a className="dropdown-item" href="#">Profile Page<span className="tag-label bg-primary">HOT!</span></a>
																<a className="dropdown-item" href="#">Profile Page</a>
																<a className="dropdown-item" href="#">Profile Page</a>
																<a className="dropdown-item" href="#">Profile Page</a>
															</div>
															<div className="col col-sm-3">
																<h6 className="column-tittle">Corporate</h6>
																<a className="dropdown-item" href="#">Profile Page</a>
																<a className="dropdown-item" href="#">Profile Page</a>
																<a className="dropdown-item" href="#">Profile Page</a>
																<a className="dropdown-item" href="#">Profile Page</a>
																<a className="dropdown-item" href="#">Profile Page</a>
																<a className="dropdown-item" href="#">Profile Page</a>
															</div>
															<div className="col col-sm-3">
																<h6 className="column-tittle">Forums</h6>
																<a className="dropdown-item" href="#">Profile Page</a>
																<a className="dropdown-item" href="#">Profile Page</a>
																<a className="dropdown-item" href="#">Profile Page</a>
																<a className="dropdown-item" href="#">Profile Page</a>
																<a className="dropdown-item" href="#">Profile Page</a>
																<a className="dropdown-item" href="#">Profile Page</a>
															</div>
														</div>
													</div>
												</li>
												<li className="nav-item">
													<a href="#" className="nav-link">Terms & Conditions</a>
												</li>
												<li className="nav-item">
													<a href="#" className="nav-link">Events</a>
												</li>
												<li className="nav-item">
													<a href="#" className="nav-link">Privacy Policy</a>
												</li>
												<li className="close-responsive-menu js-close-responsive-menu">
													<svg className="olymp-close-icon"><use href="#olymp-close-icon"></use></svg>
												</li>
												<li className="nav-item js-expanded-menu">
													<a href="#" className="nav-link">
														<svg className="olymp-menu-icon"><use href="#olymp-menu-icon"></use></svg>
														<svg className="olymp-close-icon"><use href="#olymp-close-icon"></use></svg>
													</a>
												</li>
												<li className="shoping-cart more">
													<a href="#" className="nav-link">
														<svg className="olymp-shopping-bag-icon"><use href="#olymp-shopping-bag-icon"></use></svg>
														<span className="count-product">2</span>
													</a>
													<div className="more-dropdown shop-popup-cart">
														<ul>
															<li className="cart-product-item">
																<div className="product-thumb">
																	<img loading="lazy" src="/themes/themeAuthor/img/product1.webp" alt="product" width="35" height="28" />
																</div>
																<div className="product-content">
																	<h6 className="title">White Enamel Mug</h6>
																	<ul className="rait-stars">
																		<li>
																			<svg className="star-icon c-primary" width="10" height="10"><use href="#olymp-star-full"></use></svg>
																		</li>
																		<li>
																			<svg className="star-icon c-primary" width="10" height="10"><use href="#olymp-star-full"></use></svg>
																		</li>
						
																		<li>
																			<svg className="star-icon c-primary" width="10" height="10"><use href="#olymp-star-full"></use></svg>
																		</li>
																		<li>
																			<svg className="star-icon c-primary" width="10" height="10"><use href="#olymp-star-full"></use></svg>
																		</li>
																		<li>
																			<svg className="star-icon" width="10" height="10"><use href="#olymp-star-null"></use></svg>
																		</li>
																	</ul>
																	<div className="counter">x2</div>
																</div>
																<div className="product-price">$20</div>
																<div className="more">
																	<svg className="olymp-little-delete"><use href="#olymp-little-delete"></use></svg>
																</div>
															</li>
															<li className="cart-product-item">
																<div className="product-thumb">
																	<img loading="lazy" src="/themes/themeAuthor/img/product2.webp" alt="product" width="28" height="45" />
																</div>
																<div className="product-content">
																	<h6 className="title">Olympus Orange Shirt</h6>
																	<ul className="rait-stars">
																		<li>
																			<svg className="star-icon c-primary" width="10" height="10"><use href="#olymp-star-full"></use></svg>
																		</li>
																		<li>
																			<svg className="star-icon c-primary" width="10" height="10"><use href="#olymp-star-full"></use></svg>
																		</li>
						
																		<li>
																			<svg className="star-icon c-primary" width="10" height="10"><use href="#olymp-star-full"></use></svg>
																		</li>
																		<li>
																			<svg className="star-icon c-primary" width="10" height="10"><use href="#olymp-star-full"></use></svg>
																		</li>
																		<li>
																			<svg className="star-icon" width="10" height="10"><use href="#olymp-star-null"></use></svg>
																		</li>
																	</ul>
																	<div className="counter">x1</div>
																</div>
																<div className="product-price">$40</div>
																<div className="more">
																	<svg className="olymp-little-delete"><use href="#olymp-little-delete"></use></svg>
																</div>
															</li>
														</ul>
						
														<div className="cart-subtotal">Cart Subtotal:<span>$80</span></div>
						
														<div className="cart-btn-wrap">
															<a href="#" className="btn btn-primary btn-sm">Go to Your Cart</a>
															<a href="#" className="btn btn-purple btn-sm">Go to Checkout</a>
														</div>
													</div>
												</li>
						
												<li className="menu-search-item">
													<a href="#" className="nav-link" data-bs-toggle="modal" data-bs-target="#main-popup-search">
														<svg className="olymp-magnifying-glass-icon"><use href="#olymp-magnifying-glass-icon"></use></svg>
													</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
						
						{/* <!-- ... end Header Standard Landing  --> */}
						<div className="header-spacer--standard"></div>

						<div className="stunning-header-content">
							<h1 className="stunning-header-title">404 Error Page</h1>
							<ul className="breadcrumbs">
								<li className="breadcrumbs-item">
									<a href="#">Home</a>
									<span className="icon breadcrumbs-custom">/</span>
								</li>
								<li className="breadcrumbs-item active">
									<span>404 Error</span>
								</li>
							</ul>
						</div>

						<div className="content-bg-wrap stunning-header-bg1"></div>
					</div>

					{/* <!-- End Stunning header --> */}


					<section className="medium-padding120">
						<div className="container">
							<div className="row">
								<div className="col col-xl-6 m-auto col-lg-6 col-md-12 col-sm-12 col-12">
									<div className="page-404-content">
										<img loading="lazy" src="/themes/themeAuthor/img/404.webp" alt="photo" width="636" height="304" />
										<div className="crumina-module crumina-heading align-center">
											<h2 className="h1 heading-title">A <span className="c-primary">wild ghost</span> appears! Sadly, not what you were looking for...</h2>
											<p className="heading-text">Sorry! The page you were looking for has been moved or doesn’t exist.
												If you like, you can return to our homepage, or if the problem persists, send us an email to: <a href="#">support@olympus.com</a>
											</p>
										</div>

										<a href="index.html" className="btn btn-primary btn-lg">Go to Homepage</a>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>

				:

				<div className="user">
					<h1 style={{color: '#fff', paddingTop: '300px', textAlign: 'center'}}>404 Error</h1>
				</div>
			}


			</>

		)
}

export default Error404;