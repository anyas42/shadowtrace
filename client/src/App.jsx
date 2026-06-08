import { useEffect, useState } from "react";

function App() {
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setEntered(true);
    }, 5000);
  }, []);

  const floatingObjects = [
    "🗝️",
    "📁",
    "💀",
    "🔍",
    "🕵️",
    "💻",
    "📡",
    "🧩",
  ];

  if (!entered) {
    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          background: "black",
          overflow: "hidden",
          position: "relative",
          fontFamily: "monospace",
          color: "#00ff9d",
        }}
      >
        {/* Twinkling Stars */}
        {[...Array(70)].map((_, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              width: "2px",
              height: "2px",
              background: "white",
              borderRadius: "50%",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random(),
              animation: `twinkle ${
                2 + Math.random() * 3
              }s infinite alternate`,
            }}
          />
        ))}

        {/* Floating Mystery Objects */}
        {floatingObjects.map((item, index) => (
          <div
            key={index}
            style={{
              position: "absolute",
              fontSize: "2rem",
              top: `${10 + index * 10}%`,
              left: `${5 + index * 10}%`,
              animation: `float ${
                4 + index
              }s ease-in-out infinite alternate`,
              opacity: 0.8,
            }}
          >
            {item}
          </div>
        ))}

        {/* Center Content */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <p
            style={{
              letterSpacing: "4px",
              color: "#00d9ff",
              marginBottom: "20px",
            }}
          >
            ENTERING ANOTHER WORLD...
          </p>

          <h1
            style={{
              fontSize: "4rem",
              textShadow: "0 0 20px #00ff9d",
              marginBottom: "30px",
            }}
          >
            SHADOWTRACE
          </h1>

          <p style={{ marginBottom: "30px", color: "#bbbbbb" }}>
            Initializing investigation system...
          </p>

          {/* Loading Bar */}
          <div
            style={{
              width: "320px",
              height: "5px",
              background: "#111",
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: "100%",
                background: "#00ff9d",
                animation: "load 5s linear forwards",
                boxShadow: "0 0 15px #00ff9d",
              }}
            />
          </div>
        </div>

        <style>
          {`
            @keyframes load {
              from {
                width: 0%;
              }
              to {
                width: 100%;
              }
            }

            @keyframes twinkle {
              from {
                opacity: 0.2;
                transform: scale(1);
              }
              to {
                opacity: 1;
                transform: scale(1.8);
              }
            }

            @keyframes float {
              from {
                transform: translateY(0px) rotate(0deg);
              }
              to {
                transform: translateY(-30px) rotate(10deg);
              }
            }
          `}
        </style>
      </div>
    );
  }

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#050505",
        color: "#00ff9d",
        position: "relative",
        overflow: "hidden",
        fontFamily: "monospace",
      }}
    >
      {/* Glow */}
      <div
        style={{
          position: "absolute",
          width: "700px",
          height: "700px",
          background: "#00ff9d22",
          borderRadius: "50%",
          filter: "blur(140px)",
          top: "-250px",
          right: "-150px",
        }}
      />

      {/* Navbar */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "25px 50px",
          borderBottom: "1px solid #00ff9d33",
          position: "relative",
          zIndex: 2,
        }}
      >
        <h2>SHADOWTRACE</h2>

        <div
          style={{
            display: "flex",
            gap: "30px",
            color: "#cccccc",
          }}
        >
          <span>Cases</span>
          <span>Database</span>
          <span>AI Lab</span>
        </div>
      </nav>

      {/* Main Screen */}
      <div
        style={{
          height: "85vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          position: "relative",
          zIndex: 2,
        }}
      >
        <p
          style={{
            color: "#00d9ff",
            letterSpacing: "4px",
          }}
        >
          ACCESS GRANTED
        </p>

        <h1
          style={{
            fontSize: "6rem",
            marginTop: "20px",
            textShadow: "0 0 25px #00ff9d",
          }}
        >
          SHADOWTRACE
        </h1>

        <p
          style={{
            maxWidth: "700px",
            marginTop: "30px",
            color: "#bbbbbb",
            lineHeight: "1.8",
          }}
        >
          Enter a world of encrypted files, cyber mysteries,
          hidden clues, and AI-powered investigations.
        </p>

        <button
          style={{
            marginTop: "40px",
            padding: "15px 35px",
            background: "#00ff9d",
            border: "none",
            color: "black",
            fontWeight: "bold",
            cursor: "pointer",
            borderRadius: "6px",
            boxShadow: "0 0 20px #00ff9d88",
          }}
        >
          ENTER SYSTEM
        </button>
      </div>
    </div>
  );
}

export default App;