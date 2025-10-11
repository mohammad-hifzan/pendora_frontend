import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { post, customToast } from "../utility/toolbox";
import MangaFormPartial from "./form";

function MangaAdd({ fetchUrlBase = "/v2/mangas", redirectPath = "/workspace/mangas" }) {
  const [formParams, setFormParams] = useState({
    title: "",
    author: "",
    description: "",
    manga_type: "",
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
        customToast("Manga Created Successfully!", "success", "light");
      } else {
        customToast("Failed to Create Manga!", "error", "light");
      }
    } catch (error) {
      console.error("Submission error:", error);
      customToast("Failed to Create Manga!", "error", "light");
    }
  };

  const buildFormData = (data) => {
    const formData = new FormData();
    formData.append("manga[title]", data.title);
    formData.append("manga[author]", data.author);
    formData.append("manga[description]", data.description);
    formData.append("manga[manga_type]", data.manga_type);

    data.categories.forEach((cat) =>
      formData.append("manga[categories][]", Number(cat.value))
    );

    if (data.thumbnail) formData.append("manga[thumbnail]", data.thumbnail);
    return formData;
  };

  return (
    <div className="container">
      <div className="ui-block">
        <div className="ui-block-title">
          <h6 className="title">Add Manga</h6>
        </div>
        <div className="ui-block-content">
          <MangaFormPartial
            formParams={formParams}
            handleChange={handleChange}
            handleSelectChange={handleSelectChange}
            handleSubmit={handleSubmit}
            isEdit={false}
          />
        </div>
      </div>
    </div>
  );
}

export default MangaAdd;
