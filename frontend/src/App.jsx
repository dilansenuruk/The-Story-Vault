export default function StoryVaultPage() {
  return (
    <div
      className="w-screen h-screen overflow-hidden bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage:
          "url('/a_bright_whimsical_fantasy_landscape_illustration.png')",
      }}
    >
      {/* Blue Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-200/70 via-white/50 to-blue-400/60 backdrop-blur-[2px]"></div>

      {/* Foreground Image */}
      {/* <div className="absolute bottom-0 left-0 w-full z-30 pointer-events-none flex justify-center">
        <img
          src="/foreground.png"
          alt="foreground"
          className="w-full h-auto object-contain"
        />
      </div> */}

      {/* Main Hero Container */}
      <div className="relative z-20 w-[95%] h-[95vh] flex flex-col items-center justify-center -translate-y-10">
        {/* Header */}
        <div className="text-center mb-8">
          {/* <div className="text-6xl mb-2">📖</div> */}

          <h1
            className="text-[90px] leading-none font-black text-blue-900 drop-shadow-lg"
            style={{
              fontFamily: "Georgia, serif",
            }}
          >
            The Story Vault
          </h1>

          {/* <p className="mt-4 text-2xl text-slate-700 font-medium tracking-wide">
            Unlock imagination. Discover endless stories.
          </p> */}
        </div>

        {/* Main Card */}
        <div className="w-full max-w-6xl bg-white/80 backdrop-blur-xl rounded-[40px] border border-white shadow-2xl p-8">
          <div className="grid grid-cols-2 gap-8 h-[290px]">
            {/* Left Prompt */}
            <div className="flex flex-col h-full">
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

              <textarea
                placeholder="e.g. Who is Victor Martien?"
                className="flex-1 rounded-[28px] border border-blue-100 bg-white/90 p-6 text-xl resize-none outline-none focus:ring-4 focus:ring-blue-300 shadow-inner"
              />

              <div className="flex justify-end mt-2 text-slate-400">
                0 / 500
              </div>
            </div>

            {/* Right Story */}
            <div className="flex flex-col h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white text-xl shadow-lg">
                  ✨
                </div>

                <h2 className="text-4xl font-bold text-blue-700">
                  The Answer
                </h2>
              </div>

              <div className="flex-1 rounded-[28px] border border-blue-100 bg-gradient-to-br from-white to-blue-50 p-8 relative overflow-hidden shadow-inner">
                {/* <div className="absolute bottom-0 right-0 text-[220px] opacity-10 select-none">
                  📚
                </div> */}

                <div className="relative z-10 text-slate-600 text-xl leading-10">
                  <p>The answer will appear here...</p>

                  {/* <p className="mt-4">
                    Once generated, a world of words and wonder will unfold.
                  </p>

                  <p className="mt-4">
                    Every search opens a new chapter of imagination.
                  </p> */}
                </div>
              </div>
            </div>
          </div>

          {/* Search Button */}
          <div className="flex justify-center mt-8">
            <button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:scale-105 transition-all duration-300 text-white text-2xl font-semibold px-14 py-4 rounded-3xl shadow-2xl">
              🔍 Search
            </button>
          </div>
        </div>
      </div>

      {/* Foreground Image */}
      <div className="absolute bottom-[-250px] left-0 w-full z-30 pointer-events-none flex justify-center">
        <img
          src="/a_digital_illustration_showcases_a_writing_and_rea.png"
          alt="foreground"
          className="w-full h-auto object-contain"
        />
      </div>

    </div>
  );
}
