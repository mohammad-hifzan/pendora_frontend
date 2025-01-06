import React, { useState, useEffect, useMemo } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { get, post } from '../common/utility/toolbox';
import store from '../user_auths/store';

function Comment() {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const { id, manga_id } = useParams();
  const currentUser = store.getState().auth.user || {};

  let mangaId = manga_id || id;
  let chapterId = manga_id ? id : null;

  const [comment, setComment] = useState({ content: '', manga_id: mangaId, chapter_id: chapterId, user_id: currentUser?.id });
  useEffect(() => {
    const fetchComments = async () => {
      setIsLoading(true);
      try {
        const result = await getComments(mangaId, chapterId);
        setComments(result);
      } catch (error) {
        console.error('Error fetching comments:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchComments();
  }, [mangaId, chapterId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setComment({ ...comment, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await post(`v2/comments`, comment);
      if (response !== 'error' && response.status === 200) {
        setComment({ content: '', manga_id: mangaId, chapter_id: chapterId });
        setComments(prevComments => [...prevComments, response.data.data]);
      } else {
        alert('Failed to post comment. Please try again later.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  const commentList = useMemo(() => comments.map(comment => (
    <div key={comment.id} className={comment.user_id === currentUser?.id ? 'anime__review__item blog__details__comment__item' : 'anime__review__item'}>
      <div className={comment.user_id === currentUser?.id ? "anime__review__item__pic_reply" : "anime__review__item__pic"}>
        <img src="/theme/img/anime/review-1.jpg" alt="" />
      </div>
      <div className="anime__review__item__text">
        <h6>{comment.user_name} - <span>{comment.updated_at}</span></h6>
        <p>{comment.content}</p>
      </div>
    </div>
  )), [comments, currentUser]);

  return (
    <div className="col-lg-8 col-md-8" style={{maxHeight: '800px', overflowY: 'auto', overflowX: 'hidden'}}>
      <div className="anime__details__review">
        <div className="section-title">
          <h5>Reviews</h5>
        </div>
        {isLoading ? <p>Loading comments...</p> : commentList}
      </div>
      <div className="anime__details__form">
        <div className="section-title">
          <h5>Your Comment</h5>
        </div>
        <form onSubmit={handleSubmit}>
          <textarea placeholder="Your Comment" name="content" value={comment.content} id="comment_content" onChange={handleChange}></textarea>
          <button type="submit"><i className="fa fa-location-arrow"></i> Review</button>
        </form>
      </div>
    </div>
  );
}

const getComments = async (manga_id, chapter_id) => {
  try {
    const response = await get(`v2/comments`, { manga_id, chapter_id });
    return response.data;
  } catch (error) {
    console.error("Error fetching comments:", error);
    throw error;
  }
};

export default Comment;
