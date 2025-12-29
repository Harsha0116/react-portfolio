import Navbar from "./Navbar";
import ParticlesBackground from "./ParticlesBackground";
import profileImg from "./images/ani.png";

function Hero() {
  return (
    <section
      id="home"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "0 10%",
        overflow: "hidden",
      }}
    >
      {/* Global Animated Background */}
      <ParticlesBackground />

      {/* Full Glass Navbar */}
      <Navbar />

      {/* Content Wrapper */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          gap: "60px",
          flexWrap: "wrap",
          marginTop: "90px", // space for fixed navbar
        }}
      >
        {/* LEFT SIDE — TEXT */}
        <div style={{ flex: 1, minWidth: "300px" }}>
          <h1
            style={{
              fontSize: "3.5rem",
              fontWeight: "700",
              color: "#00fff5",
              lineHeight: "1.2",
            }}
          >
            Hi, I’m <span style={{ color: "#ffffff" }}>Harsha</span> 👋
          </h1>

          <h2
            style={{
              marginTop: "10px",
              fontSize: "1.4rem",
              fontWeight: "500",
              color: "#cfcfcf",
            }}
          >
            Full-Stack Developer · Automation Tester · DevOps Enthusiast
          </h2>

          <p
            style={{
              marginTop: "20px",
              fontSize: "1rem",
              color: "#9e9e9e",
              maxWidth: "650px",
              lineHeight: "1.7",
            }}
          >
            I design and develop scalable, high-performance web applications with
            a strong focus on clean architecture, automation, and modern DevOps
            practices. Passionate about solving real-world problems through
            technology and continuous learning.
          </p>

          <div style={{ marginTop: "35px", display: "flex", gap: "20px" }}>
            <a
              href="#projects"
              style={{
                padding: "12px 28px",
                backgroundColor: "#00fff5",
                color: "#000",
                fontWeight: "600",
                borderRadius: "6px",
                textDecoration: "none",
              }}
            >
              View Projects
            </a>

            <a
              href="#contact"
              style={{
                padding: "12px 28px",
                border: "1px solid #00fff5",
                color: "#00fff5",
                fontWeight: "600",
                borderRadius: "6px",
                textDecoration: "none",
              }}
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* RIGHT SIDE — IMAGE WITH NEON GLOW */}
        <div
          style={{
            flex: 1,
            minWidth: "280px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "330px",
              height: "330px",
              borderRadius: "50%",
              padding: "6px",
              background:
                "linear-gradient(135deg, #00fff5, #0066ff, #00fff5)",
              boxShadow: `
                0 0 20px rgba(0,255,245,0.6),
                0 0 40px rgba(0,255,245,0.4),
                0 0 80px rgba(0,255,245,0.25)
              `,
              animation: "glowPulse 3s ease-in-out infinite",
            }}
          >
            <img
              src={profileImg}
              alt="Harsha profile"
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                objectFit: "cover",
                backgroundColor: "#000",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
