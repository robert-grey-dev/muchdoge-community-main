import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import TokenomicsSection from '@/components/sections/TokenomicsSection';
import RoadmapSection from '@/components/sections/RoadmapSection';
import CommunitySection from '@/components/sections/CommunitySection';
import Footer from '@/components/sections/Footer';

const Index = () => {
  return (
    <Layout>
      <main>
        <HeroSection />
        <AboutSection />
        <TokenomicsSection />
        <RoadmapSection />
        <CommunitySection />
        <Footer />
      </main>
    </Layout>
  );
};

export default Index;