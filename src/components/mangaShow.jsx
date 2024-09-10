import { useParams, Link } from "react-router-dom"
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:3000'; // Rails server URL

function MangaShow(){
	const { id } = useParams()
	const [mangaData, setMangaData] = useState([]);
  const [chapters, setChapters] = useState([])
  let chaptersList = null

	useEffect(() => {
    getManga(id).then(result => {
      setMangaData(result)
    })

    getChapters(id).then(result => {
      setChapters(result)
    })
  }, []);
  if (chapters) {
    chaptersList = chapters.map(chapter => (
      <div style={{maxHeight: 600, overflow: 'scroll'}}>
        <Link to={`chapters/${chapter.id}`} key={chapter.id}>{chapter.name}</Link>
      </div>
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
                  <div className="comment"><i className="fa fa-comments"></i> 11</div>
                  <div className="view"><i className="fa fa-eye"></i> 9141</div>
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
                          <li><span>Type:</span> TV Series</li>
                          <li><span>Studios:</span> Lerche</li>
                          <li><span>Date aired:</span> Oct 02, 2019 to ?</li>
                          <li><span>Status:</span> Airing</li>
                          <li><span>Genre:</span> Action, Adventure, Fantasy, Magic</li>
                        </ul>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <ul>
                          <li><span>Scores:</span> 7.31 / 1,515</li>
                          <li><span>Rating:</span> 8.5 / 161 times</li>
                          <li><span>Duration:</span> 24 min/ep</li>
                          <li><span>Quality:</span> HD</li>
                          <li><span>Views:</span> 131,541</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="anime__details__btn">
                    <a href="#" className="follow-btn"><i className="fa fa-heart-o"></i> Bookmark</a>
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
                  <h5>List Name</h5>
                </div>
                {chaptersList ? chaptersList : <p>No Chapters</p> }
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 col-md-8">
              <div className="anime__details__review">
                <div className="section-title">
                  <h5>Reviews</h5>
                </div>
                <div className="anime__review__item">
                  <div className="anime__review__item__pic">
                    <img src="/theme/img/anime/review-1.jpg" alt="" />
                  </div>
                  <div className="anime__review__item__text">
                    <h6>Chris Curry - <span>1 Hour ago</span></h6>
                    <p>whachikan Just noticed that someone categorized this as belonging to the genre
                    "demons" LOL</p>
                  </div>
                </div>
                <div className="anime__review__item">
                  <div className="anime__review__item__pic_reply">
                    <img src="/theme/img/anime/review-2.jpg" alt="" />
                  </div>
                  <div className="anime__review__item__text">
                    <h6>Chris Curry - <span>1 Hour ago</span></h6>
                    <p>whachikan Just noticed that someone categorized this as belonging to the genre
                    "demons" LOL</p>
                  </div>
                </div>
                <div className="anime__review__item">
                  <div className="anime__review__item__pic">
                    <img src="/theme/img/anime/review-3.jpg" alt="" />
                  </div>
                  <div className="anime__review__item__text">
                    <h6>Louis Tyler - <span>20 Hour ago</span></h6>
                    <p>Where is the episode 15 ? Slow update! Tch</p>
                  </div>
                </div>
                <div className="anime__review__item">
                  <div className="anime__review__item__pic">
                    <img src="/theme/img/anime/review-4.jpg" alt="" />
                  </div>
                  <div className="anime__review__item__text">
                    <h6>Chris Curry - <span>1 Hour ago</span></h6>
                    <p>whachikan Just noticed that someone categorized this as belonging to the genre
                    "demons" LOL</p>
                  </div>
                </div>
                <div className="anime__review__item">
                  <div className="anime__review__item__pic">
                    <img src="/theme/img/anime/review-5.jpg" alt="" />
                  </div>
                  <div className="anime__review__item__text">
                    <h6>Lewis Mann - <span>5 Hour ago</span></h6>
                    <p>Finally it came out ages ago</p>
                  </div>
                </div>
                <div className="anime__review__item">
                  <div className="anime__review__item__pic">
                    <img src="/theme/img/anime/review-6.jpg" alt="" />
                  </div>
                  <div className="anime__review__item__text">
                    <h6>Louis Tyler - <span>20 Hour ago</span></h6>
                    <p>Where is the episode 15 ? Slow update! Tch</p>
                  </div>
                </div>
              </div>
              <div className="anime__details__form">
                <div className="section-title">
                  <h5>Your Comment</h5>
                </div>
                <form action="#">
                  <textarea placeholder="Your Comment"></textarea>
                  <button type="submit"><i className="fa fa-location-arrow"></i> Review</button>
                </form>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="anime__details__sidebar">
                <div className="section-title">
                  <h5>you might like...</h5>
                </div>
                <div className="product__sidebar__view__item set-bg" style={{backgroundImage: `url(${"/theme/img/sidebar/tv-1.jpg"})`}}>
                  <div className="ep">18 / ?</div>
                  <div className="view"><i className="fa fa-eye"></i> 9141</div>
                  <h5><a href="#">Boruto: Naruto next generations</a></h5>
                </div>
                <div className="product__sidebar__view__item set-bg" style={{backgroundImage: `url(${"/theme/img/sidebar/tv-2.jpg"})`}}>
                  <div className="ep">18 / ?</div>
                  <div className="view"><i className="fa fa-eye"></i> 9141</div>
                  <h5><a href="#">The Seven Deadly Sins: Wrath of the Gods</a></h5>
                </div>
                <div className="product__sidebar__view__item set-bg" style={{backgroundImage: `url(${"/theme/img/sidebar/tv-3.jpg"})`}}>
                  <div className="ep">18 / ?</div>
                  <div className="view"><i className="fa fa-eye"></i> 9141</div>
                  <h5><a href="#">Sword art online alicization war of underworld</a></h5>
                </div>
                <div className="product__sidebar__view__item set-bg" style={{backgroundImage: `url(${"/theme/img/sidebar/tv-4.jpg"})`}}>
                  <div className="ep">18 / ?</div>
                  <div className="view"><i className="fa fa-eye"></i> 9141</div>
                  <h5><a href="#">Fate/stay night: Heaven's Feel I. presage flower</a></h5>
                </div>
              </div>
            </div>
          </div>
        </div>
    	</section>
		</>
		)
}

const getManga = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/v2/mangas/${id}`, {withCredentials: true});
    return response.data;
  } catch (error) {
    console.error("Error fetching manga:", error);
    throw error;
  }
};

const getChapters = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/v2/mangas/${id}/chapters`, {withCredentials: true});
    return response.data;
  } catch (error) {
    console.error("Error fetching chapters:", error);
    throw error;
  }
};

export default MangaShow