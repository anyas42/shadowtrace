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
    {Array.from({ length: 80 }).map((_, i) => (
      <div
        key={i}
        style={{
          position: "absolute",
          width: "2px",
          height: "2px",
          background: "#00ff9d",
          opacity: 0.15,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animation: `float ${4 + Math.random() * 6}s infinite alternate`,
        }}
      />
    ))}

    {/* FLOATING SYMBOLS */}
    {["👁️", "🔍", "🗝️", "⚠️", "❓", "📁", "💀"].map((icon, i) => (
      <div
        key={`icon-${i}`}
        style={{
          position: "absolute",
          left: `${10 + i * 12}%`,
          top: `${15 + (i % 3) * 25}%`,
          fontSize: "2.2rem",
          opacity: 0.15,
          animation: `mysteryFloat ${8 + i}s ease-in-out infinite`,
          filter: "drop-shadow(0 0 12px #00ff9d)",
          zIndex: 1,
        }}
      >
        {icon}
      </div>
    ))}

    {/* ENERGY CORE */}
    <div
      style={{
        position: "absolute",
        width: "600px",
        height: "600px",
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(0,255,157,0.18), transparent 60%)",
        filter: "blur(60px)",
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
        <p
          style={{
            color: "#00d9ff",
            letterSpacing: "4px",
          }}
        >
          YOU ARE INSIDE THE INVESTIGATION ROOM
        </p>

        <h1
          style={{
            fontSize: "5rem",
            letterSpacing: "8px",
            animation: "glowText 3s infinite",
          }}
        >
          SHADOWTRACE
        </h1>

        <p
          style={{
            maxWidth: "650px",
            color: "#aaa",
            marginTop: "15px",
            lineHeight: "1.8",
          }}
        >
          Every file hides a secret.
          <br />
          Every clue tells a lie.
          <br />
          Somewhere inside the network, the truth is waiting.
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

    <style>
      {`
        @keyframes scan {
          from { transform: translateX(-60%); }
          to { transform: translateX(60%); }
        }

        @keyframes float {
          from {
            transform: translateY(0px);
            opacity: 0.1;
          }
          to {
            transform: translateY(-20px);
            opacity: 0.25;
          }
        }

        @keyframes pulse {
          0% {
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            transform: translate(-50%, -50%) scale(1.15);
          }
          100% {
            transform: translate(-50%, -50%) scale(1);
          }
        }

        @keyframes mysteryFloat {
          0% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.1;
          }
          50% {
            transform: translateY(-40px) rotate(10deg);
            opacity: 0.35;
          }
          100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.1;
          }
        }

        @keyframes glowText {
          0% {
            text-shadow: 0 0 15px #00ff9d;
          }
          50% {
            text-shadow:
              0 0 40px #00ff9d,
              0 0 80px #00d9ff;
          }
          100% {
            text-shadow: 0 0 15px #00ff9d;
          }
        }
      `}
    </style>
  </div>
);