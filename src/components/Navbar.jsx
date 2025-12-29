function Navbar() {
  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Certifications", link: "#certifications" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 100,
        padding: "18px 8%",
        background: "rgba(0,0,0,0.55)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {/* LEFT — MENU */}
      <div style={{ display: "flex", gap: "28px" }}>
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.link}
            style={{
              color: "#eaeaea",
              textDecoration: "none",
              fontSize: "0.95rem",
              fontWeight: "500",
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "#00fff5")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "#eaeaea")
            }
          >
            {item.name}
          </a>
        ))}
      </div>

      {/* RIGHT — NEON NAME */}
      <div
        style={{
          fontSize: "1.1rem",
          fontWeight: "700",
          color: "#000",
          textShadow: `
            0 0 5px #00fff5,
            0 0 10px #00fff5,
            0 0 20px #00fff5,
            0 0 40px rgba(0,255,245,0.6)
          `,
          letterSpacing: "1px",
        }}
      >
        Harsha V Vardhan
      </div>
    </nav>
  );
}

export default Navbar;
