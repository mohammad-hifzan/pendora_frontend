import {useState} from 'react'
import { useNavigate, Link } from 'react-router-dom';
import {post} from '../../../common/utility/toolbox'
import MangaForm from './mangaForm'
function AddManga() {
	const [formParams, setFormParams] = useState({title: '', author: '', description: '', manga_type: '', status: '', thumbnail: ''});
	const navigate = useNavigate();

	const handleChange = (e) => {
    const { name, files, value } = e.target;
		if (name === "thumbnail") {
	    setFormParams((prev) => ({
	      ...prev,
	      thumbnail: files[0], // ✅ store multiple File objects
	    }));
	  } else {
	    setFormParams((prev) => ({
	      ...prev,
	      [name]: value,
	    }));
	  }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
		addData(formParams)
  }

  const addData = async (data) => {
		try {
			const formData = new FormData();
			formData.append("manga[title]", data.title);
			formData.append("manga[author]", data.author);
			formData.append("manga[description]", data.description);
			formData.append("manga[manga_type]", data.manga_type);
			if (data.thumbnail) {
			  formData.append("manga[thumbnail]", data.thumbnail); // ✅ add the File
			}
	    const response = await post(`/v2/mangas`, formData);
	    if (response != 'error' && response.status == 201) {
				navigate('/admin/mangas')
			} else {
				navigate('/admin/mangas/add')
			}
	  } catch (error) {
      console.error('Submission error:', error);
      return 'error'
    }
  }
	return (
		<>
			<div className="header-spacer"></div>
			<div className="container">
				<div className="row">
					<div className="col col-xl-12 order-xl-2 col-lg-9 order-lg-2 col-md-12 order-md-1 col-sm-12 col-12">
						<div className="ui-block">
							<div className="ui-block-title">
								<h6 className="title">Add Manga</h6>
							</div>
							<div className="ui-block-content">

								
								{/* <!-- Personal Information Form  --> */}
								
								<form onSubmit={handleSubmit}>
									<MangaForm formParams={formParams} handleChange={handleChange}/>
								</form>
								
								{/* <!-- ... end Personal Information Form  --> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
		)
}

export default AddManga