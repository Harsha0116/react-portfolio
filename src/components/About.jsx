import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiCodechef } from "react-icons/si";
import profileImg from "./images/ani.png";

function About() {
  const socials = [
    {
      icon: <FaGithub size={16} />,
      label: "GitHub",
      href: "https://github.com/Harsha0116/",
    },
    {
      icon: <FaLinkedin size={16} />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/harsha-vardhan-venigalla-ba2b31251/",
    },
    {
      icon: <SiLeetcode size={16} />,
      label: "LeetCode",
      href: "https://leetcode.com/u/Harsha116/",
    },
    {
      icon: <SiCodechef size={16} />,
      label: "CodeChef",
      href: "https://www.codechef.com/users/klu_2200031719",
    },
  ];

  return (
    <section
      id="about"
      style={{
        padding: "120px 8%",
        background: "#000",
        borderTop: "1px solid rgba(255,107,0,0.1)",
      }}
    >
      {/* ── Eyebrow ── */}
      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "0.7rem",
          fontWeight: "600",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "#FF6B00",
          opacity: 0.7,
          marginBottom: "60px",
        }}
      >
        About me
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "center",
        }}
        className="about-grid"
      >
        {/* ── LEFT: Photo ── */}
        <div
          style={{
            borderRadius: "20px",
            overflow: "hidden",
            border: "1px solid rgba(255,107,0,0.12)",
            aspectRatio: "4/5",
            background: "#0f0f0f",
            boxShadow: "0 8px 40px rgba(0,0,0,0.5)",
            transition: "border-color 0.3s ease, box-shadow 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "rgba(255,107,0,0.35)";
            e.currentTarget.style.boxShadow =
              "0 16px 56px rgba(255,107,0,0.12)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "rgba(255,107,0,0.12)";
            e.currentTarget.style.boxShadow = "0 8px 40px rgba(0,0,0,0.5)";
          }}
        >
          <img
            src={profileImg}
            alt="Harsha Vardhan"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
              filter: "grayscale(15%)",
            }}
          />
        </div>

        {/* ── RIGHT: Content ── */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "28px",
          }}
        >
          {/* Headline */}
          <h2
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: "400",
              color: "#fff",
              lineHeight: "1.15",
              letterSpacing: "-0.01em",
            }}
          >
            A developer who cares about{" "}
            <em style={{ fontStyle: "italic", color: "rgba(255,255,255,0.4)" }}>
              craft, speed,
            </em>{" "}
            and real-world{" "}
            <em style={{ fontStyle: "italic", color: "rgba(255,255,255,0.4)" }}>
              impact.
            </em>
          </h2>

          {/* Bio */}
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.97rem",
              color: "rgba(255,255,255,0.5)",
              lineHeight: "1.85",
            }}
          >
            I push code with confidence and make it behave in production✨<br />
            Professional Googler 🔍<br /> Part-time debugger 🐛 <br />Full-time{" "}
            <em
              style={{
                fontStyle: "normal",
                color: "#FF6B00",
                opacity: 0.85,
              }}
            >
              "Gimme Time, I'll fix it"
            </em>{" "}
            specialist⚡<br /> Running on caffeine ☕, clean commits 🚀, and
            controlled chaos 😌
          </p>

          {/* Divider */}
          <div
            style={{
              height: "1px",
              background:
                "linear-gradient(90deg, rgba(255,107,0,0.25) 0%, transparent 100%)",
            }}
          />

          {/* Social Links */}
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "7px",
                  padding: "8px 16px",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "999px",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.8rem",
                  color: "rgba(255,255,255,0.55)",
                  textDecoration: "none",
                  transition:
                    "border-color 0.2s, color 0.2s, background 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#FF6B00";
                  e.currentTarget.style.color = "#FF6B00";
                  e.currentTarget.style.background = "rgba(255,107,0,0.06)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor =
                    "rgba(255,255,255,0.08)";
                  e.currentTarget.style.color = "rgba(255,255,255,0.55)";
                  e.currentTarget.style.background =
                    "rgba(255,255,255,0.03)";
                }}
              >
                {s.icon}
                {s.label}
              </a>
            ))}
          </div>

          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1OZqfin5zhQrZlxBaY0mhi6mccolLFKa4/view"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              width: "fit-content",
              background: "#FF6B00",
              color: "#000",
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.85rem",
              fontWeight: "700",
              padding: "13px 26px",
              borderRadius: "999px",
              textDecoration: "none",
              marginTop: "8px",
              transition: "opacity 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = "0.85";
              e.currentTarget.style.boxShadow =
                "0 0 24px rgba(255,107,0,0.45)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = "1";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            View Résumé ↗
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}

export default About;