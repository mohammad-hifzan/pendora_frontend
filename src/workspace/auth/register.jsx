import { useNavigate, Link } from "react-router-dom"
import {useState} from 'react'
import {SubmitSignUp} from '../../common/utility/toolbox'
import { useDispatch } from 'react-redux';
function WorkSpaceRegister() {
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
					<div className="tab-pane fade show active" id="login" role="tabpanel" aria-labelledby="login-tab">
						<div className="title h6">Register to Olympus</div>
						<form className="content" onSubmit={handleSubmit}>
							<div className="row">
								<div className="col col-12 col-xl-12 col-lg-6 col-md-6 col-sm-12">
									<div className="form-group label-floating">
										<label className="control-label">Full Name</label>
										<input className="form-control" placeholder="" name="name"  value={formParams.name} onChange={handleChange} />
									</div>
								</div>
								<div className="col col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
									<div className="form-group label-floating">
										<label className="control-label">Your Email</label>
										<input className="form-control" placeholder="" type="email" name="email" value={formParams.email} onChange={handleChange} />
									</div>
									<div className="form-group label-floating">
										<label className="control-label">Your Password</label>
										<input className="form-control" placeholder="" type="password" name="password" value={formParams.password} onChange={handleChange} />
									</div>

									{/* <div className="form-group label-floating is-select">
										<label className="control-label">Your Gender</label>
										<select className="form-select">
											<option value="MA">Male</option>
											<option value="FE">Female</option>
										</select>
									</div>

									<div className="remember">
										<div className="checkbox">
											<label>
												<input name="optionsCheckboxes" type="checkbox" />
												I accept the <a href="#">Terms and Conditions</a> of the website
											</label>
										</div>
									</div> */}

                  <button type="submit" className="btn btn-purple btn-lg full-width">Complete Registration!</button>
								</div>
							</div>
						</form>

						<p>Already have an account? <Link to="../login">Login Now!</Link></p>
					</div>
		)
}

export default WorkSpaceRegister