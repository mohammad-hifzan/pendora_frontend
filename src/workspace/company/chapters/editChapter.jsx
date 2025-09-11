import { useState, useEffect } from 'react'
import { useNavigate, Link, useParams } from 'react-router-dom';
import { get, put, customToast} from '../../../common/utility/toolbox'
import ChapterForm from './chapterForm'
function EditChapter() {
	const [formParams, setFormParams] = useState({name: '', chapter_images: []});
	const navigate = useNavigate();
	const { id, chapter_id } = useParams()

	const handleChange = (e) => {
    const { name, files, value } = e.target;
    let fileList = []
    if (files?.length > 0) {
    	fileList = Array.from(files);
    }
    if (name === "chapter_images") {
    	setFormParams((prev) => ({
	      ...prev,
	      chapter_images: fileList, // ✅ store multiple File objects
	    }));
    } else {
    	setFormParams({
	      ...formParams,
	      [name]: value
	    });
    }
  };

  useEffect(() => {
		fetchChapter(id, chapter_id)
	}, [])

  const fetchChapter = async (manga_id, chapter_id) => {
		try {
	    const response = await get(`/v2/mangas/${manga_id}/chapters/${chapter_id}`);
	    setFormParams((prev) => {
	    	return {
	    		...prev,
		    	name: response.data.name,
		    }
	    })
	  } catch (error) {
	  	navigate(`/admin/mangas/${manga_id}/chapters`)
	  }
	}

  const handleSubmit = async (e) => {
    e.preventDefault();
		addData(formParams)
  }

  const addData = async (data) => {
		try {
			const formData = new FormData();
			formData.append("chapter[name]", data.name);
			if (data.chapter_images.length > 0) {				
				data.chapter_images.forEach((file, index) => {
				  formData.append("chapter[chapter_images][]", file);  // ✅ Notice the []
				});
			}
	    const response = await put(`/v2/mangas/${id}/chapters/${chapter_id}`, formData);
	    if (response != 'error' && response.status == 201) {
				navigate(`/admin/mangas/${id}/chapters`)
				customToast("Chapter Updated Successfully!", "success", "light");
			} else {
				navigate(`/admin/mangas/${id}/chapters/add`)
				customToast("Failed to Update Chapter!", "error", "light");
			}
	  } catch (error) {
      console.error('Submission error:', error);
			customToast("Failed to Update Chapter!", "error", "light");
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
								<h6 className="title">Edit Chapter</h6>
							</div>
							<div className="ui-block-content">

								
								{/* <!-- Personal Information Form  --> */}
								
								<form onSubmit={handleSubmit}>
									<ChapterForm formParams={formParams} handleChange={handleChange}/>
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

export default EditChapter