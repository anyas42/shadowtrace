import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [screen, setScreen] = useState("home");

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
          overflow: "hidden",
        }}
      >
        <h2 style={{ color: "#00d9ff" }}>
          INITIALIZING SHADOWTRACE
        </h2>

        <h1 style={{ textShadow: "0 0 20px #00ff9d" }}>
          LOADING SYSTEM...
        </h1>

        <div
          style={{
            width: "300px",
            height: "6px",
            background: "#111",
            marginTop: "30px",
            borderRadius: "10px",
            overflow: "hidden",
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
        <h1 style={{ textShadow: "0 0 25px #00ff9d" }}>
          🔎 CASE FILE ROOM
        </h1>

        <p style={{ color: "#aaa" }}>
          Active investigations loaded from system memory.
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
      {/* ROOM DEPTH BACKGROUND */}
      <div
        style={{
          position: "absolute",
          width: "120%",
          height: "120%",
          top: "-10%",
          left: "-10%",
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
          transform: "rotate(8deg)",
        }}
      />

      {/* PARTICLES (DUST EFFECT) */}
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

      {/* CENTRAL ENERGY CORE */}
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

      {/* BACKGROUND CASE FILES (MOVING SHADOW LAYER) */}
      <div style={{ position: "absolute", width: "100%", height: "100%" }}>
        {cases.map((t, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              top: `${10 + i * 15}%`,
              left: "-30%",
              fontSize: "2rem",
              color: "#00ff9d10",
              whiteSpace: "nowrap",
              animation: `drift ${18 + i * 4}s linear infinite`,
            }}
          >
            {t}
          </div>
        ))}
      </div>

      {/* UI LAYER */}
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
            A live investigative environment where cases breathe,
            move, and evolve inside a digital mystery room.
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
            from { transform: translateX(-60%) rotate(8deg); }
            to { transform: translateX(60%) rotate(8deg); }
          }

          @keyframes float {
            from { transform: translateY(0px); opacity: 0.1; }
            to { transform: translateY(-20px); opacity: 0.25; }
          }

          @keyframes drift {
            from { transform: translateX(0); }
            to { transform: translateX(200vw); }
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