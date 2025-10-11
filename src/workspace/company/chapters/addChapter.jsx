import ChapterAdd from "../../../common/chapters/add";
import { useNavigate, Link, useParams } from 'react-router-dom';
function AddChapter() {
	const { id, chapter_id } = useParams()
	return <ChapterAdd />;
}

export default AddChapter;