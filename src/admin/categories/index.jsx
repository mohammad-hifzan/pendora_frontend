import { useState, useEffect, useRef } from 'react';
import {get, destroy, customToast, searchBar} from '../../common/utility/toolbox' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import CreateCategoryModal from './createCategoryModal';
import { Modal as BootstrapModal } from "bootstrap";
function AdminCategories() {
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");
  const [allCategories, setAllCategories] = useState([]); 
  const modalRef = useRef();

  const openModal = (category = null) => {
    setSelectedCategory(category);
    const modal = new BootstrapModal(modalRef.current);
    modal.show();
  };

  const deleteCategory = async (category) => {  
    const response = await destroy(`/v2/categories/${category.id}`)
    if (response != 'error' && response.status == 200) {
      const updatedCategories = categories.filter(r => r.id !== category.id);
      setCategories(updatedCategories);
      setAllCategories(updatedCategories);
      customToast("Category Deleted Successfully!", "success", "light");
    } else {
      customToast("Failed to Delete Category!", "error", "light");
    }

  }

  const getCategories = async () => {
    try {
      const response = await get('/v2/categories')

      return response.data;
    } catch (error) {
      console.error("Error fetching categories:", error);
      throw error;
    }
  };

  useEffect(() => {
    getCategories().then(result => {
      setCategories(result.categories)
      setAllCategories(result.categories)
    }) 
  }, []);

  const handleInput = (e) => {  
    const value = e.target.value;
    setQuery(value);
    const obj = {
      query: value,
      endpoint: '/v2/admin/categories/search',
      allData: allCategories,
      setData: setCategories
    }
    searchBar(obj);
  }

  let categoriesRow;
  if (categories.length > 0) {
    categoriesRow = categories.map(category => (
        <tr>
          <td className="">
            {category.name}
          </td>
          <td className="">
            {category.updated_at}
          </td>

          <td>
            <div className="row">
              <div className="col-md-2">
                 <a onClick={() => openModal(category)} style={{ position: "relative", zIndex: 99999, pointerEvents: "auto", cursor: "pointer" }}><FontAwesomeIcon icon={faPen} /></a>
              </div>
              <div className="col-md-2"> </div>
              <div className="col-md-2">
                 <a onClick={() => deleteCategory(category)} style={{ position: "relative", zIndex: 99999, pointerEvents: "auto", cursor: "pointer" }}><FontAwesomeIcon icon={faTrash} /></a>
              </div>
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
                <div className="h6 title">Categories</div>
                <div className="align-right">
                  <form className="w-search">
                    <div className="form-group with-button">
                      <input className="form-control"
                        type="text"
                        value={query}
                        onInput={handleInput}
                        placeholder="Search the forums..." />
                      <button>
                        <svg className="olymp-magnifying-glass-icon"><use href="#olymp-magnifying-glass-icon"></use></svg>
                      </button>
                    </div>
                  </form>
                  <a className="btn btn-blue btn-md" onClick={() => openModal()}>Add New Category</a>
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
                    Action
                  </th>
              
                </tr>
              
                </thead>
              
                <tbody>
                  {categoriesRow}
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

      <CreateCategoryModal modalRef={modalRef} selectedCategory={selectedCategory} />
    </>
    )
}

export default AdminCategories