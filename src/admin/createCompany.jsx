import {useState, useEffect} from 'react'
import {post} from '../common/utility/toolbox'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import * as Yup from 'yup';
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import countryList from 'react-select-country-list';
import {clearCompany} from '../company/companySlice'
function CreateCompany() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [formParams, setFormParams] = useState({name: '', phone: '', description: '', street: '', postal_code: '', city: '', country: ''});
	const [error, setError] = useState({name: '', phone: '', description: '', street: '', postal_code: '', city: '', country: ''});
	const { user, isAuthenticated, loading } = useSelector((state) => state.auth);
	const validationSchema = Yup.object({
	  name: 				Yup.string().min(2, 'Name must be at least 2 characters').max(32, 'Name cannot exceed 32 characters').required('Required'),
	  phone: 				Yup.string().min(1, 'Name must be at least 1 characters').max(255, 'Name cannot exceed 255 characters').required('Required'),
	  street: 			Yup.string().min(1, 'Name must be at least 1 characters').max(32, 'Name cannot exceed 32 characters').required('Required'),
	  postal_code: 	Yup.string().min(1, 'Name must be at least 1 characters').max(255, 'Name cannot exceed 255 characters').required('Required'),
	  city: 				Yup.string().required('Required'),
	  country: 			Yup.string().required('Required')
	});
	const countries = countryList().getData(); 

	const handleChange = (e) => {
    const { name, value } = e.target;
    setFormParams({
      ...formParams,
      [name]: value
    });
  };

  useEffect(() => {
  	dispatch(clearCompany())
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await validationSchema.validate(formParams, { abortEarly: false });
      console.log('✅ Form is valid:', formParams);
       const parsedPhoneNumber = parsePhoneNumberFromString(formParams.phone, formParams.country);
      if (!parsedPhoneNumber || !parsedPhoneNumber.isValid()) {
	      setError(prev => ({...prev, phone: 'Please enter a valid phone number for the selected country.'}));
	    } else {
	      setError('');
				SubmitCompanyRegistration(formParams)
	    }
      // Proceed with form submission logic here
    } catch (err) {
      const validationErrors = {};
      err.inner.forEach((e) => {
        validationErrors[e.path] = e.message;
      });
      setError(validationErrors);
    }
    
  }

  const SubmitCompanyRegistration = async(formData) => {
		try {
			debugger
	    const response = await post(`v2/companies`, formData);
	    if (response != 'error' && response.status == 201) {
				navigate('/admin/companies')
			} else {
				navigate('/admin/login')
			}
	  } catch (error) {
	      console.error('Submission error:', error);
	      return 'error'
	    }
	}

	return (
			<>

				<div className="header--standard header--standard-landing" id="header--standard">
					<div className="container">
						<div className="header--standard-wrap">

							<a href="#" className="logo">
								<div className="img-wrap">
									<img loading="lazy" src="/themes/themeAuthor/img/logo.webp" alt="Olympus" width="34" height="34" />
									<img loading="lazy" src="/themes/themeAuthor/img/logo-colored-small.webp" width="34" height="34" alt="Olympus" className="logo-colored" />
								</div>
								<div className="title-block">
									<h6 className="logo-title">bookworm</h6>
									<div className="sub-title">CREATE COMPANY</div>
								</div>
							</a>

							<a href="#" className="open-responsive-menu js-open-responsive-menu">
								<svg className="olymp-menu-icon"><use href="#olymp-menu-icon"></use></svg>
							</a>

						</div>
					</div>
				</div>

				<div className="header-spacer--standard"></div>

				<div className="container">
					<div className="row display-flex">
						<div className="col col-xl-3 col-lg-6 col-md-12 col-sm-12 col-12">
						</div>

						<div className="col col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
							<div className="registration-login-form">
								<div className="tab-content" id="registration-form-tabs-content">
									<div className="tab-pane fade show active" id="login" role="tabpanel" aria-labelledby="login-tab">
										<div className="title h6">Register As Company</div>
										<form className="content" onSubmit={handleSubmit}>
											<div className="row">
												<div className="col col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
													<div className="form-group label-floating">
														<label className="control-label">Company Name</label>
														<input className="form-control" placeholder="" type="text" name="name" value={formParams.name} onChange={handleChange} />
														{error.name && <div style={{ color: 'red' }}>{error.name}</div>}
													</div>
												</div>
												<div className="col col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
													<div className="form-group label-floating">
														<label className="control-label">Phone Number</label>
														<input className="form-control" placeholder="" type="tel" name="phone" value={formParams.phone} onChange={handleChange} />
														{error.phone && <div style={{ color: 'red' }}>{error.phone}</div>}
													</div>
												</div>
												<div className="col col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
													<div className="form-group label-floating">
														<label className="control-label">Street</label>
														<input className="form-control" placeholder="" type="text" name="street" value={formParams.street} onChange={handleChange} />
														{error.street && <div style={{ color: 'red' }}>{error.street}</div>}
													</div>
													<div className="form-group label-floating">
														<label className="control-label">Postal Code</label>
														<input className="form-control" placeholder="" type="text" name="postal_code" value={formParams.postal_code} onChange={handleChange} />
														{error.postal_code && <div style={{ color: 'red' }}>{error.postal_code}</div>}
													</div>
													<div className="form-group label-floating">
														<label className="control-label">City</label>
														<input className="form-control" placeholder="" type="text" name="city" value={formParams.city} onChange={handleChange} />
														{error.city && <div style={{ color: 'red' }}>{error.city}</div>}
													</div>

													<div className="form-group label-floating is-select">
														<label className="control-label">Country</label>
														{/* <input className="form-control" value="text" name="company[country]" value={formParams.country} onChange={handleChange} /> */}
														<select className="form-select" name="country" value={formParams.country} onChange={handleChange}>
										          {countries.map((c) => (
										            <option key={c.value} value={c.value}>
										              {c.label}
										            </option>
										          ))}
										        </select>
										        {error.country && <div style={{ color: 'red' }}>{error.country}</div>}
													</div>

													<div className="form-group label-floating is-select">
														<label className="control-label">Description</label>
														<textarea className="form-control" value="text" name="description" value={formParams.description} onChange={handleChange} ></textarea>
														{error.description && <div style={{ color: 'red' }}>{error.description}</div>}
													</div>

													<div className="remember">
														<div className="checkbox">
															<label>
																<input name="optionsCheckboxes" type="checkbox" />
																I accept the <a href="#">Terms and Conditions</a> of the website
															</label>
														</div>
													</div>

													{user.company_count > 0 && 
														<div style={{ marginBottom: '10px' }}>
															<Link to="/admin/companies">Back to Companies</Link>
														</div>
														}

													<button type="submit" className="btn btn-purple btn-lg full-width">Complete Registration!</button>
												</div>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>

						<div className="col col-xl-3 col-lg-6 col-md-12 col-sm-12 col-12">
						</div>
					</div>
				</div>
{/*  THIS IS A RESET PASSWORD MODAL */}
{/* 				<div className="modal fade" id="restore-password" tabindex="-1" role="dialog" aria-labelledby="restore-password" aria-hidden="true"> */}
{/* 					<div className="modal-dialog window-popup restore-password-popup" role="document"> */}
{/* 						<div className="modal-content"> */}
{/* 							<a href="#" className="close icon-close" data-bs-dismiss="modal" aria-label="Close"> */}
{/* 								<svg className="olymp-close-icon"><use href="#olymp-close-icon"></use></svg> */}
{/* 							</a> */}
{/*  */}
{/* 							<div className="modal-header"> */}
{/* 								<h6 className="title">Restore your Password</h6> */}
{/* 							</div> */}
{/*  */}
{/* 							<div className="modal-body"> */}
{/* 								<form  method="get"> */}
{/* 									<p>Enter your email and click the send code button. You’ll receive a code in your email. Please use that */}
{/* 										code below to change the old password for a new one. */}
{/* 									</p> */}
{/* 									<div className="form-group label-floating"> */}
{/* 										<label className="control-label">Your Email</label> */}
{/* 										<input className="form-control" placeholder="" type="email" value="james-spiegel@yourmail.com" /> */}
{/* 									</div> */}
{/* 									<button className="btn btn-purple btn-lg full-width">Send me the Code</button> */}
{/* 									<div className="form-group label-floating"> */}
{/* 										<label className="control-label">Enter the Code</label> */}
{/* 										<input className="form-control" placeholder="" type="text" value="" /> */}
{/* 									</div> */}
{/* 									<div className="form-group label-floating"> */}
{/* 										<label className="control-label">Your New Password</label> */}
{/* 										<input className="form-control" placeholder="" type="password" value="olympus" /> */}
{/* 									</div> */}
{/* 									<button className="btn btn-primary btn-lg full-width">Change your Password!</button> */}
{/* 								</form> */}
{/*  */}
{/* 							</div> */}
{/* 						</div> */}
{/* 					</div> */}
{/* 				</div> */}
			</>
		)
}

export default CreateCompany;