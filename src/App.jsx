import React, { useState } from 'react';
import AtmosphereCanvas from './components/AtmosphereCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Masters from './components/Masters';
import ClubPerks from './components/ClubPerks';
import BookingModal from './components/BookingModal';
import Footer from './components/Footer';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [selectedMaster, setSelectedMaster] = useState('');

  const handleOpenBooking = (serviceName = '', masterName = '') => {
    setSelectedService(serviceName);
    setSelectedMaster(masterName);
    setIsBookingOpen(true);
  };

  return (
    <div id="top" className="relative min-h-screen bg-[#0a0a0a] text-stone-100 selection:bg-amber-600/30 selection:text-amber-200">
      {/* Subtle floating atmosphere embers canvas */}
      <AtmosphereCanvas />

      {/* Top Navbar */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      <main className="relative z-10">
        <Hero onOpenBooking={handleOpenBooking} />
        <Services onSelectService={(service) => handleOpenBooking(service)} />
        <Masters onSelectMaster={(master) => handleOpenBooking('', master)} />
        <ClubPerks />
      </main>

      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialService={selectedService}
        initialMaster={selectedMaster}
      />
    </div>
  );
}
