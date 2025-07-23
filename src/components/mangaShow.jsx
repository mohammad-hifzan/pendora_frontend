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
  const [mangaBookmarks, setMangaBookmarks] = useState(0)


  const [chapters, setChapters] = useState([])
  let chaptersList = null

  const handleBookmarkClick = async() => {
    try {
      const result = await post(`/v2/mangas/${id}/bookmarks/toggle_bookmark`, {
        bookmark: { user_id: currentUser?.id }
      });
      setBookmark(result.data['bookmarked']);
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  }

  useEffect(() => {
    getMangaBookmarks(id).then(result => {
      setMangaBookmarks(result.boomark_count);
    })
  }, [bookmark])

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
      <Link to={`chapters/${chapter.id}`} key={chapter.id} className={mangaData?.read_chapters?.some(c => c.id === chapter.id) ? "read_chapters chapter-button read" : "chapter-button unread"}>{chapter.name}</Link>
    ))
  }

  let lastUpdate;
  if (chapters.length > 0) {
    lastUpdate = chapters[chapters.length - 1]?.updated_at
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
                  {/* <div className="anime__details__rating"> */}
                  {/*   <div className="rating"> */}
                  {/*     <a href="#"><i className="fa fa-star"></i></a> */}
                  {/*     <a href="#"><i className="fa fa-star"></i></a> */}
                  {/*     <a href="#"><i className="fa fa-star"></i></a> */}
                  {/*     <a href="#"><i className="fa fa-star"></i></a> */}
                  {/*     <a href="#"><i className="fa fa-star-half-o"></i></a> */}
                  {/*   </div> */}
                  {/*   <span>1.029 Votes</span> */}
                  {/* </div> */}
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
                          <li><span>Bookmarked:</span> {mangaBookmarks}</li>
                          <li><span>Last Updated:</span> {lastUpdate}</li>
                          <li><span>Chapters:</span> {chaptersList.length}</li>
                          
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="anime__details__btn">
                    { Object.values(currentUser).length ? 
                      <a href="#" className="follow-btn" onClick={handleBookmarkClick}><i className={bookmark ? "fa fa-heart" : "fa fa-heart-o"}></i> {bookmark ? 'Bookmarked' : 'Bookmark'}</a>
                      :
                      <Link to="/login" className="follow-btn" ><i className="fa fa-user"></i> Login</Link>
                    }
                    {chapters.length > 0 && 
                      <div style={{display: 'inline'}}>                      
                        {
                          Object.values(currentUser).length ? 
                            <Link to={`chapters/${mangaData.length > 0 ? mangaData.read_chapters[mangaData.read_chapters?.length - 1]?.id : chapters[0]?.id}`} className="watch-btn" onClick={ (event) => (chapters.length > 0 ? null : event.preventDefault()) }><span>Continue</span> <i
                                                      className="fa fa-angle-right"></i></Link>
                          :
                            <Link to={`chapters/${chapters[0]?.id}`} className="watch-btn" onClick={ (event) => (chapters.length > 0 ? null : event.preventDefault()) } ><span>Chapter 1</span> <i
                                                    className="fa fa-angle-right"></i></Link>
                        }
                      </div>}
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
    return response.data.chapters;
  } catch (error) {
    console.error("Error fetching chapters:", error);
    throw error;
  }
};

const getMangaBookmarks = async (mangaId) => {
  try {
    const response = await get(`/v2/mangas/${mangaId}/bookmarks/manga_bookmarks`)
    return response.data
  } catch (error) {
    console.error("Error fetching bookmark data:", error);
    throw error;
  }
}

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