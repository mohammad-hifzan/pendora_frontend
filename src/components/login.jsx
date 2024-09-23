import BreadCrumb from '../common/breadCrumb'
import { login } from '../user_auths/authenticationSlice';
import { useDispatch } from 'react-redux';
import {useState, createContext, useContext, useEffect} from 'react'
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
const API_URL = 'http://localhost:3000';

function Login(props) {
	const dispatch = useDispatch();

	const [formParams, setFormParams] = useState({nameOrEmail: '', password: ''});
	const [user, setUser] = useState(null);

	const navigate = useNavigate();

	const handleChange = (e) => {
    const { name, value } = e.target;
    setFormParams({
      ...formParams,
      [name]: value
    });
  };

  

  const SubmitLogin = async(csrfToken, formData) => {
		try {
	    const response = await axios.post(
	      `${API_URL}/v2/login`,
	      formData,
	      {
	        headers: {
	          'Content-Type': 'application/json',
	          'X-CSRF-Token': csrfToken, // Include the CSRF token in the request headers
	        },
	        withCredentials: true, // Include credentials (like cookies)
	      }
	    );
	    if (response != 'error' && response.status == 201) {
				dispatch(login(response.data.user));
				navigate('/')
			} else {
				navigate('/login')
			}
	  } catch (error) {
	      console.error('Submission error:', error);
	      return 'error'
	    }
	}

  const handleSubmit = async (e) => {
    e.preventDefault();
    let csrfToken = GetCsrfToken()
		SubmitLogin(csrfToken, formParams)
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
                    <input type="text" placeholder="Password" name="password" value={formParams.password} onChange={handleChange} />
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
	        <div className="login__social">
	          <div className="row d-flex justify-content-center">
	            <div className="col-lg-6">
	              <div className="login__social__links">
	                <span>or</span>
	                <ul>
	                  <li><a href="#" className="facebook"><i className="fa fa-facebook"></i> Sign in With
	                  Facebook</a></li>
	                  <li><a href="#" className="google"><i className="fa fa-google"></i> Sign in With Google</a></li>
	                  <li><a href="#" className="twitter"><i className="fa fa-twitter"></i> Sign in With Twitter</a>
	                  </li>
	                </ul>
	              </div>
	            </div>
	          </div>
	        </div>
	      </div>
	    </section>
    </>
		)
}

const GetCsrfToken = async() => {
	const response = await fetch(`${API_URL}/v2/csrf_token`);
  const data = await response.json();
  return data.csrf_token
}




export default Login