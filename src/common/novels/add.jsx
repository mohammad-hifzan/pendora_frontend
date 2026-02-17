import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { post, customToast } from "../utility/toolbox";
import NovelFormPartial from "./form";

function NovelAdd({ fetchUrlBase = "/v2/novels", redirectPath = "/workspace/novels" }) {
  const [formParams, setFormParams] = useState({
    title: "",
    author: "",
    description: "",
    novel_type: "",
    status: "",
    thumbnail: null,
    categories: [],
  });

  const navigate = useNavigate();

  const handleSelectChange = (selected) =>
    setFormParams((prev) => ({ ...prev, categories: selected }));

  const handleChange = (e) => {
    const { name, files, value } = e.target;
    setFormParams((prev) => ({
      ...prev,
      [name]: name === "thumbnail" ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = buildFormData(formParams);
      const response = await post(fetchUrlBase, formData);
      if (response !== "error" && response.status === 201) {
        navigate(redirectPath);
        customToast("Novel Created Successfully!", "success", "light");
      } else {
        customToast("Failed to Create Novel!", "error", "light");
      }
    } catch (error) {
      console.error("Submission error:", error);
      customToast("Failed to Create Novel!", "error", "light");
    }
  };

  const buildFormData = (data) => {
    const formData = new FormData();
    formData.append("novel[title]", data.title);
    formData.append("novel[author]", data.author);
    formData.append("novel[description]", data.description);
    formData.append("novel[novel_type]", data.novel_type);

    data.categories.forEach((cat) =>
      formData.append("novel[categories][]", Number(cat.value))
    );

    if (data.thumbnail) formData.append("novel[thumbnail]", data.thumbnail);
    return formData;
  };

  return (
    <div className="container">
      <div className="ui-block">
        <div className="ui-block-title">
          <h6 className="title">Add Novel</h6>
        </div>
        <div className="ui-block-content">
          <form onSubmit={handleSubmit}>
            <NovelFormPartial
              formParams={formParams}
              handleChange={handleChange}
              handleSelectChange={handleSelectChange}
              handleSubmit={handleSubmit}
              isEdit={false}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default NovelAdd;
