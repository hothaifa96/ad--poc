import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Phone, Lock, User, Eye, EyeOff, ArrowRight } from "lucide-react";
import { useLang } from "../context/LanguageContext";
import Navbar from "../components/Navbar";
import CartSidebar from "../components/CartSidebar";

export default function AuthPage() {
  const { t } = useLang();
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    password: "",
    confirm: "",
  });
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!form.phone) newErrors.phone = "رقم الهاتف مطلوب";
    if (!form.password) newErrors.password = "كلمة المرور مطلوبة";
    if (!isLogin && !form.name) newErrors.name = "الاسم مطلوب";
    if (!isLogin && form.password !== form.confirm)
      newErrors.confirm = "كلمة المرور غير متطابقة";

    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return;
    }
    navigate("/payment");
  };

  return (
    <div className='min-h-screen bg-brand-black'>
      <Navbar />
      <CartSidebar />

      <div className='pt-20 pb-24 px-4 max-w-md mx-auto'>
        {/* Header */}
        <div
          className='text-center mb-8'
          style={{ animation: "fadeSlideUp 0.5s ease-out" }}
        >
          <div
            className='w-20 h-20 rounded-2xl mx-auto mb-4 overflow-hidden'
            style={{
              boxShadow: "0 0 30px rgba(204,0,0,0.4)",
              border: "2px solid rgba(204,0,0,0.4)",
            }}
          >
            <img
              src={import.meta.env.BASE_URL + "logo.jpeg"}
              alt='أبو دغش'
              className='w-full h-full object-cover'
            />
          </div>
          <h1 className='text-2xl font-black text-white mb-1'>
            {isLogin ? t.login : t.signUp}
          </h1>
          <p className='text-brand-gray-light text-sm'>
            {isLogin ? "سجل دخولك لإتمام الطلب" : "أنشئ حساباً لإتمام الطلب"}
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className='space-y-4'
          style={{ animation: "fadeSlideUp 0.5s ease-out 0.1s both" }}
        >
          {!isLogin && (
            <div>
              <label className='block text-white/70 text-sm mb-2 font-semibold'>
                {t.fullName}
              </label>
              <div className='relative'>
                <User
                  size={18}
                  className='absolute right-4 top-1/2 -translate-y-1/2 text-brand-gray-light'
                />
                <input
                  type='text'
                  placeholder='محمد أحمد'
                  value={form.name}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, name: e.target.value }))
                  }
                  className='input-field pr-12'
                />
              </div>
              {errors.name && (
                <p className='text-red-400 text-xs mt-1'>{errors.name}</p>
              )}
            </div>
          )}

          <div>
            <label className='block text-white/70 text-sm mb-2 font-semibold'>
              {t.phone}
            </label>
            <div className='relative'>
              <Phone
                size={18}
                className='absolute right-4 top-1/2 -translate-y-1/2 text-brand-gray-light'
              />
              <input
                type='tel'
                placeholder='050-0000000'
                value={form.phone}
                onChange={(e) =>
                  setForm((f) => ({ ...f, phone: e.target.value }))
                }
                className='input-field pr-12'
                dir='ltr'
              />
            </div>
            {errors.phone && (
              <p className='text-red-400 text-xs mt-1'>{errors.phone}</p>
            )}
          </div>

          <div>
            <label className='block text-white/70 text-sm mb-2 font-semibold'>
              {t.password}
            </label>
            <div className='relative'>
              <Lock
                size={18}
                className='absolute right-4 top-1/2 -translate-y-1/2 text-brand-gray-light'
              />
              <input
                type={showPass ? "text" : "password"}
                placeholder='••••••••'
                value={form.password}
                onChange={(e) =>
                  setForm((f) => ({ ...f, password: e.target.value }))
                }
                className='input-field pr-12 pl-12'
              />
              <button
                type='button'
                onClick={() => setShowPass((s) => !s)}
                className='absolute left-4 top-1/2 -translate-y-1/2 text-brand-gray-light hover:text-white transition-colors'
              >
                {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {errors.password && (
              <p className='text-red-400 text-xs mt-1'>{errors.password}</p>
            )}
          </div>

          {!isLogin && (
            <div>
              <label className='block text-white/70 text-sm mb-2 font-semibold'>
                {t.confirmPassword}
              </label>
              <div className='relative'>
                <Lock
                  size={18}
                  className='absolute right-4 top-1/2 -translate-y-1/2 text-brand-gray-light'
                />
                <input
                  type={showPass ? "text" : "password"}
                  placeholder='••••••••'
                  value={form.confirm}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, confirm: e.target.value }))
                  }
                  className='input-field pr-12'
                />
              </div>
              {errors.confirm && (
                <p className='text-red-400 text-xs mt-1'>{errors.confirm}</p>
              )}
            </div>
          )}

          {/* Submit */}
          <button
            type='submit'
            className='w-full py-4 rounded-2xl font-black text-white text-lg mt-2 transition-all hover:scale-[1.02] active:scale-95'
            style={{
              background: "linear-gradient(135deg, #CC0000, #990000)",
              boxShadow: "0 4px 24px rgba(204,0,0,0.4)",
            }}
          >
            {isLogin ? t.login : t.signUp} ←
          </button>

          {/* Divider */}
          <div className='flex items-center gap-3 my-2'>
            <div className='flex-1 h-px bg-white/10' />
            <span className='text-white/40 text-xs'>أو</span>
            <div className='flex-1 h-px bg-white/10' />
          </div>

          {/* Guest */}
          <button
            type='button'
            onClick={() => navigate("/payment")}
            className='w-full py-3 rounded-2xl font-bold text-white/70 text-base transition-all hover:text-white hover:border-brand-red border border-white/10'
          >
            {t.continueAsGuest}
          </button>
        </form>

        {/* Toggle */}
        <p className='text-center text-brand-gray-light text-sm mt-6'>
          {isLogin ? t.noAccount : t.haveAccount}{" "}
          <button
            onClick={() => setIsLogin((l) => !l)}
            className='text-brand-red font-bold hover:underline'
          >
            {isLogin ? t.signUp : t.login}
          </button>
        </p>
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
