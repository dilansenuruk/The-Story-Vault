import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function StoriesPage() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  // Automatically import all PDFs
  const pdfModules = import.meta.glob(
    "/public/Stories/*.pdf",
    {
      eager: true,
      as: "url",
    }
  );

  // Convert to array
  const stories = Object.entries(pdfModules).map(([path, pdf]) => {
    const fileName = path.split("/").pop().replace(".pdf", "");

    return {
      title: fileName,
      pdf: pdf,
    };
  });

  // Filtered stories
  const filteredStories = stories.filter((story) =>
    story.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      className="w-screen h-screen overflow-hidden bg-cover bg-center bg-no-repeat flex items-center justify-center relative"
      style={{
        backgroundImage:
          "url('/a_bright_whimsical_fantasy_landscape_illustration.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-200/70 via-white/40 to-blue-400/60 backdrop-blur-[2px]"></div>

      {/* BACK BUTTON */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-6 left-6 z-50 bg-white/90 hover:bg-white text-blue-800 px-6 py-3 rounded-2xl shadow-xl font-semibold transition-all duration-300 hover:scale-105"
      >
        ← Back
      </button>

      {/* MAIN TRANSPARENT CARD */}
      <div className="relative z-20 w-[90%] h-[85vh] bg-white/25 backdrop-blur-xl border border-white/40 rounded-[40px] shadow-2xl p-8 flex flex-col">

        {/* TOP SECTION */}
        <div className="flex items-center justify-between mb-8">

          <h1 className="text-5xl font-bold text-blue-900">
            Story Library
          </h1>

          {/* SEARCH BAR */}
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Search stories..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-[320px] px-6 py-4 rounded-2xl border border-white/50 bg-white/80 text-lg outline-none focus:ring-4 focus:ring-blue-300 shadow-lg"
            />

            <button
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-2xl shadow-lg transition-all duration-300"
            >
              🔍 Search
            </button>
          </div>
        </div>

        {/* SCROLLABLE STORIES AREA */}
        <div className="flex-1 overflow-y-auto pr-2">

          <div className="grid gap-6">
            {filteredStories.map((story, index) => (
              <div
                key={index}
                className="bg-white/85 backdrop-blur-lg p-6 rounded-3xl shadow-xl flex items-center justify-between"
              >
                <h2 className="text-2xl font-semibold text-slate-700">
                  {story.title}
                </h2>

                <a
                  href={story.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-2xl hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  Open PDF
                </a>
              </div>
            ))}

            {/* NO RESULTS */}
            {filteredStories.length === 0 && (
              <div className="text-center text-2xl text-blue-900 mt-20">
                No matching stories found.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}