import { Link } from "react-router-dom"
import React, { useState, useEffect } from 'react';
import { get } from '../../common/utility/toolbox' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { current } from "@reduxjs/toolkit";

function UsersTable({ fetchUrl, basePath }) {
  const [users, setUsers] = useState([])
  const currentUser = useSelector((state) => state.auth.user);
  const getUsers = async () => {
    try {
      const response = await get(fetchUrl)
      return response.data;
    } catch (error) {
      console.error("Error fetching users:", error);
      throw error;
    }
  };

  useEffect(() => {
    getUsers().then(result => {
      setUsers(result.users)
    }) 
  }, [fetchUrl]);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="ui-block responsive-flex">
              <div className="ui-block-title">
                <div className="h6 title">Users</div>
                <div className="align-right">
                  <form className="w-search">
                    <div className="form-group with-button">
                      <input className="form-control" type="text" placeholder="Search the forums..." />
                      <button>
                        <svg className="olymp-magnifying-glass-icon"><use href="#olymp-magnifying-glass-icon"></use></svg>
                      </button>
                    </div>
                  </form>
                 {currentUser?.role == "admin" && <Link to="/admin/users/add" className="btn btn-blue btn-md">Add New User</Link>}
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
              <table className="forums-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Last Login</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {users.length > 0 ? (
                    users.map(user => (
                      <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.updated_at}</td>
                        <td>
                          <Link to={`/${basePath}/users/${user.id}/edit`} 
                          style={{ position: "relative", zIndex: 2, pointerEvents: "auto" }}>
                            <FontAwesomeIcon icon={faPen} />
                          </Link>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4">No users found</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UsersTable;
