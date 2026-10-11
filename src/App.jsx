import { useState } from "react";
import Navbar from "./components/Navbar";
import Breadcrumb from "./components/Breadcrumb";
import StudentCard from "./components/StudentCard";
import Pagination from "./components/Pagination";
import Footer from "./components/Footer";

const ALL_STUDENTS = [
  { id: 101, name: "Abdul Wasiq",  major: "Computer Science",     year: 2, gpa: 3.8 },
  { id: 102, name: "Person 2",  major: "Computer Science",     year: 2, gpa: 3.8 },
  { id: 103, name: "Person 3",  major: "Computer Science",     year: 2, gpa: 3.8 },
  { id: 104, name: "Person 4",   major: "Computer Science",     year: 2, gpa: 3.8 },
  { id: 105, name: "Abdul Wasiq",  major: "Software Engineering", year: 3, gpa: 3.5 },
  { id: 106, name: "Person 6",  major: "Data Science",         year: 1, gpa: 3.9 },
  { id: 107, name: "Person 7",   major: "Computer Science",     year: 4, gpa: 3.2 },
  { id: 108, name: "Person 8",  major: "Cybersecurity",        year: 2, gpa: 3.7 },
];

const PER_PAGE = 4;

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [showAlert, setShowAlert] = useState(true);

  const totalPages = Math.ceil(ALL_STUDENTS.length / PER_PAGE);
  const start = (currentPage - 1) * PER_PAGE;
  const currentStudents = ALL_STUDENTS.slice(start, start + PER_PAGE);

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <Breadcrumb />
      <main className="container my-4 flex-grow-1">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h4 className="mb-0">Page Header</h4>
          <button className="btn btn-primary">Add New Student</button>
        </div>
        <div className="row g-3 mb-4">
          {currentStudents.map(student => (
            <div className="col-12 col-sm-6 col-md-3" key={student.id}>
              <StudentCard student={student} />
            </div>
          ))}
        </div>
        <div className="mb-4">
          <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
        </div>
        {showAlert && (
          <div className="alert alert-info alert-dismissible fade show" role="alert">
            Student records have been successfully updated.
            <button type="button" className="btn-close" onClick={() => setShowAlert(false)} />
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;