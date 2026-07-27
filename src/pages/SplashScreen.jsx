import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLang } from "../context/LanguageContext";

export default function SplashScreen() {
  const { t, toggleLang, lang } = useLang();
  const navigate = useNavigate();
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 300),
      setTimeout(() => setPhase(2), 900),
      setTimeout(() => setPhase(3), 1600),
      setTimeout(() => setPhase(4), 2400),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className='relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-brand-black'>
      {/* Animated background */}
      <div className='absolute inset-0 overflow-hidden'>
        <div
          className='absolute inset-0 opacity-20'
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 40%, #CC0000 0%, transparent 70%)",
            animation: "pulse 4s ease-in-out infinite",
          }}
        />
        <div
          className='absolute -top-20 -left-20 w-96 h-96 rounded-full opacity-10'
          style={{
            background: "#CC0000",
            filter: "blur(80px)",
            animation: "float 6s ease-in-out infinite",
          }}
        />
        <div
          className='absolute -bottom-20 -right-20 w-80 h-80 rounded-full opacity-10'
          style={{
            background: "#CC0000",
            filter: "blur(80px)",
            animation: "float 8s ease-in-out infinite reverse",
          }}
        />

        {/* Meat texture lines */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className='absolute opacity-5'
            style={{
              width: "100%",
              height: "1px",
              background:
                "linear-gradient(90deg, transparent, #CC0000, transparent)",
              top: `${12 + i * 12}%`,
              animation: `shimmer ${2 + i * 0.3}s linear infinite`,
            }}
          />
        ))}
      </div>

      {/* Lang toggle */}
      <button
        onClick={toggleLang}
        className='absolute top-6 left-6 z-20 glass rounded-full px-4 py-2 text-sm font-bold text-white border border-white/20 hover:border-brand-red transition-colors'
      >
        {lang === "ar" ? "עברית" : "العربية"}
      </button>

      {/* Top-right links */}
      <div className='absolute top-6 right-6 z-20 flex gap-2'>
        <button
          onClick={() => navigate("/about")}
          className='glass rounded-full px-3 py-2 text-xs text-brand-gray-light border border-white/10 hover:border-brand-red hover:text-white transition-colors'
        >
          {lang === "ar" ? "من نحن" : "אודות"}
        </button>
        <button
          onClick={() => navigate("/delivery")}
          className='glass rounded-full px-3 py-2 text-xs text-orange-400 border border-orange-400/20 hover:border-orange-400 transition-colors'
        >
          {lang === "ar" ? "المندوب" : "שליח"}
        </button>
        <button
          onClick={() => navigate("/admin")}
          className='glass rounded-full px-3 py-2 text-xs text-brand-gray-light border border-white/10 hover:border-brand-red hover:text-white transition-colors'
        >
          {lang === "ar" ? "الإدارة" : "ניהול"}
        </button>
      </div>

      {/* Video-like cinematic overlay */}
      <div className='absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black/60 to-transparent z-10 pointer-events-none' />
      <div className='absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/60 to-transparent z-10 pointer-events-none' />

      {/* Main content */}
      <div className='relative z-20 flex flex-col items-center text-center px-8 max-w-md'>
        {/* Logo flame icon */}
        <div
          className='mb-6 transition-all duration-700'
          style={{
            opacity: phase >= 1 ? 1 : 0,
            transform:
              phase >= 1
                ? "scale(1) translateY(0)"
                : "scale(0.5) translateY(20px)",
          }}
        >
          <div
            className='w-32 h-32 rounded-3xl mx-auto mb-4 overflow-hidden'
            style={{
              boxShadow:
                "0 0 40px rgba(204,0,0,0.6), 0 0 80px rgba(204,0,0,0.2)",
              border: "2px solid rgba(204,0,0,0.5)",
            }}
          >
            <img
              src='/logo.jpeg'
              alt='أبو دغش'
              className='w-full h-full object-cover'
            />
          </div>
        </div>

        {/* Store name */}
        <div
          className='transition-all duration-700'
          style={{
            opacity: phase >= 2 ? 1 : 0,
            transform: phase >= 2 ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <h1
            className='text-6xl font-black mb-2'
            style={{
              background: "linear-gradient(135deg, #FFFFFF 30%, #CC0000 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textShadow: "none",
            }}
          >
            {t.storeName}
          </h1>
          <p className='text-brand-gray-light text-lg tracking-widest uppercase font-light'>
            {t.storeTagline}
          </p>
        </div>

        {/* Divider */}
        <div
          className='my-8 flex items-center gap-3 w-full transition-all duration-700'
          style={{
            opacity: phase >= 3 ? 1 : 0,
            transform: phase >= 3 ? "scaleX(1)" : "scaleX(0)",
          }}
        >
          <div className='flex-1 h-px bg-gradient-to-r from-transparent to-brand-red' />
          <span className='text-brand-red text-xs'>◆</span>
          <div className='flex-1 h-px bg-gradient-to-l from-transparent to-brand-red' />
        </div>

        {/* Feature pills */}
        <div
          className='flex gap-3 mb-10 flex-wrap justify-center transition-all duration-700'
          style={{
            opacity: phase >= 3 ? 1 : 0,
            transform: phase >= 3 ? "translateY(0)" : "translateY(15px)",
          }}
        >
          {["طازج يومياً", "توصيل سريع", "جودة عالية"].map((pill, i) => (
            <span
              key={i}
              className='glass px-4 py-2 rounded-full text-sm font-semibold text-white border border-white/10'
            >
              {pill}
            </span>
          ))}
        </div>

        {/* CTA Button */}
        <div
          className='transition-all duration-700'
          style={{
            opacity: phase >= 4 ? 1 : 0,
            transform:
              phase >= 4
                ? "translateY(0) scale(1)"
                : "translateY(20px) scale(0.9)",
          }}
        >
          <button
            onClick={() => navigate("/categories")}
            className='relative group overflow-hidden rounded-full font-black text-xl px-12 py-5 text-white transition-all duration-300 hover:scale-105 active:scale-95'
            style={{
              background: "linear-gradient(135deg, #CC0000, #990000)",
              boxShadow:
                "0 0 30px rgba(204,0,0,0.5), 0 8px 32px rgba(0,0,0,0.4)",
            }}
          >
            <span className='relative z-10'>{t.startShopping} ←</span>
            <div
              className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300'
              style={{
                background: "linear-gradient(135deg, #FF1A1A, #CC0000)",
              }}
            />
          </button>

          <p className='text-brand-gray-light text-xs mt-6 opacity-60'>
            {lang === "ar"
              ? "توصيل مجاني للطلبات فوق ₪200"
              : "משלוח חינם להזמנות מעל ₪200"}
          </p>
        </div>
      </div>

      {/* Bottom indicator dots */}
      <div className='absolute bottom-10 flex gap-2 z-20'>
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className='rounded-full transition-all duration-500'
            style={{
              width: i === 1 ? "24px" : "6px",
              height: "6px",
              background: i === 1 ? "#CC0000" : "rgba(255,255,255,0.3)",
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(3deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.25; transform: scale(1.05); }
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </div>
  );
}
