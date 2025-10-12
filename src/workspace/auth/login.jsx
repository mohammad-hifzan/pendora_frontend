import { login } from '../../user_auths/authenticationSlice';
import { useDispatch } from 'react-redux';
import {useState, createContext, useContext, useEffect} from 'react'
import {post, SubmitLogin} from '../../common/utility/toolbox'
import { useNavigate, Link } from 'react-router-dom';
function WorkSpaceLogin() {
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

  
  const handleSubmit = async (e) => {
    e.preventDefault();
		SubmitLogin(formParams, dispatch, navigate);
  }
	return (
					<div >
						<div className="title h6">Login to your Account</div>
						<form className="content" onSubmit={handleSubmit}>
							<div className="row">
								<div className="col col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
									<div className="form-group label-floating">
										<label className="control-label">Your Email</label>
										<input className="form-control" type="text" name="nameOrEmail" value={formParams.nameOrEmail} onChange={handleChange} />
									</div>
									<div className="form-group label-floating">
										<label className="control-label">Your Password</label>
										<input className="form-control" type="password" name="password" value={formParams.password} onChange={handleChange} />
									</div>

									{/* <div className="remember">
										<div className="checkbox">
											<label>
												<input name="optionsCheckboxes" type="checkbox" />
												Remember Me
											</label>
										</div>
										<a href="#" className="forgot" data-bs-toggle="modal" data-bs-target="#restore-password">Forgot my Password</a>
									</div> */}
                  <button type="submit" className="btn btn-lg btn-primary full-width">Login</button>
									{/* <a href="#" className="btn btn-lg btn-primary full-width">Login</a> */}

									<div className="or"></div>

									<p>Don’t you have an account? <Link to="../signup">Register Now!</Link></p>
								</div>
							</div>
						</form>
					</div>
		)
}

export default WorkSpaceLogin