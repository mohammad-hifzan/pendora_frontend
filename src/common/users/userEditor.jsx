import { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import { get, put, customToast } from "../utility/toolbox";
import Select from "react-select";
import makeAnimated from "react-select/animated";

export default function UserEditor({ fetchUrlBase = "/v2/users", redirectPath = "/workspace/users" }) {
  const [formParams, setFormParams] = useState({
    name: "",
    email: "",
    mobile: "",
    profile_pic: null,
    current_password: "",
    password: "",
    password_confirmation: "",
    roles: []
  });
  const [roles, setRoles] = useState([]);
  const navigate = useNavigate();
  const { id: user_id } = useParams();

  useEffect(() => {
    fetchUser(user_id);
    fetchRoles();
  }, [user_id]);

  const fetchUser = async (user_id) => {
    try {
      const response = await get(`${fetchUrlBase}/${user_id}`);
      setFormParams((prev) => ({
        ...prev,
        name: response.data.name,
        email: response.data.email,
        mobile: response.data.mobile,
        roles: response.data.roles?.map((role) => ({
          value: role.id,
          label: role.name,
        }))
      }));
    } catch (error) {
      navigate(redirectPath);
    }
  };

  const fetchRoles = async () => {
    try {
      const result = await get("v2/roles");
      setRoles(result.data.data);
    } catch (error) {
      console.error("Error fetching roles:", error);
    }
  };

  const handleSelectChange = (selected) => {
    setFormParams((prev) => ({ ...prev, roles: selected }));
  };

  const handleChange = (e) => {
    const { name, files, value } = e.target;
    if (name === "profile_pic") {
      setFormParams((prev) => ({ ...prev, profile_pic: files[0] }));
    } else {
      setFormParams((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    updateData(formParams);
  };

  const updateData = async (data) => {
    try {
      const formData = new FormData();
      formData.append("user[name]", data.name);
      formData.append("user[email]", data.email);
      formData.append("user[mobile]", data.mobile);

      // ✅ append each role id separately
      if (data.roles.length > 0) {
        data.roles.forEach((role) => {
          formData.append("user[roles][]", role.value);
        });
      }

      formData.append("user[current_password]", data.current_password);
      formData.append("user[password]", data.password);
      formData.append("user[password_confirmation]", data.password_confirmation);

      if (data.profile_pic) {
        formData.append("user[profile_pic]", data.profile_pic); // ✅ fixed typo (was "manga[profile_ic]")
      }

      const response = await put(`${fetchUrlBase}/${user_id}`, formData);

      if (response !== "error" && response.status === 200) {
        navigate(redirectPath);
        customToast("User Updated Successfully!", "success", "light");
      } else {
        customToast("Failed to Update User!", "error", "light");
      }
    } catch (error) {
      console.error("Submission error:", error);
      customToast("Failed to Update User!", "error", "light");
    }
  };

  const roleOptions = roles.map((role) => ({
    value: role.id,
    label: role.name,
  }));

  const selectedRoles = formParams.roles.length
    ? roleOptions.filter((option) =>
        formParams.roles.some((selected) => selected.label === option.label)
      )
    : [];

  const animatedComponents = makeAnimated();

  return (
    <>
      <div className="header-spacer"></div>
      <div className="container">
        <div className="row">
          <div className="col col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
            <div className="ui-block">
              <div className="ui-block-title">
                <h6 className="title">Account Settings</h6>
              </div>
              <div className="ui-block-content">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col col-lg-12">
                      <div className="form-group label-floating">
                        <label className="control-label">Full Name</label>
                        <input
                          className="form-control"
                          type="text"
                          name="name"
                          value={formParams.name}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="col col-lg-12">
                      <div className="form-group label-floating">
                        <label className="control-label">Your Email</label>
                        <input
                          className="form-control"
                          type="email"
                          name="email"
                          value={formParams.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="col col-lg-12">
                      <div className="form-group label-floating">
                        <label className="control-label">Your Phone Number</label>
                        <input
                          className="form-control"
                          type="text"
                          name="mobile"
                          value={formParams.mobile}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="col col-lg-12">
                      <div className="form-group label-floating">
                        <label className="control-label">Role</label>
                        <Select
                          value={selectedRoles}
                          closeMenuOnSelect={false}
                          components={animatedComponents}
                          name="roles"
                          isMulti
                          options={roleOptions}
                          onChange={handleSelectChange}
                          className="basic-multi-select"
                          id="select_roles"
                        />
                      </div>
                    </div>

                    <div className="col col-lg-12">
                      <div className="form-group label-floating">
                        <label className="control-label">Password</label>
                        <input
                          className="form-control"
                          type="password"
                          name="password"
                          value={formParams.password}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="col col-lg-12">
                      <div className="form-group label-floating">
                        <label className="control-label">Confirm Password</label>
                        <input
                          className="form-control"
                          type="password"
                          name="password_confirmation"
                          value={formParams.password_confirmation}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="col col-lg-12">
                      <div className="form-group label-floating">
                        <label className="control-label">Current Password</label>
                        <input
                          className="form-control"
                          type="password"
                          name="current_password"
                          value={formParams.current_password}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="col col-lg-6">
                      <Link to={redirectPath} className="btn btn-secondary btn-lg full-width">
                        Cancel
                      </Link>
                    </div>
                    <div className="col col-lg-6">
                      <button className="btn btn-primary btn-lg full-width">Save all Changes</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
