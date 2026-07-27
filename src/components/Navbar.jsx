import { ShoppingCart, ChevronRight, Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useLang } from "../context/LanguageContext";

export default function Navbar() {
  const { totalItems, setIsOpen } = useCart();
  const { t, toggleLang, lang } = useLang();
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isAdmin = location.pathname.startsWith("/admin");
  const isDelivery = location.pathname.startsWith("/delivery");

  return (
    <nav
      className='fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-8 h-16'
      style={{
        background: "rgba(10,10,10,0.95)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(204,0,0,0.2)",
      }}
    >
      {/* Logo */}
      <button
        onClick={() => navigate("/")}
        className='flex items-center gap-3 group'
      >
        <div className='w-9 h-9 rounded-xl overflow-hidden transition-transform group-hover:scale-110 border border-brand-red/40'>
          <img
            src={import.meta.env.BASE_URL + "logo.jpeg"}
            alt='أبو دغش'
            className='w-full h-full object-cover'
          />
        </div>
        <span className='font-black text-lg text-white'>{t.storeName}</span>
      </button>

      {/* Center breadcrumb */}
      {!isAdmin && !isDelivery && (
        <div className='hidden md:flex items-center gap-3 text-sm text-brand-gray-light'>
          <button
            onClick={() => navigate("/categories")}
            className='hover:text-white transition-colors'
          >
            {t.categories}
          </button>
          <span className='text-white/20'>|</span>
          <button
            onClick={() => navigate("/about")}
            className='hover:text-white transition-colors'
          >
            {t.aboutUs}
          </button>
          <span className='text-white/20'>|</span>
          <button
            onClick={() => navigate("/delivery")}
            className='hover:text-orange-400 transition-colors'
          >
            {lang === "ar" ? "بوابة المندوب" : "פורטל שליח"}
          </button>
        </div>
      )}

      {isAdmin && (
        <span className='hidden md:block text-brand-red font-bold text-sm'>
          {t.adminPanel}
        </span>
      )}
      {isDelivery && (
        <span className='hidden md:block text-orange-400 font-bold text-sm'>
          {lang === "ar" ? "بوابة المندوب" : "פורטל שליח"}
        </span>
      )}

      {/* Actions */}
      <div className='flex items-center gap-3'>
        {/* Lang toggle */}
        <button
          onClick={toggleLang}
          className='hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold border border-brand-gray-mid hover:border-brand-red text-white transition-colors'
        >
          {lang === "ar" ? "עב" : "ع"}
        </button>

        {/* Cart button - hide on admin */}
        {!isAdmin && (
          <button
            onClick={() => setIsOpen(true)}
            className='relative flex items-center gap-2 px-4 py-2 rounded-full font-bold text-sm transition-all hover:scale-105 active:scale-95'
            style={{
              background:
                totalItems > 0
                  ? "linear-gradient(135deg, #CC0000, #990000)"
                  : "rgba(255,255,255,0.08)",
              border:
                totalItems > 0 ? "none" : "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <ShoppingCart size={16} />
            <span className='hidden sm:inline'>{t.cart}</span>
            {totalItems > 0 && (
              <span
                className='absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full flex items-center justify-center text-xs font-black'
                style={{ background: "#FFFFFF", color: "#CC0000" }}
              >
                {totalItems}
              </span>
            )}
          </button>
        )}

        {/* Mobile menu */}
        <button
          className='md:hidden text-white'
          onClick={() => setMenuOpen((m) => !m)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          className='absolute top-16 left-0 right-0 py-4 px-6 flex flex-col gap-3 md:hidden'
          style={{
            background: "rgba(10,10,10,0.98)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid rgba(204,0,0,0.2)",
          }}
        >
          <button
            onClick={toggleLang}
            className='text-white text-sm font-bold text-right py-2 border-b border-white/10'
          >
            {lang === "ar" ? "עברית" : "العربية"}
          </button>
          {!isAdmin && (
            <button
              onClick={() => {
                navigate("/admin");
                setMenuOpen(false);
              }}
              className='text-brand-gray-light text-sm text-right py-2 border-b border-white/10'
            >
              {t.adminPanel}
            </button>
          )}
          <button
            onClick={() => {
              navigate("/about");
              setMenuOpen(false);
            }}
            className='text-brand-gray-light text-sm text-right py-2 border-b border-white/10'
          >
            {t.aboutUs}
          </button>
          <button
            onClick={() => {
              navigate("/delivery");
              setMenuOpen(false);
            }}
            className='text-orange-400 text-sm text-right py-2'
          >
            {lang === "ar" ? "بوابة المندوب" : "פורטל שליח"}
          </button>
        </div>
      )}
    </nav>
  );
}
