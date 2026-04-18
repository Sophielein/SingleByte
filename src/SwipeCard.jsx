import { motion, useMotionValue, useTransform } from "framer-motion";
import { Heart, X, MapPin, Globe, Info } from "lucide-react";

export default function SwipeCard({ profile, onSwipe, isTop }) {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-25, 25]);
  const opacity = useTransform(x, [-150, 0, 150], [0, 1, 0]);
  
  const handleDragEnd = (_, info) => {
    if (info.offset.x > 100) {
      onSwipe("right");
    } else if (info.offset.x < -100) {
      onSwipe("left");
    }
  };

  if (!isTop) {
    return (
      <div 
        className="absolute inset-0 w-full h-full bg-[#e8e4dc] rounded-[40px] shadow-lg overflow-hidden border border-stone-100 flex flex-col pointer-events-none transform translate-y-2 translate-x-1"
        style={{ zIndex: -1, transform: 'rotate(-2deg)' }}
      >
      </div>
    );
  }

  return (
    <motion.div
      style={{ x, rotate, opacity }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={handleDragEnd}
      whileDrag={{ scale: 1.02 }}
      className="absolute inset-0 w-full h-full bg-card-natural rounded-[40px] shadow-[0_20px_60px_rgba(0,0,0,0.05)] overflow-hidden p-6 flex flex-col cursor-grab active:cursor-grabbing border border-stone-100"
    >
      <div className="relative h-[380px] w-full rounded-[30px] overflow-hidden bg-[#e0dcd4]">
        <img
          src={profile.imageUrl}
          alt={profile.name}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-5 right-5 bg-white/90 px-3.5 py-1.5 rounded-full text-xs font-semibold text-accent-green flex items-center gap-1.5 shadow-sm">
           <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
           Newly Arrived
        </div>
      </div>

      <div className="pt-6 px-2 flex flex-col flex-1">
        <div className="inline-block bg-[#f0ede6] px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider text-accent-green mb-2 w-fit">
          {profile.origin} → {profile.city}
        </div>
        
        <div className="flex items-baseline gap-2 mb-2">
          <h2 className="text-[32px] font-serif tracking-tight text-text-main leading-none">{profile.name}, {profile.age}</h2>
        </div>

        <p className="text-text-muted text-[15px] leading-relaxed">
          {profile.bio}
        </p>
      </div>
    </motion.div>
  );
}