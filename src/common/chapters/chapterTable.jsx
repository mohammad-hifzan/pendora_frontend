import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

function ChapterTable({ chapters }) {
  return (
    <div className="ui-block">
      <table className="forums-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Last Updated At</th>
            <th>Views</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {chapters.length > 0 ? (
            chapters.map((chapter) => (
              <tr key={chapter.id}>
                <td>{chapter.name}</td>
                <td>{chapter.updated_at}</td>
                <td>{chapter.views}</td>
                <td>
                  <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-2"></div>
                    <div className="col-md-4">
                      <Link
                        to={`${chapter.id}/edit`}
                        style={{ position: "relative", zIndex: 9999 }}
                      >
                        <FontAwesomeIcon icon={faPen} />
                      </Link>
                    </div>
                    <div className="col-md-2"></div>
                    <div className="col-md-2"></div>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center">
                No chapters available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ChapterTable;
