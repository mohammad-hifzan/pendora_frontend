import { Link } from "react-router-dom"
import { logout } from '../user_auths/authenticationSlice';
import { useDispatch } from 'react-redux';
import store from '../user_auths/store'
import axios from 'axios';
const API_URL = 'http://localhost:3000';
function Header() {
  const current_user = store.getState().auth.user
  const dispatch = useDispatch();
  let csrfToken = GetCsrfToken()
  const logOut = async() => {
    console.log('working')
    try {
      const response = await axios.post(`${API_URL}/v2/logout`,{
          headers: {
            'Content-Type': 'application/json',
            'X-CSRF-Token': csrfToken, // Include the CSRF token in the request headers
          },
          withCredentials: true, // Include credentials (like cookies)
        });
      dispatch(logout());
    } catch (error) {
      console.error("Error logging out:", error);
      throw error;
    }
  }
	return (
		<header className="header">
      <div className="container">
        <div className="row">
          <div className="col-lg-2">
            <div className="header__logo">
              <a href="./index.html">
                  <img src="theme/img/logo.png" alt="" />
              </a>
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
              <Link to="/login"><span className="icon_profile"></span></Link>
            </div>
          </div>
        </div>
        <div id="mobile-menu-wrap"></div>
      </div>
  	</header>
	)
}
const GetCsrfToken = async() => {
  const response = await fetch(`${API_URL}/v2/csrf_token`);
  const data = await response.json();
  return data.csrf_token
}

export default Header;