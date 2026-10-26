function Breadcrumb() {
  return (
    <nav className="bg-dark py-2">
      <div className="container">
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item">
            <a href="#" className="text-white-50 text-decoration-none">Home</a> {/* ← CHANGE: "Home" */}
          </li>
          <li className="breadcrumb-item">
            <a href="#" className="text-white-50 text-decoration-none">Doctors</a> {/* ← CHANGE: "Doctors" */}
          </li>
          <li className="breadcrumb-item active text-white">
            Directory {/* ← CHANGE: "Directory" */}
          </li>
        </ol>
      </div>
    </nav>
  )
}

export default Breadcrumb