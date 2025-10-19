import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { get, post } from './utility/toolbox'

const usePagination = (url, filterQuery={}, options = {}) => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { perPage = 12, params = {} } = options;
  const location = useLocation();
  useEffect(() => {
    const type = new URLSearchParams(location.search).get('type')
    fetchData(url, currentPage, type);
  }, [currentPage, JSON.stringify(filterQuery)]);

  const fetchData = async (url, page, type) => {
    setLoading(true);
    setError(null);
    try {
      const response = await get(url,
        { page: page, per_page: perPage, ...params, type: type, filter_query: filterQuery},
      );
      setData(response.data.data || []);

      setCurrentPage(response.data.current_page);
      setTotalPages(response.data.total_pages);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  return { data, currentPage, totalPages, loading, error, goToPage };
};

export default usePagination;
