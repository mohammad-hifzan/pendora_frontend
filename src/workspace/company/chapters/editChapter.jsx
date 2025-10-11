import ChapterEdit from "../../../common/chapters/edit";
import { useNavigate, Link, useParams } from 'react-router-dom';
function EditChapter() {
	const { id, chapter_id } = useParams()
	return <ChapterEdit 
	fetchUrlBase={`v2/mangas/${id}/chapters`}
	redirectPath={`/workspace/mangas/${id}/chapters`}
	/>;
}

export default EditChapter;