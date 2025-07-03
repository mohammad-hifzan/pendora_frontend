import { useParams, Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import {get} from '../../../common/utility/toolbox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faEye } from '@fortawesome/free-solid-svg-icons';
function AdminChapters() {
	const [chapters, setChapters] = useState([])
	const { id } = useParams()

	
	const getChapters = async () => {
	  try {
	    const response = await get(`/v2/mangas/${id}/chapters`)
	    return response.data;
	  } catch (error) {
	    console.error("Error fetching mangas:", error);
	    throw error;
	  }
	};

	useEffect(() => {
    getChapters().then(result => {
      setChapters(result.chapters)
    }) 
  }, []);

  let chapterRow = ""

  if (chapters.length > 0) {
  	chapterRow = chapters.map(chapter => (
			<tr>
				<td className="">
					{chapter.name}
				</td>
				<td className="">
					{chapter.updated_at}
				</td>
				<td className="">
					{chapter.views}
				</td>
				<td>
					<div className="row">
						<div className="col-md-2"></div>
						<div className="col-md-2"></div>
						<div className="col-md-4">
							<Link to={`${chapter.id}/edit`} style={{ position: "relative", zIndex: 9999, pointerEvents: "auto" }}><FontAwesomeIcon icon={faPen} /></Link>
						</div>
						<div className="col-md-2"></div>
						<div className="col-md-2"></div>
					</div>
				</td>
			</tr>
		))
  }


	return(
		<>
			<div className="header-spacer"></div>
			<div className="container">
				<div className="row">
					<div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
						<div className="ui-block responsive-flex">
							<div className="ui-block-title">
								<div className="h6 title">Chapters</div>
								<div className="align-right">
									<form className="w-search">
										<div className="form-group with-button">
											<input className="form-control" type="text" placeholder="Search the forums..." />
											<button>
												<svg className="olymp-magnifying-glass-icon"><use href="#olymp-magnifying-glass-icon"></use></svg>
											</button>
										</div>
									</form>
									<Link to="add" className="btn btn-blue btn-md">Add New Chapter</Link>
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
										Name
									</th>
							
									<th className="">
										Last Updated At
									</th>

									<th className="">
										Views
									</th>

									<th className="">
										Action
									</th>
							
								</tr>
							
								</thead>
							
								<tbody>
									{chapterRow}
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

export default AdminChapters;