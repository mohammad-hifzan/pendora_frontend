import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import axios from "axios";
const API_URL = 'http://localhost:3000';
const usePagination = (options = {}) => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { perPage = 3, params = {} } = options;
  const location = useLocation();
  useEffect(() => {
    const type = new URLSearchParams(location.search).get('type')
    fetchData(currentPage, type);
  }, [currentPage]);

  const fetchData = async (page, type) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${API_URL}/v2/mangas`, {
        params: { page, per_page: perPage, ...params, type: type},
      });
      
      setData([response.data.data]);

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
