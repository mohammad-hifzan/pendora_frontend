import DataTable from 'datatables.net-dt';
import { Link } from "react-router-dom"
import React, { useState, useEffect } from 'react';
import {get} from '../../../common/utility/toolbox' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faEye } from '@fortawesome/free-solid-svg-icons';
function AdminMangas() {
	const [mangas, setMangas] = useState([])

	let table = new DataTable('#myTable', {
	    responsive: true
	});

	const getMangas = async () => {
	  try {
	    const response = await get('/v2/mangas/company_mangas')
	    return response.data;
	  } catch (error) {
	    console.error("Error fetching mangas:", error);
	    throw error;
	  }
	};

	useEffect(() => {
    getMangas().then(result => {
      setMangas(result.mangas)
    }) 
  }, []);

	let mangaRow;
  if (mangas.length > 0) {
  	mangaRow = mangas.map(manga => (
  			<tr>
					<td className="">
						{manga.title}
					</td>
					<td className="">
						<a href="#" className="h6 count">0</a>
					</td>
					<td className="">
						{manga.updated_at}
					</td>
					<td className="">
						{manga.author}
					</td>
					<td>
						<div className="row">
							<div className="col-md-2"></div>
							<div className="col-md-2"></div>
							<div className="col-md-2">
								<Link to={`edit/${manga.id}`} style={{ position: "relative", zIndex: 9999, pointerEvents: "auto" }}><FontAwesomeIcon icon={faPen} /></Link>
							</div>
							<div className="col-md-2">
								<Link to={`${manga.id}/chapters`} style={{ position: "relative", zIndex: 9999, pointerEvents: "auto" }}><FontAwesomeIcon icon={faEye} /></Link>
							</div>
							<div className="col-md-2"></div>
							<div className="col-md-2"></div>
						</div>
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
								<div className="h6 title">Mangas</div>
								<div className="align-right">
									<form className="w-search">
										<div className="form-group with-button">
											<input className="form-control" type="text" placeholder="Search the forums..." />
											<button>
												<svg className="olymp-magnifying-glass-icon"><use href="#olymp-magnifying-glass-icon"></use></svg>
											</button>
										</div>
									</form>
									<Link to="add" className="btn btn-blue btn-md">Add New Manga</Link>
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
							
									<th className="">
										Mangas
									</th>
							
									<th className="">
										Users
									</th>
							
									<th className="">
										Last Updated At
									</th>
							
									<th className="">
										Author
									</th>

									<th className="">
										Action
									</th>
							
								</tr>
							
								</thead>
							
								<tbody>
									{mangaRow}
								</tbody>
							</table>

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
						
						{/* <!-- ... end Pagination --> */}

					</div>
				</div>
			</div>
		</>
		)
}

export default AdminMangas