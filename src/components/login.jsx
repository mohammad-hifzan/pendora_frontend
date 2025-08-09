import BreadCrumb from '../common/breadCrumb'
import { useDispatch } from 'react-redux';
import {useState} from 'react'
import {SubmitLogin} from '../common/utility/toolbox'
import { useNavigate, Link } from 'react-router-dom';

function Login(props) {
	const dispatch = useDispatch();

	const [formParams, setFormParams] = useState({nameOrEmail: '', password: ''});

	const navigate = useNavigate();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormParams({
		...formParams,
		[name]: value
		});
	};

  
  const handleSubmit = async (e) => {
    e.preventDefault();
		SubmitLogin(formParams, dispatch, navigate);
  }

	return (
		<>
			<BreadCrumb type='login'/>
			<section className="login spad">
	      <div className="container">
	        <div className="row">
	          <div className="col-lg-6">
	            <div className="login__form">
	              <h3>Login</h3>
	              <form onSubmit={handleSubmit}>
	                <div className="input__item">
	                  <input type="text" placeholder="Email address" name="nameOrEmail" value={formParams.nameOrEmail} onChange={handleChange} />
	                  <span className="icon_mail"></span>
	                </div>
	                <div className="input__item">
                    <input type="password" placeholder="Password" name="password" value={formParams.password} onChange={handleChange} />
                    <span className="icon_lock"></span>
	                </div>
	                <button type="submit" className="site-btn">Login Now</button>
	              </form>
	              <a href="#" className="forget_pass">Forgot Your Password?</a>
	            </div>
	          </div>
	          <div className="col-lg-6">
	            <div className="login__register">
	              <h3>Dont’t Have An Account?</h3>
	              <Link to="/signup" className="primary-btn">Register Now</Link>
	            </div>
	          </div>
	        </div>
	        {/* <div className="login__social"> */}
	        {/*   <div className="row d-flex justify-content-center"> */}
	        {/*     <div className="col-lg-6"> */}
	        {/*       <div className="login__social__links"> */}
	        {/*         <span>or</span> */}
	        {/*         <ul> */}
	        {/*           <li><a href="#" className="facebook"><i className="fa fa-facebook"></i> Sign in With */}
	        {/*           Facebook</a></li> */}
	        {/*           <li><a href="#" className="google"><i className="fa fa-google"></i> Sign in With Google</a></li> */}
	        {/*           <li><a href="#" className="twitter"><i className="fa fa-twitter"></i> Sign in With Twitter</a> */}
	        {/*           </li> */}
	        {/*         </ul> */}
	        {/*       </div> */}
	        {/*     </div> */}
	        {/*   </div> */}
	        {/* </div> */}
	      </div>
	    </section>
    </>
		)
}





export default Login