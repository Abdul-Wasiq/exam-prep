import { BrowserRouter, Routes, Route } from "react-router-dom";
// ← CHANGE: update all imports to match your component names and files
import Contact from "./components/Contact"
import Doctors from "./components/Doctors";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Register from "./components/Register"
import Footer from "./components/Footer";
import Breadcrumb from "./components/Breadcrumb";
import Pagination from "./components/Pagination";
import { useState } from "react";

// ← CHANGE: rename ALL_DOCTORS to your data e.g. ALL_STUDENTS, ALL_BOOKS
// ← CHANGE: update fields to match your card props
const ALL_DOCTORS = [
  { id: 1, name: "Doctor1", speciality: "Cardiology", experience: 10 },
  { id: 2, name: "Doctor2", speciality: "Neurology", experience: 8 },
  { id: 3, name: "Doctor3", speciality: "Pediatrics", experience: 5 },
  { id: 4, name: "Doctor4", speciality: "Orthopedics", experience: 12 },
  { id: 5, name: "Doctor5", speciality: "Cardiology", experience: 7 },
  { id: 6, name: "Doctor6", speciality: "Neurology", experience: 3 },
  { id: 7, name: "Doctor7", speciality: "Pediatrics", experience: 9 },
  { id: 8, name: "Doctor8", speciality: "Orthopedics", experience: 6 },
]

// ← CHANGE: how many cards per page
const PER_PAGE = 4

function App() {
  const [currentPage, setCurrentPage] = useState(1)

  // ← NO CHANGE NEEDED — pagination logic stays same
  const totalPages = Math.ceil(ALL_DOCTORS.length / PER_PAGE)
  const start = (currentPage - 1) * PER_PAGE
  const currentDoctors = ALL_DOCTORS.slice(start, start + PER_PAGE)

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Breadcrumb />
        <Routes>

          <Route
            path="/"
            element={
              <div className="container my-4">
                <div className="row g-3 mb-4">
                  // ← CHANGE: "currentDoctors" to match your array name
                  // ← CHANGE: "doctor" to match your item e.g. "student", "book"
                  {currentDoctors.map(doctor => (
                    <div className="col-md-3" key={doctor.id}>
                      // ← CHANGE: "Home" to your card component name
                      // ← CHANGE: props to match your card component
                      <Home
                        name={doctor.name}
                        speciality={doctor.speciality}
                        experience={doctor.experience}
                      />
                    </div>
                  ))}
                </div>
                // ← NO CHANGE NEEDED
                <Pagination
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  totalPages={totalPages}
                />
              </div>
            }
          />

          // ← CHANGE: paths and components to match your pages
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App