import { Outlet } from "react-router-dom"
import AdminHeader from '../header'
import ChatPopup from '../chatPopup'
function AuthLayout() {

	return (
      <>
        <AdminHeader />
        <div className="header-spacer"></div>
        <div className="container">
          <div className="row display-flex">
            <div className="col col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="landing-content">
                <h1>Welcome to the Biggest Social Network in the World</h1>
                <p>We are the best and biggest social network with 5 billion active users all around the world. Share you
                  thoughts, write blog posts, show your favourite music via Stopify, earn badges and much more!
                </p>
                <a href="#" className="btn btn-md btn-border c-white">Register Now!</a>
              </div>
            </div>
            <div className="col col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="registration-login-form">
                {/* <!-- Nav tabs --> */}
                <div className="tab-content" id="registration-form-tabs-content" style={{paddingRight: "71px"}}>
                  <Outlet />
                </div>
              </div>
            </div>
          </div>
        </div>
        <ChatPopup />
      </>
		)
}

export default AuthLayout;