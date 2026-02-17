import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { get, put, customToast } from "../utility/toolbox";
import NovelFormPartial from "./form";

function NovelEdit({ fetchUrlBase = "/v2/novels", redirectPath = "/workspace/novels" }) {
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
  const { id: novel_id } = useParams();

  useEffect(() => {
    fetchNovel(novel_id);
  }, [novel_id]);

  const fetchNovel = async (id) => {
    try {
      const response = await get(`${fetchUrlBase}/${id}`);
      setFormParams({
        title: response.data.title,
        author: response.data.author,
        description: response.data.description,
        novel_type: response.data.novel_type,
        status: response.data.status || "",
        thumbnail: null,
        categories: response.data.categories.map((cat) => ({
          value: cat.id,
          label: cat.name,
        })),
      });
    } catch (error) {
      debugger
      navigate(redirectPath);
    }
  };

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
      const response = await put(`${fetchUrlBase}/${novel_id}`, formData);
      if (response !== "error" && response.status === 200) {
        navigate(redirectPath);
        customToast("Novel Updated Successfully!", "success", "light");
      } else {
        customToast("Failed to Update Novel!", "error", "light");
      }
    } catch (error) {
      console.error("Submission error:", error);
      customToast("Failed to Update Novel!", "error", "light");
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
          <h6 className="title">Edit Novel</h6>
        </div>
        <div className="ui-block-content">
          <form onSubmit={handleSubmit}>
            <NovelFormPartial
              formParams={formParams}
              handleChange={handleChange}
              handleSelectChange={handleSelectChange}
              isEdit={true}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default NovelEdit;
