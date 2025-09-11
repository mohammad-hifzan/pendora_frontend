import { useParams, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { get } from "../../../common/utility/toolbox";
import ChapterTable from "../../../common/chapters/chapterTable";

function WorkSpaceChapters() {
  const [chapters, setChapters] = useState([]);
  const { id } = useParams();

  const getChapters = async () => {
    try {
      const response = await get(`/v2/mangas/${id}/chapters`);
      return response.data;
    } catch (error) {
      console.error("Error fetching chapters:", error);
      throw error;
    }
  };

  useEffect(() => {
    getChapters().then((result) => {
      setChapters(result.chapters);
    });
  }, [id]);

  return (
    <>
      <div className="header-spacer"></div>
      <div className="container">
        <div className="row">
          <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="ui-block responsive-flex">
              <div className="ui-block-title">
                <div className="h6 title">Chapters</div>
                <div className="align-right">
                  <form className="w-search">
                    <div className="form-group with-button">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Search chapters..."
                      />
                      <button>
                        <svg className="olymp-magnifying-glass-icon">
                          <use href="#olymp-magnifying-glass-icon"></use>
                        </svg>
                      </button>
                    </div>
                  </form>
                  <Link to="add" className="btn btn-blue btn-md">
                    Add New Chapter
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col col-xl-12 col-lg-9 col-md-12 col-sm-12 col-12">
            <ChapterTable chapters={chapters} />
          </div>
        </div>
      </div>
    </>
  );
}

export default WorkSpaceChapters;
