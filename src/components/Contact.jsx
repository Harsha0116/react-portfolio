import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    const mailtoLink = `mailto:harshavardhan16.venigalla@gmail.com?subject=Portfolio Contact from ${name}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    )}`;

    window.location.href = mailtoLink;
    setSubmitted(true);
  };

  const inputStyle = {
    width: "100%",
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "12px",
    padding: "14px 18px",
    color: "#fff",
    fontFamily: "'Inter', sans-serif",
    fontSize: "0.9rem",
    outline: "none",
    transition: "border-color 0.2s",
    boxSizing: "border-box",
  };

  return (
    <>
      <section
        id="contact"
        style={{
          padding: "120px 8%",
          background: "#000",
          borderTop: "1px solid rgba(255,107,0,0.1)",
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: "72px" }}>
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
            Contact me
          </p>
          <h2
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: "400",
              color: "#fff",
              lineHeight: "1.1",
              letterSpacing: "-0.01em",
              maxWidth: "600px",
            }}
          >
            Let's build something{" "}
            <em style={{ fontStyle: "italic", color: "rgba(255,255,255,0.4)" }}>
              great
            </em>{" "}
            together
          </h2>
        </div>

        {/* Two Column Layout */}
        <div
          className="contact-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "start",
          }}
        >
          {/* LEFT */}
          <div style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.97rem",
                color: "rgba(255,255,255,0.45)",
                lineHeight: "1.8",
              }}
            >
              Open to internships, full-time opportunities, and collaborations.
              Whether you have a project in mind or just want to say hi — my
              inbox is always open.
            </p>

            {/* Email Block */}
            <div
              style={{
                padding: "20px 24px",
                background: "rgba(255,107,0,0.04)",
                border: "1px solid rgba(255,107,0,0.15)",
                borderRadius: "16px",
                display: "flex",
                flexDirection: "column",
                gap: "6px",
              }}
            >
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.65rem",
                  fontWeight: "600",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#FF6B00",
                  opacity: 0.6,
                }}
              >
                Email
              </span>

              <a
                href="mailto:harshavardhan16.venigalla@gmail.com"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.92rem",
                  color: "rgba(255,255,255,0.7)",
                  textDecoration: "none",
                  wordBreak: "break-all",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#FF6B00")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color =
                    "rgba(255,255,255,0.7)")
                }
              >
                harshavardhan16.venigalla@gmail.com
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            {submitted ? (
              <div
                style={{
                  padding: "56px 32px",
                  background: "rgba(255,107,0,0.04)",
                  border: "1px solid rgba(255,107,0,0.2)",
                  borderRadius: "20px",
                  textAlign: "center",
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Instrument Serif', serif",
                    fontSize: "1.6rem",
                    fontWeight: "400",
                    color: "#fff",
                  }}
                >
                  Message sent!
                </h3>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.9rem",
                    color: "rgba(255,255,255,0.4)",
                  }}
                >
                  Thanks for reaching out. I'll get back to you soon.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{ display: "flex", flexDirection: "column", gap: "12px" }}
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  style={inputStyle}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  style={inputStyle}
                />
                <textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  style={{ ...inputStyle, resize: "none" }}
                />
                <button
                  type="submit"
                  style={{
                    padding: "14px 28px",
                    background: "#FF6B00",
                    color: "#000",
                    border: "none",
                    borderRadius: "999px",
                    cursor: "pointer",
                  }}
                >
                  Send Message ↗
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          padding: "28px 8%",
          borderTop: "1px solid rgba(255,107,0,0.08)",
          background: "#000",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        <span
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: "0.95rem",
            color: "rgba(255,255,255,0.2)",
          }}
        >
          Harsha V. Vardhan
        </span>

        <a
          href="#home"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.78rem",
            color: "rgba(255,255,255,0.25)",
            textDecoration: "none",
          }}
        >
          Back to top ↑
        </a>
      </footer>

      <style>{`
        @media (max-width: 860px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </>
  );
}

export default Contact;