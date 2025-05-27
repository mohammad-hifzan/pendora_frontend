function Blog() {
	return (
		// <h1 style={{color: '#fff', paddingTop: '300px', textAlign: 'center'}}>Coming Soon</h1>
		// )
		<>
		<div id="hellopreloader">
			<div className="preloader">
				<svg width="45" height="45" stroke="#fff">
					<g fill="none" fillRule="evenodd" strokeWidth="2" transform="translate(1 1)">
						<circle cx="22" cy="22" r="6" stroke="none">
							<animate attributeName="r" begin="1.5s" calcMode="linear" dur="3s" repeatCount="indefinite" values="6;22"/>
							<animate attributeName="stroke-opacity" begin="1.5s" calcMode="linear" dur="3s" repeatCount="indefinite" values="1;0"/>
							<animate attributeName="stroke-width" begin="1.5s" calcMode="linear" dur="3s" repeatCount="indefinite" values="2;0"/>
						</circle>
						<circle cx="22" cy="22" r="6" stroke="none">
							<animate attributeName="r" begin="3s" calcMode="linear" dur="3s" repeatCount="indefinite" values="6;22"/>
							<animate attributeName="stroke-opacity" begin="3s" calcMode="linear" dur="3s" repeatCount="indefinite" values="1;0"/>
							<animate attributeName="stroke-width" begin="3s" calcMode="linear" dur="3s" repeatCount="indefinite" values="2;0"/>
						</circle>
						<circle cx="22" cy="22" r="8">
							<animate attributeName="r" begin="0s" calcMode="linear" dur="1.5s" repeatCount="indefinite" values="6;1;2;3;4;5;6"/>
						</circle>
					</g>
				</svg>

				<div className="text">Loading ...</div>
			</div>
		</div>



		<div className="fixed-sidebar left">
			<div className="fixed-sidebar-left sidebar--small" id="sidebar-left">

				<a href="02-ProfilePage.html" className="logo">
					<div className="img-wrap">
						<img loading="lazy" src="img/logo.webp" alt="Olympus" width="34" height="34" />
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
							<a href="03-Newsfeed.html">
								<svg className="olymp-newsfeed-icon left-menu-icon" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="NEWSFEED">
									<use href="#olymp-newsfeed-icon"></use>
								</svg>
							</a>
						</li>
						<li>
							<a href="16-FavPagesFeed.html">
								<svg className="olymp-star-icon left-menu-icon" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="FAV PAGE">
									<use href="#olymp-star-icon"></use>
								</svg>
							</a>
						</li>
						<li>
							<a href="17-FriendGroups.html">
								<svg className="olymp-happy-faces-icon left-menu-icon" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="FRIEND GROUPS">
									<use href="#olymp-happy-faces-icon"></use>
								</svg>
							</a>
						</li>
						<li>
							<a href="18-MusicAndPlaylists.html">
								<svg className="olymp-headphones-icon left-menu-icon" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="MUSIC&PLAYLISTS">
									<use href="#olymp-headphones-icon"></use>
								</svg>
							</a>
						</li>
						<li>
							<a href="19-WeatherWidget.html">
								<svg className="olymp-weather-icon left-menu-icon" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="WEATHER APP">
									<use href="#olymp-weather-icon"></use>
								</svg>
							</a>
						</li>
						<li>
							<a href="20-CalendarAndEvents-MonthlyCalendar.html">
								<svg className="olymp-calendar-icon left-menu-icon" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="CALENDAR AND EVENTS">
									<use href="#olymp-calendar-icon"></use>
								</svg>
							</a>
						</li>
						<li>
							<a href="24-CommunityBadges.html">
								<svg className="olymp-badge-icon left-menu-icon" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Community Badges">
									<use href="#olymp-badge-icon"></use>
								</svg>
							</a>
						</li>
						<li>
							<a href="25-FriendsBirthday.html">
								<svg className="olymp-cupcake-icon left-menu-icon" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Friends Birthdays">
									<use href="#olymp-cupcake-icon"></use>
								</svg>
							</a>
						</li>
						<li>
							<a href="26-Statistics.html">
								<svg className="olymp-stats-icon left-menu-icon" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Account Stats">
									<use href="#olymp-stats-icon"></use>
								</svg>
							</a>
						</li>
						<li>
							<a href="27-ManageWidgets.html">
								<svg className="olymp-manage-widgets-icon left-menu-icon" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Manage Widgets">
									<use href="#olymp-manage-widgets-icon"></use>
								</svg>
							</a>
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
							<a href="03-Newsfeed.html">
								<svg className="olymp-newsfeed-icon left-menu-icon" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="NEWSFEED">
									<use href="#olymp-newsfeed-icon"></use>
								</svg>
								<span className="left-menu-title">Newsfeed</span>
							</a>
						</li>
						<li>
							<a href="16-FavPagesFeed.html">
								<svg className="olymp-star-icon left-menu-icon" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="FAV PAGE">
									<use href="#olymp-star-icon"></use>
								</svg>
								<span className="left-menu-title">Fav Pages Feed</span>
							</a>
						</li>
						<li>
							<a href="17-FriendGroups.html">
								<svg className="olymp-happy-faces-icon left-menu-icon" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="FRIEND GROUPS">
									<use href="#olymp-happy-faces-icon"></use>
								</svg>
								<span className="left-menu-title">Friend Groups</span>
							</a>
						</li>
						<li>
							<a href="18-MusicAndPlaylists.html">
								<svg className="olymp-headphones-icon left-menu-icon" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="MUSIC&PLAYLISTS">
									<use href="#olymp-headphones-icon"></use>
								</svg>
								<span className="left-menu-title">Music & Playlists</span>
							</a>
						</li>
						<li>
							<a href="19-WeatherWidget.html">
								<svg className="olymp-weather-icon left-menu-icon" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="WEATHER APP">
									<use href="#olymp-weather-icon"></use>
								</svg>
								<span className="left-menu-title">Weather App</span>
							</a>
						</li>
						<li>
							<a href="20-CalendarAndEvents-MonthlyCalendar.html">
								<svg className="olymp-calendar-icon left-menu-icon" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="CALENDAR AND EVENTS">
									<use href="#olymp-calendar-icon"></use>
								</svg>
								<span className="left-menu-title">Calendar and Events</span>
							</a>
						</li>
						<li>
							<a href="24-CommunityBadges.html">
								<svg className="olymp-badge-icon left-menu-icon" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Community Badges">
									<use href="#olymp-badge-icon"></use>
								</svg>
								<span className="left-menu-title">Community Badges</span>
							</a>
						</li>
						<li>
							<a href="25-FriendsBirthday.html">
								<svg className="olymp-cupcake-icon left-menu-icon" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Friends Birthdays">
									<use href="#olymp-cupcake-icon"></use>
								</svg>
								<span className="left-menu-title">Friends Birthdays</span>
							</a>
						</li>
						<li>
							<a href="26-Statistics.html">
								<svg className="olymp-stats-icon left-menu-icon" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Account Stats">
									<use href="#olymp-stats-icon"></use>
								</svg>
								<span className="left-menu-title">Account Stats</span>
							</a>
						</li>
						<li>
							<a href="27-ManageWidgets.html">
								<svg className="olymp-manage-widgets-icon left-menu-icon" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Manage Widgets">
									<use href="#olymp-manage-widgets-icon"></use>
								</svg>
								<span className="left-menu-title">Manage Widgets</span>
							</a>
						</li>
					</ul>

					<div className="profile-completion">

						<div className="skills-item">
							<div className="skills-item-info">
								<span className="skills-item-title">Profile Completion</span>
								<span className="skills-item-count"><span className="count-animate" data-speed="1000" data-refresh-interval="50" data-to="76" data-from="0"></span><span className="units">76%</span></span>
							</div>
							<div className="skills-item-meter">
								<span className="skills-item-meter-active bg-primary" style={{width: '76%'}}></span>
							</div>
						</div>

						<span>Complete <a href="#">your profile</a> so people can know more about you!</span>

					</div>
				</div>
			</div>
		</div>

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

	<div className="fixed-sidebar right">
		<div className="fixed-sidebar-right sidebar--small" id="sidebar-right">

			<div className="mCustomScrollbar" data-mcs-theme="dark">
				<ul className="chat-users">
					<li className="inline-items js-chat-open">
						<div className="author-thumb">
							<img loading="lazy" alt="author" src="img/avatar67-sm.webp" className="avatar" width="34" height="34" />
							<span className="icon-status online"></span>
						</div>
					</li>
					<li className="inline-items js-chat-open">
						<div className="author-thumb">
							<img loading="lazy" alt="author" src="img/avatar62-sm.webp" width="34" height="34" className="avatar" />
							<span className="icon-status online"></span>
						</div>
					</li>

					<li className="inline-items js-chat-open">
						<div className="author-thumb">
							<img loading="lazy" alt="author" src="img/avatar68-sm.webp" className="avatar" width="34" height="34" />
							<span className="icon-status online"></span>
						</div>
					</li>

					<li className="inline-items js-chat-open">
						<div className="author-thumb">
							<img loading="lazy" alt="author" src="img/avatar69-sm.webp" className="avatar" width="34" height="34" />
							<span className="icon-status away"></span>
						</div>
					</li>

					<li className="inline-items js-chat-open">
						<div className="author-thumb">
							<img loading="lazy" alt="author" src="img/avatar70-sm.webp" className="avatar" width="34" height="34" />
							<span className="icon-status disconected"></span>
						</div>
					</li>
					<li className="inline-items js-chat-open">
						<div className="author-thumb">
							<img alt="author" loading="lazy" src="img/avatar64-sm.webp" width="34" height="34" className="avatar" />
							<span className="icon-status online"></span>
						</div>
					</li>
					<li className="inline-items js-chat-open">
						<div className="author-thumb">
							<img loading="lazy" alt="author" src="img/avatar71-sm.webp" className="avatar" width="34" height="34" />
							<span className="icon-status online"></span>
						</div>
					</li>
					<li className="inline-items js-chat-open">
						<div className="author-thumb">
							<img loading="lazy" alt="author" src="img/avatar72-sm.webp" className="avatar" width="34" height="34" />
							<span className="icon-status away"></span>
						</div>
					</li>
					<li className="inline-items js-chat-open">
						<div className="author-thumb">
							<img loading="lazy" alt="author" src="img/avatar63-sm.webp" className="avatar" width="34" height="34" />
							<span className="icon-status status-invisible"></span>
						</div>
					</li>
					<li className="inline-items js-chat-open">
						<div className="author-thumb">
							<img loading="lazy" alt="author" src="img/avatar72-sm.webp" className="avatar" width="34" height="34" />
							<span className="icon-status away"></span>
						</div>
					</li>
					<li className="inline-items js-chat-open">

						<div className="author-thumb">
							<img loading="lazy" alt="author" src="img/avatar71-sm.webp" className="avatar" width="34" height="34" />
							<span className="icon-status online"></span>
						</div>
					</li>
				</ul>
			</div>

			<div className="search-friend inline-items">
				<a href="#" className="js-sidebar-open">
					<svg className="olymp-menu-icon">
						<use href="#olymp-menu-icon"></use>
					</svg>
				</a>
			</div>

			<a href="#" className="olympus-chat inline-items js-chat-open">
				<svg className="olymp-chat---messages-icon">
					<use href="#olymp-chat---messages-icon"></use>
				</svg>
			</a>

		</div>

		<div className="fixed-sidebar-right sidebar--large" id="sidebar-right-1">

			<div className="mCustomScrollbar" data-mcs-theme="dark">

				<div className="ui-block-title ui-block-title-small">
					<a href="#" className="title">Close Friends</a>
					<a href="#">Settings</a>
				</div>

				<ul className="chat-users">
					<li className="inline-items js-chat-open">

						<div className="author-thumb">
							<img loading="lazy" alt="author" src="img/avatar67-sm.webp" className="avatar" width="34" height="34" />
							<span className="icon-status online"></span>
						</div>

						<div className="author-status">
							<a href="#" className="h6 author-name">Carol Summers</a>
							<span className="status">ONLINE</span>
						</div>

						<div className="more">
							<svg className="olymp-three-dots-icon">
								<use href="#olymp-three-dots-icon"></use>
							</svg>

							<ul className="more-icons">
								<li>
									<svg data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="START CONVERSATION" className="olymp-comments-post-icon">
										<use href="#olymp-comments-post-icon"></use>
									</svg>
								</li>

								<li>
									<svg data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="ADD TO CONVERSATION" className="olymp-add-to-conversation-icon">
										<use href="#olymp-add-to-conversation-icon"></use>
									</svg>
								</li>

								<li>
									<svg data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="BLOCK FROM CHAT" className="olymp-block-from-chat-icon">
										<use href="#olymp-block-from-chat-icon"></use>
									</svg>
								</li>
							</ul>

						</div>

					</li>
					<li className="inline-items js-chat-open">

						<div className="author-thumb">
							<img loading="lazy" alt="author" src="img/avatar62-sm.webp" width="34" height="34" className="avatar" />
							<span className="icon-status online"></span>
						</div>

						<div className="author-status">
							<a href="#" className="h6 author-name">Mathilda Brinker</a>
							<span className="status">AT WORK!</span>
						</div>

						<div className="more">
							<svg className="olymp-three-dots-icon">
								<use href="#olymp-three-dots-icon"></use>
							</svg>

							<ul className="more-icons">
								<li>
									<svg data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="START CONVERSATION" className="olymp-comments-post-icon">
										<use href="#olymp-comments-post-icon"></use>
									</svg>
								</li>

								<li>
									<svg data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="ADD TO CONVERSATION" className="olymp-add-to-conversation-icon">
										<use href="#olymp-add-to-conversation-icon"></use>
									</svg>
								</li>

								<li>
									<svg data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="BLOCK FROM CHAT" className="olymp-block-from-chat-icon">
										<use href="#olymp-block-from-chat-icon"></use>
									</svg>
								</li>
							</ul>

						</div>

					</li>

					<li className="inline-items js-chat-open">


						<div className="author-thumb">
							<img loading="lazy" alt="author" src="img/avatar68-sm.webp" className="avatar" width="34" height="34" />
							<span className="icon-status online"></span>
						</div>

						<div className="author-status">
							<a href="#" className="h6 author-name">Carol Summers</a>
							<span className="status">ONLINE</span>
						</div>

						<div className="more">
							<svg className="olymp-three-dots-icon">
								<use href="#olymp-three-dots-icon"></use>
							</svg>

							<ul className="more-icons">
								<li>
									<svg data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="START CONVERSATION" className="olymp-comments-post-icon">
										<use href="#olymp-comments-post-icon"></use>
									</svg>
								</li>

								<li>
									<svg data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="ADD TO CONVERSATION" className="olymp-add-to-conversation-icon">
										<use href="#olymp-add-to-conversation-icon"></use>
									</svg>
								</li>

								<li>
									<svg data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="BLOCK FROM CHAT" className="olymp-block-from-chat-icon">
										<use href="#olymp-block-from-chat-icon"></use>
									</svg>
								</li>
							</ul>

						</div>


					</li>

					<li className="inline-items js-chat-open">


						<div className="author-thumb">
							<img loading="lazy" alt="author" src="img/avatar69-sm.webp" className="avatar" width="34" height="34" />
							<span className="icon-status away"></span>
						</div>

						<div className="author-status">
							<a href="#" className="h6 author-name">Michael Maximoff</a>
							<span className="status">AWAY</span>
						</div>

						<div className="more">
							<svg className="olymp-three-dots-icon">
								<use href="#olymp-three-dots-icon"></use>
							</svg>

							<ul className="more-icons">
								<li>
									<svg data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="START CONVERSATION" className="olymp-comments-post-icon">
										<use href="#olymp-comments-post-icon"></use>
									</svg>
								</li>

								<li>
									<svg data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="ADD TO CONVERSATION" className="olymp-add-to-conversation-icon">
										<use href="#olymp-add-to-conversation-icon"></use>
									</svg>
								</li>

								<li>
									<svg data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="BLOCK FROM CHAT" className="olymp-block-from-chat-icon">
										<use href="#olymp-block-from-chat-icon"></use>
									</svg>
								</li>
							</ul>

						</div>


					</li>

					<li className="inline-items js-chat-open">


						<div className="author-thumb">
							<img loading="lazy" alt="author" src="img/avatar70-sm.webp" className="avatar" width="34" height="34" />
							<span className="icon-status disconected"></span>
						</div>

						<div className="author-status">
							<a href="#" className="h6 author-name">Rachel Howlett</a>
							<span className="status">OFFLINE</span>
						</div>

						<div className="more">
							<svg className="olymp-three-dots-icon">
								<use href="#olymp-three-dots-icon"></use>
							</svg>

							<ul className="more-icons">
								<li>
									<svg data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="START CONVERSATION" className="olymp-comments-post-icon">
										<use href="#olymp-comments-post-icon"></use>
									</svg>
								</li>

								<li>
									<svg data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="ADD TO CONVERSATION" className="olymp-add-to-conversation-icon">
										<use href="#olymp-add-to-conversation-icon"></use>
									</svg>
								</li>

								<li>
									<svg data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="BLOCK FROM CHAT" className="olymp-block-from-chat-icon">
										<use href="#olymp-block-from-chat-icon"></use>
									</svg>
								</li>
							</ul>

						</div>


					</li>
				</ul>


				<div className="ui-block-title ui-block-title-small">
					<a href="#" className="title">MY FAMILY</a>
					<a href="#">Settings</a>
				</div>

				<ul className="chat-users">
					<li className="inline-items js-chat-open">

						<div className="author-thumb">
							<img alt="author" loading="lazy" src="img/avatar64-sm.webp" width="34" height="34" className="avatar" />
							<span className="icon-status online"></span>
						</div>

						<div className="author-status">
							<a href="#" className="h6 author-name">Sarah Hetfield</a>
							<span className="status">ONLINE</span>
						</div>

						<div className="more">
							<svg className="olymp-three-dots-icon">
								<use href="#olymp-three-dots-icon"></use>
							</svg>

							<ul className="more-icons">
								<li>
									<svg data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="START CONVERSATION" className="olymp-comments-post-icon">
										<use href="#olymp-comments-post-icon"></use>
									</svg>
								</li>

								<li>
									<svg data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="ADD TO CONVERSATION" className="olymp-add-to-conversation-icon">
										<use href="#olymp-add-to-conversation-icon"></use>
									</svg>
								</li>

								<li>
									<svg data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="BLOCK FROM CHAT" className="olymp-block-from-chat-icon">
										<use href="#olymp-block-from-chat-icon"></use>
									</svg>
								</li>
							</ul>

						</div>
					</li>
				</ul>


				<div className="ui-block-title ui-block-title-small">
					<a href="#" className="title">UNCATEGORIZED</a>
					<a href="#">Settings</a>
				</div>

				<ul className="chat-users">
					<li className="inline-items js-chat-open">

						<div className="author-thumb">
							<img loading="lazy" alt="author" src="img/avatar71-sm.webp" className="avatar" width="34" height="34" />
							<span className="icon-status online"></span>
						</div>

						<div className="author-status">
							<a href="#" className="h6 author-name">Bruce Peterson</a>
							<span className="status">ONLINE</span>
						</div>

						<div className="more">
							<svg className="olymp-three-dots-icon">
								<use href="#olymp-three-dots-icon"></use>
							</svg>

							<ul className="more-icons">
								<li>
									<svg data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="START CONVERSATION" className="olymp-comments-post-icon">
										<use href="#olymp-comments-post-icon"></use>
									</svg>
								</li>

								<li>
									<svg data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="ADD TO CONVERSATION" className="olymp-add-to-conversation-icon">
										<use href="#olymp-add-to-conversation-icon"></use>
									</svg>
								</li>

								<li>
									<svg data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="BLOCK FROM CHAT" className="olymp-block-from-chat-icon">
										<use href="#olymp-block-from-chat-icon"></use>
									</svg>
								</li>
							</ul>

						</div>


					</li>
					<li className="inline-items js-chat-open">

						<div className="author-thumb">
							<img loading="lazy" alt="author" src="img/avatar72-sm.webp" className="avatar" width="34" height="34" />
							<span className="icon-status away"></span>
						</div>

						<div className="author-status">
							<a href="#" className="h6 author-name">Chris Greyson</a>
							<span className="status">AWAY</span>
						</div>

						<div className="more">
							<svg className="olymp-three-dots-icon">
								<use href="#olymp-three-dots-icon"></use>
							</svg>

							<ul className="more-icons">
								<li>
									<svg data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="START CONVERSATION" className="olymp-comments-post-icon">
										<use href="#olymp-comments-post-icon"></use>
									</svg>
								</li>

								<li>
									<svg data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="ADD TO CONVERSATION" className="olymp-add-to-conversation-icon">
										<use href="#olymp-add-to-conversation-icon"></use>
									</svg>
								</li>

								<li>
									<svg data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="BLOCK FROM CHAT" className="olymp-block-from-chat-icon">
										<use href="#olymp-block-from-chat-icon"></use>
									</svg>
								</li>
							</ul>

						</div>

					</li>
					<li className="inline-items js-chat-open">

						<div className="author-thumb">
							<img loading="lazy" alt="author" src="img/avatar63-sm.webp" className="avatar" width="34" height="34" />
							<span className="icon-status status-invisible"></span>
						</div>

						<div className="author-status">
							<a href="#" className="h6 author-name">Nicholas Grisom</a>
							<span className="status">INVISIBLE</span>
						</div>

						<div className="more">
							<svg className="olymp-three-dots-icon">
								<use href="#olymp-three-dots-icon"></use>
							</svg>

							<ul className="more-icons">
								<li>
									<svg data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="START CONVERSATION" className="olymp-comments-post-icon">
										<use href="#olymp-comments-post-icon"></use>
									</svg>
								</li>

								<li>
									<svg data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="ADD TO CONVERSATION" className="olymp-add-to-conversation-icon">
										<use href="#olymp-add-to-conversation-icon"></use>
									</svg>
								</li>

								<li>
									<svg data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="BLOCK FROM CHAT" className="olymp-block-from-chat-icon">
										<use href="#olymp-block-from-chat-icon"></use>
									</svg>
								</li>
							</ul>

						</div>
					</li>
					<li className="inline-items js-chat-open">

						<div className="author-thumb">
							<img loading="lazy" alt="author" src="img/avatar72-sm.webp" className="avatar" width="34" height="34" />
							<span className="icon-status away"></span>
						</div>

						<div className="author-status">
							<a href="#" className="h6 author-name">Chris Greyson</a>
							<span className="status">AWAY</span>
						</div>

						<div className="more">
							<svg className="olymp-three-dots-icon">
								<use href="#olymp-three-dots-icon"></use>
							</svg>

							<ul className="more-icons">
								<li>
									<svg data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="START CONVERSATION" className="olymp-comments-post-icon">
										<use href="#olymp-comments-post-icon"></use>
									</svg>
								</li>

								<li>
									<svg data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="ADD TO CONVERSATION" className="olymp-add-to-conversation-icon">
										<use href="#olymp-add-to-conversation-icon"></use>
									</svg>
								</li>

								<li>
									<svg data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="BLOCK FROM CHAT" className="olymp-block-from-chat-icon">
										<use href="#olymp-block-from-chat-icon"></use>
									</svg>
								</li>
							</ul>

						</div>
					</li>
					<li className="inline-items js-chat-open">

						<div className="author-thumb">
							<img loading="lazy" alt="author" src="img/avatar71-sm.webp" className="avatar" width="34" height="34" />
							<span className="icon-status online"></span>
						</div>

						<div className="author-status">
							<a href="#" className="h6 author-name">Bruce Peterson</a>
							<span className="status">ONLINE</span>
						</div>

						<div className="more">
							<svg className="olymp-three-dots-icon">
								<use href="#olymp-three-dots-icon"></use>
							</svg>

							<ul className="more-icons">
								<li>
									<svg data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="START CONVERSATION" className="olymp-comments-post-icon">
										<use href="#olymp-comments-post-icon"></use>
									</svg>
								</li>

								<li>
									<svg data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="ADD TO CONVERSATION" className="olymp-add-to-conversation-icon">
										<use href="#olymp-add-to-conversation-icon"></use>
									</svg>
								</li>

								<li>
									<svg data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="BLOCK FROM CHAT" className="olymp-block-from-chat-icon">
										<use href="#olymp-block-from-chat-icon"></use>
									</svg>
								</li>
							</ul>

						</div>
					</li>
				</ul>

			</div>

			<div className="search-friend inline-items">
				<form className="form-group">
					<input className="form-control" placeholder="Search Friends..." value="" type="text" />
				</form>

				<a href="29-YourAccount-AccountSettings.html" className="settings">
					<svg className="olymp-settings-icon">
						<use href="#olymp-settings-icon"></use>
					</svg>
				</a>

				<a href="#" className="js-sidebar-open">
					<svg className="olymp-close-icon">
						<use href="#olymp-close-icon"></use>
					</svg>
				</a>
			</div>

			<a href="#" className="olympus-chat inline-items js-chat-open">

				<h6 className="olympus-chat-title">OLYMPUS CHAT</h6>
				<svg className="olymp-chat---messages-icon">
					<use href="#olymp-chat---messages-icon"></use>
				</svg>
			</a>

		</div>
	</div>


	<div className="fixed-sidebar right fixed-sidebar-responsive" id="sidebar-right-responsive">

		<div className="fixed-sidebar-right sidebar--small">
			<a href="#" className="js-sidebar-open">
				<svg className="olymp-menu-icon">
					<use href="#olymp-menu-icon"></use>
				</svg>
				<svg className="olymp-close-icon">
					<use href="#olymp-close-icon"></use>
				</svg>
			</a>
		</div>

		<div className="fixed-sidebar-right sidebar--large">
			<div className="mCustomScrollbar" data-mcs-theme="dark">

				<div className="ui-block-title ui-block-title-small">
					<a href="#" className="title">Close Friends</a>
					<a href="#">Settings</a>
				</div>

				<ul className="chat-users">
					<li className="inline-items js-chat-open">

						<div className="author-thumb">
							<img loading="lazy" alt="author" src="img/avatar67-sm.webp" className="avatar" width="34" height="34" />
							<span className="icon-status online"></span>
						</div>

						<div className="author-status">
							<a href="#" className="h6 author-name">Carol Summers</a>
							<span className="status">ONLINE</span>
						</div>

						<div className="more">
							<svg className="olymp-three-dots-icon">
								<use href="#olymp-three-dots-icon"></use>
							</svg>

							<ul className="more-icons">
								<li>
									<svg data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="START CONVERSATION" className="olymp-comments-post-icon">
										<use href="#olymp-comments-post-icon"></use>
									</svg>
								</li>

								<li>
									<svg data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="ADD TO CONVERSATION" className="olymp-add-to-conversation-icon">
										<use href="#olymp-add-to-conversation-icon"></use>
									</svg>
								</li>

								<li>
									<svg data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="BLOCK FROM CHAT" className="olymp-block-from-chat-icon">
										<use href="#olymp-block-from-chat-icon"></use>
									</svg>
								</li>
							</ul>

						</div>

					</li>
					<li className="inline-items js-chat-open">

						<div className="author-thumb">
							<img loading="lazy" alt="author" src="img/avatar62-sm.webp" width="34" height="34" className="avatar" />
							<span className="icon-status online"></span>
						</div>

						<div className="author-status">
							<a href="#" className="h6 author-name">Mathilda Brinker</a>
							<span className="status">AT WORK!</span>
						</div>

						<div className="more">
							<svg className="olymp-three-dots-icon">
								<use href="#olymp-three-dots-icon"></use>
							</svg>

							<ul className="more-icons">
								<li>
									<svg data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="START CONVERSATION" className="olymp-comments-post-icon">
										<use href="#olymp-comments-post-icon"></use>
									</svg>
								</li>

								<li>
									<svg data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="ADD TO CONVERSATION" className="olymp-add-to-conversation-icon">
										<use href="#olymp-add-to-conversation-icon"></use>
									</svg>
								</li>

								<li>
									<svg data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="BLOCK FROM CHAT" className="olymp-block-from-chat-icon">
										<use href="#olymp-block-from-chat-icon"></use>
									</svg>
								</li>
							</ul>

						</div>

					</li>

					<li className="inline-items js-chat-open">


						<div className="author-thumb">
							<img loading="lazy" alt="author" src="img/avatar68-sm.webp" className="avatar" width="34" height="34" />
							<span className="icon-status online"></span>
						</div>

						<div className="author-status">
							<a href="#" className="h6 author-name">Carol Summers</a>
							<span className="status">ONLINE</span>
						</div>

						<div className="more">
							<svg className="olymp-three-dots-icon">
								<use href="#olymp-three-dots-icon"></use>
							</svg>

							<ul className="more-icons">
								<li>
									<svg data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="START CONVERSATION" className="olymp-comments-post-icon">
										<use href="#olymp-comments-post-icon"></use>
									</svg>
								</li>

								<li>
									<svg data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="ADD TO CONVERSATION" className="olymp-add-to-conversation-icon">
										<use href="#olymp-add-to-conversation-icon"></use>
									</svg>
								</li>

								<li>
									<svg data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="BLOCK FROM CHAT" className="olymp-block-from-chat-icon">
										<use href="#olymp-block-from-chat-icon"></use>
									</svg>
								</li>
							</ul>

						</div>


					</li>

					<li className="inline-items js-chat-open">


						<div className="author-thumb">
							<img loading="lazy" alt="author" src="img/avatar69-sm.webp" className="avatar" width="34" height="34" />
							<span className="icon-status away"></span>
						</div>

						<div className="author-status">
							<a href="#" className="h6 author-name">Michael Maximoff</a>
							<span className="status">AWAY</span>
						</div>

						<div className="more">
							<svg className="olymp-three-dots-icon">
								<use href="#olymp-three-dots-icon"></use>
							</svg>

							<ul className="more-icons">
								<li>
									<svg data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="START CONVERSATION" className="olymp-comments-post-icon">
										<use href="#olymp-comments-post-icon"></use>
									</svg>
								</li>

								<li>
									<svg data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="ADD TO CONVERSATION" className="olymp-add-to-conversation-icon">
										<use href="#olymp-add-to-conversation-icon"></use>
									</svg>
								</li>

								<li>
									<svg data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="BLOCK FROM CHAT" className="olymp-block-from-chat-icon">
										<use href="#olymp-block-from-chat-icon"></use>
									</svg>
								</li>
							</ul>

						</div>


					</li>

					<li className="inline-items js-chat-open">


						<div className="author-thumb">
							<img loading="lazy" alt="author" src="img/avatar70-sm.webp" className="avatar" width="34" height="34" />
							<span className="icon-status disconected"></span>
						</div>

						<div className="author-status">
							<a href="#" className="h6 author-name">Rachel Howlett</a>
							<span className="status">OFFLINE</span>
						</div>

						<div className="more">
							<svg className="olymp-three-dots-icon">
								<use href="#olymp-three-dots-icon"></use>
							</svg>

							<ul className="more-icons">
								<li>
									<svg data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="START CONVERSATION" className="olymp-comments-post-icon">
										<use href="#olymp-comments-post-icon"></use>
									</svg>
								</li>

								<li>
									<svg data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="ADD TO CONVERSATION" className="olymp-add-to-conversation-icon">
										<use href="#olymp-add-to-conversation-icon"></use>
									</svg>
								</li>

								<li>
									<svg data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="BLOCK FROM CHAT" className="olymp-block-from-chat-icon">
										<use href="#olymp-block-from-chat-icon"></use>
									</svg>
								</li>
							</ul>

						</div>


					</li>
				</ul>


				<div className="ui-block-title ui-block-title-small">
					<a href="#" className="title">MY FAMILY</a>
					<a href="#">Settings</a>
				</div>

				<ul className="chat-users">
					<li className="inline-items js-chat-open">

						<div className="author-thumb">
							<img alt="author" loading="lazy" src="img/avatar64-sm.webp" width="34" height="34" className="avatar" />
							<span className="icon-status online"></span>
						</div>

						<div className="author-status">
							<a href="#" className="h6 author-name">Sarah Hetfield</a>
							<span className="status">ONLINE</span>
						</div>

						<div className="more">
							<svg className="olymp-three-dots-icon">
								<use href="#olymp-three-dots-icon"></use>
							</svg>

							<ul className="more-icons">
								<li>
									<svg data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="START CONVERSATION" className="olymp-comments-post-icon">
										<use href="#olymp-comments-post-icon"></use>
									</svg>
								</li>

								<li>
									<svg data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="ADD TO CONVERSATION" className="olymp-add-to-conversation-icon">
										<use href="#olymp-add-to-conversation-icon"></use>
									</svg>
								</li>

								<li>
									<svg data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="BLOCK FROM CHAT" className="olymp-block-from-chat-icon">
										<use href="#olymp-block-from-chat-icon"></use>
									</svg>
								</li>
							</ul>

						</div>
					</li>
				</ul>


				<div className="ui-block-title ui-block-title-small">
					<a href="#" className="title">UNCATEGORIZED</a>
					<a href="#">Settings</a>
				</div>

				<ul className="chat-users">
					<li className="inline-items js-chat-open">

						<div className="author-thumb">
							<img loading="lazy" alt="author" src="img/avatar71-sm.webp" className="avatar" width="34" height="34" />
							<span className="icon-status online"></span>
						</div>

						<div className="author-status">
							<a href="#" className="h6 author-name">Bruce Peterson</a>
							<span className="status">ONLINE</span>
						</div>

						<div className="more">
							<svg className="olymp-three-dots-icon">
								<use href="#olymp-three-dots-icon"></use>
							</svg>

							<ul className="more-icons">
								<li>
									<svg data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="START CONVERSATION" className="olymp-comments-post-icon">
										<use href="#olymp-comments-post-icon"></use>
									</svg>
								</li>

								<li>
									<svg data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="ADD TO CONVERSATION" className="olymp-add-to-conversation-icon">
										<use href="#olymp-add-to-conversation-icon"></use>
									</svg>
								</li>

								<li>
									<svg data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="BLOCK FROM CHAT" className="olymp-block-from-chat-icon">
										<use href="#olymp-block-from-chat-icon"></use>
									</svg>
								</li>
							</ul>

						</div>


					</li>
					<li className="inline-items js-chat-open">

						<div className="author-thumb">
							<img loading="lazy" alt="author" src="img/avatar72-sm.webp" className="avatar" width="34" height="34" />
							<span className="icon-status away"></span>
						</div>

						<div className="author-status">
							<a href="#" className="h6 author-name">Chris Greyson</a>
							<span className="status">AWAY</span>
						</div>

						<div className="more">
							<svg className="olymp-three-dots-icon">
								<use href="#olymp-three-dots-icon"></use>
							</svg>

							<ul className="more-icons">
								<li>
									<svg data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="START CONVERSATION" className="olymp-comments-post-icon">
										<use href="#olymp-comments-post-icon"></use>
									</svg>
								</li>

								<li>
									<svg data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="ADD TO CONVERSATION" className="olymp-add-to-conversation-icon">
										<use href="#olymp-add-to-conversation-icon"></use>
									</svg>
								</li>

								<li>
									<svg data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="BLOCK FROM CHAT" className="olymp-block-from-chat-icon">
										<use href="#olymp-block-from-chat-icon"></use>
									</svg>
								</li>
							</ul>

						</div>

					</li>
					<li className="inline-items js-chat-open">

						<div className="author-thumb">
							<img loading="lazy" alt="author" src="img/avatar63-sm.webp" className="avatar" width="34" height="34" />
							<span className="icon-status status-invisible"></span>
						</div>

						<div className="author-status">
							<a href="#" className="h6 author-name">Nicholas Grisom</a>
							<span className="status">INVISIBLE</span>
						</div>

						<div className="more">
							<svg className="olymp-three-dots-icon">
								<use href="#olymp-three-dots-icon"></use>
							</svg>

							<ul className="more-icons">
								<li>
									<svg data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="START CONVERSATION" className="olymp-comments-post-icon">
										<use href="#olymp-comments-post-icon"></use>
									</svg>
								</li>

								<li>
									<svg data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="ADD TO CONVERSATION" className="olymp-add-to-conversation-icon">
										<use href="#olymp-add-to-conversation-icon"></use>
									</svg>
								</li>

								<li>
									<svg data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="BLOCK FROM CHAT" className="olymp-block-from-chat-icon">
										<use href="#olymp-block-from-chat-icon"></use>
									</svg>
								</li>
							</ul>

						</div>
					</li>
					<li className="inline-items js-chat-open">

						<div className="author-thumb">
							<img loading="lazy" alt="author" src="img/avatar72-sm.webp" className="avatar" width="34" height="34" />
							<span className="icon-status away"></span>
						</div>

						<div className="author-status">
							<a href="#" className="h6 author-name">Chris Greyson</a>
							<span className="status">AWAY</span>
						</div>

						<div className="more">
							<svg className="olymp-three-dots-icon">
								<use href="#olymp-three-dots-icon"></use>
							</svg>

							<ul className="more-icons">
								<li>
									<svg data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="START CONVERSATION" className="olymp-comments-post-icon">
										<use href="#olymp-comments-post-icon"></use>
									</svg>
								</li>

								<li>
									<svg data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="ADD TO CONVERSATION" className="olymp-add-to-conversation-icon">
										<use href="#olymp-add-to-conversation-icon"></use>
									</svg>
								</li>

								<li>
									<svg data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="BLOCK FROM CHAT" className="olymp-block-from-chat-icon">
										<use href="#olymp-block-from-chat-icon"></use>
									</svg>
								</li>
							</ul>

						</div>
					</li>
					<li className="inline-items js-chat-open">

						<div className="author-thumb">
							<img loading="lazy" alt="author" src="img/avatar71-sm.webp" className="avatar" width="34" height="34" />
							<span className="icon-status online"></span>
						</div>

						<div className="author-status">
							<a href="#" className="h6 author-name">Bruce Peterson</a>
							<span className="status">ONLINE</span>
						</div>

						<div className="more">
							<svg className="olymp-three-dots-icon">
								<use href="#olymp-three-dots-icon"></use>
							</svg>

							<ul className="more-icons">
								<li>
									<svg data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="START CONVERSATION" className="olymp-comments-post-icon">
										<use href="#olymp-comments-post-icon"></use>
									</svg>
								</li>

								<li>
									<svg data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="ADD TO CONVERSATION" className="olymp-add-to-conversation-icon">
										<use href="#olymp-add-to-conversation-icon"></use>
									</svg>
								</li>

								<li>
									<svg data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="BLOCK FROM CHAT" className="olymp-block-from-chat-icon">
										<use href="#olymp-block-from-chat-icon"></use>
									</svg>
								</li>
							</ul>

						</div>
					</li>
				</ul>

			</div>

			<div className="search-friend inline-items">
				<form className="form-group">
					<input className="form-control" placeholder="Search Friends..." value="" type="text" />
				</form>

				<a href="29-YourAccount-AccountSettings.html" className="settings">
					<svg className="olymp-settings-icon">
						<use href="#olymp-settings-icon"></use>
					</svg>
				</a>

				<a href="#" className="js-sidebar-open">
					<svg className="olymp-close-icon">
						<use href="#olymp-close-icon"></use>
					</svg>
				</a>
			</div>

			<a href="#" className="olympus-chat inline-items js-chat-open">

				<h6 className="olympus-chat-title">OLYMPUS CHAT</h6>
				<svg className="olymp-chat---messages-icon">
					<use href="#olymp-chat---messages-icon"></use>
				</svg>
			</a>
		</div>

	</div>


	<header className="header" id="site-header">

		<div className="page-title">
			<h6>SHORTCODES</h6>
		</div>

		<div className="header-content-wrapper">
			<form className="search-bar w-search notification-list friend-requests">
				<div className="form-group with-button">
					<input className="form-control js-user-search" placeholder="Search here people or pages..." type="text" />
					<button>
						<svg className="olymp-magnifying-glass-icon">
							<use href="#olymp-magnifying-glass-icon"></use>
						</svg>
					</button>
				</div>
			</form>

			<a href="#" className="link-find-friend">Find Friends</a>

			<div className="control-block">

				<div className="control-icon more has-items">
					<svg className="olymp-happy-face-icon">
						<use href="#olymp-happy-face-icon"></use>
					</svg>
					<div className="label-avatar bg-blue">6</div>

					<div className="more-dropdown more-with-triangle triangle-top-center">
						<div className="ui-block-title ui-block-title-small">
							<h6 className="title">FRIEND REQUESTS</h6>
							<a href="#">Find Friends</a>
							<a href="#">Settings</a>
						</div>

						<div className="mCustomScrollbar" data-mcs-theme="dark">
							<ul className="notification-list friend-requests">
								<li>
									<div className="author-thumb">
										<img loading="lazy" src="img/avatar55-sm.webp" alt="author" width="34" height="34" />
									</div>
									<div className="notification-event">
										<a href="#" className="h6 notification-friend">Tamara Romanoff</a>
										<span className="chat-message-item">Mutual Friend: Sarah Hetfield</span>
									</div>
									<span className="notification-icon">
										<a href="#" className="accept-request">
											<span className="icon-add without-text">
												<svg className="olymp-happy-face-icon"><use href="#olymp-happy-face-icon"></use></svg>
											</span>
										</a>

										<a href="#" className="accept-request request-del">
											<span className="icon-minus">
												<svg className="olymp-happy-face-icon"><use href="#olymp-happy-face-icon"></use></svg>
											</span>
										</a>

									</span>

									<div className="more">
										<svg className="olymp-three-dots-icon">
											<use href="#olymp-three-dots-icon"></use>
										</svg>
									</div>
								</li>

								<li>
									<div className="author-thumb">
										<img loading="lazy" src="img/avatar56-sm.webp" alt="author" width="34" height="34" />
									</div>
									<div className="notification-event">
										<a href="#" className="h6 notification-friend">Tony Stevens</a>
										<span className="chat-message-item">4 Friends in Common</span>
									</div>
									<span className="notification-icon">
										<a href="#" className="accept-request">
											<span className="icon-add without-text">
												<svg className="olymp-happy-face-icon"><use href="#olymp-happy-face-icon"></use></svg>
											</span>
										</a>

										<a href="#" className="accept-request request-del">
											<span className="icon-minus">
												<svg className="olymp-happy-face-icon"><use href="#olymp-happy-face-icon"></use></svg>
											</span>
										</a>

									</span>

									<div className="more">
										<svg className="olymp-three-dots-icon">
											<use href="#olymp-three-dots-icon"></use>
										</svg>
									</div>
								</li>

								<li className="accepted">
									<div className="author-thumb">
										<img loading="lazy" src="img/avatar57-sm.webp" alt="author" width="34" height="34" />
									</div>
									<div className="notification-event">
										You and
										<a href="#" className="h6 notification-friend">Mary Jane Stark</a> just became friends. Write on
										<a href="#" className="notification-link">her wall</a>.
									</div>
									<span className="notification-icon">
										<svg className="olymp-happy-face-icon"><use href="#olymp-happy-face-icon"></use></svg>
									</span>

									<div className="more">
										<svg className="olymp-three-dots-icon">
											<use href="#olymp-three-dots-icon"></use>
										</svg>
										<svg className="olymp-little-delete">
											<use href="#olymp-little-delete"></use>
										</svg>
									</div>
								</li>

								<li>
									<div className="author-thumb">
										<img loading="lazy" src="img/avatar58-sm.webp" alt="author" width="34" height="34" />
									</div>
									<div className="notification-event">
										<a href="#" className="h6 notification-friend">Stagg Clothing</a>
										<span className="chat-message-item">9 Friends in Common</span>
									</div>
									<span className="notification-icon">
										<a href="#" className="accept-request">
											<span className="icon-add without-text">
												<svg className="olymp-happy-face-icon"><use href="#olymp-happy-face-icon"></use></svg>
											</span>
										</a>

										<a href="#" className="accept-request request-del">
											<span className="icon-minus">
												<svg className="olymp-happy-face-icon"><use href="#olymp-happy-face-icon"></use></svg>
											</span>
										</a>

									</span>

									<div className="more">
										<svg className="olymp-three-dots-icon">
											<use href="#olymp-three-dots-icon"></use>
										</svg>
									</div>
								</li>

							</ul>
						</div>

						<a href="#" className="view-all bg-blue">Check all your Events</a>
					</div>
				</div>

				<div className="control-icon more has-items">
					<svg className="olymp-chat---messages-icon">
						<use href="#olymp-chat---messages-icon"></use>
					</svg>
					<div className="label-avatar bg-purple">2</div>

					<div className="more-dropdown more-with-triangle triangle-top-center">
						<div className="ui-block-title ui-block-title-small">
							<h6 className="title">Chat / Messages</h6>
							<a href="#">Mark all as read</a>
							<a href="#">Settings</a>
						</div>

						<div className="mCustomScrollbar" data-mcs-theme="dark">
							<ul className="notification-list chat-message">
								<li className="message-unread">
									<div className="author-thumb">
										<img loading="lazy" src="img/avatar59-sm.webp" alt="author" width="34" height="34" />
									</div>
									<div className="notification-event">
										<a href="#" className="h6 notification-friend">Diana Jameson</a>
										<span className="chat-message-item">Hi James! It’s Diana, I just wanted to let you know that we have to reschedule...</span>
										<span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">4 hours ago</time></span>
									</div>
									<span className="notification-icon">
										<svg className="olymp-chat---messages-icon"><use href="#olymp-chat---messages-icon"></use></svg>
									</span>
									<div className="more">
										<svg className="olymp-three-dots-icon">
											<use href="#olymp-three-dots-icon"></use>
										</svg>
									</div>
								</li>

								<li>
									<div className="author-thumb">
										<img loading="lazy" src="img/avatar60-sm.webp" alt="author" width="34" height="34" />
									</div>
									<div className="notification-event">
										<a href="#" className="h6 notification-friend">Jake Parker</a>
										<span className="chat-message-item">Great, I’ll see you tomorrow!.</span>
										<span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">4 hours ago</time></span>
									</div>
									<span className="notification-icon">
										<svg className="olymp-chat---messages-icon"><use href="#olymp-chat---messages-icon"></use></svg>
									</span>

									<div className="more">
										<svg className="olymp-three-dots-icon">
											<use href="#olymp-three-dots-icon"></use>
										</svg>
									</div>
								</li>
								<li>
									<div className="author-thumb">
										<img loading="lazy" src="img/avatar61-sm.webp" alt="author" width="34" height="34" />
									</div>
									<div className="notification-event">
										<a href="#" className="h6 notification-friend">Elaine Dreyfuss</a>
										<span className="chat-message-item">We’ll have to check that at the office and see if the client is on board with...</span>
										<span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">Yesterday at 9:56pm</time></span>
									</div>
									<span className="notification-icon">
											<svg className="olymp-chat---messages-icon"><use href="#olymp-chat---messages-icon"></use></svg>
										</span>
									<div className="more">
										<svg className="olymp-three-dots-icon">
											<use href="#olymp-three-dots-icon"></use>
										</svg>
									</div>
								</li>

								<li className="chat-group">
									<div className="author-thumb">
										<img loading="lazy" src="img/avatar11-sm.webp" alt="author" width="16" height="16" />
										<img loading="lazy" src="img/avatar12-sm.webp" alt="author" width="16" height="16" />
										<img loading="lazy" src="img/avatar13-sm.webp" alt="author" width="16" height="16" />
										<img loading="lazy" src="img/avatar10-sm.webp" alt="author" width="36" height="36" />
									</div>
									<div className="notification-event">
										<a href="#" className="h6 notification-friend">You, Faye, Ed &amp; Jet +3</a>
										<span className="last-message-author">Ed:</span>
										<span className="chat-message-item">Yeah! Seems fine by me!</span>
										<span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">March 16th at 10:23am</time></span>
									</div>
									<span className="notification-icon">
											<svg className="olymp-chat---messages-icon"><use href="#olymp-chat---messages-icon"></use></svg>
										</span>
									<div className="more">
										<svg className="olymp-three-dots-icon">
											<use href="#olymp-three-dots-icon"></use>
										</svg>
									</div>
								</li>
							</ul>
						</div>

						<a href="#" className="view-all bg-purple">View All Messages</a>
					</div>
				</div>

				<div className="control-icon more has-items">
					<svg className="olymp-thunder-icon">
						<use href="#olymp-thunder-icon"></use>
					</svg>

					<div className="label-avatar bg-primary">8</div>

					<div className="more-dropdown more-with-triangle triangle-top-center">
						<div className="ui-block-title ui-block-title-small">
							<h6 className="title">Notifications</h6>
							<a href="#">Mark all as read</a>
							<a href="#">Settings</a>
						</div>

						<div className="mCustomScrollbar" data-mcs-theme="dark">
							<ul className="notification-list">
								<li>
									<div className="author-thumb">
										<img loading="lazy" src="img/avatar62-sm.webp" width="34" height="34" alt="author" />
									</div>
									<div className="notification-event">
										<div>
											<a href="#" className="h6 notification-friend">Mathilda Brinker</a> commented on your new
											<a href="#" className="notification-link">profile status</a>.
										</div>
										<span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">4 hours ago</time></span>
									</div>
									<span className="notification-icon">
											<svg className="olymp-comments-post-icon"><use href="#olymp-comments-post-icon"></use></svg>
										</span>

									<div className="more">
										<svg className="olymp-three-dots-icon">
											<use href="#olymp-three-dots-icon"></use>
										</svg>
										<svg className="olymp-little-delete">
											<use href="#olymp-little-delete"></use>
										</svg>
									</div>
								</li>

								<li className="un-read">
									<div className="author-thumb">
										<img loading="lazy" src="img/avatar63-sm.webp" alt="author" width="34" height="34" />
									</div>
									<div className="notification-event">
										<div>You and
											<a href="#" className="h6 notification-friend">Nicholas Grissom</a> just became friends. Write on
											<a href="#" className="notification-link">his wall</a>.
										</div>
										<span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">9 hours ago</time></span>
									</div>
									<span className="notification-icon">
											<svg className="olymp-happy-face-icon"><use href="#olymp-happy-face-icon"></use></svg>
										</span>

									<div className="more">
										<svg className="olymp-three-dots-icon">
											<use href="#olymp-three-dots-icon"></use>
										</svg>
										<svg className="olymp-little-delete">
											<use href="#olymp-little-delete"></use>
										</svg>
									</div>
								</li>

								<li className="with-comment-photo-wrap">
									<div className="with-comment-photo">
										<div className="author-thumb">
											<img loading="lazy" src="img/avatar64-sm.webp" width="34" height="34" alt="author" />
										</div>
										<div className="notification-event">
											<div>
												<a href="#" className="h6 notification-friend">Sarah Hetfield</a> commented on your
												<a href="#" className="notification-link">photo</a>.
											</div>
											<span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">Yesterday at 5:32am</time></span>
										</div>
										<span className="notification-icon">
											<svg className="olymp-comments-post-icon"><use href="#olymp-comments-post-icon"></use></svg>
										</span>
									</div>
									<div className="comment-photo">
										<img loading="lazy" src="img/comment-photo1.webp" alt="photo" width="40" height="40" />
										<span>“She looks incredible in that outfit! We should see each...”</span>
									</div>

									<div className="more">
										<svg className="olymp-three-dots-icon">
											<use href="#olymp-three-dots-icon"></use>
										</svg>
										<svg className="olymp-little-delete">
											<use href="#olymp-little-delete"></use>
										</svg>
									</div>
								</li>

								<li>
									<div className="author-thumb">
										<img loading="lazy" src="img/avatar65-sm.webp" alt="author" width="34" height="34" />
									</div>
									<div className="notification-event">
										<div>
											<a href="#" className="h6 notification-friend">Green Goo Rock</a> invited you to attend to his event Goo in
											<a href="#" className="notification-link">Gotham Bar</a>.
										</div>
										<span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">March 5th at 6:43pm</time></span>
									</div>
									<span className="notification-icon">
											<svg className="olymp-happy-face-icon"><use href="#olymp-happy-face-icon"></use></svg>
										</span>

									<div className="more">
										<svg className="olymp-three-dots-icon">
											<use href="#olymp-three-dots-icon"></use>
										</svg>
										<svg className="olymp-little-delete">
											<use href="#olymp-little-delete"></use>
										</svg>
									</div>
								</li>

								<li>
									<div className="author-thumb">
										<img loading="lazy" src="img/avatar66-sm.webp" alt="author" width="34" height="34" />
									</div>
									<div className="notification-event">
										<div>
											<a href="#" className="h6 notification-friend">James Summers</a> commented on your new
											<a href="#" className="notification-link">profile status</a>.
										</div>
										<span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">March 2nd at 8:29pm</time></span>
									</div>
									<span className="notification-icon">
											<svg className="olymp-heart-icon"><use href="#olymp-heart-icon"></use></svg>
										</span>

									<div className="more">
										<svg className="olymp-three-dots-icon">
											<use href="#olymp-three-dots-icon"></use>
										</svg>
										<svg className="olymp-little-delete">
											<use href="#olymp-little-delete"></use>
										</svg>
									</div>
								</li>
							</ul>
						</div>

						<a href="#" className="view-all bg-primary">View All Notifications</a>
					</div>
				</div>

				<div className="author-page author vcard inline-items more">
					<div className="author-thumb">
						<img alt="author" src="img/author-page.webp" width="36" height="36" className="avatar" />
						<span className="icon-status online"></span>
						<div className="more-dropdown more-with-triangle">
							<div className="mCustomScrollbar" data-mcs-theme="dark">
								<div className="ui-block-title ui-block-title-small">
									<h6 className="title">Your Account</h6>
								</div>

								<ul className="account-settings">
									<li>
										<a href="29-YourAccount-AccountSettings.html">

											<svg className="olymp-menu-icon">
												<use href="#olymp-menu-icon"></use>
											</svg>

											<span>Profile Settings</span>
										</a>
									</li>
									<li>
										<a href="36-FavPage-SettingsAndCreatePopup.html">
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
									<h6 className="title">Chat Settings</h6>
								</div>

								<ul className="chat-settings">
									<li>
										<a href="#">
											<span className="icon-status online"></span>
											<span>Online</span>
										</a>
									</li>
									<li>
										<a href="#">
											<span className="icon-status away"></span>
											<span>Away</span>
										</a>
									</li>
									<li>
										<a href="#">
											<span className="icon-status disconected"></span>
											<span>Disconnected</span>
										</a>
									</li>

									<li>
										<a href="#">
											<span className="icon-status status-invisible"></span>
											<span>Invisible</span>
										</a>
									</li>
								</ul>

								<div className="ui-block-title ui-block-title-small">
									<h6 className="title">Custom Status</h6>
								</div>

								<form className="form-group with-button custom-status">
									<input className="form-control" placeholder="" type="text" value="Space Cowboy" />

									<button className="bg-purple">
										<svg className="olymp-check-icon">
											<use href="#olymp-check-icon"></use>
										</svg>
									</button>
								</form>

								<div className="ui-block-title ui-block-title-small">
									<h6 className="title">About Olympus</h6>
								</div>

								<ul>
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
		</div>

	</header>


	<header className="header header-responsive" id="site-header-responsive">

		<div className="header-content-wrapper">
			<ul className="nav nav-tabs mobile-notification-tabs" id="mobile-notification-tabs" role="tablist">
				<li className="nav-item" role="presentation">
					<a className="nav-link" id="request-tab" data-bs-toggle="tab" href="#request" role="tab" aria-controls="request" aria-selected="false">
						<div className="control-icon has-items">
							<svg className="olymp-happy-face-icon">
								<use href="#olymp-happy-face-icon"></use>
							</svg>
							<div className="label-avatar bg-blue">6</div>
						</div>
					</a>
				</li>

				<li className="nav-item" role="presentation">
					<a className="nav-link" id="chat-tab" data-bs-toggle="tab" href="#chat" role="tab" aria-controls="chat" aria-selected="false">
						<div className="control-icon has-items">
							<svg className="olymp-chat---messages-icon">
								<use href="#olymp-chat---messages-icon"></use>
							</svg>
							<div className="label-avatar bg-purple">2</div>
						</div>
					</a>
				</li>

				<li className="nav-item" role="presentation">
					<a className="nav-link" id="notification-tab" data-bs-toggle="tab" href="#notification" role="tab" aria-controls="notification" aria-selected="false">
						<div className="control-icon has-items">
							<svg className="olymp-thunder-icon">
								<use href="#olymp-thunder-icon"></use>
							</svg>
							<div className="label-avatar bg-primary">8</div>
						</div>
					</a>
				</li>

				<li className="nav-item" role="presentation">
					<a className="nav-link" id="search-tab" data-bs-toggle="tab" href="#search" role="tab" aria-controls="search" aria-selected="false">
						<svg className="olymp-magnifying-glass-icon">
							<use href="#olymp-magnifying-glass-icon"></use>
						</svg>
						<svg className="olymp-close-icon">
							<use href="#olymp-close-icon"></use>
						</svg>
					</a>
				</li>
			</ul>
		</div>

		<div className="tab-content tab-content-responsive">

			<div className="tab-pane fade" id="request" role="tabpanel" aria-labelledby="request-tab">

				<div className="mCustomScrollbar" data-mcs-theme="dark">
					<div className="ui-block-title ui-block-title-small">
						<h6 className="title">FRIEND REQUESTS</h6>
						<a href="#">Find Friends</a>
						<a href="#">Settings</a>
					</div>
					<ul className="notification-list friend-requests">
						<li>
							<div className="author-thumb">
								<img loading="lazy" src="img/avatar55-sm.webp" alt="author" width="34" height="34" />
							</div>
							<div className="notification-event">
								<a href="#" className="h6 notification-friend">Tamara Romanoff</a>
								<span className="chat-message-item">Mutual Friend: Sarah Hetfield</span>
							</div>
							<span className="notification-icon">
											<a href="#" className="accept-request">
												<span className="icon-add without-text">
													<svg className="olymp-happy-face-icon"><use href="#olymp-happy-face-icon"></use></svg>
												</span>
											</a>

											<a href="#" className="accept-request request-del">
												<span className="icon-minus">
													<svg className="olymp-happy-face-icon"><use href="#olymp-happy-face-icon"></use></svg>
												</span>
											</a>

										</span>

							<div className="more">
								<svg className="olymp-three-dots-icon">
									<use href="#olymp-three-dots-icon"></use>
								</svg>
							</div>
						</li>
						<li>
							<div className="author-thumb">
								<img loading="lazy" src="img/avatar56-sm.webp" alt="author" width="34" height="34" />
							</div>
							<div className="notification-event">
								<a href="#" className="h6 notification-friend">Tony Stevens</a>
								<span className="chat-message-item">4 Friends in Common</span>
							</div>
							<span className="notification-icon">
								<a href="#" className="accept-request">
									<span className="icon-add without-text">
										<svg className="olymp-happy-face-icon"><use href="#olymp-happy-face-icon"></use></svg>
									</span>
								</a>

								<a href="#" className="accept-request request-del">
									<span className="icon-minus">
										<svg className="olymp-happy-face-icon"><use href="#olymp-happy-face-icon"></use></svg>
									</span>
								</a>

							</span>

							<div className="more">
								<svg className="olymp-three-dots-icon">
									<use href="#olymp-three-dots-icon"></use>
								</svg>
							</div>
						</li>
						<li className="accepted">
							<div className="author-thumb">
								<img loading="lazy" src="img/avatar57-sm.webp" alt="author" width="34" height="34" />
							</div>
							<div className="notification-event">
								You and
								<a href="#" className="h6 notification-friend">Mary Jane Stark</a> just became friends. Write on
								<a href="#" className="notification-link">her wall</a>.
							</div>
							<span className="notification-icon">
								<svg className="olymp-happy-face-icon"><use href="#olymp-happy-face-icon"></use></svg>
							</span>

							<div className="more">
								<svg className="olymp-three-dots-icon">
									<use href="#olymp-three-dots-icon"></use>
								</svg>
								<svg className="olymp-little-delete">
									<use href="#olymp-little-delete"></use>
								</svg>
							</div>
						</li>
						<li>
							<div className="author-thumb">
								<img loading="lazy" src="img/avatar58-sm.webp" alt="author" width="34" height="34" />
							</div>
							<div className="notification-event">
								<a href="#" className="h6 notification-friend">Stagg Clothing</a>
								<span className="chat-message-item">9 Friends in Common</span>
							</div>
							<span className="notification-icon">
								<a href="#" className="accept-request">
									<span className="icon-add without-text">
										<svg className="olymp-happy-face-icon"><use href="#olymp-happy-face-icon"></use></svg>
									</span>
								</a>

								<a href="#" className="accept-request request-del">
									<span className="icon-minus">
										<svg className="olymp-happy-face-icon"><use href="#olymp-happy-face-icon"></use></svg>
									</span>
								</a>

							</span>

							<div className="more">
								<svg className="olymp-three-dots-icon">
									<use href="#olymp-three-dots-icon"></use>
								</svg>
							</div>
						</li>
					</ul>
					<a href="#" className="view-all bg-blue">Check all your Events</a>
				</div>

			</div>

			<div className="tab-pane fade" id="chat" role="tabpanel" aria-labelledby="chat-tab">

				<div className="mCustomScrollbar" data-mcs-theme="dark">
					<div className="ui-block-title ui-block-title-small">
						<h6 className="title">Chat / Messages</h6>
						<a href="#">Mark all as read</a>
						<a href="#">Settings</a>
					</div>

					<ul className="notification-list chat-message">
						<li className="message-unread">
							<div className="author-thumb">
								<img loading="lazy" src="img/avatar59-sm.webp" alt="author" width="34" height="34" />
							</div>
							<div className="notification-event">
								<a href="#" className="h6 notification-friend">Diana Jameson</a>
								<span className="chat-message-item">Hi James! It’s Diana, I just wanted to let you know that we have to reschedule...</span>
								<span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">4 hours ago</time></span>
							</div>
							<span className="notification-icon">
								<svg className="olymp-chat---messages-icon"><use href="#olymp-chat---messages-icon"></use></svg>
							</span>
							<div className="more">
								<svg className="olymp-three-dots-icon">
									<use href="#olymp-three-dots-icon"></use>
								</svg>
							</div>
						</li>

						<li>
							<div className="author-thumb">
								<img loading="lazy" src="img/avatar60-sm.webp" alt="author" width="34" height="34" />
							</div>
							<div className="notification-event">
								<a href="#" className="h6 notification-friend">Jake Parker</a>
								<span className="chat-message-item">Great, I’ll see you tomorrow!.</span>
								<span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">4 hours ago</time></span>
							</div>
							<span className="notification-icon">
								<svg className="olymp-chat---messages-icon"><use href="#olymp-chat---messages-icon"></use></svg>
							</span>

							<div className="more">
								<svg className="olymp-three-dots-icon">
									<use href="#olymp-three-dots-icon"></use>
								</svg>
							</div>
						</li>
						<li>
							<div className="author-thumb">
								<img loading="lazy" src="img/avatar61-sm.webp" alt="author" width="34" height="34" />
							</div>
							<div className="notification-event">
								<a href="#" className="h6 notification-friend">Elaine Dreyfuss</a>
								<span className="chat-message-item">We’ll have to check that at the office and see if the client is on board with...</span>
								<span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">Yesterday at 9:56pm</time></span>
							</div>
							<span className="notification-icon">
								<svg className="olymp-chat---messages-icon"><use href="#olymp-chat---messages-icon"></use></svg>
							</span>
							<div className="more">
								<svg className="olymp-three-dots-icon">
									<use href="#olymp-three-dots-icon"></use>
								</svg>
							</div>
						</li>

						<li className="chat-group">
							<div className="author-thumb">
								<img loading="lazy" src="img/avatar11-sm.webp" alt="author" width="16" height="16" />
								<img loading="lazy" src="img/avatar12-sm.webp" alt="author" width="16" height="16" />
								<img loading="lazy" src="img/avatar13-sm.webp" alt="author" width="16" height="16" />
								<img loading="lazy" src="img/avatar10-sm.webp" alt="author" width="36" height="36" />
							</div>
							<div className="notification-event">
								<a href="#" className="h6 notification-friend">You, Faye, Ed &amp; Jet +3</a>
								<span className="last-message-author">Ed:</span>
								<span className="chat-message-item">Yeah! Seems fine by me!</span>
								<span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">March 16th at 10:23am</time></span>
							</div>
							<span className="notification-icon">
								<svg className="olymp-chat---messages-icon"><use href="#olymp-chat---messages-icon"></use></svg>
							</span>
							<div className="more">
								<svg className="olymp-three-dots-icon">
									<use href="#olymp-three-dots-icon"></use>
								</svg>
							</div>
						</li>
					</ul>

					<a href="#" className="view-all bg-purple">View All Messages</a>
				</div>

			</div>

			<div className="tab-pane fade" id="notification" role="tabpanel" aria-labelledby="notification-tab">

				<div className="mCustomScrollbar" data-mcs-theme="dark">
					<div className="ui-block-title ui-block-title-small">
						<h6 className="title">Notifications</h6>
						<a href="#">Mark all as read</a>
						<a href="#">Settings</a>
					</div>

					<ul className="notification-list">
						<li>
							<div className="author-thumb">
								<img loading="lazy" src="img/avatar62-sm.webp" width="34" height="34" alt="author" />
							</div>
							<div className="notification-event">
								<div><a href="#" className="h6 notification-friend">Mathilda Brinker</a> commented on your new
									<a href="#" className="notification-link">profile status</a>.
								</div>
								<span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">4 hours ago</time></span>
							</div>
							<span className="notification-icon">
								<svg className="olymp-comments-post-icon"><use href="#olymp-comments-post-icon"></use></svg>
							</span>

							<div className="more">
								<svg className="olymp-three-dots-icon">
									<use href="#olymp-three-dots-icon"></use>
								</svg>
								<svg className="olymp-little-delete">
									<use href="#olymp-little-delete"></use>
								</svg>
							</div>
						</li>

						<li className="un-read">
							<div className="author-thumb">
								<img loading="lazy" src="img/avatar63-sm.webp" alt="author" width="34" height="34" />
							</div>
							<div className="notification-event">
								<div>You and
									<a href="#" className="h6 notification-friend">Nicholas Grissom</a> just became friends. Write on
									<a href="#" className="notification-link">his wall</a>.
								</div>
								<span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">9 hours ago</time></span>
							</div>
							<span className="notification-icon">
								<svg className="olymp-happy-face-icon"><use href="#olymp-happy-face-icon"></use></svg>
							</span>

							<div className="more">
								<svg className="olymp-three-dots-icon">
									<use href="#olymp-three-dots-icon"></use>
								</svg>
								<svg className="olymp-little-delete">
									<use href="#olymp-little-delete"></use>
								</svg>
							</div>
						</li>

						<li className="with-comment-photo-wrap">
							<div className="with-comment-photo">
								<div className="author-thumb"><img loading="lazy" src="img/avatar64-sm.webp" width="34" height="34" alt="author" /></div>
								<div className="notification-event">
									<div><a href="#" className="h6 notification-friend">Sarah Hetfield</a> commented on your
										<a href="#" className="notification-link">photo</a>.
									</div>
									<span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">Yesterday at 5:32am</time></span>
								</div>
								<span className="notification-icon"><svg className="olymp-comments-post-icon"><use href="#olymp-comments-post-icon"></use></svg>									</span>
							</div>
							<div className="comment-photo"><img loading="lazy" src="img/comment-photo1.webp" alt="photo" width="40" height="40" />
								<span>“She looks incredible in that outfit! We should see each...”</span></div>
							<div className="more">
								<svg className="olymp-three-dots-icon">
									<use href="#olymp-three-dots-icon"></use>
								</svg>
								<svg className="olymp-little-delete">
									<use href="#olymp-little-delete"></use>
								</svg>
							</div>
						</li>

						<li>
							<div className="author-thumb">
								<img loading="lazy" src="img/avatar65-sm.webp" alt="author" width="34" height="34" />
							</div>
							<div className="notification-event">
								<div>
									<a href="#" className="h6 notification-friend">Green Goo Rock</a> invited you to attend to his event Goo in
									<a href="#" className="notification-link">Gotham Bar</a>.
								</div>
								<span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">March 5th at 6:43pm</time></span>
							</div>
							<span className="notification-icon">
								<svg className="olymp-happy-face-icon"><use href="#olymp-happy-face-icon"></use></svg>
							</span>

							<div className="more">
								<svg className="olymp-three-dots-icon">
									<use href="#olymp-three-dots-icon"></use>
								</svg>
								<svg className="olymp-little-delete">
									<use href="#olymp-little-delete"></use>
								</svg>
							</div>
						</li>

						<li>
							<div className="author-thumb">
								<img loading="lazy" src="img/avatar66-sm.webp" alt="author" width="34" height="34" />
							</div>
							<div className="notification-event">
								<div><a href="#" className="h6 notification-friend">James Summers</a> commented on your new
									<a href="#" className="notification-link">profile status</a>.
								</div>
								<span className="notification-date"><time className="entry-date updated" datetime="2004-07-24T18:18">March 2nd at 8:29pm</time></span>
							</div>
							<span className="notification-icon">
								<svg className="olymp-heart-icon"><use href="#olymp-heart-icon"></use></svg>
							</span>

							<div className="more">
								<svg className="olymp-three-dots-icon">
									<use href="#olymp-three-dots-icon"></use>
								</svg>
								<svg className="olymp-little-delete">
									<use href="#olymp-little-delete"></use>
								</svg>
							</div>
						</li>
					</ul>

					<a href="#" className="view-all bg-primary">View All Notifications</a>
				</div>

			</div>

			<div className="tab-pane fade" id="search" role="tabpanel" aria-labelledby="search-tab">

				<form className="search-bar w-search notification-list friend-requests">
					<div className="form-group with-button">
						<input className="form-control js-user-search" placeholder="Search here people or pages..." type="text" />
					</div>
				</form>

			</div>

		</div>

	</header>

	<div className="header-spacer"></div>
	<div className="container">
		<div className="row">
			<div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
				<div className="ui-block">
					<div className="ui-block-title">
						<h6 className="title">Color Palette</h6>
					</div>
					<div className="ui-block-content">
						<div className="bg-secondary" style={{color: '#fff', padding: '35px', display: 'inline-block', fontSize: '10px', fontWeight: 'bold', marginRight: '-4px'}}>3f4257</div>
						<div className="bg-grey" style={{color: '#fff', padding: '35px', display: 'inline-block', fontSize: '10px', fontWeight: 'bold', marginRight: '-4px'}}>515365</div>
						<div className="bg-grey-light" style={{color: '#fff', padding: '35px', display: 'inline-block', fontSize: '10px', fontWeight: 'bold', marginRight: '-4px'}}>888da8</div>
						<div className="bg-grey-lighter" style={{color: '#fff', padding: '35px', display: 'inline-block', fontSize: '10px', fontWeight: 'bold', marginRight: '-4px'}}>9a9fbf</div>
						<div className="bg-primary" style={{color: '#fff', padding: '35px', display: 'inline-block', fontSize: '10px', fontWeight: 'bold', marginRight: '-4px'}}>ff5e3a</div>
						<div className="bg-purple" style={{color: '#fff', padding: '35px', display: 'inline-block', fontSize: '10px', fontWeight: 'bold', marginRight: '-4px'}}>7c5ac2</div>
						<div className="bg-blue" style={{color: '#fff', padding: '35px', display: 'inline-block', fontSize: '10px', fontWeight: 'bold', marginRight: '-4px'}}>38a9ff</div>
						<div className="bg-breez" style={{color: '#fff', padding: '35px', display: 'inline-block', fontSize: '10px', fontWeight: 'bold', marginRight: '-4px'}}>08ddc1</div>
						<div className="bg-breez-light" style={{color: '#fff', padding: '35px', display: 'inline-block', fontSize: '10px', fontWeight: 'bold', marginRight: '-4px'}}>2aebcb</div>
						<div className="bg-yellow" style={{color: '#fff', padding: '35px', display: 'inline-block', fontSize: '10px', fontWeight: 'bold', marginRight: '-4px'}}>ffdc1b</div>
						<div className="bg-smoke" style={{color: '#fff', padding: '35px', display: 'inline-block', fontSize: '10px', fontWeight: 'bold', marginRight: '-4px'}}>e6ecf5</div>
					</div>

					<div className="ui-block-content">
						<h1>Hello, world! - 40px</h1>
						<h2>Hello, world! - 32px</h2>
						<h3>Hello, world! - 28px</h3>
						<h4>Hello, world! - 22px</h4>
						<h5>Hello, world! - 16px</h5>
						<h6>Hello, world! - 14px</h6>
					</div>
				</div>

				<div className="ui-block">
					<div className="ui-block-title">
						<h6 className="title">Button Versions</h6>
					</div>
					<div className="ui-block-content">
						<div className="row">
							<div className="col col-lg-3 col-md-6 col-sm-12 col-12">
								<a href="#" className="btn btn-primary btn-lg">Big Button</a>
								<a href="#" className="btn btn-primary btn-md">Medium Button</a>
								<a href="#" className="btn btn-primary btn-md-2">Medium Button V2</a>
								<a href="#" className="btn btn-primary btn-sm">Small Button</a>
							</div>
							<div className="col col-lg-3 col-md-6 col-sm-12 col-12">
								<a href="#" className="btn btn-secondary btn-lg">Big Button</a>
								<a href="#" className="btn btn-secondary btn-md">Medium Button</a>
								<a href="#" className="btn btn-secondary btn-md-2">Medium Button V2</a>
								<a href="#" className="btn btn-secondary btn-sm">Small Button</a>
							</div>
						</div>
						<div className="row">
							<div className="col col-lg-3 col-md-6 col-sm-12 col-12">
								<a href="#" className="btn btn-purple btn-lg">Big Button</a>
							</div>
							<div className="col col-lg-3 col-md-6 col-sm-12 col-12">
								<a href="#" className="btn btn-blue btn-lg">Big Button</a>
							</div>
							<div className="col col-lg-3 col-md-6 col-sm-12 col-12">
								<a href="#" className="btn btn-breez btn-lg">Big Button</a>
							</div>
							<div className="col col-lg-3 col-md-6 col-sm-12 col-12">
								<a href="#" className="btn btn-green btn-lg">Big Button</a>
							</div>
							<div className="col col-lg-3 col-md-6 col-sm-12 col-12">
								<a href="#" className="btn btn-grey btn-lg">Big Button</a>
							</div>
							<div className="col col-lg-3 col-md-6 col-sm-12 col-12">
								<a href="#" className="btn btn-grey-light btn-lg">Big Button</a>
							</div>
							<div className="col col-lg-3 col-md-6 col-sm-12 col-12">
								<a href="#" className="btn btn-grey-lighter btn-lg">Big Button</a>
							</div>
							<div className="col col-lg-3 col-md-6 col-sm-12 col-12">
								<a href="#" className="btn btn-breez-light btn-lg">Big Button</a>
							</div>
							<div className="col col-lg-3 col-md-6 col-sm-12 col-12">
								<a href="#" className="btn btn-yellow btn-lg">Big Button</a>
							</div>
							<div className="col col-lg-3 col-md-6 col-sm-12 col-12">
								<a href="#" className="btn btn-smoke btn-lg btn-light-bg">Big Button</a>
							</div>
						</div>
					</div>
				</div>

				<div className="ui-block">
					<div className="ui-block-title">
						<h6 className="title">Form Elements</h6>
					</div>
					<div className="ui-block-content">
						<div className="row">
							<div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb30">
								<div className="form-group label-floating is-empty">
									<label className="control-label">Default Input</label>
									<input className="form-control" type="text" placeholder="" />
								</div>
								<div className="form-group label-floating has-success">
									<label className="control-label">Success Input</label>
									<input type="text" className="form-control form-control-success" />
								</div>
								<div className="form-group label-floating has-error">
									<label className="control-label">Error Input</label>
									<input type="text" className="form-control form-control-danger" />
								</div>
								<fieldset disabled>
									<div className="form-group has-disabled">
										<input type="text" className="form-control" placeholder="Disabled input" />
									</div>
								</fieldset>

								<label className="control-label">Dropdown Field</label>
								<fieldset className="form-group">
									<select className="form-select form-control">
										<option value="AL">Alabama</option>
										<option value="2">Oklahoma</option>
										<option value="WY">Wyoming</option>
									</select>
								</fieldset>

								<h6>Completed Input V2</h6>
								<div className="form-group">
									<input className="form-control" type="text" placeholder="James Spiegel" />
								</div>

								<div className="form-group with-icon label-floating is-empty">
									<label className="control-label">Input with Icon</label>
									<input className="form-control" type="text" />
									<svg className="c-facebook" width="20" height="20">
										<use href="#olymp-facebook-icon"></use>
									</svg>
								</div>

								<label className="control-label">Calendar Field</label>
								<div className="form-group date-time-picker">
									<input type="text" name="datetimepicker" value="10/24/1984" />
									<span className="input-group-addon">
										<svg className="olymp-month-calendar-icon icon"><use href="#olymp-month-calendar-icon"></use></svg>
									</span>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col col-lg-6 col-md-6 col-sm-12 col-12 mb30">
								<h6>Switch On</h6>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
								<div className="togglebutton">
									<label>
										<input type="checkbox" checked="" />
									</label>
								</div>
							</div>

							<div className="col col-lg-6 col-md-6 col-sm-12 col-12 mb30">
								<h6>Switch Off</h6>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
								<div className="togglebutton">
									<label>
										<input type="checkbox" />
									</label>
								</div>
							</div>
							<div className="col col-lg-6 col-md-6 col-sm-12 col-12 mb30">
								<h6>Checkboxes</h6>
								<div className="checkbox">
									<label>
										<input type="checkbox" name="optionsCheckboxes" />
										Unchecked
									</label>
								</div>
								<div className="checkbox">
									<label>
										<input type="checkbox" name="optionsCheckboxes" checked />
										Checked
									</label>
								</div>
								<div className="checkbox">
									<label>
										<input type="checkbox" name="optionsCheckboxes" disabled />
										Disabled Unchecked
									</label>
								</div>
								<div className="checkbox">
									<label>
										<input type="checkbox" name="optionsCheckboxes" disabled checked />
										Disabled Checked
									</label>
								</div>
							</div>
							<div className="col col-lg-6 col-md-6 col-sm-12 col-12 mb30">
								<h6>Radio Buttons</h6>
								<div className="radio">
									<label>
										<input type="radio" name="optionsRadios" />
										Radio is off
									</label>
								</div>
								<div className="radio">
									<label>
										<input type="radio" name="optionsRadios" checked />
										Radio is on
									</label>
								</div>
								<div className="radio">
									<label>
										<input type="radio" name="optionsRadiosDisabled" disabled />
										Disabled Radio is off
									</label>
								</div>
								<div className="radio">
									<label>
										<input type="radio" name="optionsRadiosDisabled" checked disabled />
										Disabled Radio is on
									</label>
								</div>
							</div>

							<div className="col col-lg-6 col-md-12 col-sm-12 col-12 mb-30">
								<h6>Tooltips</h6>
								<button type="button" className="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
									Tooltip on top
								</button>
								<button type="button" className="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="right" title="Tooltip on right">
									Tooltip on right
								</button>
								<button type="button" className="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="left" title="Tooltip on left">
									Tooltip on left
								</button>
								<button type="button" className="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Tooltip on bottom">
									Tooltip on bottom
								</button>
							</div>

							<div className="col col-lg-6 col-md-12 col-sm-12 col-xs-12 mb30">
								<h6>Popovers</h6>
								<button type="button" className="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." data-bs-original-title="" title="">
									Popover on top
								</button>
								<button type="button" className="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="right" data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." data-bs-original-title="" title="">
									Popover on right
								</button>
								<button type="button" className="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="bottom" data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." data-bs-original-title="" title="">
									Popover on bottom
								</button>
								<button type="button" className="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="left" data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." data-bs-original-title="" title="">
									Popover on left
								</button>
							</div>

						</div>

						<div className="row medium-padding80">
							<div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 mb30">
								<div className="range-slider range-slider--primary">
									<input type="text" className="range-slider-js" name="example_name" value="" />
								</div>
							</div>
							<div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 mb30">
								<div className="range-slider range-slider--red">
									<input type="text" className="range-slider-js" name="example_name" value="" />
								</div>
							</div>
							<div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 mb30">
								<div className="range-slider range-slider--green">
									<input type="text" className="range-slider-js" name="example_name" value="" />
								</div>
							</div>
							<div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 mb30">
								<div className="range-slider range-slider--blue">
									<input type="text" className="range-slider-js" name="example_name" value="" />
								</div>
							</div>
						</div>

					<div className="row mb30">
						<div className="col col-lg-12 col-12">
							<h6>Upload Buttons</h6>
						</div>
						<div className="col col-lg-3 col-md-3 col-sm-12 col-12">
							<div className="file-upload">
								<label for="upload" className="file-upload__label">Upload Button</label>
								<input id="upload" className="file-upload__input" type="file" name="file-upload" />
							</div>
						</div>
						<div className="col col-lg-3 col-md-3 col-sm-12 col-12">
							<div className="file-upload">
								<label for="upload" className="file-upload__label bg-blue">Upload Button</label>
								<input id="upload3" className="file-upload__input" type="file" name="file-upload" />
							</div>
						</div>
						<div className="col col-lg-3 col-md-3 col-sm-12 col-12">
							<div className="file-upload">
								<label for="upload" className="file-upload__label bg-breez">Upload Button</label>
								<input id="upload1" className="file-upload__input" type="file" name="file-upload" />
							</div>
						</div>
						<div className="col col-lg-3 col-md-3 col-sm-12 col-12">
							<div className="file-upload">
								<label for="upload" className="file-upload__label bg-green">Upload Button</label>
								<input id="upload2" className="file-upload__input" type="file" name="file-upload" />
							</div>
						</div>
					</div>

					<div className="row">
						<div className="col col-lg-12 col-12">
							<h6>Quantity Input Field</h6>
						</div>

						<div className="col col-lg-3 col-md-6 col-sm-12 col-12 mb30">
							<div className="input-group number-spinner">
								<span className="input-group-btn data-dwn input-group-prepend">
									<button className="btn btn-default btn-info" data-dir="dwn"><span className="glyphicon glyphicon-minus"></span></button>
								</span>
								<input type="text" className="form-control text-center" value="1" min="0" max="100" />
								<span className="input-group-btn data-up input-group-append">
									<button className="btn btn-default btn-info" data-dir="up"><span className="glyphicon glyphicon-plus"></span></button>
								</span>
							</div>
						</div>

						<div className="col col-lg-3 col-md-6 col-sm-12 col-12 mb30">
							<div className="input-group number-spinner number-spinner--secondary">
								<span className="input-group-btn data-dwn input-group-prepend">
									<button className="btn btn-default btn-info" data-dir="dwn"><span className="glyphicon glyphicon-minus"></span></button>
								</span>
								<input type="text" className="form-control text-center" value="-10" min="-50" max="50" />
								<span className="input-group-btn data-up input-group-append">
									<button className="btn btn-default btn-info" data-dir="up"><span className="glyphicon glyphicon-plus"></span></button>
								</span>
							</div>
						</div>

						<div className="col col-lg-3 col-md-6 col-sm-12 col-12 mb30">
							<div className="input-group number-spinner number-spinner--breez">
								<span className="input-group-btn data-dwn input-group-prepend">
									<button className="btn btn-default btn-info" data-dir="dwn"><span className="glyphicon glyphicon-minus"></span></button>
								</span>
								<input type="text" className="form-control text-center" value="10" min="-40" max="40" />
								<span className="input-group-btn data-up input-group-append">
									<button className="btn btn-default btn-info" data-dir="up"><span className="glyphicon glyphicon-plus"></span></button>
								</span>
							</div>
						</div>

						<div className="col col-lg-3 col-md-6 col-sm-12 col-12 mb30">
							<div className="input-group number-spinner number-spinner--green">
								<span className="input-group-btn data-dwn input-group-prepend">
									<button className="btn btn-default btn-info" data-dir="dwn"><span className="glyphicon glyphicon-minus"></span></button>
								</span>
								<input type="text" className="form-control text-center" value="5" min="0" max="10" />
								<span className="input-group-btn data-up input-group-append">
									<button className="btn btn-default btn-info" data-dir="up"><span className="glyphicon glyphicon-plus"></span></button>
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>

				<div className="ui-block">
					<div className="ui-block-title">
						<h6 className="title">Forms Validated</h6>
					</div>
					<div className="ui-block-content">
						<form className="needs-validation" novalidate>
							<div className="crumina-module crumina-heading with-title-decoration">
								<h5 className="heading-title">Form</h5>
							</div>

							<div className="row">
								<div className="col col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
									<div className="form-group label-floating">
										<label className="control-label">First Name</label>
										<input className="form-control" type="text" placeholder="" value="" required />
										<span className="invalid-feedback">
											<span className="error-box">
												First Name is required
											</span>
										</span>
									</div>
								</div>
								<div className="col col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
									<div className="form-group label-floating">
										<label className="control-label">Last Name</label>
										<input className="form-control" type="text" placeholder="" value="Spiegel" required />
										<span className="invalid-feedback">
											<span className="error-box">
												Last Name is required
											</span>
										</span>
									</div>
								</div>
								<div className="col col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
									<div className="form-group label-floating">
										<label className="control-label">Email</label>
										<input className="form-control" type="email" placeholder="" value="jspiegel@yourmail.com" required />
										<span className="invalid-feedback">
											<span className="error-box">
												Email is required
											</span>
										</span>
									</div>
								</div>
								<div className="col col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
									<div className="form-group">
										<input className="form-control" type="tel" placeholder="Phone Number" required />
										<span className="invalid-feedback">
											<span className="error-box">
												Phone Number is required
											</span>
										</span>
									</div>
								</div>

								<div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
									<div className="form-group label-floating is-select">
										<label className="control-label">Select your Country</label>
										<select className="form-select form-control">
											<option value="US">United States</option>
											<option value="AR">Argentina</option>
										</select>
									</div>
								</div>
								<div className="col col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
									<div className="form-group label-floating is-select">
										<label className="control-label">Select Your State</label>
										<select className="form-select form-control">
											<option value="CA">California</option>
											<option value="AR">Arizona</option>
										</select>
									</div>
								</div>
								<div className="col col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
									<div className="form-group">
										<input className="form-control" placeholder="Zip Code" type="text" required />
										<span className="invalid-feedback">
											<span className="error-box">
												Zip Code is required
											</span>
										</span>
									</div>
								</div>

								<div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
									<div className="form-group label-floating">
										<label className="control-label">Your Address</label>
										<input className="form-control" type="text" placeholder="" required />
										<span className="invalid-feedback">
											<span className="error-box">
												Your Address is required
											</span>
										</span>
									</div>

									<div className="form-group label-floating">
										<label className="control-label">Apartment Number / Suite</label>
										<input className="form-control" type="text" placeholder="" required />
										<span className="invalid-feedback">
											<span className="error-box">
												Apartment Number / Suite is required
											</span>
										</span>
									</div>

									<div className="checkbox">
										<label>
											<input type="checkbox" name="optionsCheckboxes" required />
											Ship to a different address
											<span className="invalid-feedback">
												<span className="error-box">
													Different address is required
												</span>
											</span>
										</label>
									</div>

									<button className="btn btn-md btn-primary" type="submit">Submit form</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>

	<a className="back-to-top" href="#">
		<svg className="back-icon" width="14" height="18">
			<use href="#olymp-back-to-top"></use>
		</svg>
	</a>


	<div className="ui-block popup-chat popup-chat-responsive" tabindex="-1" role="dialog" aria-labelledby="popup-chat-responsive" aria-hidden="true">

		<div className="modal-content">
			<div className="modal-header">
				<span className="icon-status online"></span>
				<h6 className="title">Chat</h6>
				<div className="more">
					<svg className="olymp-three-dots-icon">
						<use href="#olymp-three-dots-icon"></use>
					</svg>
					<svg className="olymp-little-delete js-chat-open">
						<use href="#olymp-little-delete"></use>
					</svg>
				</div>
			</div>
			<div className="modal-body">
				<div className="mCustomScrollbar">
					<ul className="notification-list chat-message chat-message-field">
						<li>
							<div className="author-thumb">
								<img loading="lazy" src="img/avatar14-sm.webp" width="28" height="28" alt="author" className="mCS_img_loaded" />
							</div>
							<div className="notification-event">
								<span className="chat-message-item">Hi James! Please remember to buy the food for tomorrow! I’m gonna be handling the gifts and Jake’s gonna get the drinks</span>
								<span className="notification-date"><time className="entry-date updated" datetime="2004-07-24T18:18">Yesterday at 8:10pm</time></span>
							</div>
						</li>

						<li>
							<div className="author-thumb">
								<img loading="lazy" src="img/author-page.webp" width="36" height="36" alt="author" className="mCS_img_loaded" />
							</div>
							<div className="notification-event">
								<span className="chat-message-item">Don’t worry Mathilda!</span>
								<span className="chat-message-item">I already bought everything</span>
								<span className="notification-date"><time className="entry-date updated" datetime="2004-07-24T18:18">Yesterday at 8:29pm</time></span>
							</div>
						</li>

						<li>
							<div className="author-thumb">
								<img loading="lazy" src="img/avatar14-sm.webp" width="28" height="28" alt="author" className="mCS_img_loaded" />
							</div>
							<div className="notification-event">
								<span className="chat-message-item">Hi James! Please remember to buy the food for tomorrow! I’m gonna be handling the gifts and Jake’s gonna get the drinks</span>
								<span className="notification-date"><time className="entry-date updated" datetime="2004-07-24T18:18">Yesterday at 8:10pm</time></span>
							</div>
						</li>
					</ul>
				</div>

				<form className="need-validation">

					<div className="form-group">
						<textarea className="form-control" placeholder="Press enter to post..."></textarea>
						<div className="add-options-message">
							<a href="#" className="options-message">
								<svg className="olymp-computer-icon">
									<use href="#olymp-computer-icon"></use>
								</svg>
							</a>
							<div className="options-message smile-block">

								<svg className="olymp-happy-sticker-icon">
									<use href="#olymp-happy-sticker-icon"></use>
								</svg>

								<ul className="more-dropdown more-with-triangle triangle-bottom-right">
									<li>
										<a href="#">
											<img loading="lazy" src="img/icon-chat1.webp" alt="icon" width="20" height="20" />
										</a>
									</li>
									<li>
										<a href="#">
											<img loading="lazy" src="img/icon-chat2.webp" alt="icon" width="20" height="20" />
										</a>
									</li>
									<li>
										<a href="#">
											<img loading="lazy" src="img/icon-chat3.webp" alt="icon" width="20" height="20" />
										</a>
									</li>
									<li>
										<a href="#">
											<img loading="lazy" src="img/icon-chat4.webp" alt="icon" width="20" height="20" />
										</a>
									</li>
									<li>
										<a href="#">
											<img loading="lazy" src="img/icon-chat5.webp" alt="icon" width="20" height="20" />
										</a>
									</li>
									<li>
										<a href="#">
											<img loading="lazy" src="img/icon-chat6.webp" alt="icon" width="20" height="20" />
										</a>
									</li>
									<li>
										<a href="#">
											<img loading="lazy" src="img/icon-chat7.webp" alt="icon" width="20" height="20" />
										</a>
									</li>
									<li>
										<a href="#">
											<img loading="lazy" src="img/icon-chat8.webp" alt="icon" width="20" height="20" />
										</a>
									</li>
									<li>
										<a href="#">
											<img loading="lazy" src="img/icon-chat9.webp" alt="icon" width="20" height="20" />
										</a>
									</li>
									<li>
										<a href="#">
											<img loading="lazy" src="img/icon-chat10.webp" alt="icon" width="20" height="20" />
										</a>
									</li>
									<li>
										<a href="#">
											<img loading="lazy" src="img/icon-chat11.webp" alt="icon" width="20" height="20" />
										</a>
									</li>
									<li>
										<a href="#">
											<img loading="lazy" src="img/icon-chat12.webp" alt="icon" width="20" height="20" />
										</a>
									</li>
									<li>
										<a href="#">
											<img loading="lazy" src="img/icon-chat13.webp" alt="icon" width="20" height="20" />
										</a>
									</li>
									<li>
										<a href="#">
											<img loading="lazy" src="img/icon-chat14.webp" alt="icon" width="20" height="20" />
										</a>
									</li>
									<li>
										<a href="#">
											<img loading="lazy" src="img/icon-chat15.webp" alt="icon" width="20" height="20" />
										</a>
									</li>
									<li>
										<a href="#">
											<img loading="lazy" src="img/icon-chat16.webp" alt="icon" width="20" height="20" />
										</a>
									</li>
									<li>
										<a href="#">
											<img loading="lazy" src="img/icon-chat17.webp" alt="icon" width="20" height="20" />
										</a>
									</li>
									<li>
										<a href="#">
											<img loading="lazy" src="img/icon-chat18.webp" alt="icon" width="20" height="20" />
										</a>
									</li>
									<li>
										<a href="#">
											<img loading="lazy" src="img/icon-chat19.webp" alt="icon" width="20" height="20" />
										</a>
									</li>
									<li>
										<a href="#">
											<img loading="lazy" src="img/icon-chat20.webp" alt="icon" width="20" height="20" />
										</a>
									</li>
									<li>
										<a href="#">
											<img loading="lazy" src="img/icon-chat21.webp" alt="icon" width="20" height="20" />
										</a>
									</li>
									<li>
										<a href="#">
											<img loading="lazy" src="img/icon-chat22.webp" alt="icon" width="20" height="20" />
										</a>
									</li>
									<li>
										<a href="#">
											<img loading="lazy" src="img/icon-chat23.webp" alt="icon" width="20" height="20" />
										</a>
									</li>
									<li>
										<a href="#">
											<img loading="lazy" src="img/icon-chat24.webp" alt="icon" width="20" height="20" />
										</a>
									</li>
									<li>
										<a href="#">
											<img loading="lazy" src="img/icon-chat25.webp" alt="icon" width="20" height="20" />
										</a>
									</li>
									<li>
										<a href="#">
											<img loading="lazy" src="img/icon-chat26.webp" alt="icon" width="20" height="20" />
										</a>
									</li>
									<li>
										<a href="#">
											<img loading="lazy" src="img/icon-chat27.webp" alt="icon" width="20" height="20" />
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>

				</form>
			</div>
		</div>

	</div>
	</>
	)
}

export default Blog