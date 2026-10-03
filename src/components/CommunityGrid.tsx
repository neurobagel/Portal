import React, { useState } from 'react';
import { ExternalLink, Layers } from 'lucide-react';
import { Community, COUNTRY_NAMES } from '../data/communities';

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

      {/* Grid of Partner Cells (GAAIN style - tight, data-rich) */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        {filteredCommunities.map((community) => {
          const isActive = community.status === 'active';
          const isHovered = hoveredCommunityId === community.id;
          const logoSrc = community.logo;
          const piName = community.piName;
          const displayName = community.shortName;
          const primaryFlag = COUNTRY_NAMES[community.countryCodes[0]]?.flag || '🌐';
          const locationLabel = `${community.coordinates.city}, ${community.coordinates.country}`;

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
              className={`shadow-xs group relative flex cursor-pointer flex-col justify-between overflow-hidden rounded-xl bg-white transition-all duration-200 hover:-translate-y-0.5 hover:border-[#7e56c2] hover:shadow-md ${
                isHovered
                  ? '-translate-y-0.5 border-2 border-[#7e56c2] shadow-md ring-2 ring-[#7e56c2]/20'
                  : 'border border-slate-200'
              }`}
              data-cy={`community-cell-${community.id}`}
            >
              {/* Header Bar: Public Community vs Consortium */}
              <div className="flex items-center justify-between border-b border-slate-200 bg-slate-100 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-slate-700">
                <div className="flex items-center gap-1.5">
                  <span className="font-bold tracking-wider text-slate-700">
                    {community.communityType === 'public' ? 'Public' : 'Consortium'}
                  </span>
                </div>

                {/* Status Pill in header */}
                <span
                  className={`inline-flex items-center gap-1 rounded-full px-1.5 py-0.5 text-[9px] font-semibold normal-case tracking-normal ${
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
              </div>

              {/* Card Body Container */}
              <div className="flex flex-1 flex-col justify-between p-3">
                {/* Location & Category Sub-Row */}
                <div className="mb-2 flex items-center justify-between text-[11px] text-slate-500">
                  <div className="flex min-w-0 items-center gap-1.5" title={locationLabel}>
                    <span className="flex-shrink-0 text-sm leading-none">{primaryFlag}</span>
                    <span className="truncate text-[10px] font-medium text-slate-500">
                      {community.coordinates.city}
                    </span>
                  </div>
                  <span className="truncate text-[9px] font-medium text-slate-400">
                    {community.category}
                  </span>
                </div>

                {/* Middle Row: Snug Logo + Community Name & PI */}
                <div className="mb-2.5 flex min-w-0 items-center gap-2.5">
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-slate-100 bg-slate-50 p-1 transition group-hover:bg-purple-50/50">
                    <img
                      src={logoSrc}
                      alt={`${displayName} logo`}
                      className="max-h-full max-w-full object-contain filter transition-transform duration-200 group-hover:scale-105"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3
                      className="line-clamp-1 text-xs font-bold tracking-tight text-slate-800 transition-colors group-hover:text-[#7e56c2]"
                      title={displayName}
                    >
                      {displayName}
                    </h3>
                    {piName ? (
                      <p
                        className="mt-0.5 line-clamp-1 text-[11px] font-medium text-slate-500"
                        title={`PI: ${piName}`}
                      >
                        PI: {piName}
                      </p>
                    ) : (
                      <p className="mt-0.5 line-clamp-1 text-[11px] font-medium text-slate-400">
                        Public Federation
                      </p>
                    )}
                  </div>
                </div>

                {/* Prominent Subjects Banner (GAAIN style) */}
                <div className="mb-2.5 flex items-baseline justify-between rounded-lg border border-purple-100/70 bg-purple-50/60 px-2.5 py-1.5">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                    {isActive ? 'Subjects' : 'Target'}
                  </span>
                  <span className="text-sm font-extrabold tracking-tight text-[#7e56c2]">
                    {community.stats.subjectsCount.toLocaleString()}
                  </span>
                </div>

                {/* Participating Institutes Mini-Strip (up to 3 logos) */}
                <div className="mb-2.5 flex min-h-[22px] items-center justify-between text-[10px] text-slate-400">
                  <span className="text-[9px] font-semibold uppercase tracking-wider">
                    Institutes:
                  </span>
                  {community.partnerOrgs && community.partnerOrgs.length > 0 ? (
                    <div className="flex flex-wrap items-center gap-1.5">
                      {community.partnerOrgs.slice(0, 3).map((org) => (
                        <div
                          key={org.name}
                          title={org.name}
                          className="shadow-2xs flex h-5 items-center justify-center rounded border border-slate-200 bg-white px-1.5"
                        >
                          <img
                            src={org.logo}
                            alt={org.name}
                            className="h-3 max-w-[42px] object-contain"
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <span className="text-[10px] italic text-slate-400">
                      {community.institutes.length} sites
                    </span>
                  )}
                </div>

                {/* Highlighted Action Button */}
                {isActive && community.portalUrl ? (
                  <a
                    href={community.portalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="shadow-xs mt-auto flex w-full items-center justify-center gap-1.5 rounded-lg bg-[#7e56c2] px-2.5 py-1.5 text-xs font-semibold text-white transition hover:bg-[#6c45b0] hover:shadow-sm"
                    title={`Query ${displayName} federated portal`}
                  >
                    <span>Query {displayName}</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectCommunity(community);
                    }}
                    className="shadow-2xs mt-auto flex w-full items-center justify-center gap-1 rounded-lg border border-slate-200 bg-slate-50/80 px-2.5 py-1.5 text-xs font-semibold text-slate-600 transition hover:border-[#7e56c2]/40 hover:bg-white hover:text-[#7e56c2]"
                  >
                    <span>Explore Cohort</span>
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
