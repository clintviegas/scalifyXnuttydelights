"use client";

export function PitchDeck() {
  return (
    <div>
      {/* Force landscape on mobile via CSS */}
      <style>{`
        @media screen and (max-width: 768px) and (orientation: portrait) {
          #rotate-prompt { display: flex !important; }
          #main-content  { display: none  !important; }
        }
      `}</style>

      {/* Rotate prompt — portrait mobile only */}
      <div
        id="rotate-prompt"
        className="fixed inset-0 z-50 bg-[#0a0a0a] flex-col items-center justify-center gap-5 text-center px-8"
        style={{ display: "none" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-14 h-14 text-[#f05223]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 7H9a2 2 0 0 0-2 2v10" />
          <path d="m15 2 5 5-5 5" />
          <path d="M4 17h11a2 2 0 0 0 2-2V5" />
          <path d="m9 22-5-5 5-5" />
        </svg>
        <p className="text-white text-lg font-bold">Rotate your phone</p>
        <p className="text-white/50 text-sm">
          This presentation is best viewed in landscape mode.
        </p>
      </div>

      {/* ── Main content ── */}
      <div
        id="main-content"
        className="bg-[#0a0a0a] flex flex-col"
        style={{ minHeight: "100dvh" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 sm:px-8 pt-5 pb-4 shrink-0">
          <div>
            <span
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-widest uppercase mb-1"
              style={{
                background: "rgba(240,82,35,0.18)",
                color: "#f05223",
                border: "1px solid rgba(240,82,35,0.35)",
              }}
            >
              Scalify <span className="text-sm font-extrabold mx-1">X</span> Nutty Delights
            </span>
          </div>

          {/* PDF Download */}
          <a
            href="/Scalify%20X%20Nutty%20Delights.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold tracking-wide bg-[#f05223] text-white shadow-[0_2px_8px_rgba(240,82,35,0.4)] hover:bg-[#c93e16] transition-all duration-150"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
              <polyline points="14 2 14 8 20 8" />
              <path d="M12 18v-6" />
              <path d="m9 15 3 3 3-3" />
            </svg>
            PDF
          </a>
        </div>

        {/* Canva iframe */}
        <div className="flex-1 px-3 sm:px-8 pb-5 sm:pb-8" style={{ minHeight: 0 }}>
          <div
            className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
            style={{ paddingTop: "56.25%", background: "#111" }}
          >
            <iframe
              loading="lazy"
              src="https://www.canva.com/design/DAHHkFSp3OU/t_pGpwFGJ10mryzSQ3NqQA/view?embed"
              allowFullScreen
              allow="fullscreen; autoplay"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: "none",
              }}
              title="Scalify X Nutty Delights"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
