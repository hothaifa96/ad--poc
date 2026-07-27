import {
  X,
  Plus,
  Minus,
  Trash2,
  ShoppingBag,
  ShoppingCart,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useLang } from "../context/LanguageContext";

export default function CartSidebar() {
  const {
    items,
    removeItem,
    updateQty,
    subtotal,
    deliveryFee,
    total,
    isOpen,
    setIsOpen,
  } = useCart();
  const { t, name } = useLang();
  const navigate = useNavigate();

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className='fixed inset-0 z-50 bg-black/70 backdrop-blur-sm'
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar */}
      <div
        className='fixed top-0 left-0 h-full w-full max-w-sm z-50 flex flex-col'
        style={{
          background: "#111111",
          borderRight: "1px solid rgba(204,0,0,0.3)",
          boxShadow: "4px 0 40px rgba(0,0,0,0.8)",
          animation: "slideInFromLeft 0.35s ease-out",
        }}
      >
        {/* Header */}
        <div
          className='flex items-center justify-between p-5 border-b'
          style={{ borderColor: "rgba(204,0,0,0.2)" }}
        >
          <div className='flex items-center gap-3'>
            <div
              className='w-9 h-9 rounded-xl flex items-center justify-center'
              style={{
                background: "linear-gradient(135deg, #CC0000, #990000)",
              }}
            >
              <ShoppingBag size={18} className='text-white' />
            </div>
            <div>
              <h2 className='font-black text-white text-lg'>{t.cart}</h2>
              <p className='text-brand-gray-light text-xs'>
                {items.length} {t.items}
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className='w-8 h-8 rounded-full flex items-center justify-center text-brand-gray-light hover:text-white hover:bg-white/10 transition-colors'
          >
            <X size={18} />
          </button>
        </div>

        {/* Items */}
        <div className='flex-1 overflow-y-auto p-4 space-y-3'>
          {items.length === 0 ? (
            <div className='flex flex-col items-center justify-center h-full gap-4 text-center'>
              <ShoppingCart size={56} className='opacity-20 text-white' />
              <p className='text-brand-gray-light'>{t.emptyCart}</p>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className='flex gap-3 p-3 rounded-xl'
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <img
                  src={item.image}
                  alt={name(item)}
                  className='w-16 h-16 rounded-lg object-cover flex-shrink-0'
                />
                <div className='flex-1 min-w-0'>
                  <p className='text-white font-semibold text-sm truncate'>
                    {name(item)}
                  </p>
                  <p className='text-brand-red font-black text-base'>
                    {t.nis}
                    {item.price}
                  </p>

                  {/* Qty controls */}
                  <div className='flex items-center gap-2 mt-2'>
                    <button
                      onClick={() => updateQty(item.id, item.qty - 1)}
                      className='w-7 h-7 rounded-full flex items-center justify-center text-white transition-colors hover:bg-brand-red'
                      style={{ background: "rgba(255,255,255,0.1)" }}
                    >
                      <Minus size={12} />
                    </button>
                    <span className='text-white font-bold text-sm w-6 text-center'>
                      {item.qty}
                    </span>
                    <button
                      onClick={() => updateQty(item.id, item.qty + 1)}
                      className='w-7 h-7 rounded-full flex items-center justify-center text-white transition-colors hover:bg-brand-red'
                      style={{ background: "rgba(255,255,255,0.1)" }}
                    >
                      <Plus size={12} />
                    </button>
                    <button
                      onClick={() => removeItem(item.id)}
                      className='mr-auto text-brand-gray-light hover:text-red-400 transition-colors'
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div
            className='p-5 border-t space-y-3'
            style={{ borderColor: "rgba(204,0,0,0.2)" }}
          >
            <div className='space-y-2 text-sm'>
              <div className='flex justify-between text-brand-gray-light'>
                <span>{t.subtotal}</span>
                <span className='text-white'>
                  {t.nis}
                  {subtotal.toFixed(0)}
                </span>
              </div>
              <div className='flex justify-between text-brand-gray-light'>
                <span>{t.delivery}</span>
                <span
                  className={
                    deliveryFee === 0
                      ? "text-green-400 font-bold"
                      : "text-white"
                  }
                >
                  {deliveryFee === 0 ? t.free : `${t.nis}${deliveryFee}`}
                </span>
              </div>
              <div className='flex justify-between text-white font-black text-base border-t border-white/10 pt-2 mt-2'>
                <span>{t.total}</span>
                <span className='text-brand-red'>
                  {t.nis}
                  {total.toFixed(0)}
                </span>
              </div>
            </div>

            <button
              onClick={() => {
                setIsOpen(false);
                navigate("/auth");
              }}
              className='w-full py-4 rounded-xl font-black text-white text-lg transition-all hover:scale-[1.02] active:scale-95'
              style={{
                background: "linear-gradient(135deg, #CC0000, #990000)",
                boxShadow: "0 4px 20px rgba(204,0,0,0.4)",
              }}
            >
              {t.checkout} ←
            </button>
          </div>
        )}
      </div>

      <style>{`
        @keyframes slideInFromLeft {
          from { transform: translateX(-100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
      `}</style>
    </>
  );
}
