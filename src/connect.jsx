import './connect.css';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, X, RotateCcw, MessageCircle, Info, Globe } from "lucide-react";
import SwipeCard from "./SwipeCard";
import { SAMPLE_PROFILES } from "./sampleProfiles";

export default function Connect() {
  const [profiles, setProfiles] = useState(SAMPLE_PROFILES);

  const handleSwipe = (direction) => {
    setProfiles((prev) => prev.slice(1));
  };

  const reset = () => {
    setProfiles(SAMPLE_PROFILES);
  };

  return (
    <div className="flex flex-col h-full w-full max-w-[1024px] mx-auto overflow-hidden">
      {/* Header */}
      <header className="w-full px-16 py-8 flex justify-center items-center bg-transparent">
        <div className="text-[28px] font-serif font-bold italic text-accent-green leading-none">Sisterhood.</div>
      </header>

      <main className="flex-1 w-full flex flex-col items-center justify-center relative px-4 pb-10">
        <div className="relative w-[400px] h-[560px]">
          <AnimatePresence mode="popLayout">
            {profiles.length > 0 ? (
              profiles.map((profile, index) => (
                <SwipeCard
                  key={profile.id}
                  profile={profile}
                  onSwipe={handleSwipe}
                  isTop={index === 0}
                />
              ))
            ) : (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col items-center justify-center h-full text-center px-10 bg-white rounded-[40px] shadow-lg"
                >
                  <div className="w-20 h-20 bg-bg-natural rounded-full flex items-center justify-center mb-6 border border-accent-green/10">
                    <Globe size={40} className="text-accent-green" />
                  </div>
                  <h2 className="text-3xl font-serif text-text-main mb-3">Community Found.</h2>
                  <p className="text-text-muted text-[15px] mb-8 leading-relaxed font-sans">
                    You've seen everyone in your current circle. Expand your horizons or check back tomorrow for new arrivals.
                  </p>
                  <div className="flex gap-4">
                     <button 
                      onClick={reset}
                      className="flex items-center gap-2 px-8 py-3 bg-white text-text-main font-bold rounded-full shadow-sm hover:shadow-md transition-all border border-stone-200 uppercase text-[12px] tracking-widest"
                    >
                      <RotateCcw size={16} />
                      Restart
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
      </main>

      {/* Action Bar */}
      {profiles.length > 0 && (
        <div className="w-full flex justify-center gap-5 py-8 pb-12">
          <button 
            onClick={() => handleSwipe("left")}
            className="w-16 h-16 flex items-center justify-center bg-white rounded-full shadow-[0_8px_20px_rgba(0,0,0,0.04)] text-accent-terra hover:scale-110 active:scale-95 transition-transform"
          >
            <X size={24} strokeWidth={2.5} />
          </button>
          
          <button className="w-16 h-16 flex items-center justify-center bg-white rounded-full shadow-[0_8px_20px_rgba(0,0,0,0.04)] text-accent-sand hover:scale-110 active:scale-95 transition-transform">
            <Info size={24} strokeWidth={2.5} />
          </button>

          <button 
            onClick={() => handleSwipe("right")}
            className="w-16 h-16 flex items-center justify-center bg-accent-green rounded-full shadow-[0_8px_20px_rgba(0,0,0,0.04)] text-white hover:scale-110 active:scale-95 transition-transform"
          >
            <Heart size={24} strokeWidth={2.5} fill="currentColor" />
          </button>
        </div>
      )}

      {profiles.length > 0 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-text-muted text-[13px] uppercase tracking-[1px] font-medium opacity-60">
          Showing sisters in your city
        </div>
      )}
    </div>
  );
}