import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CommunityGrid } from './components/CommunityGrid';
import { NetworkMap } from './components/NetworkMap';
import { CommunityModal } from './components/CommunityModal';
import { COMMUNITIES, Community } from './data/communities';

function App() {
  const [selectedCommunity, setSelectedCommunity] = useState<Community | null>(null);
  const [hoveredCommunity, setHoveredCommunity] = useState<Community | null>(null);

  const scrollToMap = () => {
    const el = document.getElementById('map-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 font-sans text-slate-900 selection:bg-[#7e56c2]/20 selection:text-[#7e56c2]">
      {/* Global Header */}
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero onExploreClick={scrollToMap} />

        {/* Global Network Map Section */}
        <div className="relative mx-auto w-full max-w-[1536px] px-3 pb-16 pt-6 sm:px-6 lg:px-8">
          {/* Partner & Prospective Community Cells (GAAIN style) */}
          <section id="communities-section">
            <CommunityGrid
              communities={COMMUNITIES}
              hoveredCommunityId={hoveredCommunity?.id}
              onHoverCommunity={(community) => setHoveredCommunity(community)}
              onSelectCommunity={(community) => setSelectedCommunity(community)}
            />
          </section>

          {/* Global Network Map Section */}
          <section id="map-section" className="scroll-mt-6 pt-2">
            <NetworkMap
              communities={COMMUNITIES}
              selectedCommunityId={selectedCommunity?.id}
              hoveredCommunityId={hoveredCommunity?.id}
              onSelectCommunity={(community) => setSelectedCommunity(community)}
            />
          </section>
        </div>
      </main>

      {/* Detail Modal */}
      <CommunityModal community={selectedCommunity} onClose={() => setSelectedCommunity(null)} />
    </div>
  );
}

export default App;
