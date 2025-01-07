import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom"
import { logout } from '../user_auths/authenticationSlice';
import { useDispatch, useSelector } from 'react-redux';
import store from '../user_auths/store'
import {post} from './utility/toolbox'
function Header() {
  const currentUser = useSelector((state) => state.auth.user);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (currentUser) {
      setUserLoggedIn(true);
    } else {
      setUserLoggedIn(false);
    }
  }, [currentUser]);
  const dispatch = useDispatch();
  const logOut = async () => {
    try {
      const response = post('v2/logout', {})
      dispatch(logout()); // Clear state after successful logout
      setUserLoggedIn(false)
    } catch (error) {
      console.error("Error logging out:", error);
      throw error;
    }
  };
  
	return (
		<header className="header">
      <div className="container">
        <div className="row">
          <div className="col-lg-2">
            <Link to="/">
              <div className="header__logo">
                <img src="theme/img/logo.png" alt="" />
              </div>
            </Link>
          </div>
          <div className="col-lg-8">
            <div className="header__nav">
              <nav className="header__menu mobile-menu">
                <ul>
                  <li className={(location.pathname === '/' || location.pathname === '/mangas') ? "active" : ''}><Link to="/">Homepage</Link></li>
                  <li className={location.pathname === '/bookmark' ? "active" : ''}><span className="dropdown-custom">More</span>
                    <ul className="dropdown">
                      <li><Link to="/bookmark">Bookmark</Link></li>
                      {userLoggedIn && <li><Link to="#" onClick={logOut}>LogOut</Link></li>}
                    </ul>
                  </li>
                  <li className={location.pathname === '/blog' ? "active" : ''}><Link to="/blog">Our Blog</Link></li>
                  {/* <li><a href="#">Contacts</a></li> */}
                </ul>
              </nav>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="header__right">
              <a href="#" className="search-switch"><span className="icon_search"></span></a>
              {!userLoggedIn && <Link to="/login"><span className="icon_profile"></span></Link>}
            </div>
          </div>
        </div>
        <div id="mobile-menu-wrap"></div>
      </div>
  	</header>
	)
}

export default Header;