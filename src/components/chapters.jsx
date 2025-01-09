import { useParams, Link, useNavigate } from "react-router-dom"
import React, { useState, useEffect } from 'react';
import {get} from '../common/utility/toolbox' 
import Comment from '../common/comment'

function Chapter() {
	const { manga_id, id } = useParams()
	const [chapterData, setChapterData] = useState(null);
  const [chapters, setChapters] = useState([])
  const navigate = useNavigate();
  let chaptersList = null

  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`;
  const pinterestShareUrl = `https://pinterest.com/pin/create/button/?url=${window.location.href}`;

	useEffect(() => {
    getChapter(manga_id, id).then(result => {
      setChapterData(result)
    })

    getChapters(manga_id).then(result => {
      setChapters(result)
    }) 
  }, [id]);

	let chapterImages = null 
	if (chapterData && chapterData.chapter_images) {
		chapterImages = chapterData.chapter_images.map(image => (
			<div className="blog__details__item__text" >
	      {/* <h4></h4> */}
	      <img src={image} alt="" />
	      {/* <p></p> */}
	    </div>
		))
	}

  if (chapters) {
    chaptersList = chapters.map(chapter => (
      <option value={chapter.id} key={chapter.id}>{chapter.name}</option>
    ))
  }

  function gotoPrev() {
    if (chapterData && chapterData.prev_chapter_id) {
      navigate(`/mangas/${manga_id}/chapters/${chapterData.prev_chapter_id}`);
    }
  }

  function gotoNext() {
    if (chapterData && chapterData.next_chapter_id) {
      navigate(`/mangas/${manga_id}/chapters/${chapterData.next_chapter_id}`);
    }
  }

  function handleSelect(event) {
    let chapterId = event.target.value
    navigate(`/mangas/${manga_id}/chapters/${chapterId}`);
  }


	return (
		<section className="blog-details spad">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-8">
            <div className="blog__details__title">
              <h2>{chapterData?.manga_title}: {chapterData?.name}</h2>
              <div className="blog__details__social">
                <a href={facebookShareUrl} target="_blank" rel="noopener noreferrer" className="facebook"><i className="fa fa-facebook-square"></i> Facebook</a>
                <a href={pinterestShareUrl} target="_blank" rel="noopener noreferrer" className="pinterest"><i className="fa fa-pinterest"></i> Pinterest</a>
                {/* <a href="#" className="linkedin"><i className="fa fa-linkedin-square"></i> Linkedin</a> */}
                {/* <a href="#" className="twitter"><i className="fa fa-twitter-square"></i> Twitter</a> */}
              </div>
            </div>
          </div>
          
          <div className="col-lg-8">
            <div className="blog__details__content">
              <div className="blog__details__btns">
                <div className="row">
                  <div className="col-lg-4">
                   {chapters && chapters.length > 0 &&
                      <div className="blog__details__btns__item">
                        <h5><a href="#" disabled={chapterData && chapterData.prev_chapter_id ? false : true} className="disable-link" onClick={gotoPrev}><span className="arrow_left"></span> Prev Chapter </a>
                        </h5>
                      </div>
                    }
                    
                  </div>
                  <div className="col-lg-4" style={{marginLeft: 'auto', marginRight: 'auto'}}>
                    <select className="custom-select mr-sm-2" value={id} onChange={handleSelect} style={{backgroundColor: '#212529', color: '#ffffff'}}>
                      {chaptersList ? chaptersList : <p>...</p>}
                    </select>
                  </div>
                  <div className="col-lg-4">
                    {chapters && chapters.length > 0 &&
                      <div className="blog__details__btns__item next__btn">
                        <h5><a href="#" disabled={chapterData && chapterData.next_chapter_id ? false : true} onClick={gotoNext}>Next Chapter <span
                              className="arrow_right"></span></a></h5>
                      </div>
                    }
                  </div>
                </div>
              </div>

              {chapterImages ? chapterImages : <div>No content</div>}
              
              <div className="blog__details__btns">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="blog__details__btns__item">
                      <h5><a href="#" disabled={chapterData && chapterData.prev_chapter_id ? false : true} onClick={gotoPrev}><span className="arrow_left"></span> Prev Chapter </a>
                      </h5>
                    </div>
                  </div>

                  <div className="col-lg-4" style={{marginLeft: 'auto', marginRight: 'auto'}}>
                    <select className="custom-select mr-sm-2" value={id} onChange={handleSelect} style={{backgroundColor: '#212529', color: '#ffffff'}}>
                      {chaptersList ? chaptersList : <p>...</p>}
                    </select>
                  </div>

                  <div className="col-lg-4">
                    <div className="blog__details__btns__item next__btn">
                      <h5><a href="#" disabled={chapterData && chapterData.next_chapter_id ? false : true} onClick={gotoNext}> Next Chapter <span
                            className="arrow_right"></span></a></h5>
                    </div>
                  </div>
                </div>
              </div>

              <Comment />
             
            </div>
          </div>
        </div>
      </div>
    </section>
		)
}

const getChapter = async (mangaId, id) => {
  try {
    const response = await get(`v2/mangas/${mangaId}/chapters/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching mangas:", error);
    throw error;
  }
};

const getChapters = async (manga_id) => {
  try {
    const response = await get(`v2/mangas/${manga_id}/chapters`);
    return response.data;
  } catch (error) {
    console.error("Error fetching mangas:", error);
    throw error;
  }
};


export default Chapter