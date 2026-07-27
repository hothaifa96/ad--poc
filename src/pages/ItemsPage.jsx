import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Star, Plus, Minus, X, ArrowRight } from "lucide-react";
import { categories, products } from "../data/mockData";
import { useLang } from "../context/LanguageContext";
import { useCart } from "../context/CartContext";
import Navbar from "../components/Navbar";
import CartSidebar from "../components/CartSidebar";

function ProductModal({ product, onClose, onSelectSuggested }) {
  const { t, name, desc, badge } = useLang();
  const { addItem, setIsOpen } = useCart();
  const [qty, setQty] = useState(1);

  if (!product) return null;

  const suggested = products
    .filter((p) => p.id !== product.id && p.categoryId === product.categoryId)
    .slice(0, 3);

  return (
    <div
      className='fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4'
      style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(8px)" }}
      onClick={onClose}
    >
      <div
        className='w-full max-w-md rounded-3xl overflow-hidden max-h-[92vh] flex flex-col'
        style={{ background: "#1A1A1A", border: "1px solid rgba(204,0,0,0.3)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className='relative h-52 flex-shrink-0'>
          <img
            src={product.image}
            alt={name(product)}
            className='w-full h-full object-cover'
          />
          <div
            className='absolute inset-0'
            style={{
              background:
                "linear-gradient(180deg, transparent 40%, rgba(26,26,26,1) 100%)",
            }}
          />
          {badge(product) && (
            <span
              className='absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-black text-white'
              style={{ background: "#CC0000" }}
            >
              {badge(product)}
            </span>
          )}
          <button
            onClick={onClose}
            className='absolute top-4 left-4 w-8 h-8 rounded-full flex items-center justify-center text-white'
            style={{ background: "rgba(0,0,0,0.6)" }}
          >
            <X size={16} />
          </button>
        </div>

        <div className='overflow-y-auto'>
          <div className='p-6'>
            <h2 className='text-white font-black text-xl mb-1'>
              {name(product)}
            </h2>
            <div className='flex items-center gap-2 mb-3'>
              <Star size={14} className='text-yellow-400 fill-yellow-400' />
              <span className='text-yellow-400 text-sm font-bold'>
                {product.rating}
              </span>
              <span className='text-white/40 text-sm'>
                ({product.reviews} تقييم)
              </span>
            </div>
            <p className='text-brand-gray-light text-sm leading-relaxed mb-4'>
              {desc(product)}
            </p>
            <p className='text-brand-red font-black text-2xl mb-6'>
              {t.nis}
              {product.price}
              <span className='text-sm text-white/50 font-normal'>
                {t.perKg}
              </span>
            </p>

            <div className='flex items-center gap-4 mb-6'>
              <div
                className='flex items-center gap-3 p-2 rounded-2xl'
                style={{ background: "rgba(255,255,255,0.06)" }}
              >
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className='w-9 h-9 rounded-xl flex items-center justify-center text-white hover:bg-brand-red transition-colors'
                  style={{ background: "rgba(255,255,255,0.1)" }}
                >
                  <Minus size={16} />
                </button>
                <span className='text-white font-black text-lg w-8 text-center'>
                  {qty}
                </span>
                <button
                  onClick={() => setQty((q) => q + 1)}
                  className='w-9 h-9 rounded-xl flex items-center justify-center text-white hover:bg-brand-red transition-colors'
                  style={{ background: "rgba(255,255,255,0.1)" }}
                >
                  <Plus size={16} />
                </button>
              </div>
              <span className='text-white/50 text-sm'>كغ</span>
            </div>

            <button
              onClick={() => {
                addItem(product, qty);
                setIsOpen(true);
                onClose();
              }}
              className='w-full py-4 rounded-2xl font-black text-white text-lg transition-all hover:scale-[1.02] active:scale-95'
              style={{
                background: "linear-gradient(135deg, #CC0000, #990000)",
                boxShadow: "0 4px 20px rgba(204,0,0,0.4)",
              }}
            >
              {t.addToCart} — {t.nis}
              {(product.price * qty).toFixed(0)}
            </button>
          </div>

          {/* Suggested Items inside modal */}
          {suggested.length > 0 && (
            <div
              className='px-6 pb-6 border-t'
              style={{ borderColor: "rgba(255,255,255,0.06)" }}
            >
              <p className='text-white/50 text-xs font-bold uppercase tracking-widest mt-5 mb-3'>
                {t.suggestedItems}
              </p>
              <div className='flex gap-3 overflow-x-auto no-scrollbar pb-1'>
                {suggested.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => onSelectSuggested(s)}
                    className='flex-shrink-0 w-32 rounded-2xl overflow-hidden text-right transition-all hover:scale-[1.04]'
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <img
                      src={s.image}
                      alt={name(s)}
                      className='w-full h-24 object-cover'
                    />
                    <div className='p-2'>
                      <p className='text-white text-xs font-bold line-clamp-2 leading-tight mb-1'>
                        {name(s)}
                      </p>
                      <p className='text-brand-red font-black text-sm'>
                        {t.nis}
                        {s.price}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ItemsPage() {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const { t, name, badge } = useLang();
  const { addItem, setIsOpen } = useCart();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const category = categories.find((c) => c.id === Number(categoryId));
  const catProducts = products.filter(
    (p) => p.categoryId === Number(categoryId),
  );
  const suggested = products
    .filter((p) => p.categoryId !== Number(categoryId) && p.isFeatured)
    .slice(0, 4);

  return (
    <div className='min-h-screen bg-brand-black'>
      <Navbar />
      <CartSidebar />
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onSelectSuggested={(p) => setSelectedProduct(p)}
        />
      )}

      <div className='pt-16 pb-24'>
        {/* Category Hero */}
        {category && (
          <div className='relative h-48 mx-4 mt-4 rounded-3xl overflow-hidden mb-6'>
            <img
              src={category.image}
              alt={name(category)}
              className='w-full h-full object-cover'
            />
            <div
              className='absolute inset-0'
              style={{
                background:
                  "linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.8) 100%)",
              }}
            />
            <div className='absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between'>
              <div>
                <h1 className='text-3xl font-black text-white'>
                  {name(category)}
                </h1>
                <p className='text-white/60 text-sm'>
                  {catProducts.length} منتج
                </p>
              </div>
              <button
                onClick={() => navigate("/categories")}
                className='flex items-center gap-2 px-4 py-2 rounded-full text-sm text-white font-semibold'
                style={{
                  background: "rgba(255,255,255,0.15)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <ArrowRight size={16} />
                رجوع
              </button>
            </div>
          </div>
        )}

        <div className='px-4 space-y-8'>
          {/* Products Grid */}
          <section>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
              {catProducts.map((product, i) => (
                <div
                  key={product.id}
                  className='rounded-2xl overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1'
                  style={{
                    background: "#1A1A1A",
                    border: "1px solid rgba(255,255,255,0.06)",
                    animation: `fadeSlideUp 0.4s ease-out ${i * 0.07}s both`,
                  }}
                  onClick={() => setSelectedProduct(product)}
                >
                  <div className='relative h-36 overflow-hidden'>
                    <img
                      src={product.image}
                      alt={name(product)}
                      className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                    />
                    <div
                      className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity'
                      style={{ background: "rgba(204,0,0,0.15)" }}
                    />
                    {badge(product) && (
                      <span
                        className='absolute top-2 right-2 px-2 py-0.5 rounded-full text-xs font-black text-white'
                        style={{ background: "#CC0000" }}
                      >
                        {badge(product)}
                      </span>
                    )}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        addItem(product);
                        setIsOpen(true);
                      }}
                      className='absolute bottom-2 left-2 w-8 h-8 rounded-xl flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110'
                      style={{ background: "#CC0000" }}
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  <div className='p-3'>
                    <p className='text-white font-bold text-sm leading-tight mb-1 line-clamp-2'>
                      {name(product)}
                    </p>
                    <div className='flex items-center gap-1 mb-2'>
                      <Star
                        size={11}
                        className='text-yellow-400 fill-yellow-400'
                      />
                      <span className='text-yellow-400 text-xs font-bold'>
                        {product.rating}
                      </span>
                    </div>
                    <div className='flex items-center justify-between'>
                      <span className='text-brand-red font-black'>
                        {t.nis}
                        {product.price}
                        <span className='text-xs text-white/40'>{t.perKg}</span>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Suggested Items */}
          {suggested.length > 0 && (
            <section>
              <div className='flex items-center gap-3 mb-4'>
                <div
                  className='flex-1 h-px'
                  style={{ background: "rgba(204,0,0,0.3)" }}
                />
                <h2 className='text-white font-black text-lg whitespace-nowrap'>
                  {t.suggestedItems}
                </h2>
                <div
                  className='flex-1 h-px'
                  style={{ background: "rgba(204,0,0,0.3)" }}
                />
              </div>

              <div className='flex gap-3 overflow-x-auto pb-2 no-scrollbar'>
                {suggested.map((product) => (
                  <div
                    key={product.id}
                    className='flex-shrink-0 w-40 rounded-2xl overflow-hidden cursor-pointer transition-all hover:scale-[1.03]'
                    style={{
                      background: "#1A1A1A",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                    onClick={() => setSelectedProduct(product)}
                  >
                    <img
                      src={product.image}
                      alt={name(product)}
                      className='w-full h-28 object-cover'
                    />
                    <div className='p-2'>
                      <p className='text-white text-xs font-bold line-clamp-2 mb-1'>
                        {name(product)}
                      </p>
                      <p className='text-brand-red font-black text-sm'>
                        {t.nis}
                        {product.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>

      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
