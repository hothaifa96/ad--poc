import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CheckCircle,
  Package,
  Truck,
  Home,
  Receipt,
  CreditCard,
} from "lucide-react";
import { useLang } from "../context/LanguageContext";
import Navbar from "../components/Navbar";

const orderId = "ORD-" + Math.floor(1000 + Math.random() * 9000);

const steps = [
  {
    icon: CheckCircle,
    label_ar: "تم تأكيد الطلب",
    label_he: "ההזמנה אושרה",
    done: true,
  },
  { icon: Package, label_ar: "جاري التحضير", label_he: "בהכנה", done: false },
  {
    icon: Truck,
    label_ar: "في الطريق إليك",
    label_he: "בדרך אליך",
    done: false,
  },
  { icon: Home, label_ar: "تم التسليم", label_he: "נמסר", done: false },
];

export default function ConfirmationPage() {
  const { t, lang } = useLang();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    setShowConfetti(true);
    const timer = setTimeout(() => setShowConfetti(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='min-h-screen bg-brand-black'>
      <Navbar />

      {/* Confetti-like particles */}
      {showConfetti && (
        <div className='fixed inset-0 z-50 pointer-events-none overflow-hidden'>
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className='absolute w-2 h-2 rounded-full'
              style={{
                left: `${Math.random() * 100}%`,
                top: "-10px",
                background:
                  i % 3 === 0 ? "#CC0000" : i % 3 === 1 ? "#FFFFFF" : "#990000",
                animation: `confettiFall ${1 + Math.random() * 2}s ease-in ${Math.random() * 0.5}s forwards`,
              }}
            />
          ))}
        </div>
      )}

      <div className='pt-20 pb-24 px-4 max-w-md mx-auto'>
        {/* Success icon */}
        <div className='text-center py-10'>
          <div
            className='w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6'
            style={{
              background: "linear-gradient(135deg, #16A34A, #15803D)",
              boxShadow: "0 0 40px rgba(22,163,74,0.5)",
              animation: "scaleIn 0.5s ease-out",
            }}
          >
            <CheckCircle size={48} className='text-white' />
          </div>

          <h1
            className='text-3xl font-black text-white mb-2'
            style={{ animation: "fadeSlideUp 0.5s ease-out 0.2s both" }}
          >
            {t.orderConfirmed}
          </h1>
          <p
            className='text-brand-gray-light text-sm mb-1'
            style={{ animation: "fadeSlideUp 0.5s ease-out 0.3s both" }}
          >
            {t.orderId}:{" "}
            <span className='text-brand-red font-black'>{orderId}</span>
          </p>
          <p
            className='text-brand-gray-light text-sm'
            style={{ animation: "fadeSlideUp 0.5s ease-out 0.4s both" }}
          >
            {t.estimatedDelivery}:{" "}
            <span className='text-white font-bold'>30–45 {t.minutes}</span>
          </p>
        </div>

        {/* Receipt */}
        <div
          className='rounded-3xl p-6 mb-6'
          style={{
            background: "#1A1A1A",
            border: "1px solid rgba(255,255,255,0.08)",
            animation: "fadeSlideUp 0.5s ease-out 0.5s both",
          }}
        >
          <div className='flex items-center gap-3 mb-4'>
            <div
              className='w-9 h-9 rounded-xl flex items-center justify-center'
              style={{ background: "rgba(255,255,255,0.06)" }}
            >
              <Receipt size={18} className='text-white/60' />
            </div>
            <h2 className='text-white font-black'>
              {lang === "ar" ? "إيصال الطلب" : "קבלה"}
            </h2>
          </div>

          <div className='space-y-2 text-sm border-t border-white/10 pt-4'>
            <div className='flex justify-between'>
              <span className='text-white/60'>{t.orderId}</span>
              <span className='text-white font-mono'>{orderId}</span>
            </div>
            <div className='flex justify-between'>
              <span className='text-white/60'>
                {lang === "ar" ? "التاريخ" : "תאריך"}
              </span>
              <span className='text-white'>
                {new Date().toLocaleDateString(
                  lang === "ar" ? "ar-IL" : "he-IL",
                )}
              </span>
            </div>
            <div className='flex justify-between'>
              <span className='text-white/60'>
                {lang === "ar" ? "طريقة الدفع" : "אמצעי תשלום"}
              </span>
              <span className='text-white flex items-center gap-1.5'>
                <CreditCard size={14} className='inline' />{" "}
                {lang === "ar" ? "بطاقة ائتمان" : "כרטיס אשראי"}
              </span>
            </div>
            <div className='border-t border-white/10 pt-2 flex justify-between font-black text-base'>
              <span className='text-white'>{t.total}</span>
              <span className='text-brand-red'>{t.nis}285</span>
            </div>
          </div>
        </div>

        {/* Delivery Progress */}
        <div
          className='rounded-3xl p-6 mb-8'
          style={{
            background: "#1A1A1A",
            border: "1px solid rgba(255,255,255,0.08)",
            animation: "fadeSlideUp 0.5s ease-out 0.6s both",
          }}
        >
          <h2 className='text-white font-black mb-6'>
            {lang === "ar" ? "تتبع طلبك" : "עקוב אחר ההזמנה"}
          </h2>
          <div className='relative'>
            {/* Progress line */}
            <div
              className='absolute top-5 right-5 left-5 h-0.5'
              style={{ background: "rgba(255,255,255,0.1)" }}
            />
            <div
              className='absolute top-5 right-5 h-0.5 transition-all duration-1000'
              style={{
                background: "linear-gradient(90deg, #CC0000, #FF1A1A)",
                width: `${(currentStep / (steps.length - 1)) * (100 - 20)}%`,
              }}
            />

            <div className='flex justify-between relative z-10'>
              {steps.map((step, i) => {
                const Icon = step.icon;
                const active = i === currentStep;
                const done = i < currentStep;
                return (
                  <div
                    key={i}
                    className='flex flex-col items-center gap-2 w-16'
                  >
                    <button
                      onClick={() => setCurrentStep(i)}
                      className='w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300'
                      style={{
                        background: done
                          ? "#16A34A"
                          : active
                            ? "#CC0000"
                            : "rgba(255,255,255,0.08)",
                        border: active
                          ? "2px solid rgba(204,0,0,0.5)"
                          : "2px solid transparent",
                        boxShadow: active
                          ? "0 0 15px rgba(204,0,0,0.4)"
                          : "none",
                      }}
                    >
                      <Icon size={18} className='text-white' />
                    </button>
                    <p className='text-white/60 text-xs text-center leading-tight'>
                      {lang === "ar" ? step.label_ar : step.label_he}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <p className='text-center text-white/40 text-xs mt-6'>
            {lang === "ar"
              ? "* اضغط على مرحلة لمحاكاة التتبع"
              : "* לחץ על שלב לסימולציית מעקב"}
          </p>
        </div>

        {/* Back to shopping */}
        <button
          onClick={() => navigate("/categories")}
          className='w-full py-4 rounded-2xl font-black text-white text-lg transition-all hover:scale-[1.02] active:scale-95'
          style={{
            background: "linear-gradient(135deg, #CC0000, #990000)",
            boxShadow: "0 4px 20px rgba(204,0,0,0.4)",
          }}
        >
          {t.backToShopping}
        </button>
      </div>

      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          from { transform: scale(0); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes confettiFall {
          0% { transform: translateY(-10px) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
