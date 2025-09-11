import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom"
function Footer() {
  const [isVisible, setIsVisible] = useState(true); // Visible by default
  const [previousScroll, setPreviousScroll] = useState(window.scrollY);
  const currentUser = useSelector((state) => state.auth.user);

  const toggleVisibility = () => {
    const currentScroll = window.scrollY;

    if (currentScroll > previousScroll) {
      // Scrolling down
      setIsVisible(false);
    } else {
      // Scrolling up
      setIsVisible(true);
    }

    setPreviousScroll(currentScroll);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scrolling effect
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, [previousScroll]);
  
	return (
		<footer className="footer">
      <div className={`page-up scroll-to-top ${isVisible ? 'visible' : ''}`}>
        <a href="#" id="scrollToTopButton" ><span className="arrow_carrot-up"></span></a>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="footer__logo">
              <Link to="/"><a><img src="theme/img/logo.png" alt="" /></a></Link>
            </div>
          </div>
            <div className="col-lg-6">
              <div className="footer__nav">
                <ul>
                  <li className="active"><Link to="/">Homepage</Link></li>
                  {/* <li><a href="./categories.html">Categories</a></li> */}
                  <li><Link to="/blog">Our Blog</Link></li>
                  {/* <li><a href="#">Contacts</a></li> */}
                  {currentUser ?
                      currentUser.role == 'admin' ? 
                      <li><Link to="/workspace/companies" target="_blank">Companies</Link></li>
                      :
                      <li><Link to="/workspace/new" target="_blank">Login As Author</Link></li>
                      : null
                  }
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <p></p>
            </div>
          </div>
        </div>
    </footer>
		)
}
export default Footer;

