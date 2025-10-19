import usePagination from "./usePagination";
export function GlobalPagination(props) {
  const { data, currentPage, totalPages, loading, error, goToPage } =
  usePagination(props?.url, props?.filterQuery);
  if (data.length > 0) {
    console.log("DATA IN GLOBAL PAGINATION:", data)
      props.setObject(data)
      // dispatch(props.setObject(data[0]) || []);
    }
  return (
      <>
          {
            (Number(totalPages) > 1) &&
            <nav aria-label="Page navigation">
              <ul className="pagination justify-content-center">
                {/* Previous Button */}
                <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                  <a
                    className="page-link"
                    onClick={(e) => {
                      e.preventDefault();
                      goToPage(currentPage - 1);
                    }}
                  >
                    Previous
                  </a>
                </li>

                {(() => {
                  const pages = [];
                  const maxVisible = 5; // how many page numbers you want visible
                  const showLeftEllipsis = currentPage > 3;
                  const showRightEllipsis = currentPage < totalPages - 2;

                  const startPage = Math.max(2, currentPage - 1);
                  const endPage = Math.min(totalPages - 1, currentPage + 1);

                  // Always show first page
                  pages.push(
                    <li key={1} className={`page-item ${currentPage === 1 ? "active" : ""}`}>
                      <a className="page-link" href="#" onClick={(e) => { e.preventDefault(); goToPage(1); }}>
                        1
                      </a>
                    </li>
                  );

                  // Left ellipsis
                  if (showLeftEllipsis) {
                    pages.push(
                      <li key="left-ellipsis" className="page-item disabled">
                        <a className="page-link" href="#">...</a>
                      </li>
                    );
                  }

                  // Middle pages
                  for (let i = startPage; i <= endPage; i++) {
                    if (i > 1 && i < totalPages) {
                      pages.push(
                        <li key={i} className={`page-item ${currentPage === i ? "active" : ""}`}>
                          <a className="page-link" href="#" onClick={(e) => { e.preventDefault(); goToPage(i); }}>
                            {i}
                          </a>
                        </li>
                      );
                    }
                  }

                  // Right ellipsis
                  if (showRightEllipsis) {
                    pages.push(
                      <li key="right-ellipsis" className="page-item disabled">
                        <a className="page-link" href="#">...</a>
                      </li>
                    );
                  }

                  // Always show last page (if more than 1 page)
                  if (totalPages > 1) {
                    pages.push(
                      <li key={totalPages} className={`page-item ${currentPage === totalPages ? "active" : ""}`}>
                        <a className="page-link" href="#" onClick={(e) => { e.preventDefault(); goToPage(totalPages); }}>
                          {totalPages}
                        </a>
                      </li>
                    );
                  }

                  return pages;
                })()}

                {/* Next Button */}
                <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                  <a
                    className="page-link"
                    onClick={(e) => {
                      e.preventDefault();
                      goToPage(currentPage + 1);
                    }}
                  >
                    Next
                  </a>
                </li>
              </ul>
            </nav>


          }
      </>
  )
}