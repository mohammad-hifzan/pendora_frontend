import React from "react";
import usePagination from "./usePagination";
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { setUpdatedManga, setNewManga, setPopularManga, setBookmark, setOngoing, setCompleted } from '../mangaReducers/mangas';

const PaginatedList = (props) => {
  const mangaState = useSelector((state) => state.manga);
  const dispatch = useDispatch();
  const location = useLocation();
  const type = new URLSearchParams(location.search).get('type')
    
  const { data, currentPage, totalPages, loading, error, goToPage } =
    usePagination(props?.url, props?.filterQuery);
    if (data.length > 0) {
      dispatch(setUpdatedManga(data['updated_chapters']));
      dispatch(setNewManga(data['recent_mangas']));
      dispatch(setPopularManga(data['popular_mangas']));
      dispatch(setBookmark(data['bookmarked_mangas']));
      dispatch(setOngoing(data['ongoing_mangas']));
      dispatch(setCompleted(data['completed_mangas']));
    }

  return (
    <div>
      {
        Number(totalPages) > 0 ? 
          <div className="product__pagination">
            {currentPage != 1 && <a href="#" className={currentPage === 1 && "current-page"} onClick={() => goToPage(1)}
                      disabled={currentPage === 1}>1</a>}
            {currentPage != 1 && currentPage != 2 && currentPage != 3 && <a>...</a>}


            {currentPage - 1 > 1 && <a href="#" onClick={() => goToPage(currentPage - 1)}
                      >{currentPage - 1}</a>}
            {<a href="#" className="current-page" onClick={() => goToPage(currentPage)}
                      disabled='true'>{currentPage}</a>}
            {currentPage + 1 > 1 && currentPage + 1 <= totalPages && <a href="#" onClick={() => goToPage((currentPage + 1))}
                      >{currentPage + 1}</a>}


            {currentPage != totalPages && currentPage != totalPages - 1 && currentPage != totalPages - 2 && <a>...</a>}
            {currentPage != totalPages && currentPage + 1 != totalPages && <a href="#" className={currentPage === totalPages && "current-page"} onClick={() => goToPage(totalPages)}
                      disabled={currentPage === totalPages}>{totalPages}</a>}
          </div>
        :
            <div><h2 style={{color: '#fff', marginBottom: 100, marginTop: 100}}>No Data Available</h2></div>
        }
      </div>
  );
};

export default PaginatedList;
