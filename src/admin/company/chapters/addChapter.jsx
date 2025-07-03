import {useState} from 'react'
import { useNavigate, Link, useParams } from 'react-router-dom';
import {post} from '../../../common/utility/toolbox'
import ChapterForm from './chapterForm'
function AddChapter() {
	const [formParams, setFormParams] = useState({name: '', chapter_images: []});
	const navigate = useNavigate();
	const { id } = useParams()

	const handleChange = (e) => {
    const { name, files, value } = e.target;
    if (files) {
    	let files = Array.from(files);
    }
    if (name === "chapter_images") {
    	setFormParams((prev) => ({
	      ...prev,
	      chapter_images: files, // ✅ store multiple File objects
	    }));
    } else {
    	setFormParams({
	      ...formParams,
	      [name]: value
	    });
    }
  };

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
	    const response = await post(`/v2/mangas/${id}/chapters`, formData);
	    if (response != 'error' && response.status == 201) {
				navigate(`/admin/mangas/${id}/chapters`)
			} else {
				navigate(`/admin/mangas/${id}/chapters/add`)
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
								<h6 className="title">Add Chapter</h6>
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

export default AddChapter