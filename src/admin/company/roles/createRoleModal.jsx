import { post, put, customToast } from '../../../common/utility/toolbox';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Modal as BootstrapModal } from "bootstrap";

function CreateRoleModal(props) {
  const [formParams, setFormParams] = useState({
    name: props.selectedRole ? props.selectedRole.name : ''
  });
  const navigate = useNavigate();

  // ✅ Reset form when selectedRole changes
  useEffect(() => {
    setFormParams({ name: props.selectedRole ? props.selectedRole.name : '' });
  }, [props.selectedRole]);

  // ✅ Optional: clear form when modal closes
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
    if (props.selectedRole) {
      await updateData(formParams, props.selectedRole);
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
      navigate('/admin/roles');
      customToast(successMsg, "success", "light");
      handleClose();
    } else {
      navigate('/admin/roles');
      customToast(errorMsg, "error", "light");
    }
  };

  const addData = async (data) => {
    try {
      const formData = new FormData();
      formData.append("role[name]", data.name);
      const response = await post(`/v2/roles`, formData);
      handleResponse(response, "Role Added Successfully!", "Failed to Add Role!");
    } catch (error) {
      console.error('Submission error:', error);
      customToast("Failed to Add Role!", "error", "light");
      return 'error';
    }
  };

  const updateData = async (data, role) => {
    try {
      const formData = new FormData();
      formData.append("role[name]", data.name);
      const response = await put(`/v2/roles/${role.id}`, formData);
      handleResponse(response, "Role Updated Successfully!", "Failed to Update Role!");
    } catch (error) {
      console.error('Submission error:', error);
      customToast("Failed to Update Role!", "error", "light");
      return 'error';
    }
  };

  return (
    <div
      className="modal fade"
      ref={props.modalRef}
      id="create-friend-group-1"
      tabIndex="-1"   // ✅ fixed attribute
      role="dialog"
      aria-labelledby="create-friend-group-1"
      aria-hidden="true"
    >
      <div className="modal-dialog window-popup create-friend-group create-friend-group-1" role="document">
        <div className="modal-content">
          <a href="#" className="close icon-close" data-bs-dismiss="modal" aria-label="Close">
            <svg className="olymp-close-icon"><use href="#olymp-close-icon"></use></svg>
          </a>

          <div className="modal-header">
            <h6 className="title">
              {props.selectedRole ? "Edit Role" : "Create Role"}
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
                {props.selectedRole ? "Save Changes" : "Add Role"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateRoleModal;
