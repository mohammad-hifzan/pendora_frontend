import { Link, useSearchParams } from "react-router-dom"
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import PaginatedList from '../paginatedList'
import FilterModal from '../filterModal'
import TypeSelect from './typeSelect'
function SubProduct(props) {
  let mangaList = null
  let enablefullPage = null
  const [filterQuery, setFilterQuery] = useState({ selected: [], excluded: [] });
  const mangaState = useSelector((state) => state.manga);

  const [searchQuery, setSearchQuery] = useSearchParams();
  useEffect(() => {
    const selected = searchQuery.get("selected")?.split(",") || [];
    const excluded = searchQuery.get("excluded")?.split(",") || [];
    setFilterQuery({ selected, excluded });
  }, [searchQuery])

  const mangas = mangaState[props.productSubType]
  
  const [product, setProduct] = useState([])

  const userAgent = navigator.userAgent;

  const subTypeMappings = {
    popularManga: {
      pageTitle: "Most Viewed",
      pageType: "popular",
      viewTitle: "Most Popular",
    },
    newManga: {
      pageTitle: "Recently Added Shows",
      pageType: "new",
      viewTitle: "View All",
    },
    ongoingManga: {
      pageTitle: "Ongoing Shows",
      pageType: "ongoing",
      viewTitle: "View All",
    },
    completedManga: {
      pageTitle: "Completed Shows",
      pageType: "completed",
      viewTitle: "View All",
    },
    default: {
      pageTitle: "Popular Chapters",
      pageType: "updated",
      viewTitle: "View All",
    },
  };

  const { pageTitle, pageType, viewTitle } =
  subTypeMappings[props.productSubType] || subTypeMappings.default;

  function updateProduct(mangaState, props) {
    if (props.type !== "root") {
      setProduct(mangaState[props.productSubType]);
    } else {
      if (props.mangas.data) {
        if (props.productSubType === 'updatedManga') {
          setProduct(props.mangas.data.updated_chapters);
        } else if (props.productSubType === 'newManga') {
          setProduct(props.mangas.data.recent_mangas);
        } else if (props.productSubType === 'popularManga') {
          setProduct(props.mangas.data.popular_mangas);
        } else if (props.productSubType === 'ongoingManga') {
          setProduct(props.mangas.data.ongoing_mangas);
        } else if (props.productSubType === 'completedManga') {
          setProduct(props.mangas.data.completed_mangas);
        }
      }
    }
  }


  useEffect(() => {
    updateProduct(mangaState, props)
  }, [props.type, mangaState[props.productSubType], props.mangas, searchQuery]);


  if (product) {  
    enablefullPage = props.enablefullPage
    if (mobileType()) {
      mangaList = product.slice(0, props.breakPoint).map(manga => (
          <div className="product__sidebar__comment__item" key={manga.id}>
            <Link to={`/mangas/${manga.id}`} style={{display: 'block'}}>
              <div className="product__sidebar__comment__item__pic">
                <img src={manga.thumbnail} alt="" style={{width: '100px', height: 'auto'}}/>
              </div>
              <div className="product__sidebar__comment__item__text">
                {/* <ul> */}
                {/*   <li>Active</li> */}
                {/*   <li>Movie</li> */}
                {/* </ul> */}
                <h5><a>{manga.title}</a></h5>
                <span><i className="fa fa-eye"></i> {manga.views} Viewes</span>
              </div>
            </Link>
          </div>
      ))
    } else {
      mangaList = product.slice(0, props.breakPoint).map(manga => (
          <div className="col-lg-4 col-md-6 col-sm-6" key={manga.id}>
            <Link to={`/mangas/${manga.id}`}>
            <div className="product__item">
              <div className="product__item__pic set-bg" style={{backgroundImage: `url(${manga.thumbnail})`}}>
                <div className="ep"><i class="fa fa-fire"></i> hot</div>
                <div className="comment"><i className="fa fa-comments"></i> {manga.comment_count}</div>
                <div className="view"><i className="fa fa-eye"></i> {manga.views}</div>
              </div>
              <div className="product__item__text">
                {/* <ul> */}
                {/*   <li>Active</li> */}
                {/*   <li>Movie</li> */}
                {/* </ul> */}
                <h5><a>{manga.title}</a></h5>
              </div>
            </div>
            </Link>
          </div>
      ))
    }

  }
  
  return (
    <>
      {
        props.enablefullPage ?
              <>
                <div className="product__page__content">
                  <div className="product__page__title">
                    <div className="row">
                      <div className="col-lg-8 col-md-8 col-sm-6">
                        <div className="section-title">
                          <h4>{pageTitle}</h4>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-6">
                        <TypeSelect />
                      </div>
                    </div>
                    <br></br>
                    <div>                      
                      <FilterModal />
                      <div className="filter-button">                      
                        <a data-bs-toggle="modal" data-bs-target="#exampleModal">
                          Filter
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className={mobileType() ? "row container" : "row"}>
                    {mangaList ? mangaList : <div>No content</div>}
                  </div>
                </div>
                {<PaginatedList url="v2/mangas/" filterQuery={filterQuery} />} 
              </>
        :

        <div className="recent__product">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-8">
              <div className="section-title">
                 <h4>{pageTitle}</h4>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
              <div className="btn__all">
                {/* <Link to={'/'} state={{ products: 'updatedManga' }} className="primary-btn">View All <span className="arrow_right"></span></Link> */}
                <Link to={`/mangas?type=${pageType}`} className="primary-btn">{viewTitle}<span className="arrow_right"></span></Link>
              </div>
            </div>
          </div>
          <div className={mobileType() ? "row container" : "row"}>
            {mangaList ? mangaList : <div>No content</div>}
          </div>
        </div>
      }
    </>
    
    )
}

function getDeviceType() {
  const userAgent = navigator.userAgent;

  if (/mobile/i.test(userAgent)) {
    return "Mobile";
  } else if (/tablet/i.test(userAgent) || /iPad/.test(userAgent)) {
    return "Tablet";
  } else {
    return "Laptop/Desktop";
  }
}

function mobileType() {
  return getDeviceType() === "Mobile"
}
export default SubProduct