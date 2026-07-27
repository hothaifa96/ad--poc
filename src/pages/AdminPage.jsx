import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Tag,
  Package,
  ShoppingBag,
  Users,
  Truck,
  Plus,
  Edit2,
  Trash2,
  Upload,
  X,
  Check,
  ChevronDown,
  TrendingUp,
  DollarSign,
  Clock,
  Star,
  ArrowRight,
  Globe,
} from "lucide-react";
import {
  categories as initCategories,
  products as initProducts,
  adminOrders,
} from "../data/mockData";
import { useLang } from "../context/LanguageContext";

const STATUS_COLORS = {
  pending: "#F59E0B",
  confirmed: "#3B82F6",
  preparing: "#8B5CF6",
  delivering: "#F97316",
  delivered: "#16A34A",
};

const STATUS_LABELS_AR = {
  pending: "قيد الانتظار",
  confirmed: "مؤكد",
  preparing: "جاري التحضير",
  delivering: "في التوصيل",
  delivered: "تم التوصيل",
};

function StatCard({ icon: Icon, label, value, sub, color }) {
  return (
    <div
      className='rounded-2xl p-5'
      style={{
        background: "#1A1A1A",
        border: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className='flex items-center justify-between mb-4'>
        <div
          className='w-10 h-10 rounded-xl flex items-center justify-center'
          style={{ background: `${color}22` }}
        >
          <Icon size={20} style={{ color }} />
        </div>
        <span className='text-green-400 text-xs font-bold'>+12%</span>
      </div>
      <p className='text-2xl font-black text-white mb-1'>{value}</p>
      <p className='text-white/60 text-sm'>{label}</p>
      {sub && <p className='text-white/30 text-xs mt-1'>{sub}</p>}
    </div>
  );
}

function Modal({ title, onClose, children }) {
  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center p-4'
      style={{ background: "rgba(0,0,0,0.85)" }}
    >
      <div
        className='w-full max-w-lg rounded-3xl overflow-hidden'
        style={{ background: "#1A1A1A", border: "1px solid rgba(204,0,0,0.3)" }}
      >
        <div
          className='flex items-center justify-between p-6 border-b'
          style={{ borderColor: "rgba(255,255,255,0.08)" }}
        >
          <h3 className='text-white font-black text-lg'>{title}</h3>
          <button
            onClick={onClose}
            className='text-white/40 hover:text-white transition-colors'
          >
            <X size={20} />
          </button>
        </div>
        <div className='p-6'>{children}</div>
      </div>
    </div>
  );
}

export default function AdminPage() {
  const { lang, toggleLang } = useLang();
  const navigate = useNavigate();
  const [tab, setTab] = useState("dashboard");
  const [categories, setCategories] = useState(initCategories);
  const [products, setProducts] = useState(initProducts);
  const [orders, setOrders] = useState(adminOrders);
  const [showCatModal, setShowCatModal] = useState(false);
  const [showProdModal, setShowProdModal] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [catForm, setCatForm] = useState({
    name_ar: "",
    name_he: "",
    image: "",
  });
  const [prodForm, setProdForm] = useState({
    name_ar: "",
    name_he: "",
    price: "",
    description_ar: "",
    image: "",
    categoryId: "",
  });

  const tabs = [
    { id: "dashboard", label: "لوحة التحكم", icon: LayoutDashboard },
    { id: "categories", label: "الفئات", icon: Tag },
    { id: "products", label: "المنتجات", icon: Package },
    { id: "orders", label: "الطلبات", icon: ShoppingBag },
  ];

  const saveCat = () => {
    if (editItem) {
      setCategories((cats) =>
        cats.map((c) => (c.id === editItem.id ? { ...c, ...catForm } : c)),
      );
    } else {
      setCategories((cats) => [
        ...cats,
        { id: Date.now(), ...catForm, count: 0, tag_ar: "", tag_he: "" },
      ]);
    }
    setShowCatModal(false);
    setEditItem(null);
    setCatForm({ name_ar: "", name_he: "", image: "" });
  };

  const deleteCat = (id) =>
    setCategories((cats) => cats.filter((c) => c.id !== id));
  const deleteProd = (id) =>
    setProducts((prods) => prods.filter((p) => p.id !== id));

  const saveProd = () => {
    if (editItem) {
      setProducts((prods) =>
        prods.map((p) =>
          p.id === editItem.id
            ? { ...p, ...prodForm, price: Number(prodForm.price) }
            : p,
        ),
      );
    } else {
      setProducts((prods) => [
        ...prods,
        {
          id: Date.now(),
          ...prodForm,
          price: Number(prodForm.price),
          isFeatured: false,
          badge_ar: "",
          badge_he: "",
          rating: 4.5,
          reviews: 0,
          description_he: prodForm.description_ar,
        },
      ]);
    }
    setShowProdModal(false);
    setEditItem(null);
    setProdForm({
      name_ar: "",
      name_he: "",
      price: "",
      description_ar: "",
      image: "",
      categoryId: "",
    });
  };

  return (
    <div className='min-h-screen flex' style={{ background: "#0A0A0A" }}>
      {/* Sidebar */}
      <div
        className='hidden md:flex flex-col w-64 border-r py-6'
        style={{
          background: "#111111",
          borderColor: "rgba(204,0,0,0.2)",
          position: "sticky",
          top: 0,
          height: "100vh",
        }}
      >
        {/* Logo */}
        <div className='px-6 mb-8'>
          <div className='flex items-center gap-3 mb-1'>
            <div
              className='w-9 h-9 rounded-xl flex items-center justify-center'
              style={{
                background: "linear-gradient(135deg, #CC0000, #990000)",
              }}
            >
              <span
                style={{
                  fontSize: "14px",
                  fontWeight: 900,
                  color: "white",
                  fontFamily: "Cairo, sans-serif",
                }}
              >
                أد
              </span>
            </div>
            <span className='font-black text-white text-lg'>أبو دغش</span>
          </div>
          <span className='text-brand-red text-xs font-bold'>لوحة الإدارة</span>
        </div>

        <nav className='flex-1 px-3 space-y-1'>
          {tabs.map((t) => {
            const Icon = t.icon;
            return (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className='w-full flex items-center gap-3 px-4 py-3 rounded-xl text-right transition-all duration-200 group'
                style={{
                  background:
                    tab === t.id ? "rgba(204,0,0,0.15)" : "transparent",
                  borderRight:
                    tab === t.id
                      ? "3px solid #CC0000"
                      : "3px solid transparent",
                }}
              >
                <Icon
                  size={18}
                  className={
                    tab === t.id
                      ? "text-brand-red"
                      : "text-white/40 group-hover:text-white/70"
                  }
                />
                <span
                  className={`text-sm font-bold ${tab === t.id ? "text-white" : "text-white/50 group-hover:text-white/70"}`}
                >
                  {t.label}
                </span>
              </button>
            );
          })}
        </nav>

        <div className='px-3 space-y-2 mt-4'>
          <button
            onClick={toggleLang}
            className='w-full flex items-center gap-3 px-4 py-3 rounded-xl text-right text-white/40 hover:text-white/70 transition-colors text-sm'
          >
            <Globe size={18} />
            <span>{lang === "ar" ? "עברית" : "العربية"}</span>
          </button>
          <button
            onClick={() => navigate("/")}
            className='w-full flex items-center gap-3 px-4 py-3 rounded-xl text-right text-white/40 hover:text-white/70 transition-colors text-sm'
          >
            <ArrowRight size={18} />
            <span>العودة للمتجر</span>
          </button>
        </div>
      </div>

      {/* Mobile header */}
      <div
        className='md:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 h-14'
        style={{
          background: "#111111",
          borderBottom: "1px solid rgba(204,0,0,0.2)",
        }}
      >
        <div className='flex items-center gap-2'>
          <div
            className='w-8 h-8 rounded-lg flex items-center justify-center'
            style={{ background: "linear-gradient(135deg, #CC0000, #990000)" }}
          >
            <span
              style={{
                fontSize: "12px",
                fontWeight: 900,
                color: "white",
                fontFamily: "Cairo, sans-serif",
              }}
            >
              أد
            </span>
          </div>
          <span className='text-white font-black text-sm'>لوحة الإدارة</span>
        </div>
        <button onClick={() => navigate("/")} className='text-white/50 text-xs'>
          ← المتجر
        </button>
      </div>

      {/* Main */}
      <div className='flex-1 overflow-auto'>
        {/* Mobile tabs */}
        <div
          className='md:hidden flex gap-1 overflow-x-auto no-scrollbar p-2 mt-14'
          style={{
            background: "#111111",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className='flex-shrink-0 px-4 py-2 rounded-lg text-xs font-bold transition-all'
              style={{
                background: tab === t.id ? "#CC0000" : "rgba(255,255,255,0.06)",
                color: tab === t.id ? "white" : "rgba(255,255,255,0.5)",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className='p-4 md:p-8 max-w-6xl'>
          {/* DASHBOARD */}
          {tab === "dashboard" && (
            <div className='space-y-8'>
              <div>
                <h1 className='text-2xl font-black text-white'>
                  مرحباً، أبو دغش
                </h1>
                <p className='text-white/50 text-sm'>
                  هذا ملخص نشاط المتجر اليوم
                </p>
              </div>

              <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                <StatCard
                  icon={DollarSign}
                  label='إجمالي المبيعات'
                  value='₪3,240'
                  sub='اليوم'
                  color='#CC0000'
                />
                <StatCard
                  icon={ShoppingBag}
                  label='طلبات جديدة'
                  value='18'
                  sub='اليوم'
                  color='#8B5CF6'
                />
                <StatCard
                  icon={Users}
                  label='عملاء جدد'
                  value='7'
                  sub='اليوم'
                  color='#3B82F6'
                />
                <StatCard
                  icon={Truck}
                  label='قيد التوصيل'
                  value='5'
                  sub='الآن'
                  color='#F97316'
                />
              </div>

              {/* Recent Orders */}
              <div
                className='rounded-2xl overflow-hidden'
                style={{
                  background: "#1A1A1A",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div
                  className='flex items-center justify-between p-5 border-b'
                  style={{ borderColor: "rgba(255,255,255,0.06)" }}
                >
                  <h2 className='text-white font-black'>أحدث الطلبات</h2>
                  <button
                    onClick={() => setTab("orders")}
                    className='text-brand-red text-sm font-bold hover:underline'
                  >
                    عرض الكل
                  </button>
                </div>
                <div
                  className='divide-y'
                  style={{ borderColor: "rgba(255,255,255,0.04)" }}
                >
                  {orders.slice(0, 4).map((order) => (
                    <div
                      key={order.id}
                      className='flex items-center justify-between px-5 py-4'
                    >
                      <div className='flex items-center gap-3'>
                        <div
                          className='w-9 h-9 rounded-xl flex items-center justify-center text-sm font-black text-white'
                          style={{ background: "#2A2A2A" }}
                        >
                          {order.customer[0]}
                        </div>
                        <div>
                          <p className='text-white font-bold text-sm'>
                            {order.customer}
                          </p>
                          <p className='text-white/40 text-xs'>
                            {order.id} · {order.items} منتجات
                          </p>
                        </div>
                      </div>
                      <div className='flex items-center gap-3'>
                        <span className='text-white font-bold text-sm'>
                          ₪{order.total}
                        </span>
                        <span
                          className='px-3 py-1 rounded-full text-xs font-black'
                          style={{
                            background: `${STATUS_COLORS[order.status]}22`,
                            color: STATUS_COLORS[order.status],
                          }}
                        >
                          {STATUS_LABELS_AR[order.status]}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* CATEGORIES */}
          {tab === "categories" && (
            <div className='space-y-6'>
              <div className='flex items-center justify-between'>
                <div>
                  <h1 className='text-2xl font-black text-white'>الفئات</h1>
                  <p className='text-white/50 text-sm'>
                    {categories.length} فئة
                  </p>
                </div>
                <button
                  onClick={() => {
                    setEditItem(null);
                    setCatForm({ name_ar: "", name_he: "", image: "" });
                    setShowCatModal(true);
                  }}
                  className='flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-white transition-all hover:scale-105'
                  style={{
                    background: "linear-gradient(135deg, #CC0000, #990000)",
                  }}
                >
                  <Plus size={18} />
                  إضافة فئة
                </button>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {categories.map((cat) => (
                  <div
                    key={cat.id}
                    className='rounded-2xl overflow-hidden group'
                    style={{
                      background: "#1A1A1A",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <div className='relative h-32 overflow-hidden'>
                      <img
                        src={cat.image}
                        alt={cat.name_ar}
                        className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105'
                      />
                      <div
                        className='absolute inset-0'
                        style={{
                          background:
                            "linear-gradient(180deg, transparent, rgba(0,0,0,0.6))",
                        }}
                      />
                      <div className='absolute top-2 left-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity'>
                        <button
                          onClick={() => {
                            setEditItem(cat);
                            setCatForm({
                              name_ar: cat.name_ar,
                              name_he: cat.name_he,
                              image: cat.image,
                            });
                            setShowCatModal(true);
                          }}
                          className='w-8 h-8 rounded-lg flex items-center justify-center text-white transition-colors'
                          style={{ background: "rgba(0,0,0,0.7)" }}
                        >
                          <Edit2 size={14} />
                        </button>
                        <button
                          onClick={() => deleteCat(cat.id)}
                          className='w-8 h-8 rounded-lg flex items-center justify-center text-red-400 transition-colors'
                          style={{ background: "rgba(0,0,0,0.7)" }}
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                    <div className='p-4'>
                      <p className='text-white font-black'>{cat.name_ar}</p>
                      <p className='text-white/40 text-sm'>{cat.name_he}</p>
                      <p className='text-white/30 text-xs mt-1'>
                        {cat.count} منتج
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* PRODUCTS */}
          {tab === "products" && (
            <div className='space-y-6'>
              <div className='flex items-center justify-between'>
                <div>
                  <h1 className='text-2xl font-black text-white'>المنتجات</h1>
                  <p className='text-white/50 text-sm'>
                    {products.length} منتج
                  </p>
                </div>
                <button
                  onClick={() => {
                    setEditItem(null);
                    setProdForm({
                      name_ar: "",
                      name_he: "",
                      price: "",
                      description_ar: "",
                      image: "",
                      categoryId: "",
                    });
                    setShowProdModal(true);
                  }}
                  className='flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-white transition-all hover:scale-105'
                  style={{
                    background: "linear-gradient(135deg, #CC0000, #990000)",
                  }}
                >
                  <Plus size={18} />
                  إضافة منتج
                </button>
              </div>

              <div
                className='rounded-2xl overflow-hidden'
                style={{
                  background: "#1A1A1A",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <table className='w-full'>
                  <thead>
                    <tr
                      style={{
                        borderBottom: "1px solid rgba(255,255,255,0.06)",
                      }}
                    >
                      <th className='text-right text-white/40 text-xs font-bold p-4'>
                        المنتج
                      </th>
                      <th className='text-right text-white/40 text-xs font-bold p-4 hidden md:table-cell'>
                        الفئة
                      </th>
                      <th className='text-right text-white/40 text-xs font-bold p-4'>
                        السعر
                      </th>
                      <th className='text-right text-white/40 text-xs font-bold p-4 hidden md:table-cell'>
                        التقييم
                      </th>
                      <th className='text-right text-white/40 text-xs font-bold p-4'>
                        إجراءات
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product) => {
                      const cat = categories.find(
                        (c) => c.id === product.categoryId,
                      );
                      return (
                        <tr
                          key={product.id}
                          className='transition-colors hover:bg-white/[0.02]'
                          style={{
                            borderBottom: "1px solid rgba(255,255,255,0.04)",
                          }}
                        >
                          <td className='p-4'>
                            <div className='flex items-center gap-3'>
                              <img
                                src={product.image}
                                alt={product.name_ar}
                                className='w-10 h-10 rounded-xl object-cover'
                              />
                              <div>
                                <p className='text-white font-bold text-sm'>
                                  {product.name_ar}
                                </p>
                                <p className='text-white/40 text-xs line-clamp-1'>
                                  {product.name_he}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className='p-4 hidden md:table-cell'>
                            <span className='text-white/60 text-sm'>
                              {cat?.name_ar}
                            </span>
                          </td>
                          <td className='p-4'>
                            <span className='text-brand-red font-black'>
                              ₪{product.price}
                            </span>
                          </td>
                          <td className='p-4 hidden md:table-cell'>
                            <div className='flex items-center gap-1'>
                              <Star
                                size={13}
                                className='text-yellow-400 fill-yellow-400'
                              />
                              <span className='text-white text-sm'>
                                {product.rating}
                              </span>
                            </div>
                          </td>
                          <td className='p-4'>
                            <div className='flex items-center gap-2'>
                              <button
                                onClick={() => {
                                  setEditItem(product);
                                  setProdForm({
                                    name_ar: product.name_ar,
                                    name_he: product.name_he,
                                    price: String(product.price),
                                    description_ar: product.description_ar,
                                    image: product.image,
                                    categoryId: String(product.categoryId),
                                  });
                                  setShowProdModal(true);
                                }}
                                className='w-8 h-8 rounded-lg flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-colors'
                              >
                                <Edit2 size={14} />
                              </button>
                              <button
                                onClick={() => deleteProd(product.id)}
                                className='w-8 h-8 rounded-lg flex items-center justify-center text-red-400/50 hover:text-red-400 hover:bg-red-400/10 transition-colors'
                              >
                                <Trash2 size={14} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ORDERS */}
          {tab === "orders" && (
            <div className='space-y-6'>
              <div>
                <h1 className='text-2xl font-black text-white'>الطلبات</h1>
                <p className='text-white/50 text-sm'>
                  {orders.length} طلبات نشطة
                </p>
              </div>

              <div className='space-y-3'>
                {orders.map((order) => (
                  <div
                    key={order.id}
                    className='rounded-2xl p-5'
                    style={{
                      background: "#1A1A1A",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <div className='flex items-start justify-between mb-3'>
                      <div>
                        <div className='flex items-center gap-3'>
                          <span className='text-white font-black'>
                            {order.customer}
                          </span>
                          <span
                            className='px-3 py-0.5 rounded-full text-xs font-black'
                            style={{
                              background: `${STATUS_COLORS[order.status]}22`,
                              color: STATUS_COLORS[order.status],
                            }}
                          >
                            {STATUS_LABELS_AR[order.status]}
                          </span>
                        </div>
                        <p className='text-white/40 text-sm mt-1'>
                          {order.id} · {order.phone}
                        </p>
                      </div>
                      <div className='text-right'>
                        <p className='text-brand-red font-black text-lg'>
                          ₪{order.total}
                        </p>
                        <p className='text-white/40 text-xs'>
                          {order.time} · {order.items} منتجات
                        </p>
                      </div>
                    </div>

                    <div className='flex gap-2'>
                      {Object.keys(STATUS_LABELS_AR).map((s) => (
                        <button
                          key={s}
                          onClick={() =>
                            setOrders((ords) =>
                              ords.map((o) =>
                                o.id === order.id ? { ...o, status: s } : o,
                              ),
                            )
                          }
                          className='flex-1 py-1.5 rounded-lg text-xs font-bold transition-all'
                          style={{
                            background:
                              order.status === s
                                ? `${STATUS_COLORS[s]}33`
                                : "rgba(255,255,255,0.04)",
                            color:
                              order.status === s
                                ? STATUS_COLORS[s]
                                : "rgba(255,255,255,0.3)",
                            border:
                              order.status === s
                                ? `1px solid ${STATUS_COLORS[s]}44`
                                : "1px solid transparent",
                          }}
                        >
                          {STATUS_LABELS_AR[s]}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Category Modal */}
      {showCatModal && (
        <Modal
          title={editItem ? "تعديل الفئة" : "إضافة فئة جديدة"}
          onClose={() => setShowCatModal(false)}
        >
          <div className='space-y-4'>
            <div>
              <label className='block text-white/70 text-sm mb-2'>
                اسم الفئة (عربي)
              </label>
              <input
                type='text'
                value={catForm.name_ar}
                onChange={(e) =>
                  setCatForm((f) => ({ ...f, name_ar: e.target.value }))
                }
                className='input-field'
                placeholder='مثال: لحم بقري'
              />
            </div>
            <div>
              <label className='block text-white/70 text-sm mb-2'>
                اسم الفئة (عبري)
              </label>
              <input
                type='text'
                value={catForm.name_he}
                onChange={(e) =>
                  setCatForm((f) => ({ ...f, name_he: e.target.value }))
                }
                className='input-field'
                placeholder='מثال: בקר'
                dir='rtl'
              />
            </div>
            <div>
              <label className='block text-white/70 text-sm mb-2'>
                رابط الصورة
              </label>
              <div className='flex gap-2'>
                <input
                  type='text'
                  value={catForm.image}
                  onChange={(e) =>
                    setCatForm((f) => ({ ...f, image: e.target.value }))
                  }
                  className='input-field flex-1'
                  placeholder='https://...'
                />
                <button className='px-4 py-3 rounded-xl text-white/50 border border-white/10 hover:border-brand-red hover:text-white transition-colors flex items-center gap-2 text-sm'>
                  <Upload size={16} />
                  رفع
                </button>
              </div>
            </div>
            {catForm.image && (
              <img
                src={catForm.image}
                alt='preview'
                className='w-full h-32 object-cover rounded-xl'
              />
            )}
            <div className='flex gap-3 pt-2'>
              <button
                onClick={saveCat}
                className='flex-1 py-3 rounded-xl font-black text-white transition-all hover:scale-[1.02]'
                style={{
                  background: "linear-gradient(135deg, #CC0000, #990000)",
                }}
              >
                حفظ
              </button>
              <button
                onClick={() => setShowCatModal(false)}
                className='flex-1 py-3 rounded-xl font-bold text-white/60 border border-white/10 hover:border-white/30 transition-colors'
              >
                إلغاء
              </button>
            </div>
          </div>
        </Modal>
      )}

      {/* Product Modal */}
      {showProdModal && (
        <Modal
          title={editItem ? "تعديل المنتج" : "إضافة منتج جديد"}
          onClose={() => setShowProdModal(false)}
        >
          <div className='space-y-4 max-h-96 overflow-y-auto'>
            <div className='grid grid-cols-2 gap-3'>
              <div>
                <label className='block text-white/70 text-sm mb-2'>
                  الاسم (عربي)
                </label>
                <input
                  type='text'
                  value={prodForm.name_ar}
                  onChange={(e) =>
                    setProdForm((f) => ({ ...f, name_ar: e.target.value }))
                  }
                  className='input-field'
                  placeholder='اسم المنتج'
                />
              </div>
              <div>
                <label className='block text-white/70 text-sm mb-2'>
                  الاسم (عبري)
                </label>
                <input
                  type='text'
                  value={prodForm.name_he}
                  onChange={(e) =>
                    setProdForm((f) => ({ ...f, name_he: e.target.value }))
                  }
                  className='input-field'
                  placeholder='שם המוצר'
                  dir='rtl'
                />
              </div>
            </div>
            <div className='grid grid-cols-2 gap-3'>
              <div>
                <label className='block text-white/70 text-sm mb-2'>
                  السعر (₪/كغ)
                </label>
                <input
                  type='number'
                  value={prodForm.price}
                  onChange={(e) =>
                    setProdForm((f) => ({ ...f, price: e.target.value }))
                  }
                  className='input-field'
                  placeholder='0'
                />
              </div>
              <div>
                <label className='block text-white/70 text-sm mb-2'>
                  الفئة
                </label>
                <select
                  value={prodForm.categoryId}
                  onChange={(e) =>
                    setProdForm((f) => ({ ...f, categoryId: e.target.value }))
                  }
                  className='input-field'
                >
                  <option value=''>اختر فئة</option>
                  {categories.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name_ar}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label className='block text-white/70 text-sm mb-2'>الوصف</label>
              <textarea
                value={prodForm.description_ar}
                onChange={(e) =>
                  setProdForm((f) => ({ ...f, description_ar: e.target.value }))
                }
                className='input-field resize-none'
                rows={3}
                placeholder='وصف المنتج...'
              />
            </div>
            <div>
              <label className='block text-white/70 text-sm mb-2'>
                رابط الصورة
              </label>
              <div className='flex gap-2'>
                <input
                  type='text'
                  value={prodForm.image}
                  onChange={(e) =>
                    setProdForm((f) => ({ ...f, image: e.target.value }))
                  }
                  className='input-field flex-1'
                  placeholder='https://...'
                />
                <button className='px-4 py-3 rounded-xl text-white/50 border border-white/10 hover:border-brand-red hover:text-white transition-colors flex items-center gap-2 text-sm'>
                  <Upload size={16} />
                </button>
              </div>
            </div>
            {prodForm.image && (
              <img
                src={prodForm.image}
                alt='preview'
                className='w-full h-28 object-cover rounded-xl'
              />
            )}
          </div>
          <div className='flex gap-3 pt-4'>
            <button
              onClick={saveProd}
              className='flex-1 py-3 rounded-xl font-black text-white'
              style={{
                background: "linear-gradient(135deg, #CC0000, #990000)",
              }}
            >
              حفظ المنتج
            </button>
            <button
              onClick={() => setShowProdModal(false)}
              className='flex-1 py-3 rounded-xl font-bold text-white/60 border border-white/10'
            >
              إلغاء
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
}
