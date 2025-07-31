import React from "react";
import { NavLink } from "react-router-dom";

function HomePage() {
  return (
    <div className="page-container">
      <section className="hero-section">
        <div
          className="hero-overlay"
          style={{
            position: "relative",
            background: "rgba(0, 0, 0, 0.5)", // moved semi-transparent background here
            borderRadius: "1rem",
            boxShadow: "0 4px 24px rgba(0,0,0,0.2)",
          }}
        >
          {/* Menu absolutely positioned in the top right */}
          <nav
            className="hero-menu"
            style={{
              position: "absolute",
              top: "2.5rem",
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
                <NavLink
                  to="/"
                  style={({ isActive }) => ({
                    color: "#fff",
                    textDecoration: "none",
                    fontWeight: "bold",
                    borderBottom: isActive ? "2px solid #fff" : "none",
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
                    color: "#fff",
                    textDecoration: "none",
                    fontWeight: "bold",
                    borderBottom: isActive ? "2px solid #fff" : "none",
                  })}
                >
                  Venue
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/registration"
                  style={({ isActive }) => ({
                    color: "#fff",
                    textDecoration: "none",
                    fontWeight: "bold",
                    borderBottom: isActive ? "2px solid #fff" : "none",
                  })}
                >
                  Registration
                </NavLink>
              </li>
            </ul>
          </nav>
          <div
            className="hero-text"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              flex: 1,
            }}
          >
            <div>
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
            {/* ...second column/menu remains unchanged... */}
          </div>
        </div>
      </section>

      <section className="about-section text-center container">
        <h2>What is Alpha Edge?</h2>
        <p>
          Institutional Investor’s exclusive, invitation-only capital
          introduction experience, designed to bring together leading
          institutional LPs and GPs who are reshaping the landscape of private
          and alternative markets.
        </p>
        <p>
          <span className="fw-bold">
            We are at a turning point in institutional investing—where market
            complexity, macro volatility, and liquidity dynamics are driving a
            complete reassessment of how capital is allocated across private and
            alternative strategies.
          </span>{" "}
          For endowments, foundations, healthcare systems, pensions, family
          offices, and RIAs, the imperative today is clear:{" "}
          <span className="fst-italic">
            build resilience, seek differentiated return streams, and construct
            portfolios that can adapt—without sacrificing long-term objectives.
          </span>
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "2.5rem",
            gap: "2rem",
          }}
        >
          <button className="become-sponsor-button">Become a Sponsor</button>
          <button className="contact-us-button">Contact Us</button>
        </div>

        <h2 className="fst-italic" style={{ marginTop: "100px" }}>
          A Week Unlike Any Other
        </h2>
        <p>
          <span className="fw-bold">
            lpha Edge is not just another conference—it’s the final act of II’s
            “Power Week,” following the prestigious Single Family Office
            Gathering (May 11–13). It’s where high-conviction capital meets
            high-potential talent who are shaping the future of alternative
            investing.
          </span>
        </p>
        <p>
          Taking place over 1.5 days at the Ritz-Carlton Fort Lauderdale, this
          high-conviction capital introduction experience will be focused on
          real assets, private equity, secondaries, venture, and alpha-driven
          liquid strategies.{" "}
        </p>

        <p>
          This closed-door program is designed to surface the current and next
          generation of investment talent and offer a unique lens into how top
          allocators are building resilient, future-ready portfolios through the
          integration of public and private alternatives.
          <span className="fst-italic">
            With 100 institutional LPs and GPs in attendance, Alpha Edge is a
            forum for strategic discovery, candid dialogue, and
            relationship-building with long-term alignment at its core.
          </span>
        </p>

        <div style={{ marginTop: "4rem" }}>
          <h2 className="fw-bold" style={{ marginBottom: "2rem" }}>
            Advisory Board
          </h2>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "3rem",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                background: "#f8f9fa",
                borderRadius: "1rem",
                padding: "2rem 1.5rem",
                minWidth: "220px",
                boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                textAlign: "center",
                flex: "1 1 220px",
                maxWidth: "300px",
              }}
            >
              <h4 style={{ marginBottom: "0.5rem" }}>Anurag Pandit</h4>
              <div
                style={{
                  color: "#555",
                  fontWeight: 500,
                  marginBottom: "0.25rem",
                }}
              >
                Chief Investment Officer
              </div>
              <div style={{ color: "#888" }}>
                ALSAC / St. Jude Children's Research Hospital
              </div>
            </div>
            <div
              style={{
                background: "#f8f9fa",
                borderRadius: "1rem",
                padding: "2rem 1.5rem",
                minWidth: "220px",
                boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                textAlign: "center",
                flex: "1 1 220px",
                maxWidth: "300px",
              }}
            >
              <h4 style={{ marginBottom: "0.5rem" }}>Niraj Agarwal</h4>
              <div
                style={{
                  color: "#555",
                  fontWeight: 500,
                  marginBottom: "0.25rem",
                }}
              >
                Head of Real Assets
              </div>
              <div style={{ color: "#888" }}>
                New Jersey Division of Investment
              </div>
            </div>
            <div
              style={{
                background: "#f8f9fa",
                borderRadius: "1rem",
                padding: "2rem 1.5rem",
                minWidth: "220px",
                boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                textAlign: "center",
                flex: "1 1 220px",
                maxWidth: "300px",
              }}
            >
              <h4 style={{ marginBottom: "0.5rem" }}>Jewel Chen</h4>
              <div
                style={{
                  color: "#555",
                  fontWeight: 500,
                  marginBottom: "0.25rem",
                }}
              >
                Portfolio Manager – Private Equity
              </div>
              <div style={{ color: "#888" }}>Texas Permanent School Fund</div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "3rem",
              flexWrap: "wrap",
              marginTop: "2rem",
            }}
          >
            <div
              style={{
                background: "#f8f9fa",
                borderRadius: "1rem",
                padding: "2rem 1.5rem",
                minWidth: "220px",
                boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                textAlign: "center",
                flex: "1 1 220px",
                maxWidth: "300px",
              }}
            >
              <h4 style={{ marginBottom: "0.5rem" }}>Cecelia Chen</h4>
              <div
                style={{
                  color: "#555",
                  fontWeight: 500,
                  marginBottom: "0.25rem",
                }}
              >
                Director of Investments
              </div>
              <div style={{ color: "#888" }}>
                Carnegie Corporation of New York
              </div>
            </div>
            <div
              style={{
                background: "#f8f9fa",
                borderRadius: "1rem",
                padding: "2rem 1.5rem",
                minWidth: "220px",
                boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                textAlign: "center",
                flex: "1 1 220px",
                maxWidth: "300px",
              }}
            >
              <h4 style={{ marginBottom: "0.5rem" }}>Petya Nikolova</h4>
              <div
                style={{
                  color: "#555",
                  fontWeight: 500,
                  marginBottom: "0.25rem",
                }}
              >
                Deputy CIO & Head of Infrastructure
              </div>
              <div style={{ color: "#888" }}>NYC Retirement Systems</div>
            </div>
            <div
              style={{
                background: "#f8f9fa",
                borderRadius: "1rem",
                padding: "2rem 1.5rem",
                minWidth: "220px",
                boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                textAlign: "center",
                flex: "1 1 220px",
                maxWidth: "300px",
              }}
            >
              <h4 style={{ marginBottom: "0.5rem" }}>Michael Nichols</h4>
              <div
                style={{
                  color: "#555",
                  fontWeight: 500,
                  marginBottom: "0.25rem",
                }}
              >
                Senior Investment Officer
              </div>
              <div style={{ color: "#888" }}>Texas Tech University System</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
