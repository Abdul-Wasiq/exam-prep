import { useState } from "react"

// ← CHANGE: "Register" to your function name
function Register() {
  const [formData, setFormData] = useState({
    name: '',        // ← CHANGE: add/remove fields to match exam
    email: '',
    password: '',
    specialty: '',   // ← CHANGE: to your field e.g. "program", "course"
    gender: '',
    terms: false
  })

  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    setError('')
    setSuccess('')

    if (!formData.name) {
      setError("Please Enter your name") // ← CHANGE: error message
      return
    }
    if (!formData.email) {
      setError("Please Enter your Email Address")
      return
    }
    if (!formData.password) {
      setError("Please Enter password")
      return
    }
    if (!formData.specialty) { // ← CHANGE: "specialty" to your field
      setError("Please Enter Specialty") // ← CHANGE: error message
      return
    }
    if (!formData.gender) {
      setError("Please Select your gender")
      return
    }
    if (!formData.terms) {
      setError("Please Check terms and conditions")
      return
    }
    if (formData.password.length < 8) {
      setError("Password must be atleast 8 characters")
      return
    }
    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setError('Please enter a valid email')
      return
    }

    setSuccess("Form submitted successfully!") // ← CHANGE: success message
  }

  function handleChange(event) {
    const { name, value, type, checked } = event.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    })
    setError('')
    setSuccess('')
  }

  return (
    <div className="card shadow-sm">
      <div className="card-body p-4">
        <h2 className="mb-4">
          /* ← CHANGE: heading text */
          Registration
        </h2>

        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <label className="form-label">
              /* ← CHANGE: label text */
              Full Name
            </label>
            /* ← CHANGE: name, placeholder, value — match formData field */
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">
              /* ← CHANGE: label text */
              Email
            </label>
            /* ← CHANGE: placeholder */
            <input
              type="text"
              name="email"
              className="form-control"
              placeholder="Enter your Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">
              /* ← CHANGE: label text */
              Password
            </label>
            /* ← CHANGE: placeholder */
            <input
              type="text"
              name="password"
              className="form-control"
              placeholder="Enter your Password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            /* ← CHANGE: name, value, options — match formData field */
            <select
              name="specialty"
              className="form-select"
              value={formData.specialty}
              onChange={handleChange}
            >
              <option value="">Select Specialty</option>
              /* ← CHANGE: option values and text */
              <option value="Specialty1">Specialty1</option>
              <option value="Specialty2">Specialty2</option>
              <option value="Specialty3">Specialty3</option>
            </select>
          </div>

          <div className="mb-3">
            /* ← CHANGE: value, checked, label — if different gender options */
            <div className="form-check form-check-inline">
              <input
                type="radio"
                name="gender"
                value="Male"
                className="form-check-input"
                checked={formData.gender === 'Male'}
                onChange={handleChange}
              />
              <label className="form-check-label">Male</label>
            </div>

            <div className="form-check form-check-inline">
              <input
                type="radio"
                name="gender"
                value="Female"
                className="form-check-input"
                checked={formData.gender === 'Female'}
                onChange={handleChange}
              />
              <label className="form-check-label">Female</label>
            </div>
          </div>

          <div className="mb-3">
            <div className="form-check">
              <input
                type="checkbox"
                name="terms"
                className="form-check-input"
                checked={formData.terms}
                onChange={handleChange}
              />
              <label className="form-check-label">
                /* ← CHANGE: label text */
                I agree to the terms and conditions.
              </label>
            </div>
          </div>

          {error && (
            <div className="alert alert-danger">
              {error}
            </div>
          )}

          {success && (
            <div className="alert alert-success">
              {success}
            </div>
          )}

          /* ← CHANGE: button text */
          <button type="submit" className="btn btn-primary">
            Register Student
          </button>

        </form>
      </div>
    </div>
  )
}

// ← CHANGE: "Register" to your function name
export default Register