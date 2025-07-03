import {useState, useEffect} from 'react'
import { useNavigate, Link, useParams } from 'react-router-dom';
import {get, put} from '../../../common/utility/toolbox'
import MangaForm from './mangaForm'
function EditManga() {
	const [formParams, setFormParams] = useState({title: '', author: '', description: '', manga_type: '', status: '', thumbnail: null, categories: []});
	const navigate = useNavigate();
	const params = useParams();
	const manga_id = params['id']
	useEffect(() => {
		fetchManga(manga_id)
	}, [])

	const fetchManga = async (manga_id) => {
		try {
	    const response = await get(`/v2/mangas/${manga_id}`);
	    setFormParams((prev) => {
	    	return {
	    		...prev,
		    	title: response.data.title,
		    	description: response.data.description,
		    	author: response.data.author,
		    	type: response.data.manga_type,
		    	categories: response.data.categories
		    }
	    })
	  } catch (error) {
	  	navigate('/admin/mangas')
	  }
	}

	const handleSelectChange = (selected) => {
    setFormParams((prev) => ({ ...prev, categories: selected }));
  };


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
		updateData(formParams)
  }

  const updateData = async (data) => {
		try {
			const formData = new FormData();
			formData.append("manga[title]", data.title);
			formData.append("manga[author]", data.author);
			formData.append("manga[description]", data.description);
			formData.append("manga[manga_type]", data.manga_type);
			if (data.categories.length > 0) {
				data.categories.forEach((file, index) => {
				  formData.append("manga[categories][]", Number(file.value));  // ✅ Notice the []
				});
			}
			if (data.thumbnail) {
			  formData.append("manga[thumbnail]", data.thumbnail); // ✅ add the File
			}
	    const response = await put(`/v2/mangas/${manga_id}`, formData);
	    if (response != 'error' && response.status == 201) {
				navigate('/admin/mangas')
			} else {
				navigate('/admin/mangas/edit')
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
								<h6 className="title">Edit Manga</h6>
							</div>
							<div className="ui-block-content">

								
								{/* <!-- Personal Information Form  --> */}
								
								<form onSubmit={handleSubmit}>
									<MangaForm formParams={formParams} handleChange={handleChange} handleSelectChange={handleSelectChange}/>
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

export default EditManga