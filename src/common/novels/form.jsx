import { useState, useEffect } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { Link } from "react-router-dom"
import { get } from '../utility/toolbox' 

export default function NovelFormPartial({
  formParams,
  handleChange,
  handleSelectChange,
}) {

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
        setCategories(result.data);
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
      }

  const animatedComponents = makeAnimated();
  return (
          <div className="row">
        
            <div className="col col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="form-group label-floating">
                <label className="control-label">Title</label>
                <input className="form-control" placeholder="" type="text" required={true} name="title" value={formParams.title} onChange={handleChange} />
              </div>
            </div>

            <div className="col col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="form-group label-floating">
                <label className="control-label">Author</label>
                <input className="form-control" placeholder="" type="text" required={true} name="author" value={formParams.author} onChange={handleChange} />
              </div>
            </div>

            <div className="col col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="form-group label-floating">
                <label className="control-label">Description</label>
                <textarea className="form-control" placeholder="" type="text" required={true} name="description" value={formParams.description} onChange={handleChange} ></textarea>
              </div>
            </div>

            <div className="col col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="form-group label-floating is-select">
                <Select
                  value={formParams.categories }
                  closeMenuOnSelect={false}
                  components={animatedComponents}
                  name="categories"
                  isMulti
                  options={categoryOptions}
                  onChange={handleSelectChange}
                  className="basic-multi-select "
                  id="select_categores"
                />
              </div>
            </div>

            <div className="col col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="form-group ">
                <input className="form-control" type="file" name="thumbnail" accept="image/*" onChange={handleChange} />
              </div>
            </div>

            <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
              <Link className="btn btn-secondary btn-lg full-width" to="..">Back to Novels</Link>
            </div>

            <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
              <button className="btn btn-primary btn-lg full-width" type="submit">Save all Changes</button>
            </div>

          </div>
    )

}
