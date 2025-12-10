import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faEye } from '@fortawesome/free-solid-svg-icons';

function CompanyTable({ companies }) {
  return (
    <div className="ui-block">
      <table className="forums-table">
        <thead>
          <tr>
            <th>Identifier</th>
            <th>Name</th>
            <th>Creator</th>
            <th>Last Updated At</th>
            <th>No. Of Users</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {companies?.length > 0 ? (
            companies.map((company) => (
              <tr key={company.id}>
                <td>{company.identifier}</td>
                <td>{company.name}</td>
                <td>{company.creator.name}</td>
                <td>{company.updated_at}</td>
                <td>{company.user_count}</td>
                <td>
                  <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-2"></div>
                    <div className="col-md-2">
                      <Link to={`edit/${company.id}`}>
                        <FontAwesomeIcon icon={faPen} style={{ position: "relative", zIndex: 9999, pointerEvents: "auto" }} />
                      </Link>
                    </div>
                    <div className="col-md-2">
                      <Link to={`${company.id}/mangas`} >
                        <FontAwesomeIcon icon={faEye} style={{ position: "relative", zIndex: 9999, pointerEvents: "auto" }} />
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
              <td colSpan="5" className="text-center">No company available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default CompanyTable;
