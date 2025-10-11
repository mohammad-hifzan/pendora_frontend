import { post, put, customToast } from '../../common/utility/toolbox';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Modal as BootstrapModal } from "bootstrap";

function CreateCategoryModal(props) {
  const [formParams, setFormParams] = useState({
    name: props.selectedCategory ? props.selectedCategory.name : ''
  });
  const navigate = useNavigate();

  // Reset form when selectedCategory changes
  useEffect(() => {
    setFormParams({ name: props.selectedCategory ? props.selectedCategory.name : '' });
  }, [props.selectedCategory]);

  // Optional: clear form when modal closes
  useEffect(() => {
    const modalEl = props.modalRef.current;
    const handler = () => setFormParams({ name: '' });
    modalEl.addEventListener("hidden.bs.modal", handler);
    return () => modalEl.removeEventListener("hidden.bs.modal", handler);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormParams((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (props.selectedCategory) {
      await updateData(formParams, props.selectedCategory);
    } else {
      await addData(formParams);
    }
  };

  const handleClose = () => {
    const modalEl = props.modalRef.current;
    const modal = BootstrapModal.getInstance(modalEl) || new BootstrapModal(modalEl);
    modal.hide();
  };

  const handleResponse = (response, successMsg, errorMsg) => {
    if (response !== 'error' && (response.status === 201 || response.status === 200)) {
      navigate('/admin/categories');
      customToast(successMsg, "success", "light");
      handleClose();
    } else {
      navigate('/admin/categories');
      customToast(errorMsg, "error", "light");
    }
  };

  const addData = async (data) => {
    try {
      const formData = new FormData();
      formData.append("category[name]", data.name);
      const response = await post(`/v2/categories`, formData);
      handleResponse(response, "Category Added Successfully!", "Failed to Add Category!");
    } catch (error) {
      console.error('Submission error:', error);
      customToast("Failed to Add Category!", "error", "light");
      return 'error';
    }
  };

  const updateData = async (data, category) => {
    try {
      const formData = new FormData();
      formData.append("category[name]", data.name);
      const response = await put(`/v2/categories/${category.id}`, formData);
      handleResponse(response, "Category Updated Successfully!", "Failed to Update Category!");
    } catch (error) {
      console.error('Submission error:', error);
      customToast("Failed to Update Category!", "error", "light");
      return 'error';
    }
  };

  return (
    <div
      className="modal fade"
      ref={props.modalRef}
      id="create-category-modal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="create-category-modal"
      aria-hidden="true"
    >
      <div className="modal-dialog window-popup create-friend-group create-friend-group-1" role="document">
        <div className="modal-content">
          <a href="#" className="close icon-close" data-bs-dismiss="modal" aria-label="Close">
            <svg className="olymp-close-icon"><use href="#olymp-close-icon"></use></svg>
          </a>

          <div className="modal-header">
            <h6 className="title">
              {props.selectedCategory ? "Edit Category" : "Create Category"}
            </h6>
          </div>

          <div className="modal-body">
            <form className="form-group label-floating" onSubmit={handleSubmit}>
              <label className="control-label">Name</label>
              <input
                className="form-control"
                placeholder=""
                name="name"
                type="text"
                value={formParams.name}
                onChange={handleChange}
              />
              <br />

              <button className="btn btn-blue btn-lg full-width" type="submit">
                {props.selectedCategory ? "Save Changes" : "Add Category"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateCategoryModal;
