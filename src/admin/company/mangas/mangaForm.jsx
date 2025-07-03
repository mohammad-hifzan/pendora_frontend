import { useState, useEffect } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { get } from '../../../common/utility/toolbox' 
function MangaForm(props) {
	const [categories, setCategories] = useState([]);
	const [options, setOptions] = useState([]);
	useEffect(() => {

		const getCategories = async() => {
		  const result = await get('v2/categories')
		  return result.data
		}

    const fetchCategories = async () => {
      try {
        const result = await getCategories();
        setCategories(result.categories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

		let categoryOptions = []
	  if (categories.length > 0) {
	      categoryOptions = categories.map((category) => ({
	        value: category.id,
	        label: category.name,
	      }));
	      // debugger
	      // setOptions(categoryOptions);
	    }


  const animatedComponents = makeAnimated();
	return (
					<div className="row">
				
						<div className="col col-lg-12 col-md-12 col-sm-12 col-12">
							<div className="form-group label-floating">
								<label className="control-label">Title</label>
								<input className="form-control" placeholder="" type="text" name="title" value={props.formParams.title} onChange={props.handleChange} />
							</div>
						</div>

						<div className="col col-lg-12 col-md-12 col-sm-12 col-12">
							<div className="form-group label-floating">
								<label className="control-label">Author</label>
								<input className="form-control" placeholder="" type="text" name="author" value={props.formParams.author} onChange={props.handleChange} />
							</div>
						</div>
				
						<div className="col col-lg-12 col-md-12 col-sm-12 col-12">
							<div className="form-group label-floating is-select">
								<label className="control-label">Type</label>
								<select className="form-select" name="type" value={props.formParams.manga_type} onChange={props.handleChange}>
									<option value="manga">Manga</option>
									<option value="manhua">Manhua</option>
									<option value="manhwa">Manhwa</option>
									<option value="comic">Comic</option>
								</select>
							</div>
						</div>

						<div className="col col-lg-12 col-md-12 col-sm-12 col-12">
							<div className="form-group label-floating">
								<label className="control-label">Description</label>
								<textarea className="form-control" placeholder="" type="text" name="description" value={props.formParams.description} onChange={props.handleChange} ></textarea>
							</div>
						</div>

						<div className="col col-lg-12 col-md-12 col-sm-12 col-12">
							<div className="form-group label-floating is-select">
								<Select
		              value={props.formParams.categories.map((category) => ({
									        value: category.id,
									        label: category.name,
									      })) }
		              closeMenuOnSelect={false}
		              components={animatedComponents}
		              name="categories"
		              isMulti
		              options={categoryOptions}
		              onChange={props.handleSelectChange}
		              className="basic-multi-select "
		              id="select_categores"
		            />
							</div>
						</div>

						<div className="col col-lg-12 col-md-12 col-sm-12 col-12">
							<div className="form-group ">
								{/* <label className="control-label">Profile Pic</label> */}
								<input className="form-control" type="file" name="thumbnail" accept="image/*" onChange={props.handleChange} />
							</div>
						</div>

						<div className="col col-lg-12 col-md-12 col-sm-12 col-12">
							<button className="btn btn-primary btn-lg full-width" type="submit">Save all Changes</button>
						</div>
				
					</div>
		)
}

export default MangaForm