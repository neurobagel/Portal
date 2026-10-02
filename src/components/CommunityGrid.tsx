import React, { useState } from 'react';
import { ExternalLink, Layers } from 'lucide-react';
import { Community } from '../data/communities';

interface CommunityGridProps {
  communities: Community[];
  onSelectCommunity: (community: Community) => void;
  onHoverCommunity?: (community: Community | null) => void;
  hoveredCommunityId?: string | null;
}

export const CommunityGrid: React.FC<CommunityGridProps> = ({
  communities,
  onSelectCommunity,
  onHoverCommunity,
  hoveredCommunityId,
}) => {
  const [filter, setFilter] = useState<'all' | 'active' | 'prospective'>('all');

  const filteredCommunities = communities.filter((c) => {
    if (filter === 'active') return c.status === 'active';
    if (filter === 'prospective') return c.status !== 'active';
    return true;
  });

  const activeCount = communities.filter((c) => c.status === 'active').length;
  const prospectiveCount = communities.filter((c) => c.status !== 'active').length;

  return (
    <div className="mb-8" data-cy="community-grid">
      {/* Section Header & Tabs */}
      <div className="mb-4 flex flex-col gap-3 px-1 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center space-x-2">
            <Layers className="h-5 w-5 text-[#7e56c2]" />
            <h2 className="text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
              Federated Communities & Working Groups
            </h2>
          </div>
          <p className="text-xs text-slate-600">
            Partner consortia, sovereign provincial platforms, and prospective international working
            groups
          </p>
        </div>

        {/* Filter Pills */}
        <div className="shadow-xs flex self-start rounded-lg border border-slate-200 bg-white p-0.5 text-xs sm:self-auto">
          <button
            type="button"
            onClick={() => setFilter('all')}
            className={`rounded-md px-3 py-1 font-medium transition ${
              filter === 'all'
                ? 'shadow-xs bg-[#7e56c2] text-white'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            All ({communities.length})
          </button>
          <button
            type="button"
            onClick={() => setFilter('active')}
            className={`rounded-md px-3 py-1 font-medium transition ${
              filter === 'active'
                ? 'shadow-xs bg-emerald-600 text-white'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Active Communities ({activeCount})
          </button>
          <button
            type="button"
            onClick={() => setFilter('prospective')}
            className={`rounded-md px-3 py-1 font-medium transition ${
              filter === 'prospective'
                ? 'shadow-xs bg-amber-600 text-white'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Prospects ({prospectiveCount})
          </button>
        </div>
      </div>

      {/* Grid of Partner Cells (GAAIN style) */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6">
        {filteredCommunities.map((community) => {
          const isActive = community.status === 'active';
          const isHovered = hoveredCommunityId === community.id;
          const logoSrc = community.logo;
          const piName = community.piName;
          const displayName = community.shortName;

          return (
            <div
              key={community.id}
              role="button"
              tabIndex={0}
              onClick={() => onSelectCommunity(community)}
              onMouseEnter={() => onHoverCommunity?.(community)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectCommunity(community);
                }
              }}
              className={`shadow-xs group relative flex cursor-pointer flex-col justify-between rounded-xl bg-white p-3.5 transition-all duration-200 hover:-translate-y-1 hover:border-[#7e56c2] hover:shadow-md ${
                isHovered
                  ? '-translate-y-1 border-2 border-[#7e56c2] shadow-md ring-2 ring-[#7e56c2]/20'
                  : 'border border-slate-200'
              }`}
              data-cy={`community-cell-${community.id}`}
            >
              {/* Top Row: Status badge & launch link */}
              <div className="mb-2 flex items-center justify-between">
                <span
                  className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                    isActive
                      ? 'border border-emerald-200 bg-emerald-50 text-emerald-700'
                      : 'border border-amber-200 bg-amber-50 text-amber-700'
                  }`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      isActive ? 'animate-pulse bg-emerald-500' : 'bg-amber-500'
                    }`}
                  />
                  {isActive ? 'Active' : 'Prospect'}
                </span>

                {community.portalUrl ? (
                  <a
                    href={community.portalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="rounded p-0.5 text-slate-400 transition hover:text-[#7e56c2]"
                    title={`Open ${displayName} Query Portal`}
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                ) : (
                  <span className="text-[10px] font-medium text-slate-400">Onboarding</span>
                )}
              </div>

              {/* Center: Community Logo */}
              <div className="my-1.5 flex flex-1 items-center justify-center">
                <div className="flex h-14 w-full items-center justify-center rounded-lg bg-slate-50/70 p-2 transition group-hover:bg-purple-50/30">
                  <img
                    src={logoSrc}
                    alt={`${displayName} logo`}
                    className="max-h-full max-w-full object-contain filter transition-transform duration-200 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Bottom: Name, PI & Partner Orgs */}
              <div className="mt-1 border-t border-slate-100 pt-1.5">
                <h3
                  className="line-clamp-1 text-xs font-bold tracking-tight text-slate-800 transition-colors group-hover:text-[#7e56c2]"
                  title={displayName}
                >
                  {displayName}
                </h3>
                <p
                  className="mt-0.5 line-clamp-1 text-[11px] font-medium text-slate-500"
                  title={`PI: ${piName}`}
                >
                  PI: {piName}
                </p>

                {/* Partner / Member Organizations Mini-Strip (Option 2) */}
                {community.partnerOrgs && community.partnerOrgs.length > 0 && (
                  <div className="mt-2.5 border-t border-slate-100 pt-2">
                    <span className="mb-1.5 block text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                      Member Nodes
                    </span>
                    <div className="flex flex-wrap items-center gap-2">
                      {community.partnerOrgs.map((org) =>
                        org.url ? (
                          <a
                            key={org.name}
                            href={org.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            title={`${org.name} (Opens in new tab)`}
                            className="shadow-2xs hover:shadow-xs group/node flex h-9 items-center justify-center rounded-lg border border-slate-200 bg-white px-2.5 py-1 transition hover:border-[#7e56c2]"
                          >
                            <img
                              src={org.logo}
                              alt={org.name}
                              className="h-6 max-w-[84px] object-contain transition-transform group-hover/node:scale-105"
                            />
                          </a>
                        ) : (
                          <div
                            key={org.name}
                            title={org.name}
                            className="shadow-2xs flex h-9 items-center justify-center rounded-lg border border-slate-200 bg-white px-2.5 py-1"
                          >
                            <img
                              src={org.logo}
                              alt={org.name}
                              className="h-6 max-w-[84px] object-contain"
                            />
                          </div>
                        )
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
