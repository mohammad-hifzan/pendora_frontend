import React, { useState, useEffect } from 'react';
import { get } from '../../../common/utility/toolbox';
import MangaTable from '../../../common/mangas/mangaTable';

function AdminMangas() {
  const [mangas, setMangas] = useState([]);

  const getMangas = async () => {
    try {
      const response = await get('/v2/mangas/company_mangas');
      return response?.data;
    } catch (error) {
      console.error("Error fetching mangas:", error);
      throw error;
    }
  };

  useEffect(() => {
    getMangas().then((result) => {
      setMangas(result?.mangas  || []);
    });
  }, []);

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
                        placeholder="Search the forums..."
                      />
                      <button>
                        <svg className="olymp-magnifying-glass-icon">
                          <use href="#olymp-magnifying-glass-icon"></use>
                        </svg>
                      </button>
                    </div>
                  </form>

                  <a href="mangas/add" className="btn btn-blue btn-md">Add New Manga</a>
                  
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
