function AdminUsers() {
	return (
					<>
						<div className="header-spacer"></div>
						<div className="container">
							<div className="row">
								<div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
									<div className="ui-block responsive-flex">
										<div className="ui-block-title">
											<div className="h6 title">Users</div>
											<div className="align-right">
												<form className="w-search">
													<div className="form-group with-button">
														<input className="form-control" type="text" placeholder="Search the forums..." />
														<button>
															<svg className="olymp-magnifying-glass-icon"><use href="#olymp-magnifying-glass-icon"></use></svg>
														</button>
													</div>
												</form>
												<a href="#" className="btn btn-blue btn-md">Add New User</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>



						<div className="container">
							<div className="row">
								<div className="col col-xl-12 col-lg-9 col-md-12 col-sm-12 col-12">

									<div className="ui-block">

										
										{/* <!-- Forums Table --> */}
										
										<table className="forums-table">
										
											<thead>
										
											<tr>
										
												<th className="forum">
													Name
												</th>
										
												<th className="topics">
													Email
												</th>
										
												<th className="posts">
													Role
												</th>
										
												<th className="freshness">
													Last Login
												</th>
										
											</tr>
										
											</thead>
										
											<tbody>
											<tr>
												<td className="forum">
													<div className="forum-item">
														<img loading="lazy" src="/themes/themeAuthor/img/forum7.webp" alt="forum" width="36" height="45" />
														<div className="content">
															<a href="#" className="h6 title">Comics</a>
															<p className="text">Talk about dinner parties, reunions and more!</p>
														</div>
													</div>
												</td>
												<td className="topics">
													<a href="#" className="h6 count">11</a>
												</td>
												<td className="posts">
													<a href="#" className="h6 count">36</a>
												</td>
												<td className="freshness">
													<div className="author-freshness">
														<div className="author-thumb">
															<img loading="lazy" src="/themes/themeAuthor/img/avatar40-sm.webp" alt="author" width="36" height="36" />
														</div>
														<a href="#" className="h6 title">Mathilda Brinker</a>
														<time className="entry-date updated" datetime="2017-06-24T18:18">13 hours, 58 minutes ago</time>
													</div>
												</td>
											</tr>
										
											<tr>
												<td className="forum">
													<div className="forum-item">
														<img loading="lazy" src="/themes/themeAuthor/img/forum8.webp" alt="forum" width="37" height="51" />
														<div className="content">
															<a href="#" className="h6 title">Anime and Manga</a>
															<p className="text">All related to your favourite movies and tv shows!</p>
														</div>
													</div>
												</td>
												<td className="topics">
													<a href="#" className="h6 count">25</a>
												</td>
												<td className="posts">
													<a href="#" className="h6 count">74</a>
												</td>
												<td className="freshness">
													<div className="author-freshness">
														<div className="author-thumb">
															<img loading="lazy" src="/themes/themeAuthor/img/avatar76-sm.webp" alt="author" width="28" height="28" />
														</div>
														<a href="#" className="h6 title">Dave Marinara</a>
														<time className="entry-date updated" datetime="2017-06-24T18:18">12 hours, 0 minutes ago</time>
													</div>
												</td>
											</tr>
										
											<tr className="bg-smoke-light">
												<td className="forum">
													<div className="forum-item">
														<svg className="icon" width="15" height="15"><use href="#olymp-star-full"></use></svg>
														<div className="content">
															<a href="#" className="h6 title">This year’s ComixCon will have the best presentations</a>
														</div>
														<div className="author-started">
															<span>Started by:</span>
															<div className="author-thumb">
																<img loading="lazy" src="/themes/themeAuthor/img/avatar48-sm.webp" alt="author" width="28" height="28" />
															</div>
															<a href="#" className="h6 title">Marina Valentine</a>
														</div>
													</div>
												</td>
												<td className="topics">
										
												</td>
												<td className="posts">
													<a href="#" className="h6 count">24</a>
												</td>
												<td className="freshness">
													<div className="author-freshness">
														<div className="author-thumb">
															<img loading="lazy" src="/themes/themeAuthor/img/avatar72-sm.webp" alt="author" />
														</div>
														<a href="#" className="h6 title">Nicholas Grissom</a>
														<time className="entry-date updated" datetime="2017-06-24T18:18">6 minutes ago</time>
													</div>
												</td>
											</tr>
										
											<tr>
												<td className="forum">
													<div className="forum-item">
														<div className="content">
															<a href="#" className="h6 title">What do you think it’s the most powerfull character of all universes?</a>
														</div>
														<div className="author-started">
															<span>Started by:</span>
															<div className="author-thumb">
																<img loading="lazy" src="/themes/themeAuthor/img/avatar70-sm.webp" alt="author" />
															</div>
															<a href="#" className="h6 title">Rachel Howlett</a>
														</div>
													</div>
													<nav aria-label="Page navigation">
														<ul className="pagination pagination--small">
															<li className="page-item"><a className="page-link" href="#">1</a></li>
															<li className="page-item"><a className="page-link" href="#">2</a></li>
															<li className="page-item"><a className="page-link" href="#">3</a></li>
															<li className="page-item"><a className="page-link" href="#">4</a></li>
														</ul>
													</nav>
												</td>
												<td className="topics">
										
												</td>
												<td className="posts">
													<a href="#" className="h6 count">196</a>
												</td>
												<td className="freshness">
													<div className="author-freshness">
														<div className="author-thumb">
															<img loading="lazy" src="/themes/themeAuthor/img/avatar79-sm.webp" alt="author" width="28" height="28" />
														</div>
														<a href="#" className="h6 title">Jake Stevens</a>
														<time className="entry-date updated" datetime="2017-06-24T18:18">47 minutes ago</time>
													</div>
												</td>
											</tr>
										
											<tr className="bg-smoke-light">
												<td className="forum">
													<div className="forum-item">
														<div className="content">
															<a href="#" className="h6 title">Cowboy Champloo will have a live action adaptation, yay or nay?</a>
														</div>
														<div className="author-started">
															<span>Started by:</span>
															<div className="author-thumb">
																<img loading="lazy" src="/themes/themeAuthor/img/avatar80-sm.webp" alt="author" width="28" height="28" />
															</div>
															<a href="#" className="h6 title">Fred Summers</a>
														</div>
													</div>
												</td>
												<td className="topics">
										
												</td>
												<td className="posts">
													<a href="#" className="h6 count">1</a>
												</td>
												<td className="freshness">
													<div className="author-freshness">
														<div className="author-thumb">
															<img loading="lazy" src="/themes/themeAuthor/img/avatar80-sm.webp" alt="author" width="28" height="28" />
														</div>
														<a href="#" className="h6 title">Fred Summers</a>
														<time className="entry-date updated" datetime="2017-06-24T18:18">58 minutes ago</time>
													</div>
												</td>
											</tr>
										
											<tr>
												<td className="forum">
													<div className="forum-item">
														<div className="content">
															<a href="#" className="h6 title">The Wonder cinematic universe keeps expanding!</a>
														</div>
														<div className="author-started">
															<span>Started by:</span>
															<div className="author-thumb">
																<img loading="lazy" src="/themes/themeAuthor/img/avatar53-sm.webp" alt="author" width="28" height="28" />
															</div>
															<a href="#" className="h6 title">Bruce Peterson</a>
														</div>
													</div>
												</td>
												<td className="topics">
										
												</td>
												<td className="posts">
													<a href="#" className="h6 count">15</a>
												</td>
												<td className="freshness">
													<div className="author-freshness">
														<div className="author-thumb">
															<img loading="lazy" src="/themes/themeAuthor/img/avatar52-sm.webp" alt="author" width="28" height="28" />
														</div>
														<a href="#" className="h6 title">Green Goo Rock</a>
														<time className="entry-date updated" datetime="2017-06-24T18:18">1 hour, 49 minutes ago</time>
													</div>
												</td>
											</tr>
										
											<tr className="bg-smoke-light">
												<td className="forum">
													<div className="forum-item">
														<div className="content">
															<a href="#" className="h6 title">The Masked Crusader #56 will be released in August 2018</a>
														</div>
														<div className="author-started">
															<span>Started by:</span>
															<div className="author-thumb">
																<img loading="lazy" src="/themes/themeAuthor/img/avatar81-sm.webp" alt="author" width="20" height="20" />
															</div>
															<a href="#" className="h6 title">Marc Roberts</a>
														</div>
													</div>
												</td>
												<td className="topics">
										
												</td>
												<td className="posts">
													<a href="#" className="h6 count">27</a>
												</td>
												<td className="freshness">
													<div className="author-freshness">
														<div className="author-thumb">
															<img loading="lazy" src="/themes/themeAuthor/img/avatar59-sm.webp" alt="author" width="34" height="34" />
														</div>
														<a href="#" className="h6 title">Diana Jameson</a>
														<time className="entry-date updated" datetime="2017-06-24T18:18">2 hours, 7 minutes ago</time>
													</div>
												</td>
											</tr>
										
											<tr>
												<td className="forum">
													<div className="forum-item">
														<div className="content">
															<a href="#" className="h6 title">Benjamin Nolan is the new Masked Crusader</a>
														</div>
														<div className="author-started">
															<span>Started by:</span>
															<div className="author-thumb">
																<img loading="lazy" src="/themes/themeAuthor/img/avatar64-sm.webp" width="34" height="34" alt="author" />
															</div>
															<a href="#" className="h6 title">Sarah Hetfield</a>
														</div>
													</div>
												</td>
												<td className="topics">
										
												</td>
												<td className="posts">
													<a href="#" className="h6 count">20</a>
												</td>
												<td className="freshness">
													<div className="author-freshness">
														<div className="author-thumb">
															<img loading="lazy" src="/themes/themeAuthor/img/avatar82-sm.webp" alt="author" width="28" height="28" />
														</div>
														<a href="#" className="h6 title">Jenny Carter</a>
														<time className="entry-date updated" datetime="2017-06-24T18:18">2 hours, 33 minutes ago</time>
													</div>
												</td>
											</tr>
										
											<tr className="bg-smoke-light">
												<td className="forum">
													<div className="forum-item">
														<div className="content">
															<a href="#" className="h6 title">Do you think there should be a cinematic universe reboot? [Poll]</a>
														</div>
														<div className="author-started">
															<span>Started by:</span>
															<div className="author-thumb">
																<img loading="lazy" src="/themes/themeAuthor/img/avatar52-sm.webp" alt="author" width="28" height="28" />
															</div>
															<a href="#" className="h6 title">Green Goo Rock</a>
														</div>
													</div>
												</td>
												<td className="topics">
										
												</td>
												<td className="posts">
													<a href="#" className="h6 count">46</a>
												</td>
												<td className="freshness">
													<div className="author-freshness">
														<div className="author-thumb">
															<img loading="lazy" src="/themes/themeAuthor/img/avatar51-sm.webp" alt="author" width="28" height="28" />
														</div>
														<a href="#" className="h6 title">Nicholas Grissom</a>
														<time className="entry-date updated" datetime="2017-06-24T18:18">4 hours, 26 minutes ago</time>
													</div>
												</td>
											</tr>
										
											<tr>
												<td className="forum">
													<div className="forum-item">
														<div className="content">
															<a href="#" className="h6 title">Iron Alchemist japanese live action has mixed reviews</a>
														</div>
														<div className="author-started">
															<span>Started by:</span>
															<div className="author-thumb">
																<img loading="lazy" src="/themes/themeAuthor/img/faved-page5.webp" alt="author" />
															</div>
															<a href="#" className="h6 title">Carol Summers</a>
														</div>
													</div>
												</td>
												<td className="topics">
										
												</td>
												<td className="posts">
													<a href="#" className="h6 count">33</a>
												</td>
												<td className="freshness">
													<div className="author-freshness">
														<div className="author-thumb">
															<img loading="lazy" src="/themes/themeAuthor/img/faved-page10.webp" alt="author" />
														</div>
														<a href="#" className="h6 title">Matt Simpson</a>
														<time className="entry-date updated" datetime="2017-06-24T18:18">5 hours, 58 minutes ago</time>
													</div>
												</td>
											</tr>
										
											</tbody>
										</table>
										
										{/* <!-- ... end Forums Table --> */}

									</div>

									
									{/* <!-- Pagination --> */}
									
									<nav aria-label="Page navigation">
										<ul className="pagination justify-content-center">
											<li className="page-item disabled">
												<a className="page-link" href="#" tabindex="-1">Previous</a>
											</li>
											<li className="page-item"><a className="page-link" href="#">1<div className="ripple-container"><div className="ripple ripple-on ripple-out" style={{left: "-10.3833px", top: "-16.8333px", backgroundColor: "rgb(255, 255, 255)", transform: "scale(16.7857)"}}></div></div></a></li>
											<li className="page-item"><a className="page-link" href="#">2</a></li>
											<li className="page-item"><a className="page-link" href="#">3</a></li>
											<li className="page-item"><a className="page-link" href="#">...</a></li>
											<li className="page-item"><a className="page-link" href="#">12</a></li>
											<li className="page-item">
												<a className="page-link" href="#">Next</a>
											</li>
										</ul>
									</nav>
								</div>
							</div>
						</div>
					</>
		)
}

export default AdminUsers