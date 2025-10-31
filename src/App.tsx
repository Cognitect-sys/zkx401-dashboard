import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BootTerminal } from './components/BootTerminal';
import Navigation from './components/ui/Navigation';
import HeroSection from './components/dashboard/HeroSection';
import SimpleNetworkMonitor from './components/dashboard/SimpleNetworkMonitor';
import FacilitatorComparison from './components/dashboard/FacilitatorComparison';
import CompetitiveAdvantages from './components/dashboard/CompetitiveAdvantages';
import PaymentRouting from './components/dashboard/PaymentRouting';
import UseCasesSection from './components/dashboard/UseCasesSection';
import RoadmapSection from './components/dashboard/RoadmapSection';
import Footer from './components/ui/Footer';

function App() {
  const [showBootScreen, setShowBootScreen] = useState(true);

  const handleBootComplete = () => {
    setShowBootScreen(false);
  };

  return (
    <>
      {showBootScreen ? (
        <BootTerminal onComplete={handleBootComplete} />
      ) : (
        <>
          {/* Animated Ethereal Background */}
          <div className="ethereal-background" />
          <div className="ethereal-overlay" />
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="dashboard-container dashboard-content"
          >
            <Navigation />
            
            <main className="pt-20">
              <HeroSection />
              <SimpleNetworkMonitor />
              <FacilitatorComparison />
              <CompetitiveAdvantages />
              <PaymentRouting />
              <UseCasesSection />
              <RoadmapSection />
            </main>
            
            <Footer />
          </motion.div>
        </>
      )}
    </>
  );
}

export default App;