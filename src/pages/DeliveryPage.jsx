import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Truck,
  MapPin,
  Phone,
  CheckCircle,
  Clock,
  Package,
  Navigation,
  X,
  ChevronDown,
  Star,
  User,
  AlertCircle,
  BarChart2,
} from "lucide-react";
import { adminOrders } from "../data/mockData";
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

const DELIVERY_ADDRESSES = {
  "ORD-1001": "شارع الملك فيصل 14، الناصرة",
  "ORD-1002": "حي الزيتون، الطيبة",
  "ORD-1003": "شارع الاستقلال 7، باقة الغربية",
  "ORD-1004": "حي النزهة 22، أم الفحم",
  "ORD-1005": "شارع الأحرار 5، طمرة",
};

function StatCard({ icon: Icon, label, value, color }) {
  return (
    <div
      className='rounded-2xl p-4'
      style={{
        background: "#1A1A1A",
        border: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className='flex items-center justify-between mb-3'>
        <div
          className='w-9 h-9 rounded-xl flex items-center justify-center'
          style={{ background: `${color}22` }}
        >
          <Icon size={18} style={{ color }} />
        </div>
      </div>
      <p className='text-2xl font-black text-white mb-0.5'>{value}</p>
      <p className='text-white/50 text-xs'>{label}</p>
    </div>
  );
}

function OrderDetailModal({ order, onClose, onStatusChange }) {
  const address = DELIVERY_ADDRESSES[order.id] || "عنوان التوصيل";
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
          className='flex items-center justify-between p-5 border-b'
          style={{ borderColor: "rgba(255,255,255,0.08)" }}
        >
          <div>
            <h3 className='text-white font-black text-lg'>{order.id}</h3>
            <span
              className='text-xs font-bold px-2 py-0.5 rounded-full'
              style={{
                background: `${STATUS_COLORS[order.status]}22`,
                color: STATUS_COLORS[order.status],
              }}
            >
              {STATUS_LABELS_AR[order.status]}
            </span>
          </div>
          <button
            onClick={onClose}
            className='text-white/40 hover:text-white transition-colors'
          >
            <X size={20} />
          </button>
        </div>

        <div className='p-5 space-y-4'>
          {/* Customer info */}
          <div
            className='rounded-2xl p-4 flex items-center gap-4'
            style={{ background: "rgba(255,255,255,0.04)" }}
          >
            <div
              className='w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0'
              style={{ background: "rgba(204,0,0,0.2)" }}
            >
              <User size={20} className='text-brand-red' />
            </div>
            <div className='flex-1'>
              <p className='text-white font-bold'>{order.customer}</p>
              <p className='text-white/50 text-sm'>{order.phone}</p>
            </div>
            <a
              href={`tel:${order.phone}`}
              className='w-9 h-9 rounded-full flex items-center justify-center transition-colors hover:bg-green-500/20'
              style={{ background: "rgba(22,163,74,0.15)" }}
            >
              <Phone size={16} className='text-green-400' />
            </a>
          </div>

          {/* Address */}
          <div
            className='rounded-2xl p-4 flex items-start gap-3'
            style={{ background: "rgba(255,255,255,0.04)" }}
          >
            <MapPin size={18} className='text-brand-red mt-0.5 flex-shrink-0' />
            <div>
              <p className='text-white/50 text-xs mb-0.5'>عنوان التوصيل</p>
              <p className='text-white font-semibold text-sm'>{address}</p>
            </div>
          </div>

          {/* Order summary */}
          <div
            className='rounded-2xl p-4'
            style={{ background: "rgba(255,255,255,0.04)" }}
          >
            <div className='flex justify-between mb-2'>
              <span className='text-white/50 text-sm'>عدد المنتجات</span>
              <span className='text-white font-bold'>{order.items} منتجات</span>
            </div>
            <div className='flex justify-between'>
              <span className='text-white/50 text-sm'>إجمالي الطلب</span>
              <span className='text-brand-red font-black'>₪{order.total}</span>
            </div>
          </div>

          {/* Actions */}
          <div className='flex gap-3'>
            {order.status === "delivering" && (
              <button
                onClick={() => onStatusChange(order.id, "delivered")}
                className='flex-1 py-3 rounded-2xl font-bold text-white text-sm flex items-center justify-center gap-2 transition-all hover:scale-[1.02]'
                style={{
                  background: "linear-gradient(135deg, #16A34A, #15803D)",
                }}
              >
                <CheckCircle size={16} />
                إتمام التوصيل
              </button>
            )}
            {order.status === "confirmed" || order.status === "preparing" ? (
              <button
                onClick={() => onStatusChange(order.id, "delivering")}
                className='flex-1 py-3 rounded-2xl font-bold text-white text-sm flex items-center justify-center gap-2 transition-all hover:scale-[1.02]'
                style={{
                  background: "linear-gradient(135deg, #F97316, #EA6C00)",
                }}
              >
                <Truck size={16} />
                بدء التوصيل
              </button>
            ) : null}
            <a
              href={`https://waze.com/ul?q=${encodeURIComponent(DELIVERY_ADDRESSES[order.id] || "")}`}
              target='_blank'
              rel='noreferrer'
              className='flex-1 py-3 rounded-2xl font-bold text-white text-sm flex items-center justify-center gap-2 transition-all hover:scale-[1.02]'
              style={{
                background: "linear-gradient(135deg, #3B82F6, #2563EB)",
              }}
            >
              <Navigation size={16} />
              ملاحة
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DeliveryPage() {
  const navigate = useNavigate();
  const { lang, toggleLang } = useLang();
  const [orders, setOrders] = useState(
    adminOrders.filter((o) =>
      ["confirmed", "preparing", "delivering", "delivered"].includes(o.status),
    ),
  );
  const [activeTab, setActiveTab] = useState("active");
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [driverName] = useState("أحمد المندوب");

  const activeOrders = orders.filter((o) => o.status !== "delivered");
  const completedOrders = orders.filter((o) => o.status === "delivered");
  const displayOrders = activeTab === "active" ? activeOrders : completedOrders;

  const handleStatusChange = (orderId, newStatus) => {
    setOrders((prev) =>
      prev.map((o) => (o.id === orderId ? { ...o, status: newStatus } : o)),
    );
    setSelectedOrder(null);
  };

  const todayEarnings = completedOrders.length * 25 + activeOrders.length * 15;

  return (
    <div
      className='min-h-screen'
      style={{
        background: "#0A0A0A",
        direction: "rtl",
        fontFamily: "Cairo, sans-serif",
      }}
    >
      {/* Top bar */}
      <div
        className='fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-4 h-16'
        style={{
          background: "rgba(10,10,10,0.97)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(204,0,0,0.2)",
        }}
      >
        <button
          onClick={() => navigate("/")}
          className='flex items-center gap-2 group'
        >
          <div className='w-8 h-8 rounded-xl overflow-hidden border border-brand-red/40'>
            <img
              src={import.meta.env.BASE_URL + "logo.jpeg"}
              alt='أبو دغش'
              className='w-full h-full object-cover'
            />
          </div>
          <span className='font-black text-white text-sm hidden sm:block'>
            أبو دغش
          </span>
        </button>

        <div className='flex items-center gap-2'>
          <Truck size={18} className='text-brand-red' />
          <span className='text-white font-black text-sm'>
            {lang === "ar" ? "بوابة المندوب" : "פורטל שליח"}
          </span>
        </div>

        <button
          onClick={toggleLang}
          className='px-3 py-1.5 rounded-full text-xs font-bold border border-white/20 hover:border-brand-red text-white transition-colors'
        >
          {lang === "ar" ? "עב" : "ع"}
        </button>
      </div>

      <div className='pt-20 pb-24 px-4 max-w-2xl mx-auto'>
        {/* Driver greeting */}
        <div
          className='rounded-3xl p-5 mb-6 flex items-center gap-4 relative overflow-hidden'
          style={{
            background: "linear-gradient(135deg, #1A0000, #3D0000)",
            border: "1px solid rgba(204,0,0,0.2)",
          }}
        >
          <div
            className='absolute inset-0 opacity-10'
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&fit=crop')`,
              backgroundSize: "cover",
            }}
          />
          <div
            className='w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 relative z-10'
            style={{
              background: "rgba(204,0,0,0.3)",
              border: "1px solid rgba(204,0,0,0.4)",
            }}
          >
            <Truck size={24} className='text-brand-red' />
          </div>
          <div className='relative z-10'>
            <p className='text-white/60 text-xs'>
              {lang === "ar" ? "مرحباً يا مندوب" : "ברוך הבא שליח"}
            </p>
            <p className='text-white font-black text-lg'>{driverName}</p>
            <p className='text-brand-red text-xs font-semibold'>
              {lang === "ar"
                ? `${activeOrders.length} توصيلات معلقة`
                : `${activeOrders.length} משלוחים ממתינים`}
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className='grid grid-cols-3 gap-3 mb-6'>
          <StatCard
            icon={Package}
            label={lang === "ar" ? "إجمالي" : 'סה"כ'}
            value={orders.length}
            color='#3B82F6'
          />
          <StatCard
            icon={Truck}
            label={lang === "ar" ? "نشط" : "פעיל"}
            value={activeOrders.length}
            color='#F97316'
          />
          <StatCard
            icon={CheckCircle}
            label={lang === "ar" ? "مكتمل" : "הושלם"}
            value={completedOrders.length}
            color='#16A34A'
          />
        </div>

        {/* Today earnings banner */}
        <div
          className='rounded-2xl p-4 flex items-center justify-between mb-6'
          style={{
            background: "#1A1A1A",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div className='flex items-center gap-3'>
            <div
              className='w-10 h-10 rounded-xl flex items-center justify-center'
              style={{ background: "rgba(251,191,36,0.15)" }}
            >
              <BarChart2 size={18} className='text-yellow-400' />
            </div>
            <div>
              <p className='text-white/50 text-xs'>
                {lang === "ar" ? "أرباح اليوم (تقديري)" : "רווחי היום (משוער)"}
              </p>
              <p className='text-yellow-400 font-black text-lg'>
                ₪{todayEarnings}
              </p>
            </div>
          </div>
          <Star size={20} className='text-yellow-400 fill-yellow-400' />
        </div>

        {/* Tabs */}
        <div
          className='flex rounded-2xl p-1 mb-5'
          style={{ background: "#1A1A1A" }}
        >
          {[
            {
              id: "active",
              label_ar: `نشط (${activeOrders.length})`,
              label_he: `פעיל (${activeOrders.length})`,
              color: "#F97316",
            },
            {
              id: "completed",
              label_ar: `مكتمل (${completedOrders.length})`,
              label_he: `הושלם (${completedOrders.length})`,
              color: "#16A34A",
            },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className='flex-1 py-2.5 rounded-xl text-sm font-bold transition-all'
              style={
                activeTab === tab.id
                  ? { background: tab.color, color: "#fff" }
                  : { color: "rgba(255,255,255,0.4)" }
              }
            >
              {lang === "ar" ? tab.label_ar : tab.label_he}
            </button>
          ))}
        </div>

        {/* Orders list */}
        <div className='space-y-3'>
          {displayOrders.length === 0 ? (
            <div className='text-center py-16'>
              <CheckCircle
                size={48}
                className='text-green-500 mx-auto mb-3 opacity-60'
              />
              <p className='text-white/50 font-semibold'>
                {lang === "ar"
                  ? "لا توجد توصيلات في هذا القسم"
                  : "אין משלוחים בקטגוריה זו"}
              </p>
            </div>
          ) : (
            displayOrders.map((order, i) => (
              <div
                key={order.id}
                className='rounded-2xl p-4 cursor-pointer transition-all hover:scale-[1.01]'
                style={{
                  background: "#1A1A1A",
                  border: `1px solid ${order.status === "delivering" ? "rgba(249,115,22,0.4)" : "rgba(255,255,255,0.06)"}`,
                  animation: `fadeSlideUp 0.4s ease-out ${i * 0.07}s both`,
                }}
                onClick={() => setSelectedOrder(order)}
              >
                <div className='flex items-center justify-between mb-3'>
                  <div className='flex items-center gap-2'>
                    <span className='text-white font-black text-sm'>
                      {order.id}
                    </span>
                    {order.status === "delivering" && (
                      <span
                        className='text-xs px-2 py-0.5 rounded-full font-bold animate-pulse'
                        style={{
                          background: "rgba(249,115,22,0.2)",
                          color: "#F97316",
                        }}
                      >
                        {lang === "ar" ? "● نشط الآن" : "● פעיל עכשיו"}
                      </span>
                    )}
                  </div>
                  <div className='flex items-center gap-1'>
                    <Clock size={12} className='text-white/30' />
                    <span className='text-white/40 text-xs'>{order.time}</span>
                  </div>
                </div>

                <div className='flex items-center gap-3 mb-3'>
                  <div
                    className='w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0'
                    style={{ background: "rgba(204,0,0,0.15)" }}
                  >
                    <User size={18} className='text-brand-red' />
                  </div>
                  <div className='flex-1 min-w-0'>
                    <p className='text-white font-bold text-sm'>
                      {order.customer}
                    </p>
                    <p className='text-white/40 text-xs truncate'>
                      {DELIVERY_ADDRESSES[order.id] || "عنوان التوصيل"}
                    </p>
                  </div>
                  <div className='text-left'>
                    <p className='text-brand-red font-black text-base'>
                      ₪{order.total}
                    </p>
                    <p className='text-white/40 text-xs'>
                      {order.items} منتجات
                    </p>
                  </div>
                </div>

                <div className='flex items-center justify-between'>
                  <span
                    className='text-xs font-bold px-2.5 py-1 rounded-full'
                    style={{
                      background: `${STATUS_COLORS[order.status]}22`,
                      color: STATUS_COLORS[order.status],
                    }}
                  >
                    {STATUS_LABELS_AR[order.status]}
                  </span>

                  <div className='flex gap-2'>
                    <a
                      href={`tel:${order.phone}`}
                      onClick={(e) => e.stopPropagation()}
                      className='w-8 h-8 rounded-full flex items-center justify-center transition-colors'
                      style={{ background: "rgba(22,163,74,0.15)" }}
                    >
                      <Phone size={14} className='text-green-400' />
                    </a>
                    <a
                      href={`https://waze.com/ul?q=${encodeURIComponent(DELIVERY_ADDRESSES[order.id] || "")}`}
                      target='_blank'
                      rel='noreferrer'
                      onClick={(e) => e.stopPropagation()}
                      className='w-8 h-8 rounded-full flex items-center justify-center transition-colors'
                      style={{ background: "rgba(59,130,246,0.15)" }}
                    >
                      <Navigation size={14} className='text-blue-400' />
                    </a>
                    {order.status === "delivering" && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleStatusChange(order.id, "delivered");
                        }}
                        className='w-8 h-8 rounded-full flex items-center justify-center transition-colors'
                        style={{ background: "rgba(22,163,74,0.15)" }}
                      >
                        <CheckCircle size={14} className='text-green-400' />
                      </button>
                    )}
                    {(order.status === "confirmed" ||
                      order.status === "preparing") && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleStatusChange(order.id, "delivering");
                        }}
                        className='w-8 h-8 rounded-full flex items-center justify-center transition-colors'
                        style={{ background: "rgba(249,115,22,0.15)" }}
                      >
                        <Truck size={14} className='text-orange-400' />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Tips card */}
        <div
          className='mt-6 rounded-2xl p-4 flex gap-3'
          style={{
            background: "rgba(251,191,36,0.08)",
            border: "1px solid rgba(251,191,36,0.2)",
          }}
        >
          <AlertCircle
            size={18}
            className='text-yellow-400 flex-shrink-0 mt-0.5'
          />
          <p className='text-yellow-300/80 text-xs leading-relaxed'>
            {lang === "ar"
              ? "تذكر: تأكد من هوية العميل قبل تسليم الطلب، وحافظ على برودة المنتجات أثناء التوصيل."
              : "זכור: ודא את זהות הלקוח לפני מסירת ההזמנה, ושמור על קרירות המוצרים בזמן המשלוח."}
          </p>
        </div>
      </div>

      {/* Detail modal */}
      {selectedOrder && (
        <OrderDetailModal
          order={selectedOrder}
          onClose={() => setSelectedOrder(null)}
          onStatusChange={handleStatusChange}
        />
      )}

      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
