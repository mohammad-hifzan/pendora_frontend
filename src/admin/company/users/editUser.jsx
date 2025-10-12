import {useState, useEffect} from 'react'
import { useNavigate, Link, useParams } from 'react-router-dom';
import {get, put, customToast} from '../../../common/utility/toolbox'
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
export default function EditUser() {
  const [formParams, setFormParams] = useState({name: '', email: '', mobile: '', profile_pic: '', current_password: '', password: '', password_confirmation: '', roles: []});
  const [roles, setRoles] = useState([]);
  const navigate = useNavigate();
  const params = useParams();
  const user_id = params['id']
  useEffect(() => {
    fetchUser(user_id)
    fetchRoles()
  }, [])

  const fetchUser = async (user_id) => {
    try {
      const response = await get(`/v2/users/${user_id}`);
      setFormParams((prev) => {
        return {
          ...prev,
          name: response.data.name,
          email: response.data.email,
          mobile: response.data.mobile,
          roles: response.data.roles?.map((role) => ({
                          value: role.id,
                          label: role.name,
                        }))
        }
      })
    } catch (error) {
      navigate('/admin/mangas')
    }
  }

  const handleSelectChange = (selected) => {
    setFormParams((prev) => ({ ...prev, roles: selected }));
  };


	const handleChange = (e) => {
    const { name, files, value } = e.target;
		if (name === "profile_pic") {
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
      formData.append("user[name]", data.name);
      formData.append("user[email]", data.email);
      formData.append("user[mobile]", data.mobile);
      formData.append("user[roles][]", data.roles.map(role => role.value)); // ✅ add the array of role IDs
      formData.append("user[current_password]", data.current_password);
      formData.append("user[password]", data.password);
      formData.append("user[password_confirmation]", data.password_confirmation);
      if (data.profile_pic) {
        formData.append("manga[profile_ic]", data.profile_pic); // ✅ add the File
      }
      const response = await put(`/v2/users/${user_id}`, formData);
      
      if (response != 'error' && response.status == 200) {
        navigate('/admin/users')
        customToast("User Updated Successfully!", "success", "light");
      } else {
        customToast("Failed to Update User!", "error", "light");
      }
    } catch (error) {
      console.error('Submission error:', error);
      customToast("Failed to Update User!", "error", "light");
      return 'error'
    }
  }

  const getRoles = async() => {
        const result = await get('v2/roles')
        return result.data
      }

  const fetchRoles = async () => {
      try {
        const result = await getRoles();
        setRoles(result.roles);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

  let roleOptions = []
  if (roles.length > 0) {
      roleOptions = roles.map((role) => ({
        value: role.id,
        label: role.name,
      }));
    }

  const animatedComponents = makeAnimated();

  return (
    <>
      <div className="header-spacer"></div>
      {/* <!-- Profile Settings Responsive --> */}

      <div className="container">
        <div className="row">
          <div className="col col-xl-9 order-xl-2 col-lg-9 order-lg-2 col-md-12 order-md-1 col-sm-12 col-12">
            <div className="ui-block">
              <div className="ui-block-title">
                <h6 className="title">Account Settings</h6>
              </div>
              <div className="ui-block-content">

                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col col-lg-12 col-md-6 col-sm-12 col-12">
                      <div className="form-group label-floating">
                        <label className="control-label">Full Name</label>
                        <input className="form-control" placeholder="" type="text"  name="name" value={formParams.name} onChange={handleChange} />
                      </div>
                    </div>

                    <div className="col col-lg-12 col-md-6 col-sm-12 col-12">                
                      <div className="form-group label-floating">
                        <label className="control-label">Your Email</label>
                        <input className="form-control" placeholder="" type="email"  name="email" value={formParams.email} onChange={handleChange} />
                      </div>
                    </div>

                    <div className="col col-lg-12 col-md-6 col-sm-12 col-12">                
                      <div className="form-group label-floating">
                        <label className="control-label" >Your Phone Number</label>
                        <input className="form-control" placeholder="" type="text" name="mobile" value={formParams.mobile} onChange={handleChange} />
                      </div>
                    </div>

                    <div className="col col-lg-12 col-md-6 col-sm-12 col-12">
                      <div className="form-group label-floating is-empty">
                        <label className="control-label">Role</label>
                        <div className="form-group label-floating is-select">
                          <Select
                            value={formParams.roles }
                            closeMenuOnSelect={false}
                            components={animatedComponents}
                            name="roles"
                            isMulti
                            options={roleOptions}
                            onChange={handleSelectChange}
                            className="basic-multi-select "
                            id="select_roles"
                          />
							          </div>
                      </div>
                    </div>

                    <div className="col col-lg-12 col-md-6 col-sm-12 col-12">
                      <div className="form-group label-floating is-empty">
                        <label className="control-label">Password</label>
                        <input className="form-control" placeholder="" type="password" name="password" value={formParams.password} onChange={handleChange} />
                      </div>
                    </div>

                    <div className="col col-lg-12 col-md-6 col-sm-12 col-12">
                      <div className="form-group label-floating is-empty">
                        <label className="control-label">Confirm Password</label>
                        <input className="form-control" placeholder="" type="password" name="confirm_password" value={formParams.confirm_password} onChange={handleChange} />
                      </div>
                    </div>

                    <div className="col col-lg-12 col-md-6 col-sm-12 col-12">
                      <div className="form-group label-floating is-empty">
                        <label className="control-label">Current Password</label>
                        <input className="form-control" placeholder="" type="password" name="current_password" value={formParams.current_password} onChange={handleChange} />
                      </div>
                    </div>

                    <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                      <Link to="/admin/users" className="btn btn-secondary btn-lg full-width">Cancel</Link>
                    </div>
                    <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                      <button className="btn btn-primary btn-lg full-width">Save all Changes</button>
                    </div>
                  </div>
                </form>

              </div>
            </div>
          </div>

          <div className="col col-xl-3 order-xl-1 col-lg-3 order-lg-1 col-md-12 order-md-2 col-sm-12 col-12 responsive-display-none">
            <div className="ui-block">
{/*               
              <div classNameName="your-profile">
                <div classNameName="ui-block-title ui-block-title-small">
                  <h6 classNameName="title">Your PROFILE</h6>
                </div>

                <div classNameName="accordion" id="accordionExample">
                  <div classNameName="accordion-item">
                    <h6 classNameName="accordion-header" id="headingOne">
                      <button classNameName="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Profile Settings
                        <svg classNameName="olymp-dropdown-arrow-icon"><use href="#olymp-dropdown-arrow-icon"></use></svg>
                      </button>
                    </h6>
                    <div id="collapseOne" classNameName="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div classNameName="accordion-body">
                        <ul classNameName="your-profile-menu">
                          <li>
                            <a href="28-YourAccount-PersonalInformation.html">Personal Information</a>
                          </li>
                          <li>
                            <a href="29-YourAccount-AccountSettings.html">Account Settings</a>
                          </li>
                          <li>
                            <a href="30-YourAccount-ChangePassword.html">Change Password</a>
                          </li>
                          <li>
                            <a href="31-YourAccount-HobbiesAndInterests.html">Hobbies and Interests</a>
                          </li>
                          <li>
                            <a href="32-YourAccount-EducationAndEmployement.html">Education and Employement</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              
                <div classNameName="ui-block-title">
                  <a href="33-YourAccount-Notifications.html" classNameName="h6 title">Notifications</a>
                  <a href="#" classNameName="items-round-little bg-primary">8</a>
                </div>
                <div classNameName="ui-block-title">
                  <a href="34-YourAccount-ChatMessages.html" classNameName="h6 title">Chat / Messages</a>
                </div>
                <div classNameName="ui-block-title">
                  <a href="35-YourAccount-FriendsRequests.html" classNameName="h6 title">Friend Requests</a>
                  <a href="#" classNameName="items-round-little bg-blue">4</a>
                </div>
                <div classNameName="ui-block-title ui-block-title-small">
                  <h6 classNameName="title">FAVOURITE PAGE</h6>
                </div>
                <div classNameName="ui-block-title">
                  <a href="36-FavPage-SettingsAndCreatePopup.html" classNameName="h6 title">Create Fav Page</a>
                </div>
                <div classNameName="ui-block-title">
                  <a href="36-FavPage-SettingsAndCreatePopup.html" classNameName="h6 title">Fav Page Settings</a>
                </div>
              </div> */}

            </div>
          </div>
        </div>
      </div>


      {/* <!-- ... end Profile Settings Responsive --> */}

    </>
  );
}
