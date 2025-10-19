import { useState, useRef } from 'react';
import {destroy, customToast} from '../../common/utility/toolbox' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import CreateRoleModal from './createRoleModal';
import { Modal as BootstrapModal } from "bootstrap";
import { GlobalPagination } from "../../common/globalPagination";
function AdminRoles() {
  const [roles, setRoles] = useState([])
  const [selectedRole, setSelectedRole] = useState(null);
  const [query, setQuery] = useState("");
  const modalRef = useRef();

  const openModal = (role = null) => {
    setSelectedRole(role);
    const modal = new BootstrapModal(modalRef.current);
    modal.show();
  };

  const deleteRole = async (role) => {  
    const response = await destroy(`/v2/roles/${role.id}`)
    if (response != 'error' && response.status == 200) {
      const updatedRoles = roles.filter(r => r.id !== role.id);
      setRoles(updatedRoles);
      customToast("Role Deleted Successfully!", "success", "light");
    } else {
      customToast("Failed to Delete Role!", "error", "light");
    }
  }

  const handleInput = (e) => {  
    const value = e.target.value;
    setQuery(value);
  }

  let rolesRow;
  if (roles.length > 0) {
    rolesRow = roles.map(role => (
        <tr>
          <td className="">
            {role.name}
          </td>
          <td className="">
            {role.updated_at}
          </td>

          <td>
            <div className="row">
              <div className="col-md-2">
                 <a onClick={() => openModal(role)} style={{ position: "relative", zIndex: 99999, pointerEvents: "auto", cursor: "pointer" }}><FontAwesomeIcon icon={faPen} /></a>
              </div>
              <div className="col-md-2"> </div>
              <div className="col-md-2">
                 <a onClick={() => deleteRole(role)} style={{ position: "relative", zIndex: 99999, pointerEvents: "auto", cursor: "pointer" }}><FontAwesomeIcon icon={faTrash} /></a>
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
                <div className="h6 title">Roles</div>
                <div className="align-right">
                  <form className="w-search">
                    <div className="form-group with-button">
                      <input className="form-control"
                        name="search"
                        type="text"
                        value={query}
                        onInput={handleInput}
                        placeholder="Search the forums..." />
                      <button>
                        <svg className="olymp-magnifying-glass-icon"><use href="#olymp-magnifying-glass-icon"></use></svg>
                      </button>
                    </div>
                  </form>
                  <a className="btn btn-blue btn-md" onClick={() => openModal()}>Add New Role</a>
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
                  {rolesRow}
                </tbody>
              </table>

            </div>

            
            {/* <!-- Pagination --> */}
            
            <GlobalPagination url={'/v2/admin/roles'} setObject={setRoles} filterQuery={{query: query}} />
            
            {/* <!-- ... end Pagination --> */}

          </div>
        </div>
      </div>

      <CreateRoleModal modalRef={modalRef} selectedRole={selectedRole} />
    </>
    )
}

export default AdminRoles