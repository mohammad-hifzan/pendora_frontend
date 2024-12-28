import React, { useEffect } from "react";
import usePagination from "./usePagination";
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { setUpdatedManga, setNewManga, setPopularManga, setBookmark } from '../mangaReducers/mangas';

const PaginatedList = (props) => {
  const mangaState = useSelector((state) => state.manga);
  const dispatch = useDispatch();
  const location = useLocation();
  const type = new URLSearchParams(location.search).get('type')
  const { data, currentPage, totalPages, loading, error, goToPage } =
  usePagination(props?.url, props?.filterQuery);
  useEffect(() => { 
    if (data.length > 0) {
      dispatch(setUpdatedManga(data[0]['updated_chapters']));
      dispatch(setNewManga(data[0]['recent_mangas']));
      dispatch(setPopularManga(data[0]['popular_mangas']));
      dispatch(setBookmark(data[0]['bookmarked_mangas']))
    }
  }, [props?.filterQuery])
  return (
    <div>
      <div className="product__pagination">
        {/* <a href="#"  onClick={() => goToPage(currentPage - 1)} */}
        {/*   disabled={currentPage === 1}>Prev</a> */}
        {/* <a href="#" onClick={() => goToPage(currentPage + 1)} */}
        {/*   disabled={currentPage === totalPages}>Next</a> */}

        {currentPage != 1 && <a href="#" className={currentPage === 1 && "current-page"} onClick={() => goToPage(1)}
                  disabled={currentPage === 1}>1</a>}


        {currentPage - 1 > 1 && <a href="#" onClick={() => goToPage(currentPage - 1)}
                  >{currentPage - 1}</a>}
        {<a href="#" className="current-page" onClick={() => goToPage(currentPage)}
                  disabled={true}>{currentPage}</a>}
        {currentPage + 1 > 1 && currentPage + 1 <= totalPages && <a href="#" onClick={() => goToPage((currentPage + 1))}
                  >{currentPage + 1}</a>}

        {currentPage != totalPages && currentPage + 1 != totalPages && <a href="#" className={currentPage === totalPages && "current-page"} onClick={() => goToPage(totalPages)}
                  disabled={currentPage === totalPages}>{totalPages}</a>}
        {/* <a href="#"><i className="fa fa-angle-double-right"></i></a> */}
      </div>
    </div>
  );
};

export default PaginatedList;
