function Breadcrumb() {
  return (
    <nav aria-label="breadcrumb" className="bg-dark py-2">
      <div className="container">
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item"><a href="#" className="text-white-50 text-decoration-none">.breadcrumb</a></li>
          <li className="breadcrumb-item"><a href="#" className="text-white-50 text-decoration-none">.breadcrumb-item</a></li>
          <li className="breadcrumb-item"><a href="#" className="text-white text-decoration-none">Home</a></li>
          <li className="breadcrumb-item"><a href="#" className="text-white text-decoration-none">Students</a></li>
          <li className="breadcrumb-item active text-white" aria-current="page">Directory</li>
        </ol>
      </div>
    </nav>
  );
}
export default Breadcrumb;