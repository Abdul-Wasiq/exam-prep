import { useState } from "react"

function Home({name, speciality, experience}) { {/* ← CHANGE: "Home" to your component name e.g. "DoctorCard" */}
    const [views, setViews] = useState(0)
    const [showDetails, setShowDetails] = useState(false)

    function handleView() {
    setViews(views + 1)
  }

  return (
    <div className="card h-100 shadow-sm doctor-card">
      <style>{`
        .doctor-card { overflow: hidden; border: 1px solid #d9d9d9; border-radius: 10px; display: inline-flex; vertical-align: top; flex-direction: column; flex: 0 0 210px; width: 210px; min-width: 210px; margin: 0 16px 16px 0; }
        .doctor-avatar { height: 162px; background: #dedede; color: #aaa; }
        .doctor-avatar::before { content: ''; position: absolute; top: 60px; left: 50%; width: 22px; height: 22px; transform: translateX(-50%); border-radius: 50%; background: currentColor; }
        .doctor-avatar::after { content: ''; position: absolute; top: 86px; left: 50%; width: 43px; height: 22px; transform: translateX(-50%); border-radius: 24px 24px 0 0; background: currentColor; }
        .doctor-name { color: #333; font-weight: 700; }
        .doctor-info { color: #777; line-height: 1.45; }
      `}</style>

      <div className="doctor-avatar position-relative" aria-hidden="true" />

      <div className="card-body p-3">
        <h2 className="doctor-name h5 mb-1">{name}</h2> {/* ← CHANGE: "name" to your prop e.g. "title" */}
        <div className="doctor-info">Specialty: {speciality}</div> {/* ← CHANGE: "Specialty" and "speciality" */}
        <div className="doctor-info">Experience: {experience}</div> {/* ← CHANGE: "Experience" and "experience" */}
        <div className="doctor-info">Patients: {views}</div> {/* ← CHANGE: "Patients" */}

        <div className="d-flex flex-wrap gap-2 mt-2">
          <button className="btn btn-outline-primary btn-sm" onClick={handleView}>
            View Profile {/* ← CHANGE: button text */}
          </button>
          <button className="btn btn-outline-danger btn-sm">Delete</button> {/* ← CHANGE: button text */}
        </div>

        <button
          className="btn btn-outline-secondary btn-sm w-100 mt-2"
          onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails ? 'Hide Details' : 'Show Details'} {/* ← CHANGE: button text */}
        </button>

        {showDetails && (
          <div className="mt-3 text-secondary small">
            <p className="mb-1"><strong>Email:</strong> doctor@example.com</p> {/* ← CHANGE: "Email" label and value */}
            <p className="mb-0"><strong>Phone:</strong> 0300-1234567</p> {/* ← CHANGE: "Phone" label and value */}
          </div>
        )}
      </div>
    </div>
  )
}

export default Home /* ← CHANGE: "Home" to your component name */