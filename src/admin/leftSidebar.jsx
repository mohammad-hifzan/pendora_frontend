import { Link, useLocation, useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSwatchbook, faUsersRectangle, faUserCheck, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
function LeftSidebar() {
	
	return (
		<>
			<div className="fixed-sidebar left">
				<div className="fixed-sidebar-left sidebar--small" id="sidebar-left">

					<a href="02-ProfilePage.html" className="logo">
						<div className="img-wrap">
							<img loading="lazy" src="themes/themeAuthor/img/logo.webp" alt="Olympus" width="34" height="34" />
						</div>
					</a>

					<div className="mCustomScrollbar" data-mcs-theme="dark">
						<ul className="left-menu">
							<li>
								<a href="#" className="js-sidebar-open">
									<svg className="olymp-menu-icon left-menu-icon" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="OPEN MENU">
										<use href="#olymp-menu-icon"></use>
									</svg>
								</a>
							</li>
							<li>
								<Link to="/admin/dashboard">
									<svg className="olymp-newsfeed-icon left-menu-icon" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="DASHBOARD">
										<use href="#olymp-newsfeed-icon"></use>
									</svg>
								</Link>
							</li>
							<li>
								<Link to="/admin/mangas">
									<FontAwesomeIcon icon={faSwatchbook} size="3x" className="olymp-newsfeed-icon left-menu-icon" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="MANGAS" />
								</Link>
							</li>
							<li>
								<Link to="/admin/users">
									<FontAwesomeIcon icon={faUsersRectangle} size="3x" className="olymp-newsfeed-icon left-menu-icon" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="USERS" />
								</Link>
							</li>
							<li>
								<Link to="/admin/roles">
									<FontAwesomeIcon icon={faUserCheck} size="3x" className="olymp-newsfeed-icon left-menu-icon" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="ROLE" />
								</Link>
							</li>
							<li>
								<Link to="/admin/companies">
									<FontAwesomeIcon icon={faArrowRightFromBracket} size="3x" className="olymp-newsfeed-icon left-menu-icon" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="COMPANIES" />
								</Link>
							</li>
						</ul>
					</div>
				</div>

				<div className="fixed-sidebar-left sidebar--large" id="sidebar-left-1">
					<a href="02-ProfilePage.html" className="logo">
						<div className="img-wrap">
							<img loading="lazy" src="img/logo.webp" alt="Olympus" width="34" height="34" />
						</div>
						<div className="title-block">
							<h6 className="logo-title">olympus</h6>
						</div>
					</a>

					<div className="mCustomScrollbar" data-mcs-theme="dark">
						<ul className="left-menu">
							<li>
								<a href="#" className="js-sidebar-open">
									<svg className="olymp-close-icon left-menu-icon">
										<use href="#olymp-close-icon"></use>
									</svg>
									<span className="left-menu-title">Collapse Menu</span>
								</a>
							</li>
							<li>
								<Link to="/admin/dashboard">
									<svg className="olymp-newsfeed-icon left-menu-icon" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="DASHBOARD">
										<use href="#olymp-newsfeed-icon"></use>
									</svg>
									<span className="left-menu-title">Dashboard</span>
								</Link>
							</li>
							<li>
								<Link to="/admin/mangas">
									<FontAwesomeIcon icon={faSwatchbook} size="3x" className="olymp-newsfeed-icon left-menu-icon" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="MANGAS" />
									<span className="left-menu-title">Mangas</span>
								</Link>
							</li>
							<li>
								<Link to="/admin/users">
									<FontAwesomeIcon icon={faUsersRectangle} size="3x" className="olymp-newsfeed-icon left-menu-icon" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="MANGAS" />
									<span className="left-menu-title">User</span>
								</Link>
							</li>
							<li>
								<Link to="/admin/roles">
									<FontAwesomeIcon icon={faUserCheck} size="3x" className="olymp-newsfeed-icon left-menu-icon" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="ROLE" />
									<span className="left-menu-title">Role</span>
								</Link>
							</li>
							<li>
								<Link to="/admin/companies">
									<FontAwesomeIcon icon={faArrowRightFromBracket} size="3x" className="olymp-newsfeed-icon left-menu-icon" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="COMPANIES" />
									<span className="left-menu-title">Exit</span>
								</Link>
							</li>
						</ul>

				
					</div>
				</div>
			</div>

			{/* <!-- ... end Fixed Sidebar Left --> */}


			{/* <!-- Fixed Sidebar Left --> */}

			<div className="fixed-sidebar left fixed-sidebar-responsive">

				<div className="fixed-sidebar-left sidebar--small" id="sidebar-left-responsive">
					<a href="#" className="logo js-sidebar-open">
						<img loading="lazy" src="img/logo.webp" alt="Olympus" width="34" height="34" />
					</a>

				</div>

				<div className="fixed-sidebar-left sidebar--large" id="sidebar-left-1-responsive">
					<a href="#" className="logo">
						<div className="img-wrap">
							<img loading="lazy" src="img/logo.webp" alt="Olympus" width="34" height="34" />
						</div>
						<div className="title-block">
							<h6 className="logo-title">olympus</h6>
						</div>
					</a>

					<div className="mCustomScrollbar" data-mcs-theme="dark">

						<div className="control-block">
							<div className="author-page author vcard inline-items">
								<div className="author-thumb">
									<img alt="author" src="img/author-page.webp" width="36" height="36" className="avatar" />
									<span className="icon-status online"></span>
								</div>
								<a href="02-ProfilePage.html" className="author-name fn">
									<div className="author-title">
										James Spiegel
										<svg className="olymp-dropdown-arrow-icon">
											<use href="#olymp-dropdown-arrow-icon"></use>
										</svg>
									</div>
									<span className="author-subtitle">SPACE COWBOY</span>
								</a>
							</div>
						</div>

						<div className="ui-block-title ui-block-title-small">
							<h6 className="title">MAIN SECTIONS</h6>
						</div>

						<ul className="left-menu">
							<li>
								<a href="#" className="js-sidebar-open">
									<svg className="olymp-close-icon left-menu-icon">
										<use href="#olymp-close-icon"></use>
									</svg>
									<span className="left-menu-title">Collapse Menu</span>
								</a>
							</li>
							<li>
								<a href="mobile-index.html">
									<svg className="olymp-newsfeed-icon left-menu-icon" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="NEWSFEED">
										<use href="#olymp-newsfeed-icon"></use>
									</svg>
									<span className="left-menu-title">Newsfeed</span>
								</a>
							</li>
							<li>
								<a href="Mobile-28-YourAccount-PersonalInformation.html">
									<svg className="olymp-star-icon left-menu-icon" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="FAV PAGE">
										<use href="#olymp-star-icon"></use>
									</svg>
									<span className="left-menu-title">Fav Pages Feed</span>
								</a>
							</li>
							<li>
								<a href="mobile-29-YourAccount-AccountSettings.html">
									<svg className="olymp-happy-faces-icon left-menu-icon" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="FRIEND GROUPS">
										<use href="#olymp-happy-faces-icon"></use>
									</svg>
									<span className="left-menu-title">Friend Groups</span>
								</a>
							</li>
							<li>
								<a href="Mobile-30-YourAccount-ChangePassword.html">
									<svg className="olymp-headphones-icon left-menu-icon" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="MUSIC&PLAYLISTS">
										<use href="#olymp-headphones-icon"></use>
									</svg>
									<span className="left-menu-title">Music & Playlists</span>
								</a>
							</li>
							<li>
								<a href="Mobile-31-YourAccount-HobbiesAndInterests.html">
									<svg className="olymp-weather-icon left-menu-icon" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="WEATHER APP">
										<use href="#olymp-weather-icon"></use>
									</svg>
									<span className="left-menu-title">Weather App</span>
								</a>
							</li>
							<li>
								<a href="Mobile-32-YourAccount-EducationAndEmployement.html">
									<svg className="olymp-calendar-icon left-menu-icon" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="CALENDAR AND EVENTS">
										<use href="#olymp-calendar-icon"></use>
									</svg>
									<span className="left-menu-title">Calendar and Events</span>
								</a>
							</li>
							<li>
								<a href="Mobile-33-YourAccount-Notifications.html">
									<svg className="olymp-badge-icon left-menu-icon" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Community Badges">
										<use href="#olymp-badge-icon"></use>
									</svg>
									<span className="left-menu-title">Community Badges</span>
								</a>
							</li>
							<li>
								<a href="Mobile-34-YourAccount-ChatMessages.html">
									<svg className="olymp-cupcake-icon left-menu-icon" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Friends Birthdays">
										<use href="#olymp-cupcake-icon"></use>
									</svg>
									<span className="left-menu-title">Friends Birthdays</span>
								</a>
							</li>
							<li>
								<a href="Mobile-35-YourAccount-FriendsRequests.html">
									<svg className="olymp-stats-icon left-menu-icon" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Account Stats">
										<use href="#olymp-stats-icon"></use>
									</svg>
									<span className="left-menu-title">Account Stats</span>
								</a>
							</li>
							<li>
								<a href="#">
									<svg className="olymp-manage-widgets-icon left-menu-icon" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Manage Widgets">
										<use href="#olymp-manage-widgets-icon"></use>
									</svg>
									<span className="left-menu-title">Manage Widgets</span>
								</a>
							</li>
						</ul>

						<div className="ui-block-title ui-block-title-small">
							<h6 className="title">YOUR ACCOUNT</h6>
						</div>

						<ul className="account-settings">
							<li>
								<a href="#">

									<svg className="olymp-menu-icon">
										<use href="#olymp-menu-icon"></use>
									</svg>

									<span>Profile Settings</span>
								</a>
							</li>
							<li>
								<a href="#">
									<svg className="olymp-star-icon left-menu-icon" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="FAV PAGE">
										<use href="#olymp-star-icon"></use>
									</svg>

									<span>Create Fav Page</span>
								</a>
							</li>
							<li>
								<a href="#">
									<svg className="olymp-logout-icon">
										<use href="#olymp-logout-icon"></use>
									</svg>

									<span>Log Out</span>
								</a>
							</li>
						</ul>

						<div className="ui-block-title ui-block-title-small">
							<h6 className="title">About Olympus</h6>
						</div>

						<ul className="about-olympus">
							<li>
								<a href="#">
									<span>Terms and Conditions</span>
								</a>
							</li>
							<li>
								<a href="#">
									<span>FAQs</span>
								</a>
							</li>
							<li>
								<a href="#">
									<span>Careers</span>
								</a>
							</li>
							<li>
								<a href="#">
									<span>Contact</span>
								</a>
							</li>
						</ul>

					</div>
				</div>
			</div>
		</>
		)
}

export default LeftSidebar