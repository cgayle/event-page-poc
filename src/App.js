import "./App.css";

function App() {
  return (
    <div className="page-container">
      <section className="hero-section">
        <div className="hero-overlay" style={{ position: "relative" }}>
          {/* Menu absolutely positioned in the top right */}
          <nav
            className="hero-menu"
            style={{
              position: "absolute",
              top: "2rem",
              right: "3rem",
              zIndex: 2,
            }}
          >
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
                <a
                  href="#home"
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                >
                  Homepage
                </a>
              </li>
              <li>
                <a
                  href="#venue"
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                >
                  Venue
                </a>
              </li>
              <li>
                <a
                  href="#registration"
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                >
                  Registration
                </a>
              </li>
            </ul>
          </nav>
          <div
            className="hero-text"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <div style={{ flex: 1 }}>
              <h1>Alpha Edge North America</h1>
              <p className="hero-subheading">The Capital Allocation Exchange</p>
              <hr style={{ borderTop: "2px solid #fff" }} />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "2rem",
                }}
              >
                <div style={{ flex: 1 }}>
                  <h3>Date</h3>
                  <p>September 15, 2024</p>
                </div>
                <div style={{ flex: 1 }}>
                  <h3>Venue</h3>
                  <p>Grand Convention Center, New York, NY</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-section">
        <h2>About</h2>
        <p>
          This event brings together enthusiasts from around the world. Learn,
          network, and have fun!
        </p>
      </section>
    </div>
  );
}

export default App;
