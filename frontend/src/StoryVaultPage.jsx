// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function StoryVaultPage() {
//   const [query, setQuery] = useState("");
//   const [answer, setAnswer] = useState("");
//   const [loading, setLoading] = useState(false);

//   const navigate = useNavigate();

//   const maxChars = 500;

//   const handleSearch = async () => {
//     if (!query.trim()) return;

//     try {
//       setLoading(true);
//       setAnswer("");

//       const res = await fetch("http://localhost:5000/api/story", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ query }),
//       });

//       const data = await res.json();

//       if (data.error) {
//         setAnswer(data.error);
//         return;
//       }

//       setAnswer(data.answer);
//     } catch (err) {
//       setAnswer("⚠️ Server error. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div
//       className="w-screen h-screen overflow-hidden bg-cover bg-center bg-no-repeat flex items-center justify-center"
//       style={{
//         backgroundImage:
//           "url('/a_bright_whimsical_fantasy_landscape_illustration.png')",
//       }}
//     >
//       {/* Blue Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-br from-blue-200/70 via-white/50 to-blue-400/60 backdrop-blur-[2px]"></div>

//       {/* TOP LEFT STORIES BUTTON */}
//       <button
//         onClick={() => navigate("/stories")}
//         className="absolute top-6 left-6 z-50 bg-white/90 hover:bg-white text-blue-800 px-6 py-3 rounded-2xl shadow-xl font-semibold transition-all duration-300 hover:scale-105"
//       >
//         📚 Stories
//       </button>

//       {/* Main Container */}
//       <div className="relative z-20 w-[95%] h-[95vh] flex flex-col items-center justify-center -translate-y-10">

//         {/* HEADER */}
//         <div className="text-center mb-8">
//           <h1
//             className="text-[90px] leading-none font-black text-blue-900 drop-shadow-lg"
//             style={{ fontFamily: "Georgia, serif" }}
//           >
//             The Story Vault
//           </h1>
//         </div>

//         {/* MAIN CARD */}
//         <div className="w-full max-w-6xl bg-white/80 backdrop-blur-xl rounded-[40px] border border-white shadow-2xl p-8">

//           {/* FIXED HEIGHT GRID */}
//           <div className="grid grid-cols-2 gap-8 h-[320px] min-h-[320px] max-h-[320px]">

//             {/* LEFT - INPUT */}
//             <div className="flex flex-col h-full min-h-0">
//               <div className="flex items-center gap-3 mb-4">
//                 <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white text-xl shadow-lg">
//                   ✏️
//                 </div>

//                 <h2 className="text-4xl font-bold text-blue-700">
//                   Your Query
//                 </h2>
//               </div>

//               <p className="text-slate-500 text-lg mb-4">
//                 Ask anything you want to know about...
//               </p>

//               {/* TEXTAREA */}
//               <textarea
//                 value={query}
//                 onChange={(e) => setQuery(e.target.value)}
//                 maxLength={500}
//                 placeholder="e.g. Who is Victor Martien?"
//                 className="flex-1 min-h-0 rounded-[28px] border border-blue-100 bg-white/90 p-6 text-xl resize-none outline-none focus:ring-4 focus:ring-blue-300 shadow-inner overflow-y-auto"
//               />

//               {/* CHARACTER COUNT */}
//               <div className="flex justify-end mt-2 text-slate-400">
//                 {query.length} / {maxChars}
//               </div>
//             </div>

//             {/* RIGHT - ANSWER */}
//             <div className="flex flex-col h-full min-h-0">
//               <div className="flex items-center gap-3 mb-4">
//                 <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white text-xl shadow-lg">
//                   ✨
//                 </div>

//                 <h2 className="text-4xl font-bold text-blue-700">
//                   The Answer
//                 </h2>
//               </div>

//               {/* SCROLLABLE ANSWER BOX */}
//               <div className="flex-1 min-h-0 rounded-[28px] border border-blue-100 bg-gradient-to-br from-white to-blue-50 p-8 shadow-inner overflow-y-auto">

//                 <div className="text-slate-700 text-xl leading-10 whitespace-pre-wrap break-words">
//                   {loading
//                     ? "🔍 Searching the Story Vault..."
//                     : answer || "The answer will appear here..."}
//                 </div>

//               </div>
//             </div>
//           </div>

//           {/* SEARCH BUTTON */}
//           <div className="flex justify-center mt-8">
//             <button
//               onClick={handleSearch}
//               disabled={loading || !query.trim()}
//               className={`text-2xl font-semibold px-14 py-4 rounded-3xl shadow-2xl transition-all duration-300 ${
//                 loading || !query.trim()
//                   ? "bg-gray-400 cursor-not-allowed"
//                   : "bg-gradient-to-r from-blue-600 to-cyan-500 hover:scale-105 text-white"
//               }`}
//             >
//               {loading ? "Searching..." : "🔍 Search"}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* FOREGROUND IMAGE */}
//       <div className="absolute bottom-[-250px] left-0 w-full z-30 pointer-events-none flex justify-center">
//         <img
//           src="/a_digital_illustration_showcases_a_writing_and_rea.png"
//           alt="foreground"
//           className="w-full h-auto object-contain"
//         />
//       </div>
//     </div>
//   );
// }












import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function StoryVaultPage() {
  const [query, setQuery] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const maxChars = 500;

  const handleSearch = async () => {
    if (!query.trim()) return;

    try {
      setLoading(true);
      setAnswer("");

      const res = await fetch("http://localhost:5000/api/story", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      });

      const data = await res.json();

      if (data.error) {
        setAnswer(data.error);
        return;
      }

      setAnswer(data.answer);
    } catch (err) {
      setAnswer("⚠️ Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 overflow-hidden bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage:
          "url('/a_bright_whimsical_fantasy_landscape_illustration.png')",
      }}
    >
      {/* Blue Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-200/70 via-white/50 to-blue-400/60 backdrop-blur-[2px]"></div>

      {/* TOP LEFT STORIES BUTTON */}
      <button
        onClick={() => navigate("/stories")}
        className="absolute top-6 left-6 z-50 bg-white/90 hover:bg-white text-blue-800 px-6 py-3 rounded-2xl shadow-xl font-semibold transition-all duration-300 hover:scale-105"
      >
        📚 Stories
      </button>

      {/* Main Container */}
      <div className="relative z-20 w-[95%] h-[95vh] flex flex-col items-center justify-center -translate-y-10 overflow-hidden">

        {/* HEADER */}
        <div className="text-center mb-8">
          <h1
            className="text-[90px] leading-none font-black text-blue-900 drop-shadow-lg"
            style={{ fontFamily: "Georgia, serif" }}
          >
            The Story Vault
          </h1>
        </div>

        {/* MAIN CARD */}
        <div className="w-full max-w-6xl bg-white/80 backdrop-blur-xl rounded-[40px] border border-white shadow-2xl p-8 overflow-hidden">

          {/* FIXED HEIGHT GRID */}
          <div className="grid grid-cols-2 gap-8 h-[320px] min-h-[320px] max-h-[320px] overflow-hidden">

            {/* LEFT - INPUT */}
            <div className="flex flex-col h-full min-h-0 overflow-hidden">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white text-xl shadow-lg">
                  ✏️
                </div>

                <h2 className="text-4xl font-bold text-blue-700">
                  Your Query
                </h2>
              </div>

              <p className="text-slate-500 text-lg mb-4">
                Ask anything you want to know about...
              </p>

              {/* TEXTAREA */}
              <textarea
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                maxLength={500}
                placeholder="e.g. Who is Victor Martien?"
                className="flex-1 min-h-0 rounded-[28px] border border-blue-100 bg-white/90 p-6 text-xl resize-none outline-none focus:ring-4 focus:ring-blue-300 shadow-inner overflow-y-auto"
              />

              {/* CHARACTER COUNT */}
              <div className="flex justify-end mt-2 text-slate-400">
                {query.length} / {maxChars}
              </div>
            </div>

            {/* RIGHT - ANSWER */}
            <div className="flex flex-col h-full min-h-0 overflow-hidden">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white text-xl shadow-lg">
                  ✨
                </div>

                <h2 className="text-4xl font-bold text-blue-700">
                  The Answer
                </h2>
              </div>

              {/* SCROLLABLE ANSWER BOX */}
              <div className="flex-1 min-h-0 rounded-[28px] border border-blue-100 bg-gradient-to-br from-white to-blue-50 p-8 shadow-inner overflow-y-auto overflow-x-hidden">

                <div className="text-slate-700 text-xl leading-10 whitespace-pre-wrap break-words">
                  {loading
                    ? "🔍 Searching the Story Vault..."
                    : answer || "The answer will appear here..."}
                </div>

              </div>
            </div>
          </div>

          {/* SEARCH BUTTON */}
          <div className="flex justify-center mt-8">
            <button
              onClick={handleSearch}
              disabled={loading || !query.trim()}
              className={`text-2xl font-semibold px-14 py-4 rounded-3xl shadow-2xl transition-all duration-300 ${
                loading || !query.trim()
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-blue-600 to-cyan-500 hover:scale-105 text-white"
              }`}
            >
              {loading ? "Searching..." : "🔍 Search"}
            </button>
          </div>
        </div>
      </div>

      {/* FOREGROUND IMAGE */}
      <div className="absolute bottom-[-250px] left-0 w-full z-30 pointer-events-none flex justify-center overflow-hidden">
        <img
          src="/a_digital_illustration_showcases_a_writing_and_rea.png"
          alt="foreground"
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
}