import ChapterEdit from "../../common/chapters/edit";
import { useNavigate, Link, useParams } from 'react-router-dom';
function AdminEditChapter() {
  const { id, chapter_id } = useParams()
  return <ChapterEdit 
  fetchUrlBase={`v2/mangas/${id}/chapters`}         // API is the same
  edirectPath={`/admin/mangas/${id}/chapters`}       // admin route
  />;
}

export default AdminEditChapter;