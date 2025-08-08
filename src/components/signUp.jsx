import BreadCrumb from '../common/breadCrumb'
import {useState} from 'react'
import { useNavigate, Link } from 'react-router-dom';
import {SubmitSignUp} from '../common/utility/toolbox'
import { useDispatch } from 'react-redux';

function SignUp() {
	const [formParams, setFormParams] = useState({name: '', email: '', password: ''});
	const navigate = useNavigate();
	const dispatch = useDispatch();
	
  const handleSubmit = async (e) => {
    e.preventDefault();
		SubmitSignUp(formParams, dispatch, navigate);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormParams({
      ...formParams,
      [name]: value
    });
  };
	return (
		<>
			<BreadCrumb type='signup'/>
			<section className="signup spad">
	      <div className="container">
	        <div className="row">
	          <div className="col-lg-6">
	            <div className="login__form">
	              <h3>Sign Up</h3>
	              <form onSubmit={handleSubmit}>
	                <div className="input__item">
	                  <input type="text" name="email" placeholder="Email address" value={formParams.email} onChange={handleChange} />
	                  <span className="icon_mail"></span>
	                </div>
	                <div className="input__item">
	                  <input type="text" name="name" placeholder="Your Name"  value={formParams.name} onChange={handleChange} />
	                  <span className="icon_profile"></span>
	                </div>
	                <div className="input__item">
	                  <input type="password" placeholder="Password" name="password" value={formParams.password} onChange={handleChange} />
	                  <span className="icon_lock"></span>
	                </div>
	                <button type="submit" className="site-btn">SignUp Now</button>
	              </form>
	              <h5>Already have an account? <Link to="/login">Login In!</Link></h5>
	            </div>
	          </div>
	          <div className="col-lg-6">
	            {/* <div className="login__social__links"> */}
	            {/*   <h3>Login With:</h3> */}
	            {/*   <ul> */}
	            {/*     <li><a href="#" className="facebook"><i className="fa fa-facebook"></i> Sign in With Facebook</a> */}
	            {/*     </li> */}
	            {/*     <li><a href="#" className="google"><i className="fa fa-google"></i> Sign in With Google</a></li> */}
	            {/*     <li><a href="#" className="twitter"><i className="fa fa-twitter"></i> Sign in With Twitter</a></li> */}
	            {/*   </ul> */}
	            {/* </div> */}
	          </div>
	        </div>
	      </div>
	    </section>
    </>
		)
}


export default SignUp