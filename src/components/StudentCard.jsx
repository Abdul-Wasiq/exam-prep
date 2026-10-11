function StudentCard({ student }) {
  return (
    <div className="card h-100 shadow-sm">
      <div className="bg-secondary d-flex align-items-center justify-content-center" style={{ height: "160px" }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="#aaa" viewBox="0 0 16 16">
          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
          <path d="M8 9a5 5 0 0 0-5 5h10a5 5 0 0 0-5-5z"/>
        </svg>
      </div>
      <div className="card-body">
        <h5 className="card-title">{student.name}</h5>
        <p className="card-text mb-1 text-muted small">ID: {student.id}</p>
        <p className="card-text mb-1 text-muted small">Major: {student.major}</p>
        <p className="card-text mb-1 text-muted small">Year: {student.year}</p>
        <p className="card-text mb-3 text-muted small">GPA: {student.gpa}</p>
        <div className="d-flex gap-2 mb-2">
          <button className="btn btn-outline-primary btn-sm">View Profile</button>
          <button className="btn btn-outline-danger btn-sm">Delete</button>
        </div>
        <div className="d-flex gap-1 flex-wrap">
          <button className="btn btn-outline-primary btn-sm" style={{fontSize:"0.7rem"}} disabled>.btn-outline-primary</button>
          <button className="btn btn-outline-danger btn-sm" style={{fontSize:"0.7rem"}} disabled>.btn-outline-danger</button>
        </div>
      </div>
    </div>
  );
}
export default StudentCard;