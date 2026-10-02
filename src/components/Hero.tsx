import React from 'react';
import { Globe2, Server } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-[#7e56c2]/10 via-white to-slate-50/80 py-10 dark:border-slate-800 dark:from-[#7e56c2]/15 dark:via-slate-900 dark:to-slate-950 sm:py-14">
      {/* Background ambient decorative shapes */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-[#7e56c2]/20 blur-3xl dark:bg-[#7e56c2]/15" />
      <div className="pointer-events-none absolute -right-20 top-1/3 -z-10 h-80 w-80 rounded-full bg-amber-200/30 blur-3xl dark:bg-amber-900/10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
            Neurobagel communities explorer
          </h1>

          <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
            Neurobagel links independent neuroscience consortia, clinical registries, and research
            institutes through a zero-custody federated query network. Explore active query portals
            and prospective communities below.
          </p>

          {/* Quick Actions */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={onExploreClick}
              className="inline-flex items-center justify-center space-x-2 rounded-xl bg-[#7e56c2] px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-purple-600/25 transition hover:bg-[#6c45b0] hover:shadow-lg active:scale-95"
            >
              <Globe2 className="h-4 w-4" />
              <span>Explore World Map</span>
            </button>

            <a
              href="https://neurobagel.org/user_guide/getting_started/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 no-underline shadow-sm transition hover:bg-slate-50 hover:text-slate-900 active:scale-95 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
            >
              <Server className="h-4 w-4 text-[#7e56c2] dark:text-[#a387d7]" />
              <span>Connect a Node</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
