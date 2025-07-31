import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from './images/II_logotype_left-aligned_black.svg';

function VenuePage() {
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
              <a
                href="#registration"
                style={{
                  color: "#000",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                Registration
              </a>
            </li>
          </ul>
        </nav>
      </section>

      <div className="container py-5" style={{ marginTop: "100px" }}>
        <h1 className="mb-4">Venue</h1>
        <div style={{ display: "flex", gap: "2rem", alignItems: "flex-start" }}>
          {/* Left column: Location details */}
          <div style={{ flex: 1 }}>
            <p>
              <strong>Grand Convention Center</strong>
              <br />
              123 Main Street, New York, NY
            </p>
            <p>
              The Grand Convention Center is located in the heart of New York City, offering state-of-the-art facilities and amenities for our event attendees.
            </p>
          </div>
          {/* Right column: Google Maps */}
          <div style={{ flex: 1 }}>
            <iframe
              title="Grand Convention Center Map"
              src="https://www.google.com/maps?q=123+Main+Street,+New+York,+NY&output=embed"
              width="100%"
              height="300"
              style={{ border: 0, borderRadius: "8px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VenuePage;
