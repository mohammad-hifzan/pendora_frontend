import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { get, put, customToast } from "../utility/toolbox";
import MangaFormPartial from "./form";

function MangaEdit({ fetchUrlBase = "/v2/mangas", redirectPath = "/workspace/mangas" }) {
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
  const { id: manga_id } = useParams();

  useEffect(() => {
    fetchManga(manga_id);
  }, [manga_id]);

  const fetchManga = async (id) => {
    try {
      const response = await get(`${fetchUrlBase}/${id}`);
      setFormParams({
        title: response.data.title,
        author: response.data.author,
        description: response.data.description,
        manga_type: response.data.manga_type,
        status: response.data.status || "",
        thumbnail: null,
        categories: response.data.categories.map((cat) => ({
          value: cat.id,
          label: cat.name,
        })),
      });
    } catch (error) {
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
      const response = await put(`${fetchUrlBase}/${manga_id}`, formData);
      if (response !== "error" && response.status === 200) {
        navigate(redirectPath);
        customToast("Manga Updated Successfully!", "success", "light");
      } else {
        customToast("Failed to Update Manga!", "error", "light");
      }
    } catch (error) {
      console.error("Submission error:", error);
      customToast("Failed to Update Manga!", "error", "light");
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
          <h6 className="title">Edit Manga</h6>
        </div>
        <div className="ui-block-content">
          <form onSubmit={handleSubmit}>
            <MangaFormPartial
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

export default MangaEdit;
