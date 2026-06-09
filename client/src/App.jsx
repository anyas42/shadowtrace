import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [screen, setScreen] = useState("home");
  const [selectedCase, setSelectedCase] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const cases = [
    "Missing Hacker",
    "Dark Web Leak",
    "Project Blackout",
    "AI Gone Rogue",
    "Signal Zero",
    "Ghost Protocol",
  ];

  // ================= LOADING =================
  if (loading) {
    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          background: "#000",
          color: "#00ff9d",
          fontFamily: "monospace",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h2 style={{ color: "#00d9ff" }}>INITIALIZING SHADOWTRACE</h2>
        <h1 style={{ textShadow: "0 0 20px #00ff9d" }}>
          LOADING SYSTEM...
        </h1>

        <div
          style={{
            width: "300px",
            height: "6px",
            background: "#111",
            marginTop: "30px",
            overflow: "hidden",
            borderRadius: "10px",
          }}
        >
          <div
            style={{
              height: "100%",
              width: "100%",
              background: "#00ff9d",
              animation: "load 3s linear forwards",
            }}
          />
        </div>

        <style>
          {`
            @keyframes load {
              from { width: 0%; }
              to { width: 100%; }
            }
          `}
        </style>
      </div>
    );
  }

  // ================= INVESTIGATION SCREEN =================
  if (selectedCase) {
    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          background: "#000",
          color: "#00ff9d",
          fontFamily: "monospace",
          padding: "40px",
        }}
      >
        <h1 style={{ textShadow: "0 0 25px #00ff9d" }}>
          🕵️ INVESTIGATION FILE
        </h1>

        <h2 style={{ marginTop: "20px" }}>{selectedCase}</h2>

        <div style={{ marginTop: "30px" }}>
          <h3>📁 Evidence</h3>
          <ul>
            <li>Encrypted system logs recovered</li>
            <li>Suspicious network traces found</li>
            <li>Unknown digital signature detected</li>
          </ul>

          <h3 style={{ marginTop: "20px" }}>🧠 Analyst Notes</h3>
          <p style={{ color: "#aaa", maxWidth: "600px" }}>
            This case shows abnormal behavioral patterns.
            External interference is highly suspected.
          </p>
        </div>

        <button
          onClick={() => setSelectedCase(null)}
          style={{
            marginTop: "40px",
            padding: "12px 25px",
            background: "#00ff9d",
            border: "none",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          BACK TO CASES
        </button>
      </div>
    );
  }

  // ================= CASE SCREEN =================
  if (screen === "cases") {
    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          background:
            "radial-gradient(circle at center, #0a0a0a, #000)",
          color: "#00ff9d",
          fontFamily: "monospace",
          padding: "40px",
        }}
      >
        <h1 style={{ textShadow: "0 0 20px #00ff9d" }}>
          CASE FILES
        </h1>

        <p style={{ color: "#aaa" }}>
          Select an investigation to analyze
        </p>

        <div
          style={{
            marginTop: "40px",
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
          }}
        >
          {cases.map((c, i) => (
            <div
              key={i}
              onClick={() => setSelectedCase(c)}
              style={{
                padding: "20px",
                border: "1px solid #00ff9d33",
                borderRadius: "10px",
                background: "#050505",
                cursor: "pointer",
                transition: "0.3s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.boxShadow =
                  "0 0 25px #00ff9d55")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.boxShadow = "none")
              }
            >
              <h3>{c}</h3>
              <p style={{ color: "#aaa" }}>Open investigation</p>
            </div>
          ))}
        </div>

        <button
          onClick={() => setScreen("home")}
          style={{
            marginTop: "30px",
            padding: "10px 20px",
            background: "#111",
            color: "#00ff9d",
            border: "1px solid #00ff9d33",
            cursor: "pointer",
          }}
        >
          BACK TO ROOM
        </button>
      </div>
    );
  }

  // ================= MYSTERY ROOM HOME =================
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "#020203",
        overflow: "hidden",
        position: "relative",
        fontFamily: "monospace",
        color: "#00ff9d",
      }}
    >
      {/* DEPTH BACKGROUND */}
      <div
        style={{
          position: "absolute",
          width: "120%",
          height: "120%",
          background:
            "radial-gradient(circle at center, #0a0f0c 0%, #000 70%)",
        }}
      />

      {/* SCANNING LIGHT */}
      <div
        style={{
          position: "absolute",
          width: "200%",
          height: "200%",
          background:
            "linear-gradient(115deg, transparent 45%, rgba(0,255,157,0.06), transparent 55%)",
          animation: "scan 6s linear infinite",
        }}
      />

      {/* PARTICLES */}
      {Array.from({ length: 50 }).map((_, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            width: "2px",
            height: "2px",
            background: "#00ff9d",
            opacity: 0.12,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `float ${4 + Math.random() * 6}s infinite alternate`,
          }}
        />
      ))}

      {/* ENERGY CORE */}
      <div
        style={{
          position: "absolute",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0,255,157,0.18), transparent 60%)",
          filter: "blur(40px)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          animation: "pulse 4s ease-in-out infinite",
        }}
      />

      {/* UI */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            padding: "20px 40px",
            borderBottom: "1px solid rgba(0,255,157,0.15)",
          }}
        >
          <h2>SHADOWTRACE</h2>
        </div>

        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <p style={{ color: "#00d9ff", letterSpacing: "4px" }}>
            YOU ARE INSIDE THE INVESTIGATION ROOM
          </p>

          <h1
            style={{
              fontSize: "5rem",
              textShadow: "0 0 40px #00ff9d",
            }}
          >
            SHADOWTRACE
          </h1>

          <p style={{ maxWidth: "650px", color: "#aaa" }}>
            A live investigative environment where cases exist as
            living digital entities.
          </p>

          <button
            onClick={() => setScreen("cases")}
            style={{
              marginTop: "40px",
              padding: "14px 32px",
              background: "#00ff9d",
              border: "none",
              fontWeight: "bold",
              cursor: "pointer",
              boxShadow: "0 0 30px #00ff9d55",
            }}
          >
            ENTER CASE FILES
          </button>
        </div>
      </div>

      {/* ANIMATIONS */}
      <style>
        {`
          @keyframes scan {
            from { transform: translateX(-60%); }
            to { transform: translateX(60%); }
          }

          @keyframes float {
            from { transform: translateY(0px); opacity: 0.1; }
            to { transform: translateY(-20px); opacity: 0.25; }
          }

          @keyframes pulse {
            0% { transform: translate(-50%, -50%) scale(1); }
            50% { transform: translate(-50%, -50%) scale(1.15); }
            100% { transform: translate(-50%, -50%) scale(1); }
          }
        `}
      </style>
    </div>
  );
}

export default App;