import ChapterAdd from "../../../common/chapters/add";
import { useNavigate, Link, useParams, useLocation } from 'react-router-dom';

function AddChapter() {
	const { id, chapter_id } = useParams()
	const location = useLocation();
	const isNovel = location.pathname.includes('/novels/');
	return <ChapterAdd isNovel={isNovel} />;
}

export default AddChapter;