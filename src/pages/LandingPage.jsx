import React from 'react';
import LandingNavbar from '../components/LandingNavbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Programs from '../components/Programs';
import Pricing from '../components/Pricing';
import WorkoutCTA from '../components/WorkoutCTA';
import Stats from '../components/Stats';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

export default function LandingPage({ onOpenPlanner }) {
  const handleJoinClick = () => {
    const elem = document.getElementById('pricing');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="landing-page-shell">
      <LandingNavbar onOpenPlanner={onOpenPlanner} />
      <main>
        <Hero onOpenPlanner={onOpenPlanner} onJoinClick={handleJoinClick} />
        <About />
        <Programs onOpenPlanner={onOpenPlanner} />
        <Pricing onJoinNow={handleJoinClick} />
        <WorkoutCTA onOpenPlanner={onOpenPlanner} />
        <Stats />
        <CTASection onOpenPlanner={onOpenPlanner} onJoinClick={handleJoinClick} />
      </main>
      <Footer onOpenPlanner={onOpenPlanner} />
    </div>
  );
}
