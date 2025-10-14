import React, { useState, useEffect } from 'react';
import { get, searchBar } from '../../common/utility/toolbox';
import MangaTable from '../../common/mangas/mangaTable';

function AdminMangas() {
  const [mangas, setMangas] = useState([]);
  const [query, setQuery] = useState("");
  const [allMangas, setAllMangas] = useState([]);

  const getMangas = async () => {
    try {
      const response = await get('/v2/mangas');
      return response?.data?.data;
    } catch (error) {
      console.error("Error fetching mangas:", error);
      throw error;
    }
  };

  useEffect(() => {
    getMangas().then((result) => {
      setMangas(result?.all_mangas);
      setAllMangas(result?.all_mangas);
    });
  }, []);

  const handleInput = (e) => {  
    const value = e.target.value;
    setQuery(value);
    const obj = {
      query: value,
      endpoint: '/v2/mangas/search',
      allData: allMangas,
      setData: setMangas
    }
    searchBar(obj);
  }

  return (
    <>
      <div className="header-spacer"></div>
      <div className="container">
        <div className="row">
          <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="ui-block responsive-flex">
              <div className="ui-block-title">
                <div className="h6 title">Mangas</div>
                <div className="align-right">
                  <form className="w-search">
                    <div className="form-group with-button">
                      <input
                        className="form-control"
                        type="text"
                        value={query}
                        onInput={handleInput}
                        placeholder="Search the forums..."
                      />
                      <button>
                        <svg className="olymp-magnifying-glass-icon">
                          <use href="#olymp-magnifying-glass-icon"></use>
                        </svg>
                      </button>
                    </div>
                  </form>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col col-xl-12 col-lg-9 col-md-12 col-sm-12 col-12">
            <MangaTable mangas={mangas} />
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminMangas;
