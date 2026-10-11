function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-4">
      <div className="container">
        <div className="row mb-3">
          <div className="col-md-3">
            <h6 className="fw-bold mb-3">Links</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white-50 text-decoration-none">Home</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">Computer Science</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">Courses</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">Reports</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h6 className="fw-bold mb-3">Contact Info</h6>
            <ul className="list-unstyled text-white-50">
              <li>Contact Us</li>
              <li>+1: 123 456 7890</li>
              <li>trm@studentportal.com</li>
            </ul>
          </div>
        </div>
        <hr className="border-secondary" />
        <p className="text-center text-white-50 mb-0 small">© 2024 StudentPortal. All rights reserved.</p>
      </div>
    </footer>
  );
}
export default Footer;