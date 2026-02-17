import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ChapterFormPartial from "./form";
import NovelEditor from "./novelEditor";
import { get, put, post, customToast } from "../utility/toolbox";

export default function ChapterEdit({
  fetchUrlBase,
  redirectPath,
  isNovel = false,
}) {
  const { chapter_id, id } = useParams()
  const navigate = useNavigate()
  const [chapter, setChapter] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchChapter = async () => {
      try {
        const res = await get(`${fetchUrlBase}/${chapter_id}`)
        setChapter(res.data)
      } catch {
        customToast("Failed to load chapter", "error")
      }
    }

    fetchChapter()
  }, [chapter_id])

  // ✅ FINAL SAVE (publish)
  const handleNovelSubmit = async (data) => {
    try {
      await put(`${fetchUrlBase}/${chapter_id}`, {
        chapter: {
          content: data.content,
          word_count: data.word_count,
        },
      })

      customToast("Chapter updated successfully!", "success")
      navigate(redirectPath)
    } catch {
      customToast("Failed to update chapter", "error")
    }
  }

  // ✅ AUTOSAVE (Redis)
  const handleNovelAutosave = async (data) => {
    try {
      await post(`/v2/novels/${id}/chapters/autosave`, {
        chapter: {
          content: data.content,
          word_count: data.word_count,
        },
      })
    } catch {
      // silent fail (autosave should not annoy users)
    }
  }

  // ✅ Manga submit (unchanged)
  const handleSubmit = async (data) => {
    setLoading(true)
    try {
      await put(`${fetchUrlBase}/${chapter_id}`, data)
      debugger
      customToast("Chapter updated successfully!", "success")
      navigate(redirectPath)
    } catch {
      customToast("Failed to update chapter", "error")
    } finally {
      setLoading(false)
    }
  }

  if (!chapter) return <p>Loading chapter...</p>

  return (
    <div className="container">
      <div className="ui-block">
        <div className="ui-block-title">
          <h6 className="title">Edit Chapter</h6>
        </div>

        <div className="ui-block-content">
          {isNovel ? (
            <NovelEditor
              chapterId={chapter_id}
              initialContent={chapter.content}
              onSave={handleNovelAutosave}
              onSubmit={handleNovelSubmit}
            />
          ) : (
            <ChapterFormPartial
              initialValues={chapter}
              onSubmit={handleSubmit}
              loading={loading}
            />
          )}
        </div>
      </div>
    </div>
  )
}
