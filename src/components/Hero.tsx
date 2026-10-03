import React from 'react';
import { Globe2, Server, Users, Layers, Building2 } from 'lucide-react';
import { getNetworkAggregateStats } from '../data/communities';

interface HeroProps {
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  const stats = getNetworkAggregateStats();

  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-[#7e56c2]/10 via-white to-slate-50/80 py-10 dark:border-slate-800 dark:from-[#7e56c2]/15 dark:via-slate-900 dark:to-slate-950 sm:py-12">
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
              href="https://neurobagel.org/user_guide/production_deployment/#making-your-node-publicly-discoverable"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 no-underline shadow-sm transition hover:bg-slate-50 hover:text-slate-900 active:scale-95 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
            >
              <Server className="h-4 w-4 text-[#7e56c2] dark:text-[#a387d7]" />
              <span>Connect a Node</span>
            </a>
          </div>
        </div>

        {/* Prominent High-Impact Network Size Summary (PowerPoint / Slide Grade) */}
        <div className="shadow-xs mt-10 rounded-2xl border border-purple-200/90 bg-white/95 p-4 backdrop-blur-md dark:border-purple-900/50 dark:bg-slate-900/90 sm:p-5">
          <div className="mb-3 flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
            <div className="flex items-center space-x-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Federated Network Scale & Coverage
              </span>
            </div>
            <span className="hidden text-xs font-medium text-[#7e56c2] dark:text-[#a387d7] sm:inline">
              Zero-Custody • On-Premise Data Governance
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {/* Metric 1: Total Subjects */}
            <div className="rounded-xl border border-purple-100/80 bg-purple-50/70 p-3.5 dark:border-purple-900/40 dark:bg-purple-950/30">
              <div className="flex items-center justify-between text-slate-500 dark:text-slate-400">
                <span className="text-xs font-semibold uppercase tracking-wider">
                  Total Subjects
                </span>
                <Users className="h-4 w-4 text-[#7e56c2]" />
              </div>
              <div className="mt-1.5 text-2xl font-black tracking-tight text-[#7e56c2] sm:text-3xl">
                {stats.totalSubjects.toLocaleString()}
              </div>
              <div className="mt-0.5 text-[11px] font-medium text-slate-500">
                Cross-cohort discoverable
              </div>
            </div>

            {/* Metric 2: Autonomous Nodes */}
            <div className="rounded-xl border border-emerald-100/80 bg-emerald-50/70 p-3.5 dark:border-emerald-900/40 dark:bg-emerald-950/30">
              <div className="flex items-center justify-between text-slate-500 dark:text-slate-400">
                <span className="text-xs font-semibold uppercase tracking-wider">
                  Federated Nodes
                </span>
                <Server className="h-4 w-4 text-emerald-600" />
              </div>
              <div className="mt-1.5 text-2xl font-black tracking-tight text-emerald-700 dark:text-emerald-400 sm:text-3xl">
                {stats.totalNodes}+
              </div>
              <div className="mt-0.5 text-[11px] font-medium text-slate-500">
                Autonomous API endpoints
              </div>
            </div>

            {/* Metric 3: Communities & Consortia */}
            <div className="rounded-xl border border-slate-200/80 bg-slate-50 p-3.5 dark:border-slate-700 dark:bg-slate-800/60">
              <div className="flex items-center justify-between text-slate-500 dark:text-slate-400">
                <span className="text-xs font-semibold uppercase tracking-wider">Communities</span>
                <Layers className="h-4 w-4 text-indigo-600" />
              </div>
              <div className="mt-1.5 text-2xl font-black tracking-tight text-slate-900 dark:text-white sm:text-3xl">
                {stats.totalCommunities}
              </div>
              <div className="mt-0.5 text-[11px] font-medium text-slate-500">
                {stats.activePortalsCount} live • {stats.prospectiveCommunitiesCount} prospective
              </div>
            </div>

            {/* Metric 4: Participating Institutes */}
            <div className="rounded-xl border border-slate-200/80 bg-slate-50 p-3.5 dark:border-slate-700 dark:bg-slate-800/60">
              <div className="flex items-center justify-between text-slate-500 dark:text-slate-400">
                <span className="text-xs font-semibold uppercase tracking-wider">
                  Global Institutes
                </span>
                <Building2 className="h-4 w-4 text-purple-600" />
              </div>
              <div className="mt-1.5 text-2xl font-black tracking-tight text-slate-900 dark:text-white sm:text-3xl">
                {stats.institutesCount}+
              </div>
              <div className="mt-0.5 text-[11px] font-medium text-slate-500">
                Research clinics & hospitals
              </div>
            </div>

            {/* Metric 5: Countries */}
            <div className="col-span-2 rounded-xl border border-amber-100/80 bg-amber-50/70 p-3.5 dark:border-amber-900/40 dark:bg-amber-950/30 sm:col-span-1">
              <div className="flex items-center justify-between text-slate-500 dark:text-slate-400">
                <span className="text-xs font-semibold uppercase tracking-wider">
                  Jurisdictions
                </span>
                <Globe2 className="h-4 w-4 text-amber-600" />
              </div>
              <div className="mt-1.5 text-2xl font-black tracking-tight text-amber-700 dark:text-amber-400 sm:text-3xl">
                {stats.countriesCount} Countries
              </div>
              <div className="mt-0.5 text-[11px] font-medium text-slate-500">
                Multi-national federation
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
