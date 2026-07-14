import { useState } from "react";
import {
  FaSearch,
  FaUserSecret,
  FaFolderOpen,
  FaArrowLeft,
  FaFingerprint,
  FaLaptop,
  FaEnvelope,
  FaCamera,
} from "react-icons/fa";

const cases = [
  {
    id: 1,
    title: "The Missing CEO",
    difficulty: "★★★★☆",
    description:
      "A billionaire vanished moments after receiving an encrypted email.",
  },
  {
    id: 2,
    title: "Gallery Theft",
    difficulty: "★★★☆☆",
    description:
      "A priceless painting disappeared without triggering any alarms.",
  },
  {
    id: 3,
    title: "Flight 308",
    difficulty: "★★★★★",
    description:
      "A passenger vanished during an international flight.",
  },
];

const evidence = [
  {
    name: "Laptop",
    icon: <FaLaptop size={25} />,
    details:
      "Encrypted ZIP file, browser history, deleted emails recovered.",
  },
  {
    name: "Fingerprint",
    icon: <FaFingerprint size={25} />,
    details:
      "Fingerprint found on coffee mug near victim's office.",
  },
  {
    name: "Security Camera",
    icon: <FaCamera size={25} />,
    details:
      "Camera feed stopped exactly 8:41 PM.",
  },
  {
    name: "Encrypted Email",
    icon: <FaEnvelope size={25} />,
    details:
      "Message contains unknown cipher.",
  },
];

const suspects = [
  {
    name: "Emily Carter",
    role: "Business Partner",
    motive: "Company takeover",
  },
  {
    name: "Jacob Ross",
    role: "Security Chief",
    motive: "Hidden financial debts",
  },
  {
    name: "Olivia Stone",
    role: "Assistant",
    motive: "Unknown",
  },
];

function Home({ start }) {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center px-6">
      <h1 className="text-6xl font-extrabold tracking-widest text-cyan-400">
        SHADOWTRACE
      </h1>

      <p className="mt-5 text-gray-400 text-xl">
        Every clue tells a story.
      </p>

      <button
        onClick={start}
        className="mt-10 px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 transition text-black font-bold text-lg"
      >
        Start Investigation
      </button>

      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(circle,cyan_1px,transparent_1px)] bg-[length:40px_40px]" />
      </div>
    </div>
  );
}

function CaseSelection({ openCase }) {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-10">
      <h1 className="text-4xl font-bold text-cyan-400 mb-10">
        Choose a Case
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        {cases.map((item) => (
          <div
            key={item.id}
            className="bg-gray-900 rounded-2xl p-6 border border-cyan-700 hover:scale-105 transition"
          >
            <FaFolderOpen className="text-5xl text-cyan-400 mb-5" />

            <h2 className="text-2xl font-bold">{item.title}</h2>

            <p className="text-yellow-400 mt-2">
              {item.difficulty}
            </p>

            <p className="text-gray-400 mt-4">
              {item.description}
            </p>

            <button
              onClick={() => openCase(item)}
              className="mt-6 w-full bg-cyan-500 text-black py-3 rounded-lg font-bold"
            >
              Investigate
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function Investigation({ current, back }) {
  const [selected, setSelected] = useState(null);

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <button
        onClick={back}
        className="flex items-center gap-2 mb-8 text-cyan-400"
      >
        <FaArrowLeft />
        Back
      </button>

      <h1 className="text-4xl font-bold text-cyan-400">
        {current.title}
      </h1>

      <p className="text-gray-400 mt-3">{current.description}</p>

      <div className="grid lg:grid-cols-3 gap-8 mt-10">
        {/* Evidence */}
        <div className="bg-gray-900 rounded-2xl p-6">
          <h2 className="text-2xl font-bold flex items-center gap-2 mb-6">
            <FaSearch />
            Evidence
          </h2>

          <div className="space-y-4">
            {evidence.map((item) => (
              <button
                key={item.name}
                onClick={() => setSelected(item)}
                className="w-full bg-gray-800 rounded-xl p-4 flex items-center gap-4 hover:bg-cyan-900 transition"
              >
                {item.icon}
                {item.name}
              </button>
            ))}
          </div>

          {selected && (
            <div className="mt-6 bg-black p-4 rounded-xl border border-cyan-500">
              <h3 className="text-xl font-bold text-cyan-400">
                {selected.name}
              </h3>

              <p className="text-gray-300 mt-3">
                {selected.details}
              </p>
            </div>
          )}
        </div>

        {/* Suspects */}
        <div className="bg-gray-900 rounded-2xl p-6">
          <h2 className="text-2xl font-bold flex items-center gap-2 mb-6">
            <FaUserSecret />
            Suspects
          </h2>

          <div className="space-y-5">
            {suspects.map((person) => (
              <div
                key={person.name}
                className="bg-gray-800 rounded-xl p-4"
              >
                <h3 className="text-xl font-bold">
                  {person.name}
                </h3>

                <p className="text-gray-400">
                  {person.role}
                </p>

                <p className="text-cyan-400 mt-2">
                  Motive: {person.motive}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-gray-900 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-6">
            Timeline
          </h2>

          <div className="space-y-5">
            <div>
              <p className="text-cyan-400">8:10 PM</p>
              <p>Victim entered office.</p>
            </div>

            <div>
              <p className="text-cyan-400">8:35 PM</p>
              <p>Power outage reported.</p>
            </div>

            <div>
              <p className="text-cyan-400">8:41 PM</p>
              <p>Security camera disabled.</p>
            </div>

            <div>
              <p className="text-cyan-400">9:00 PM</p>
              <p>Victim disappeared.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [page, setPage] = useState("home");
  const [selectedCase, setSelectedCase] = useState(null);

  return (
    <>
      {page === "home" && (
        <Home start={() => setPage("cases")} />
      )}

      {page === "cases" && (
        <CaseSelection
          openCase={(item) => {
            setSelectedCase(item);
            setPage("investigation");
          }}
        />
      )}

      {page === "investigation" && (
        <Investigation
          current={selectedCase}
          back={() => setPage("cases")}
        />
      )}
    </>
  );
}