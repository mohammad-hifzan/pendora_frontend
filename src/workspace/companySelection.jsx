import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentCompany, clearCompany } from '../company/companySlice';
import {get} from '../common/utility/toolbox'
import ContentHeader from './contentHeader'
import { useNavigate, Link } from 'react-router-dom';

function CompanySelection() {
	const currentUser = useSelector((state) => state.auth.user);
	const [companies, setCompanies] = useState([])
	const dispatch = useDispatch();
  const currentCompany = useSelector(state => state.company.currentCompany);
  const navigate = useNavigate();

  const fetchCompanies = async () => {
    try {
      const response = await get('v2/companies')
      setCompanies(response.data.companies)
    } catch (error) {
      console.error("Error logging out:", error);
      throw error;
    }
  };

  const fetchCompany = async (company) => {
    try {
      const response = await get(`v2/companies/${company.id}`)
      dispatch(setCurrentCompany(response.data))
      navigate(`/workspace/dashboard`)
    } catch (error) {
      console.error("Error logging out:", error);
      throw error;
    }
  };

  const setCompany = (company) => {
  	fetchCompany(company)
  }
  
	useEffect(() => {
		dispatch(clearCompany())
		fetchCompanies(currentUser, setCompanies)
  }, []);

	let companyBlock
  if (companies?.length > 0) {
  	companyBlock = companies.map((company) => (
					<div className="col col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12 mb-3">
  					<Link to="#" onClick={() => (setCompany(company))}> 				
							<div className="ui-block h-100 mb-0">
								{/* <!-- Friend Item --> */}
								<div className="friend-item friend-groups">
									<div className="friend-item-content">
										<div className="more">
											<svg className="olymp-three-dots-icon"><use href="#olymp-three-dots-icon"></use></svg>
											<ul className="more-dropdown">
												<li>
													<a href="#">Report Profile</a>
												</li>
												<li>
													<a href="#">Block Profile</a>
												</li>
												<li>
													<a href="#">Turn Off Notifications</a>
												</li>
											</ul>
										</div>
										<div className="friend-avatar">
											<div className="author-thumb">
												<img loading="lazy" src="/themes/themeAuthor/img/logo.webp" alt="Olympus" width="34" height="34" />
											</div>
											<div className="author-content">
												<a href="#" className="h5 author-name">{company.name}</a>
												<div className="country">{company.description}</div>
											</div>
										</div>
										<ul className="friends-harmonic">
											<li>
												<a href="#">
													<img loading="lazy" src="/themes/themeAuthor/img/friend-harmonic5.webp" alt="friend" width="28" height="28" />
												</a>
											</li>
											<li>
												<a href="#">
													<img loading="lazy" src="/themes/themeAuthor/img/friend-harmonic10.webp" alt="friend" width="28" height="28" />
												</a>
											</li>
											<li>
												<a href="#">
													<img loading="lazy" src="/themes/themeAuthor/img/friend-harmonic7.webp" alt="friend" width="28" height="28" />
												</a>
											</li>
											<li>
												<a href="#">
													<img loading="lazy" src="/themes/themeAuthor/img/friend-harmonic8.webp" alt="friend" width="28" height="28" />
												</a>
											</li>
											<li>
												<a href="#">
													<img loading="lazy" src="/themes/themeAuthor/img/friend-harmonic2.webp" alt="friend" width="28" height="28" />
												</a>
											</li>
											<li>
												<a href="#">
													<img loading="lazy" src="/themes/themeAuthor/img/avatar30-sm.webp" alt="author" width="42" height="42" />
												</a>
											</li>
										</ul>
										<div className="control-block-button">
											<a href="#" className="  btn btn-control bg-blue" data-bs-toggle="modal" data-bs-target="#create-friend-group-add-friends">
												<svg className="olymp-happy-faces-icon"><use href="#olymp-happy-faces-icon"></use></svg>
											</a>
											<a href="#" className="btn btn-control btn-grey-lighter">
												<svg className="olymp-settings-icon"><use href="#olymp-settings-icon"></use></svg>
											</a>
										</div>
									</div>
								</div>
								{/* <!-- ... end Friend Item -->			 */}
							</div>
  					</Link>
					</div>
  		))
  }
	return (
			<>
				<ContentHeader />
				<div className="header-spacer"></div>
				<div className="container">
					<div className="row">
						<div className="col col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
							<div className="friend-item friend-groups create-group h-75 mb-3">
								<Link to="/workspace/new">
									<a href="#" className="full-block" ></a> 
									{/* // add them to full-block to start modal data-bs-toggle="modal" data-bs-target="#create-friend-group-1" */}
									<div className="content">
										<a href="#" className="  btn btn-control bg-blue" data-bs-toggle="modal" data-bs-target="#create-friend-group-1">
											<svg className="olymp-plus-icon"><use href="#olymp-plus-icon"></use></svg>
										</a>
										<div className="author-content">
											<a href="#" className="h5 author-name">Add Company</a>
											<div className="country">6 Friends in the Group</div>
										</div>
									</div>
								</Link>
							</div>
							{/* <!-- ... end Friend Item -->		 */}
						</div>

					
						{companyBlock}

					</div>
				</div>

				{/* <!-- ... end Main Content Groups --> */}

				{/* <!-- Window-popup Creating Companies --> */}

				{/* <div className="modal fade" id="create-friend-group-1" tabindex="-1" role="dialog" aria-labelledby="create-friend-group-1" aria-hidden="true">
					<div className="modal-dialog window-popup create-friend-group create-friend-group-1" role="document">
						<div className="modal-content">
							<a href="#" className="close icon-close" data-bs-dismiss="modal" aria-label="Close">
								<svg className="olymp-close-icon"><use href="#olymp-close-icon"></use></svg>
							</a>
							<div className="modal-header">
								<h6 className="title">Create Friend Group</h6>
							</div>

							<div className="modal-body">
								<form className="form-group label-floating">
									<label className="control-label">Company Name</label>
									<input className="form-control" placeholder="" value="Highschool Friends" type="text" />
								</form>

								<form className="form-group with-button">
									<input className="form-control" placeholder="" value="Group Avatar (120x120px min)" type="text" />

									<button className="bg-grey">
										<svg className="olymp-computer-icon"><use href="#olymp-computer-icon"></use></svg>
									</button>

								</form>

								<form className="form-group is-select">
									<svg className="olymp-happy-face-icon"><use href="#olymp-happy-face-icon"></use></svg>

									<select className="form-select" >
										<option title="Green Goo Rock">Green Goo Rock</option>

										<option title="Mathilda Brinker">Mathilda Brinker</option>

										<option title="Marina Valentine">Marina Valentine</option>

										<option title="Dave Marinara">Dave Marinara</option>

										<option title="Rachel Howlett">Rachel Howlett</option>

									</select>
								</form>

								<a href="#" className="btn btn-blue btn-lg full-width">Create Group</a>
							</div>
						</div>
					</div>
				</div> */}

				{/* <!-- ... end Window-popup Creating Companies --> */}
				
				{/* <!-- Window-popup Create Companies Add Companies --> */}

				{/* <div className="modal fade" id="create-friend-group-add-friends" tabindex="-1" role="dialog" aria-labelledby="create-friend-group-add-friends" aria-hidden="true">
					<div className="modal-dialog window-popup create-friend-group create-friend-group-add-friends" role="document">
						<div className="modal-content">
							<a href="#" className="close icon-close" data-bs-dismiss="modal" aria-label="Close">
								<svg className="olymp-close-icon"><use href="#olymp-close-icon"></use></svg>
							</a>

							<div className="modal-header">
								<h6 className="title">Add Friends to “Freelance Clients” Group</h6>
							</div>

							<div className="modal-body">
								<form className="form-group is-select">

									<select className="form-select">
										<option title="Green Goo Rock">Green Goo Rock</option>

										<option title="Mathilda Brinker">Mathilda Brinker</option>

										<option title="Marina Valentine">Marina Valentine</option>

										<option title="Dave Marinara">Dave Marinara</option>

										<option title="Rachel Howlett">Rachel Howlett</option>

									</select>
								</form>

								<a href="#" className="btn btn-blue btn-lg full-width">Save Changes</a>
							</div>
						</div>
					</div>
				</div> */}
			</>

		)
}

export default CompanySelection