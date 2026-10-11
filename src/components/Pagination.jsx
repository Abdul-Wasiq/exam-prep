function Pagination({ currentPage, setCurrentPage, totalPages }) {
  return (
    <nav>
      <ul className="pagination justify-content-center mb-0">
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <button className="page-link" onClick={() => setCurrentPage(p => p - 1)}>Previous</button>
        </li>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
          <li key={page} className={`page-item ${currentPage === page ? "active" : ""}`}>
            <button className="page-link" onClick={() => setCurrentPage(page)}>{page}</button>
          </li>
        ))}
        <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
          <button className="page-link" onClick={() => setCurrentPage(p => p + 1)}>Next</button>
        </li>
      </ul>
    </nav>
  );
}
export default Pagination;