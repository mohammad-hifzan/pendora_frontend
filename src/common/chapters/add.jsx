import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ChapterFormPartial from "./form";
import { post, customToast } from "../utility/toolbox";

export default function ChapterAdd() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (data) => {
    setLoading(true);
    try {
      await post(`/v2/mangas/${id}/chapters`, data);
      customToast("Chapter created successfully!", "success");
      navigate("/workspace/chapters");
    } catch (error) {
      customToast("Failed to create chapter", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="ui-block">
        <div className="ui-block-title">
          <h6 className="title">Add Chapter</h6>
        </div>
        <div className="ui-block-content">
          <ChapterFormPartial onSubmit={handleSubmit} loading={loading} />
        </div>
      </div>
    </div>
  );
}
