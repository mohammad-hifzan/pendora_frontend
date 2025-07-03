import { Link } from "react-router-dom"
import React, { useState, useEffect } from 'react';
import {get} from '../../../common/utility/toolbox' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
function AdminUsers() {
	const [users, setUsers] = useState([])

	const getUsers = async () => {
	  try {
	    const response = await get('v2/users/company_users')
	    return response.data;
	  } catch (error) {
	    console.error("Error fetching users:", error);
	    throw error;
	  }
	};

	useEffect(() => {
    getUsers().then(result => {
      setUsers(result.users)
    }) 
  }, []);

	let userRow;
  if (users.length > 0) {

  	userRow = users.map(user => (
  			<tr>
					<td className="">
						{user.name}
					</td>
					<td className="">
						{user.email}
					</td>
					<td className="">
						{user.role}
					</td>
					<td className="">
						{user.updated_at}
					</td>
					<td>
						{/* <Link to={`edit/${user.id}`} style={{ position: "relative", zIndex: 9999, pointerEvents: "auto" }}><FontAwesomeIcon icon={faPen} /></Link> */}
					</td>
				</tr>
  		))
  }

	return (
					<>
						<div className="header-spacer"></div>
						<div className="container">
							<div className="row">
								<div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
									<div className="ui-block responsive-flex">
										<div className="ui-block-title">
											<div className="h6 title">Users</div>
											<div className="align-right">
												<form className="w-search">
													<div className="form-group with-button">
														<input className="form-control" type="text" placeholder="Search the forums..." />
														<button>
															<svg className="olymp-magnifying-glass-icon"><use href="#olymp-magnifying-glass-icon"></use></svg>
														</button>
													</div>
												</form>
												<a href="#" className="btn btn-blue btn-md">Add New User</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>



						<div className="container">
							<div className="row">
								<div className="col col-xl-12 col-lg-9 col-md-12 col-sm-12 col-12">

									<div className="ui-block">

										
										{/* <!-- Forums Table --> */}
										
										<table className="forums-table">
										
											<thead>
										
											<tr>
										
												<th>
													Name
												</th>
										
												<th>
													Email
												</th>
										
												<th>
													Role
												</th>
										
												<th>
													Last Login
												</th>

												<th>
													Action
												</th>
										
											</tr>
										
											</thead>
										
											<tbody>

											 {userRow}

											</tbody>
										</table>
										
										{/* <!-- ... end Forums Table --> */}

									</div>

									
									{/* <!-- Pagination --> */}
									
									<nav aria-label="Page navigation">
										<ul className="pagination justify-content-center">
											<li className="page-item disabled">
												<a className="page-link" href="#" tabindex="-1">Previous</a>
											</li>
											<li className="page-item"><a className="page-link" href="#">1<div className="ripple-container"><div className="ripple ripple-on ripple-out" style={{left: "-10.3833px", top: "-16.8333px", backgroundColor: "rgb(255, 255, 255)", transform: "scale(16.7857)"}}></div></div></a></li>
											<li className="page-item"><a className="page-link" href="#">2</a></li>
											<li className="page-item"><a className="page-link" href="#">3</a></li>
											<li className="page-item"><a className="page-link" href="#">...</a></li>
											<li className="page-item"><a className="page-link" href="#">12</a></li>
											<li className="page-item">
												<a className="page-link" href="#">Next</a>
											</li>
										</ul>
									</nav>
								</div>
							</div>
						</div>
					</>
		)
}

export default AdminUsers