import { useState, useEffect } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home",           link: "#home" },
    { name: "Skills",         link: "#skills" },
    { name: "Projects",       link: "#projects" },
    { name: "Certifications", link: "#certifications" },
    { name: "About",          link: "#about" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 8%",
          height: "64px",
          background: scrolled
            ? "rgba(0,0,0,0.92)"
            : "rgba(0,0,0,0.6)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: scrolled
            ? "1px solid rgba(255,107,0,0.12)"
            : "1px solid rgba(255,255,255,0.05)",
          transition: "background 0.3s ease, border-color 0.3s ease",
        }}
      >
        {/* LEFT — Name */}
        <span
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: "1.05rem",
            fontWeight: "400",
            color: "#fff",
            whiteSpace: "nowrap",
            letterSpacing: "0.01em",
            flexShrink: 0,
          }}
        >
          Harsha V Vardhan
        </span>

        {/* CENTER — Nav Links */}
        <ul
          style={{
            display: "flex",
            alignItems: "center",
            gap: "36px",
            listStyle: "none",
            margin: 0,
            padding: 0,
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
          }}
          className="navbar-links"
        >
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.link}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.82rem",
                  fontWeight: "500",
                  color: "rgba(255,255,255,0.5)",
                  letterSpacing: "0.02em",
                  textDecoration: "none",
                  transition: "color 0.2s",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#FF6B00")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(255,255,255,0.5)")
                }
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* RIGHT — CTA */}
        <a
          href="#contact"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.82rem",
            fontWeight: "700",
            color: "#000",
            background: "#FF6B00",
            padding: "9px 22px",
            borderRadius: "999px",
            textDecoration: "none",
            whiteSpace: "nowrap",
            flexShrink: 0,
            transition: "opacity 0.2s, box-shadow 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = "0.85";
            e.currentTarget.style.boxShadow = "0 0 20px rgba(255,107,0,0.4)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = "1";
            e.currentTarget.style.boxShadow = "none";
          }}
          className="navbar-cta"
        >
          Get in Touch
        </a>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "4px",
            flexDirection: "column",
            gap: "5px",
            flexShrink: 0,
          }}
          className="hamburger"
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: "20px",
                height: "1.5px",
                background: "#FF6B00",
                borderRadius: "2px",
                transition: "transform 0.2s, opacity 0.2s",
                transform:
                  menuOpen && i === 0
                    ? "translateY(6.5px) rotate(45deg)"
                    : menuOpen && i === 2
                    ? "translateY(-6.5px) rotate(-45deg)"
                    : "none",
                opacity: menuOpen && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            top: "64px",
            left: 0,
            right: 0,
            zIndex: 999,
            background: "rgba(0,0,0,0.97)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid rgba(255,107,0,0.12)",
            padding: "8px 0 16px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {[...navItems, { name: "Contact", link: "#contact" }].map(
            (item) => (
              <a
                key={item.name}
                href={item.link}
                onClick={() => setMenuOpen(false)}
                style={{
                  padding: "14px 8%",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.9rem",
                  color: "rgba(255,255,255,0.6)",
                  textDecoration: "none",
                  transition: "color 0.2s, background 0.2s",
                  borderBottom: "1px solid rgba(255,255,255,0.04)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#FF6B00";
                  e.currentTarget.style.background = "rgba(255,107,0,0.04)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgba(255,255,255,0.6)";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                {item.name}
              </a>
            )
          )}
        </div>
      )}

      <style>{`
        @media (max-width: 700px) {
          .navbar-links { display: none !important; }
          .navbar-cta   { display: none !important; }
          .hamburger    { display: flex !important; }
        }
      `}</style>
    </>
  );
}

export default Navbar;