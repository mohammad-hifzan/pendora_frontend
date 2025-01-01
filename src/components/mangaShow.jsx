import { useParams, Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
import {get, post, getUser} from '../common/utility/toolbox' 
import Comment from '../common/comment'
import Suggested from '../common/product/suggested'

function MangaShow(){
  const currentUser = getUser();
	const { id } = useParams()
	const [mangaData, setMangaData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [bookmark, setBookmark] = useState(null);


  const [chapters, setChapters] = useState([])
  let chaptersList = null

  const handleBookmarkClick = async() => {
    try {
      const result = await post(`/v2/mangas/${id}/bookmarks/toggle_bookmark`, {user_id: currentUser?.id});
      setBookmark(result.data['bookmarked']);
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  }

	useEffect(() => {
    getManga(id).then(result => {
      setMangaData(result)
    })
    isbookmarked(id).then(result => {
      setBookmark(result)
    })

    getChapters(id).then(result => {
      setChapters(result)
    })

  }, [id, bookmark]);

  useEffect(() => {
    if (mangaData?.categories) {
      setCategories(mangaData.categories.map((category) => (category.name)))
    }
  }, [mangaData])

  if (chapters) {
    chaptersList = chapters.map(chapter => (
      <Link to={`chapters/${chapter.id}`} key={chapter.id} className={mangaData.read_chapters.some(c => c.id === chapter.id) ? "read_episode" : ""}>{chapter.name}</Link>
    ))
  }
	return (
		<>
		  <section className="anime-details spad">
        <div className="container">
          <div className="anime__details__content">
            <div className="row">
              <div className="col-lg-3">
                <div className="anime__details__pic set-bg" style={{backgroundImage: `url(${mangaData ? mangaData.thumbnail : null})`}}>
                  <div className="comment"><i className="fa fa-comments"></i> {mangaData.comment_count}</div>
                  <div className="view"><i className="fa fa-eye"></i> {mangaData.views}</div>
                </div>
              </div>
              <div className="col-lg-9">
                <div className="anime__details__text">
                  <div className="anime__details__title">
                    <h3>{mangaData && mangaData.title}</h3>
                    <span>{mangaData && mangaData.author}</span>
                  </div>
                  <div className="anime__details__rating">
                    <div className="rating">
                      <a href="#"><i className="fa fa-star"></i></a>
                      <a href="#"><i className="fa fa-star"></i></a>
                      <a href="#"><i className="fa fa-star"></i></a>
                      <a href="#"><i className="fa fa-star"></i></a>
                      <a href="#"><i className="fa fa-star-half-o"></i></a>
                    </div>
                    <span>1.029 Votes</span>
                  </div>
                  <p>{mangaData && mangaData.description}</p>
                  <div className="anime__details__widget">
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <ul>
                          <li><span>Type:</span> {categories.includes('Manhua') ? 'Manhua' : categories.includes('Manhwa') ? 'Manhwa' : categories.includes('Manga') ? 'Manga' : 'Comic'}</li>
                          <li><span>Date aired:</span> {mangaData.created_at}</li>
                          <li><span>Status:</span> {mangaData.status || 'Ongoing'}</li>
                          <li><span>Views:</span> {mangaData.views}</li>
                          <li><span>Genre:</span>{categories.length > 0 && categories.join(', ')}</li>
                        </ul>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <ul>
                          <li><span>Studios:</span> Lerche</li>
                          <li><span>Scores:</span> 7.31 / 1,515</li>
                          <li><span>Rating:</span> 8.5 / 161 times</li>
                          
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="anime__details__btn">
                    <a href="#" className="follow-btn" onClick={handleBookmarkClick}><i className={bookmark ? "fa fa-heart" : "fa fa-heart-o"}></i> {bookmark ? 'Bookmarked' : 'Bookmark'}</a>
                    <a href="#" className="watch-btn"><span>Continue</span> <i
                    className="fa fa-angle-right"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="anime__details__episodes" >
                <div className="section-title">
                  <h5>Chapters</h5>
                </div>
                <div style={{maxHeight: '600px', overflowY: 'auto', overflowX: 'hidden'}}>
                  {chaptersList ? chaptersList : <p>No Chapters</p> }
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {<Comment />}
            <div className="col-lg-4 col-md-4">
              {<Suggested categories={categories} manga_id={id} />}
            </div>
          </div>
        </div>
    	</section>
		</>
		)
}

const getManga = async (id) => {
  try {
    const response = await get(`v2/mangas/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching manga:", error);
    throw error;
  }
};

const getChapters = async (id) => {
  try {
    const response = await get(`v2/mangas/${id}/chapters`);
    return response.data;
  } catch (error) {
    console.error("Error fetching chapters:", error);
    throw error;
  }
};

const isbookmarked = async (mangaId) => {
  try {
    const response = await get(`/v2/mangas/${mangaId}/bookmarks/bookmarked`)
    if (response.data['bookmarked']) {
      return true
    } else {
      return false
    }
  } catch (error) {
    console.error("Error fetching bookmark data:", error);
    throw error;
  }
}

export default MangaShow