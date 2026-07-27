import { useNavigate } from "react-router-dom";
import { ChevronRight, Star } from "lucide-react";
import { categories, products } from "../data/mockData";
import { useLang } from "../context/LanguageContext";
import { useCart } from "../context/CartContext";
import Navbar from "../components/Navbar";
import CartSidebar from "../components/CartSidebar";

export default function CategoriesPage() {
  const navigate = useNavigate();
  const { t, name, badge, tag } = useLang();
  const { addItem, setIsOpen } = useCart();

  const featured = products.filter((p) => p.isFeatured).slice(0, 4);

  return (
    <div className='min-h-screen bg-brand-black'>
      <Navbar />
      <CartSidebar />

      <div className='pt-16 pb-24'>
        {/* Hero banner */}
        <div
          className='relative overflow-hidden mx-4 mt-4 rounded-3xl mb-8'
          style={{ minHeight: 180 }}
        >
          <div
            className='absolute inset-0'
            style={{
              background:
                "linear-gradient(135deg, #0A0A0A 0%, #3D0000 50%, #CC0000 100%)",
            }}
          />
          <div
            className='absolute inset-0'
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=800&fit=crop')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.15,
            }}
          />

          <div className='relative z-10 p-8 flex items-center justify-between'>
            <div>
              <p className='text-brand-gray-light text-sm mb-1'>مرحباً بك في</p>
              <h1 className='text-3xl font-black text-white mb-2'>
                {t.storeName}
              </h1>
              <p className='text-brand-red font-semibold'>{t.storeTagline}</p>
              <div className='flex gap-3 mt-4'>
                <span className='glass px-3 py-1 rounded-full text-xs text-white border border-white/10'>
                  طازج يومياً
                </span>
                <span className='glass px-3 py-1 rounded-full text-xs text-white border border-white/10'>
                  توصيل سريع
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className='px-4 space-y-10'>
          {/* Categories */}
          <section>
            <div className='flex items-center justify-between mb-4'>
              <div>
                <h2 className='text-xl font-black text-white'>
                  {t.categories}
                </h2>
                <p className='text-brand-gray-light text-xs'>
                  {categories.length} فئة متاحة
                </p>
              </div>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-3 gap-3'>
              {categories.map((cat, i) => (
                <button
                  key={cat.id}
                  onClick={() => navigate(`/items/${cat.id}`)}
                  className='relative group overflow-hidden rounded-2xl text-right transition-all duration-300 hover:scale-[1.03] hover:shadow-xl'
                  style={{
                    height: 140,
                    animation: `fadeSlideUp 0.5s ease-out ${i * 0.08}s both`,
                  }}
                >
                  <img
                    src={cat.image}
                    alt={name(cat)}
                    className='absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                  />
                  <div
                    className='absolute inset-0'
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.85) 100%)",
                    }}
                  />
                  <div className='absolute inset-0 border-2 border-transparent group-hover:border-brand-red rounded-2xl transition-colors duration-300' />

                  {tag(cat) && (
                    <div
                      className='absolute top-2 right-2 px-2 py-0.5 rounded-full text-xs font-black'
                      style={{ background: "#CC0000" }}
                    >
                      {tag(cat)}
                    </div>
                  )}

                  <div className='absolute bottom-0 left-0 right-0 p-3'>
                    <p className='text-white font-black text-base leading-tight'>
                      {name(cat)}
                    </p>
                    <p className='text-white/60 text-xs'>{cat.count} منتج</p>
                  </div>
                </button>
              ))}
            </div>
          </section>

          {/* Featured / Best sellers */}
          <section>
            <div className='flex items-center justify-between mb-4'>
              <div>
                <h2 className='text-xl font-black text-white'>الأكثر مبيعاً</h2>
                <p className='text-brand-gray-light text-xs'>
                  منتجاتنا المفضلة
                </p>
              </div>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
              {featured.map((product, i) => (
                <div
                  key={product.id}
                  className='relative rounded-2xl overflow-hidden group transition-all duration-300 hover:scale-[1.03]'
                  style={{
                    background: "#1A1A1A",
                    border: "1px solid rgba(255,255,255,0.06)",
                    animation: `fadeSlideUp 0.5s ease-out ${i * 0.1}s both`,
                  }}
                >
                  <div className='relative h-32 overflow-hidden'>
                    <img
                      src={product.image}
                      alt={name(product)}
                      className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                    />
                    {badge(product) && (
                      <span
                        className='absolute top-2 right-2 px-2 py-0.5 rounded-full text-xs font-black'
                        style={{ background: "#CC0000" }}
                      >
                        {badge(product)}
                      </span>
                    )}
                  </div>
                  <div className='p-3'>
                    <p className='text-white font-bold text-sm leading-tight mb-1 line-clamp-1'>
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
                      <span className='text-white/30 text-xs'>
                        ({product.reviews})
                      </span>
                    </div>
                    <div className='flex items-center justify-between'>
                      <span className='text-brand-red font-black text-base'>
                        {t.nis}
                        {product.price}
                        <span className='text-xs font-normal text-brand-gray-light'>
                          {t.perKg}
                        </span>
                      </span>
                    </div>
                    <button
                      onClick={() => {
                        addItem(product);
                        setIsOpen(true);
                      }}
                      className='w-full mt-2 py-1.5 rounded-xl text-xs font-bold text-white transition-all hover:scale-105 active:scale-95'
                      style={{
                        background: "linear-gradient(135deg, #CC0000, #990000)",
                      }}
                    >
                      + {t.addToCart}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Promo banner */}
          <section>
            <div
              className='rounded-3xl p-6 relative overflow-hidden'
              style={{
                background: "linear-gradient(135deg, #1A0000, #3D0000)",
              }}
            >
              <div
                className='absolute inset-0 opacity-10'
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1558030006-450675393462?w=800&fit=crop')`,
                  backgroundSize: "cover",
                }}
              />
              <div className='relative z-10'>
                <p className='text-brand-red font-black text-sm mb-1'>
                  عرض اليوم
                </p>
                <h3 className='text-white font-black text-2xl mb-2'>
                  توصيل مجاني
                </h3>
                <p className='text-white/70 text-sm'>
                  على جميع الطلبات فوق ₪200
                </p>
              </div>
            </div>
          </section>
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
