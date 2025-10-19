import { useState } from 'react';
import MangaTable from '../../common/mangas/mangaTable';
import {GlobalPagination} from '../../common/globalPagination'

function AdminMangas() {
  const [mangas, setMangas] = useState([]);
  const [query, setQuery] = useState("");

  const handleInput = (e) => {  
    const value = e.target.value;
    setQuery(value);
    
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
            <GlobalPagination url={'/v2/admin/mangas'} setObject={setMangas} filterQuery={{query: query}} />
          </div>
        </div>
      </div>

    </>
  );
}

export default AdminMangas;
