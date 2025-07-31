import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "./images/II_logotype_left-aligned_black.svg";

function RegistrationPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    organization: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="page-container">
      <section className="venue" style={{ position: "relative" }}>
        <nav
          className="hero-menu"
          style={{
            position: "absolute",
            top: "2rem",
            left: 0,
            width: "100%",
            zIndex: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingLeft: "3rem",
            paddingRight: "3rem",
          }}
        >
          {/* Logo on the far left */}
          <Logo style={{ height: "40px", marginLeft: "1rem" }} />
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              gap: "1.5rem",
              margin: 0,
              padding: 0,
            }}
          >
            <li>
              <NavLink
                to="/"
                style={({ isActive }) => ({
                  color: "#000",
                  textDecoration: "none",
                  fontWeight: "bold",
                  borderBottom: isActive ? "2px solid #000" : "none",
                })}
                end
              >
                Homepage
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/venue"
                style={({ isActive }) => ({
                  color: "#000",
                  textDecoration: "none",
                  fontWeight: "bold",
                  borderBottom: isActive ? "2px solid #000" : "none",
                })}
              >
                Venue
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/registration"
                style={({ isActive }) => ({
                  color: "#000",
                  textDecoration: "none",
                  fontWeight: "bold",
                  borderBottom: isActive ? "2px solid #000" : "none",
                })}
              >
                Registration
              </NavLink>
            </li>
          </ul>
        </nav>
      </section>

      <div className="container py-5" style={{ maxWidth: 500, marginTop: "100px" }}>
        <h1 className="mb-4">Registration</h1>
        {submitted ? (
          <div className="alert alert-success">
            Thank you for registering, {form.name}!
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                id="name"
                name="name"
                className="form-control"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="form-control"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="organization" className="form-label">
                Organization
              </label>
              <input
                id="organization"
                name="organization"
                className="form-control"
                value={form.organization}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Register
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default RegistrationPage;
