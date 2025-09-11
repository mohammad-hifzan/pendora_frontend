import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faEye } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

function MangaTable({ mangas }) {
  return (
    <div className="ui-block">
      <table className="forums-table">
        <thead>
          <tr>
            <th>Mangas</th>
            <th>Users</th>
            <th>Last Updated At</th>
            <th>Author</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {mangas.length > 0 ? (
            mangas.map((manga) => (
              <tr key={manga.id}>
                <td>{manga.title}</td>
                <td><a href="#" className="h6 count">0</a></td>
                <td>{manga.updated_at}</td>
                <td>{manga.author}</td>
                <td>
                  <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-2"></div>
                    <div className="col-md-2">
                      <Link to={`edit/${manga.id}`}>
                        <FontAwesomeIcon icon={faPen} style={{ position: "relative", zIndex: 9999, pointerEvents: "auto" }} />
                      </Link>
                    </div>
                    <div className="col-md-2">
                      <Link to={`${manga.id}/chapters`} >
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
              <td colSpan="5" className="text-center">No mangas available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default MangaTable;
