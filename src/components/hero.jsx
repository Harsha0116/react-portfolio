import { useState, useEffect } from "react";
import Navbar from "./Navbar";

const roles = ["</Fullstack Dev>", "</App Dev>", "</Automation Testing>"];

function Hero() {
  const [displayed, setDisplayed] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  /* ───────── Typewriter Effect ───────── */
  useEffect(() => {
    const current = roles[roleIndex];

    const timeout = setTimeout(() => {
      if (!deleting) {
        if (charIndex < current.length) {
          setDisplayed(current.slice(0, charIndex + 1));
          setCharIndex((c) => c + 1);
        } else {
          setDeleting(true);
        }
      } else {
        if (charIndex > 0) {
          setDisplayed(current.slice(0, charIndex - 1));
          setCharIndex((c) => c - 1);
        } else {
          setDeleting(false);
          setRoleIndex((r) => (r + 1) % roles.length);
        }
      }
    }, deleting ? 35 : charIndex === current.length ? 1800 : 60);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  return (
    <section
      id="home"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "160px 8% 80px",
        background: "#000",
        overflow: "hidden",
      }}
    >
      <Navbar />

      {/* ───────── 3D Vertical Cuboid ───────── */}
      <div className="cube-wrapper">
        <div className="cube">
          <div className="face front">नमस्ते</div>
          <div className="face bottom">Namaste</div>
          <div className="face back">నమస్తే</div>
        </div>
      </div>

      {/* ───────── Name ───────── */}
      <h1
        style={{
          fontFamily: "'Oswald', serif",
          fontSize: "clamp(3rem, 8vw, 6.5rem)",
          fontWeight: "500",
          lineHeight: "1.05",
          color: "#fff",
          textAlign: "center",
          marginTop: "40px",
          marginBottom: "16px",
          letterSpacing: "-0.01em",
        }}
      >
        Harsha V Vardhan
      </h1>

      {/* ───────── Typewriter ───────── */}
      <div style={{ marginBottom: "32px" }}>
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "1.1rem",
            fontWeight: "500",
            color: "#E85D04",
            letterSpacing: "0.04em",
            minWidth: "200px",
            textAlign: "center",
          }}
        >
          {displayed}
          <span
            style={{
              display: "inline-block",
              width: "2px",
              height: "1em",
              background: "#E85D04",
              marginLeft: "3px",
              animation: "blink 0.8s step-end infinite",
            }}
          />
        </span>
      </div>

      {/* ───────── CTA + Green Badge ───────── */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <a
          href="#projects"
          style={{
            background: "#E85D04",
            color: "#000",
            fontFamily: "'Inter', sans-serif",
            fontWeight: "700",
            padding: "13px 26px",
            borderRadius: "999px",
            textDecoration: "none",
          }}
        >
          See my work ↗
        </a>

        <div className="available-badge">
          <span className="pulse-dot" />
          Available for work
        </div>
      </div>
      {/* ───────── Marquee ───────── */}
<div className="marquee">
  <div className="marquee-track">
    {Array(8).fill(null).map((_, i) => (
      <span key={i}>
        ✦ Full-Stack Dev ✦ App Dev ✦ Automation ✦
      </span>
    ))}
  </div>
</div>

      <style>{`
        @keyframes blink {
          0%,100% { opacity:1; }
          50% { opacity:0; }
        }

        /* ───── Cube Wrapper ───── */
        .cube-wrapper {
          width: 260px;
          height: 90px;
          perspective: 1000px;
        }

        .cube {
          width: 100%;
          height: 100%;
          position: relative;
          transform-style: preserve-3d;
          animation: flipVertical 6s infinite ease-in-out;
        }

        .face {
          position: absolute;
          width: 100%;
          height: 100%;
          
          color: #E85D04;
          font-family: 'Instrument Serif', serif;
          font-size: 5.0rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
          
          
          backface-visibility: hidden;
        }

        /* Front */
        .front {
        font-family: 'Noto Serif Devanagari', serif;
          transform: translateZ(50px);
        }

        /* Bottom */
        .bottom {
        font-family: 'Roboto', serif;
          transform: rotateX(-90deg) translateZ(50px);
        }

        /* Back */
        .back {
        font-family: 'Noto Serif Telugu', serif;
          transform: rotateX(-180deg) translateZ(50px);
        }

        @keyframes flipVertical {
          0%   { transform: rotateX(0deg); }
          30%  { transform: rotateX(0deg); }

          35%  { transform: rotateX(90deg); }
          65%  { transform: rotateX(90deg); }

          70%  { transform: rotateX(180deg); }
          95%  { transform: rotateX(180deg); }

          100% { transform: rotateX(360deg); }
        }

        /* Green Badge */
        .available-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          padding: 10px 18px;
          border-radius: 999px;
          font-family: 'Inter', sans-serif;
          font-size: 0.9rem;
          color: rgba(255,255,255,0.7);
        }

        .pulse-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #4ade80;
          animation: pulse 1.8s infinite;
        }

        @keyframes pulse {
          0%,100% { transform: scale(1); opacity:1; }
          50% { transform: scale(0.6); opacity:0.4; }
        }
          /* ───── Marquee ───── */
.marquee {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-top: 1px solid rgba(232,93,4,0.15);
  padding: 14px 0;
  overflow: hidden;
}

.marquee-track {
  display: flex;
  gap: 48px;
  width: max-content;
  animation: marqueeScroll 25s linear infinite;
}

.marquee span {
  font-family: 'Instrument Serif', serif;
  font-size: 0.9rem;
  color: rgba(255,255,255,0.25);
  white-space: nowrap;
  letter-spacing: 0.08em;
}

@keyframes marqueeScroll {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
      `}</style>
    </section>
  );
}

export default Hero;