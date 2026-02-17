import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ChapterFormPartial from "./form";
import NovelEditor from "./novelEditor";
import { post } from "../utility/toolbox";

export default function ChapterAdd({ isNovel = false }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  const handleChapterSubmit = async (data) => {
    setLoading(true);
    try {
      await post(`/v2/mangas/${id}/chapters`, data);
      navigate("/workspace/chapters");
    } catch (error) {
      console.error("Failed to create chapter", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleNovelSave = async (data) => {
    debugger
    try {
      await post(`/v2/novels/${id}/chapters`, {
        chapter: {
          content: data.content
        },
      });
    } catch (error) {
      console.error("Failed to save chapter", "error");
    }
  };

  return (
    <div className="container">
      <div className="ui-block">
        <div className="ui-block-title">
          <h6 className="title">Add Chapter</h6>
        </div>
        <div className="ui-block-content">
          {isNovel ? (
            <NovelEditor onSave={handleNovelSave} />
          ) : (
            <ChapterFormPartial onSubmit={handleChapterSubmit} loading={loading} />
          )}
        </div>
      </div>
    </div>
  );
}
