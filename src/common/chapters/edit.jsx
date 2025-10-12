import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ChapterFormPartial from "./form";
import { get, put, customToast } from "../utility/toolbox";

export default function ChapterEdit({ fetchUrlBase, redirectPath}) {
  const { chapter_id } = useParams();
  const navigate = useNavigate();
  const [chapter, setChapter] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchChapter = async () => {
      try {
        const data = await get(`${fetchUrlBase}/${chapter_id}`);
        setChapter(data.data);
      } catch {
        customToast("Failed to load chapter", "error");
      }
    };
    fetchChapter();
  }, [chapter_id]);

  const handleSubmit = async (data) => {
    setLoading(true);
    try {
      const req = await put(`${fetchUrlBase}/${chapter_id}`, data);
      debugger
      customToast("Chapter updated successfully!", "success");
      navigate(redirectPath);
    } catch {

      customToast("Failed to update chapter", "error");
    } finally {
      setLoading(false);
    }
  };

  if (!chapter) return <p>Loading chapter...</p>;

  return (
    <div className="container">
      <div className="ui-block">
        <div className="ui-block-title">
          <h6 className="title">Edit Chapter</h6>
        </div>
        <div className="ui-block-content">
          <ChapterFormPartial
            initialValues={chapter}
            onSubmit={handleSubmit}
            loading={loading}
          />
        </div>
      </div>
    </div>
  );
}
