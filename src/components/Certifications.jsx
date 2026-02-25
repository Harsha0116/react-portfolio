import { useEffect, useRef } from "react";

function Certifications() {
  const cardRefs = useRef([]);

  const certifications = [
    {
      title: "Red Hat Certified Specialist",
      code: "EX183",
      issuer: "Red Hat",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Red_Hat_logo.svg/2560px-Red_Hat_logo.svg.png",
      link: "https://www.credly.com/badges/341c9c01-6e8c-43b4-b37a-44b19cb2720f/linked_in_profile",
      year: "2024",
      bg: "#000000",
    },
    {
      title: "RPA Automation 360",
      code: "AA-360",
      issuer: "Automation Anywhere",
      logo: "https://www.automationanywhere.com/sites/default/files/images/default-images/logo-aa-white-new.svg",
      link: "https://certificates.automationanywhere.com/b919a619-21db-4a92-bbb1-845b6e794485",
      year: "2024",
      bg: "#000000",
    },
    {
      title: "Oracle Generative AI",
      code: "OCI-GenAI",
      issuer: "Oracle",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/2560px-Oracle_logo.svg.png",
      link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=763BA3E7E656E7E606E6353E5F5F4F6238AAB1B29F52177893446EDA8DA50AB1",
      year: "2024",
      bg: "#000000",
    },
  ];

  useEffect(() => {
    const observers = cardRefs.current.map((ref) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            ref.style.opacity = "1";
            ref.style.transform = "translateX(0) translateY(0)";
            observer.unobserve(ref);
          }
        },
        { threshold: 0.15 }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((obs) => obs && obs.disconnect());
    };
  }, []);

  return (
    <section
      id="certifications"
      style={{
        padding: "120px 8%",
        background: "#000",
        borderTop: "1px solid rgba(255,107,0,0.1)",
        overflow: "hidden",
      }}
    >
      {/* ── Header ── */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "24px",
          marginBottom: "72px",
        }}
      >
        <div>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.7rem",
              fontWeight: "600",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#FF6B00",
              opacity: 0.7,
              marginBottom: "14px",
            }}
          >
            Credentials
          </p>
          <h2
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: "400",
              color: "#fff",
              lineHeight: "1.1",
              letterSpacing: "-0.01em",
            }}
          >
            Certified &{" "}
            <em style={{ fontStyle: "italic", color: "rgba(255,255,255,0.4)" }}>
              recognized
            </em>{" "}
            by industry leaders
          </h2>
        </div>
      </div>

      {/* ── Alternating Scroll Cards ── */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "32px",
        }}
      >
        {certifications.map((cert, index) => {
          const fromLeft = index % 2 === 0;

          return (
            <a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <div
                ref={(el) => {
                  cardRefs.current[index] = el;
                  if (el) {
                    el.style.opacity = "0";
                    el.style.transform = fromLeft
                      ? "translateX(-80px)"
                      : "translateX(80px)";
                    el.style.transition =
                      "opacity 0.7s ease, transform 0.7s ease";
                  }
                }}
                style={{
                  display: "grid",
                  gridTemplateColumns: fromLeft
                    ? "260px 1fr"
                    : "1fr 260px",
                  borderRadius: "24px",
                  overflow: "hidden",
                  border: "1px solid rgba(255,255,255,0.07)",
                  background: "rgba(15,15,15,0.95)",
                  boxShadow:
                    "0 4px 32px rgba(0,0,0,0.5), 0 1px 0 rgba(255,255,255,0.05) inset",
                  transition:
                    "border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease",
                  minHeight: "160px",
                }}
                className="cert-row-card"
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,107,0,0.45)";
                  e.currentTarget.style.boxShadow =
                    "0 16px 56px rgba(255,107,0,0.18), 0 4px 16px rgba(0,0,0,0.5)";
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor =
                    "rgba(255,255,255,0.07)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 32px rgba(0,0,0,0.5), 0 1px 0 rgba(255,255,255,0.05) inset";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {/* ── Logo Panel — switches side based on index ── */}
                {fromLeft && (
                  <div
                    style={{
                      background: cert.bg,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "28px 32px",
                      position: "relative",
                      overflow: "hidden",
                      order: 0,
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: "50%",
                        background:
                          "linear-gradient(180deg, rgba(255,255,255,0.1) 0%, transparent 100%)",
                        pointerEvents: "none",
                      }}
                    />
                    <img
  src={cert.logo}
  alt={cert.issuer}
  style={{
    maxWidth: "150px",
    maxHeight: "52px",
    objectFit: "contain",
    position: "relative",
    zIndex: 1,
    filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.2))",
  }}
/>
                    <span
                      style={{
                        display: "none",
                        fontFamily: "'Instrument Serif', serif",
                        fontSize: "2rem",
                        color: "#fff",
                      }}
                    >
                      {cert.issuer.charAt(0)}
                    </span>
                  </div>
                )}

                {/* ── Content Panel ── */}
                <div
                  style={{
                    padding: "28px 32px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    gap: "10px",
                    background:
                      "linear-gradient(135deg, rgba(22,22,22,1) 0%, rgba(10,10,10,1) 100%)",
                    order: fromLeft ? 1 : 0,
                  }}
                >
                  {/* Code pill */}
                  <span
                    style={{
                      display: "inline-block",
                      width: "fit-content",
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.65rem",
                      fontWeight: "600",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "#FF6B00",
                      background: "rgba(255,107,0,0.08)",
                      border: "1px solid rgba(255,107,0,0.2)",
                      borderRadius: "999px",
                      padding: "3px 10px",
                    }}
                  >
                    {cert.code}
                  </span>

                  {/* Title */}
                  <h3
                    style={{
                      fontFamily: "'Instrument Serif', serif",
                      fontSize: "1.3rem",
                      fontWeight: "400",
                      color: "#fff",
                      lineHeight: "1.2",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {cert.title}
                  </h3>

                  {/* Issuer · Year · Arrow */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      paddingTop: "10px",
                      borderTop: "1px solid rgba(255,255,255,0.05)",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.78rem",
                        color: "rgba(255,255,255,0.38)",
                      }}
                    >
                      {cert.issuer}
                    </span>
                    <span
                      style={{
                        width: "3px",
                        height: "3px",
                        borderRadius: "50%",
                        background: "rgba(255,255,255,0.2)",
                        display: "inline-block",
                      }}
                    />
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.78rem",
                        color: "rgba(255,255,255,0.25)",
                      }}
                    >
                      {cert.year}
                    </span>
                    <span
                      style={{
                        marginLeft: "auto",
                        fontSize: "0.9rem",
                        color: "rgba(255,107,0,0.6)",
                      }}
                    >
                      ↗
                    </span>
                  </div>
                </div>

                {/* ── Logo Panel RIGHT side (odd index) ── */}
                {!fromLeft && (
                  <div
                    style={{
                      background: cert.bg,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "28px 32px",
                      position: "relative",
                      overflow: "hidden",
                      order: 1,
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: "50%",
                        background:
                          "linear-gradient(180deg, rgba(255,255,255,0.1) 0%, transparent 100%)",
                        pointerEvents: "none",
                      }}
                    />
                    <img
                      src={cert.logo}
                      alt={cert.issuer}
                      style={{
                        maxWidth: "150px",
                        maxHeight: "52px",
                        objectFit: "contain",
                        position: "relative",
                        zIndex: 1,
                        filter: "brightness(0) invert(1)",
                      }}
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        e.currentTarget.nextSibling.style.display = "block";
                      }}
                    />
                    <span
                      style={{
                        display: "none",
                        fontFamily: "'Instrument Serif', serif",
                        fontSize: "2rem",
                        color: "#fff",
                      }}
                    >
                      {cert.issuer.charAt(0)}
                    </span>
                  </div>
                )}
              </div>
            </a>
          );
        })}
      </div>

      {/* ── Bottom CTA strip ── */}
      <div
        style={{
          marginTop: "64px",
          padding: "36px 40px",
          background: "rgba(255,107,0,0.03)",
          border: "1px solid rgba(255,107,0,0.12)",
          borderRadius: "24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "24px",
        }}
      >
        <div>
          <p
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: "1.3rem",
              fontWeight: "400",
              color: "#fff",
              marginBottom: "6px",
            }}
          >
            Always learning, always growing.
          </p>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.85rem",
              color: "rgba(255,255,255,0.35)",
            }}
          >
            More certifications in progress — DevOps &amp; Cloud next.
          </p>
        </div>

        <a
  href="#contact"
  style={{
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    background: "#FF6B00",
    color: "#000",
    fontFamily: "'Inter', sans-serif",
    fontSize: "0.85rem",
    fontWeight: "700",
    padding: "13px 26px",
    borderRadius: "999px",
    textDecoration: "none",
    whiteSpace: "nowrap",
    transition: "opacity 0.2s, box-shadow 0.2s",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.opacity = "0.85";
    e.currentTarget.style.boxShadow = "0 0 24px rgba(255,107,0,0.45)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.opacity = "1";
    e.currentTarget.style.boxShadow = "none";
  }}
>
  Work with me ↗
</a>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .cert-row-card {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

export default Certifications;