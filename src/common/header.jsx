import { Link } from "react-router-dom"
import { logout } from '../user_auths/authenticationSlice';
import { useDispatch } from 'react-redux';
import store from '../user_auths/store'
import {post} from './utility/toolbox'
function Header() {
  const currentUser = store.getState().auth.user
  const dispatch = useDispatch();
  const logOut = async () => {
    try {
      const response = post('v2/logout', {})
      dispatch(logout()); // Clear state after successful logout
    } catch (error) {
      console.error("Error logging out:", error);
      throw error;
    }
  };
  if (currentUser) {
    
  }
	return (
		<header className="header">
      <div className="container">
        <div className="row">
          <div className="col-lg-2">
            <div className="header__logo">
              <Link to="/">
                <img src="theme/img/logo.png" alt="" />
              </Link>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="header__nav">
              <nav className="header__menu mobile-menu">
                <ul>
                  <li className="active"><Link to="/">Homepage</Link></li>
                  <li><a href="./categories.html">Categories <span className="arrow_carrot-down"></span></a>
                    <ul className="dropdown">
                      <li><a href="./categories.html">Categories</a></li>
                      <li><a href="./anime-details.html">Anime Details</a></li>
                      <li><a href="./anime-watching.html">Anime Watching</a></li>
                      <li><a href="./blog-details.html">Blog Details</a></li>
                      <li><Link to="/signup">Sign Up</Link></li>
                      <li><Link to="/login">Login</Link></li>
                      <li><Link to="/bookmark">Bookmark</Link></li>
                      <li><Link to="/manga/add">Add Manga</Link></li>
                      <li><Link to="#" onClick={logOut}>LogOut</Link></li>
                    </ul>
                  </li>
                  <li><a href="./blog.html">Our Blog</a></li>
                  <li><a href="#">Contacts</a></li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="header__right">
              <a href="#" className="search-switch"><span className="icon_search"></span></a>
              {!currentUser && <Link to="/login"><span className="icon_profile"></span></Link>}
              {currentUser && 
                <span className="dropdown">
                  <a class="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><span className="icon_profile"></span></a>
                  <ul className="dropdown-menu" >
                    <li><a className="dropdown-item" style={{color: 'black'}} href="#">Action</a></li>
                    <li><a className="dropdown-item" style={{color: 'black'}} href="#">Another action</a></li>
                    <li><a className="dropdown-item" style={{color: 'black'}} href="#">Something else here</a></li>
                  </ul>
                </span>
              }
            </div>
          </div>
        </div>
        <div id="mobile-menu-wrap"></div>
      </div>
  	</header>
	)
}

export default Header;