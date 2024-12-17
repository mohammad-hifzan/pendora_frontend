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
              <h6>Action, Magic <span>- March 08, 2020</span></h6>
              <h2>Anime for Beginners: 20 Pieces of Essential Viewing</h2>
              <div className="blog__details__social">
                <a href="#" className="facebook"><i className="fa fa-facebook-square"></i> Facebook</a>
                <a href="#" className="pinterest"><i className="fa fa-pinterest"></i> Pinterest</a>
                <a href="#" className="linkedin"><i className="fa fa-linkedin-square"></i> Linkedin</a>
                <a href="#" className="twitter"><i className="fa fa-twitter-square"></i> Twitter</a>
              </div>
            </div>
          </div>
          {/* <div className="col-lg-12"> */}
          {/*   <div className="blog__details__pic"> */}
          {/*     <img src="/theme/img/blog/details/blog-details-pic.jpg" alt="" /> */}
          {/*   </div> */}
          {/* </div> */}
          <div className="col-lg-8">
            <div className="blog__details__content">
              <div className="blog__details__btns">
                <div className="row">
                  <div className="col-lg-4">
                   {chapters && chapters.length > 0 &&
                      <div className="blog__details__btns__item">
                        <h5><a href="#" disabled={chapterData && chapterData.prev_chapter_id ? false : true} onClick={gotoPrev}><span className="arrow_left"></span> Prev Chapter </a>
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

              {/* <div className="blog__details__text"> */}
              {/*   <p>As a result the last couple of eps haven’t been super exciting for me, because they’ve */}
              {/*       been more like settling into a familiar and comfortable routine.  We’re seeing character */}
              {/*       growth here but it’s subtle (apart from Shouyou, arguably).  I mean, Tobio being an */}
              {/*       asshole is nothing new – it’s kind of the foundation of his entire character arc.  */}
              {/*       Confronting whether his being an asshole is a problem for the Crows this directly is a */}
              {/*       bit of an evolution, and probably an overdue one at that, but the overall dynamic with */}
              {/*   Kageyama is basically unchanged.</p> */}
              {/* </div> */}
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
              {/* <div className="blog__details__comment"> */}
              {/*   <h4>3 Comments</h4> */}
              {/*   <div className="blog__details__comment__item"> */}
              {/*     <div className="blog__details__comment__item__pic"> */}
              {/*       <img src="/theme/img/blog/details/comment-1.png" alt="" /> */}
              {/*     </div> */}
              {/*     <div className="blog__details__comment__item__text"> */}
              {/*       <span>Sep 08, 2020</span> */}
              {/*       <h5>John Smith</h5> */}
              {/*       <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, */}
              {/*       adipisci velit, sed quia non numquam eius modi</p> */}
              {/*       <a href="#">Like</a> */}
              {/*       <a href="#">Reply</a> */}
              {/*     </div> */}
              {/*   </div> */}
              {/*   <div className="blog__details__comment__item blog__details__comment__item--reply"> */}
              {/*     <div className="blog__details__comment__item__pic"> */}
              {/*       <img src="/theme/img/blog/details/comment-2.png" alt="" /> */}
              {/*     </div> */}
              {/*     <div className="blog__details__comment__item__text"> */}
              {/*       <span>Sep 08, 2020</span> */}
              {/*       <h5>Elizabeth Perry</h5> */}
              {/*       <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, */}
              {/*       adipisci velit, sed quia non numquam eius modi</p> */}
              {/*       <a href="#">Like</a> */}
              {/*       <a href="#">Reply</a> */}
              {/*     </div> */}
              {/*   </div> */}
              {/*   <div className="blog__details__comment__item"> */}
              {/*     <div className="blog__details__comment__item__pic"> */}
              {/*       <img src="/theme/img/blog/details/comment-3.png" alt="" /> */}
              {/*     </div> */}
              {/*     <div className="blog__details__comment__item__text"> */}
              {/*       <span>Sep 08, 2020</span> */}
              {/*       <h5>Adrian Coleman</h5> */}
              {/*       <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, */}
              {/*       adipisci velit, sed quia non numquam eius modi</p> */}
              {/*       <a href="#">Like</a> */}
              {/*       <a href="#">Reply</a> */}
              {/*     </div> */}
              {/*   </div> */}
              {/* </div> */}
              <Comment />
              {/* <div className="blog__details__form"> */}
              {/*   <h4>Leave A Commnet</h4> */}
              {/*   <form action="#"> */}
              {/*     <div className="row"> */}
              {/*       <div className="col-lg-6 col-md-6 col-sm-6"> */}
              {/*         <input type="text" placeholder="Name" /> */}
              {/*       </div> */}
              {/*       <div className="col-lg-6 col-md-6 col-sm-6"> */}
              {/*         <input type="text" placeholder="Email" /> */}
              {/*       </div> */}
              {/*       <div className="col-lg-12"> */}
              {/*         <textarea placeholder="Message"></textarea> */}
              {/*         <button type="submit" className="site-btn">Send Message</button> */}
              {/*       </div> */}
              {/*     </div> */}
              {/*   </form> */}
              {/* </div> */}
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