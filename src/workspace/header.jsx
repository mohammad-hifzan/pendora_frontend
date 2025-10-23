import {post, customToast} from '../common/utility/toolbox'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../user_auths/authenticationSlice';
function AdminHeader() {
		const currentUser = useSelector((state) => state.auth.user);
		const dispatch = useDispatch();
		const logOut = async () => {
			try {
				const response = await post('v2/logout', {})
				if (response.status === 200) {
					dispatch(logout()); // Clear state after successful logout
					customToast("Logout Successful!", "success", "light");
				}
			} catch (error) {
				console.error("Error logging out:", error);
				customToast("Logout Failed!", "error", "light");
				throw error;
			}
		};
	return (
		<>
			<header className="header" id="site-header">

				<div className="page-title">
					<h6>BOOKWORM</h6>
				</div>

				<div className="header-content-wrapper">
					<div className="control-block">
						{currentUser && 
							<div className="author-page author vcard inline-items more">
								<div className="author-thumb">
									<img alt="author" src="/themes/themeAuthor/img/author-page.jpg" width="36" height="36" className="avatar" />
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
													<a href="#" onClick={logOut}>
														<svg className="olymp-logout-icon">
															<use href="#olymp-logout-icon"></use>
														</svg>

														<span>Log Out</span>
													</a>
												</li>
											</ul>
										</div>

									</div>
								</div>
								<a href="02-ProfilePage.html" className="author-name fn">
									<div className="author-title">
										{currentUser?.name}
										<svg className="olymp-dropdown-arrow-icon">
											<use href="#olymp-dropdown-arrow-icon"></use>
										</svg>
									</div>
									<span className="author-subtitle">ADMIN</span>
								</a>
							</div>
						}
					</div>
				</div>
			</header>
			{/* // end Header-BP */}

			{/* // Responsive Header-BP */}
			<header className="header header-responsive" id="site-header-responsive">
				<div className="header-content-wrapper">
					{/* <div className="control-block"> */}
						{currentUser && (
							<div className="author-page author vcard inline-items more">
								<div className="author-thumb">
									<img
										alt="author"
										src="/themes/themeAuthor/img/author-page.jpg"
										width="36"
										height="36"
										className="avatar"
									/>

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
														<svg
															className="olymp-star-icon left-menu-icon"
															data-bs-toggle="tooltip"
															data-bs-placement="right"
															title="FAV PAGE"
														>
															<use href="#olymp-star-icon"></use>
														</svg>
														<span>Create Fav Page</span>
													</a>
												</li>
												<li>
													<a href="#" onClick={logOut}>
														<svg className="olymp-logout-icon">
															<use href="#olymp-logout-icon"></use>
														</svg>
														<span>Log Out</span>
													</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						)}
					{/* </div> */}
				</div>
			</header>




			{/* // end Responsive Header-BP  */}
		</>

		)
}

export default AdminHeader