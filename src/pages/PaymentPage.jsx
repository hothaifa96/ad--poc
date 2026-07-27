import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CreditCard, Smartphone, Banknote, MapPin, Clock, Check, ChevronDown } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { useLang } from '../context/LanguageContext'
import Navbar from '../components/Navbar'
import CartSidebar from '../components/CartSidebar'

const paymentMethods = [
  {
    id: 'card',
    icon: <CreditCard size={24} />,
    label_ar: 'بطاقة ائتمان / ڤيزا',
    label_he: 'כרטיס אשראי / ויזה',
    desc_ar: 'Visa • Mastercard • American Express',
    desc_he: 'Visa • Mastercard • American Express',
    color: '#1A56DB',
    emoji: '💳',
  },
  {
    id: 'apple',
    icon: null,
    label_ar: 'Apple Pay',
    label_he: 'Apple Pay',
    desc_ar: 'الدفع السريع بجهاز Apple',
    desc_he: 'תשלום מהיר עם מכשיר Apple',
    color: '#1A1A1A',
    emoji: '',
    appleIcon: true,
  },
  {
    id: 'google',
    icon: null,
    label_ar: 'Google Pay',
    label_he: 'Google Pay',
    desc_ar: 'الدفع السريع بجهاز Android',
    desc_he: 'תשלום מהיר עם מכשיר Android',
    color: '#1A1A1A',
    emoji: '',
    googleIcon: true,
  },
  {
    id: 'cash',
    icon: <Banknote size={24} />,
    label_ar: 'دفع نقدي عند الاستلام',
    label_he: 'תשלום במזומן',
    desc_ar: 'ادفع نقداً عند وصول المندوب',
    desc_he: 'שלם במזומן כשהשליח מגיע',
    color: '#16A34A',
    emoji: '💵',
  },
]

export default function PaymentPage() {
  const { t, lang, name } = useLang()
  const { items, subtotal, deliveryFee, total, clearCart } = useCart()
  const navigate = useNavigate()
  const [selected, setSelected] = useState(null)
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [notes, setNotes] = useState('')
  const [cardNum, setCardNum] = useState('')
  const [loading, setLoading] = useState(false)

  const handleOrder = () => {
    if (!selected || !address) return
    setLoading(true)
    setTimeout(() => {
      clearCart()
      navigate('/confirmation')
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-brand-black">
      <Navbar />
      <CartSidebar />

      <div className="pt-20 pb-24 px-4 max-w-2xl mx-auto space-y-6">

        {/* Address Section */}
        <div
          className="rounded-3xl p-6"
          style={{ background: '#1A1A1A', border: '1px solid rgba(255,255,255,0.08)' }}
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #CC0000, #990000)' }}>
              <MapPin size={18} className="text-white" />
            </div>
            <h2 className="text-white font-black text-lg">{t.address}</h2>
          </div>

          <div className="space-y-3">
            <input
              type="text"
              placeholder={lang === 'ar' ? 'اسم الشارع ورقم البيت' : 'שם רחוב ומספר בית'}
              value={address}
              onChange={e => setAddress(e.target.value)}
              className="input-field"
            />
            <input
              type="text"
              placeholder={lang === 'ar' ? 'المدينة' : 'עיר'}
              value={city}
              onChange={e => setCity(e.target.value)}
              className="input-field"
            />
            <textarea
              placeholder={lang === 'ar' ? 'ملاحظات للمندوب (اختياري)' : 'הערות לשליח (אופציונלי)'}
              value={notes}
              onChange={e => setNotes(e.target.value)}
              className="input-field resize-none"
              rows={2}
            />
          </div>

          <div className="flex items-center gap-2 mt-4 p-3 rounded-xl" style={{ background: 'rgba(204,0,0,0.1)', border: '1px solid rgba(204,0,0,0.2)' }}>
            <Clock size={16} className="text-brand-red" />
            <span className="text-white/70 text-sm">{lang === 'ar' ? 'وقت التوصيل المتوقع:' : 'זמן אספקה משוער:'}</span>
            <span className="text-white font-bold text-sm">30–45 {lang === 'ar' ? 'دقيقة' : 'דקות'}</span>
          </div>
        </div>

        {/* Payment Methods */}
        <div
          className="rounded-3xl p-6"
          style={{ background: '#1A1A1A', border: '1px solid rgba(255,255,255,0.08)' }}
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #CC0000, #990000)' }}>
              <CreditCard size={18} className="text-white" />
            </div>
            <h2 className="text-white font-black text-lg">{t.paymentMethod}</h2>
          </div>

          <div className="space-y-3">
            {paymentMethods.map(method => (
              <button
                key={method.id}
                onClick={() => setSelected(method.id)}
                className="w-full flex items-center gap-4 p-4 rounded-2xl transition-all duration-200 text-right"
                style={{
                  background: selected === method.id ? 'rgba(204,0,0,0.1)' : 'rgba(255,255,255,0.04)',
                  border: selected === method.id ? '2px solid #CC0000' : '2px solid rgba(255,255,255,0.06)',
                  transform: selected === method.id ? 'scale(1.01)' : 'scale(1)',
                }}
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 text-xl font-black"
                  style={{ background: `${method.color}22`, color: method.color }}
                >
                  {method.appleIcon ? (
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="white">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                  ) : method.googleIcon ? (
                    <svg viewBox="0 0 24 24" width="24" height="24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                  ) : (
                    <span style={{ fontSize: 22 }}>{method.emoji}</span>
                  )}
                </div>

                {/* Label */}
                <div className="flex-1">
                  <p className="text-white font-bold text-base">{lang === 'ar' ? method.label_ar : method.label_he}</p>
                  <p className="text-white/50 text-xs">{lang === 'ar' ? method.desc_ar : method.desc_he}</p>
                </div>

                {/* Selected indicator */}
                <div
                  className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 transition-all"
                  style={{
                    background: selected === method.id ? '#CC0000' : 'transparent',
                    border: selected === method.id ? '2px solid #CC0000' : '2px solid rgba(255,255,255,0.3)',
                  }}
                >
                  {selected === method.id && <Check size={12} className="text-white" />}
                </div>
              </button>
            ))}
          </div>

          {/* Card number field */}
          {selected === 'card' && (
            <div className="mt-4 space-y-3" style={{ animation: 'fadeSlideUp 0.3s ease-out' }}>
              <input
                type="text"
                placeholder="0000 0000 0000 0000"
                value={cardNum}
                onChange={e => setCardNum(e.target.value.replace(/\D/g, '').slice(0, 16).replace(/(.{4})/g, '$1 ').trim())}
                className="input-field text-center tracking-widest font-bold"
                dir="ltr"
              />
              <div className="grid grid-cols-2 gap-3">
                <input type="text" placeholder="MM/YY" className="input-field text-center" dir="ltr" />
                <input type="text" placeholder="CVV" className="input-field text-center" dir="ltr" />
              </div>
              <div
                className="flex items-center gap-2 p-3 rounded-xl"
                style={{ background: 'rgba(22,163,74,0.1)', border: '1px solid rgba(22,163,74,0.3)' }}
              >
                <span className="text-green-400 text-sm">🔒</span>
                <span className="text-green-400 text-xs font-semibold">
                  {lang === 'ar' ? 'دفع آمن ومشفر بواسطة Tranzila' : 'תשלום מאובטח ומוצפן באמצעות Tranzila'}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Order Summary */}
        <div
          className="rounded-3xl p-6"
          style={{ background: '#1A1A1A', border: '1px solid rgba(255,255,255,0.08)' }}
        >
          <h2 className="text-white font-black text-lg mb-4">{t.orderDetails}</h2>
          <div className="space-y-2 text-sm">
            {items.map(item => (
              <div key={item.id} className="flex justify-between text-white/70">
                <span>{name(item)} × {item.qty}</span>
                <span className="text-white">{t.nis}{(item.price * item.qty).toFixed(0)}</span>
              </div>
            ))}
            <div className="border-t border-white/10 pt-2 mt-2 space-y-2">
              <div className="flex justify-between text-white/60">
                <span>{t.subtotal}</span>
                <span>{t.nis}{subtotal.toFixed(0)}</span>
              </div>
              <div className="flex justify-between text-white/60">
                <span>{t.delivery}</span>
                <span className={deliveryFee === 0 ? 'text-green-400' : ''}>{deliveryFee === 0 ? t.free : `${t.nis}${deliveryFee}`}</span>
              </div>
              <div className="flex justify-between text-white font-black text-lg pt-2 border-t border-white/10">
                <span>{t.total}</span>
                <span className="text-brand-red">{t.nis}{total.toFixed(0)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Place Order */}
        <button
          onClick={handleOrder}
          disabled={!selected || !address || loading}
          className="w-full py-5 rounded-2xl font-black text-white text-xl transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #CC0000, #990000)', boxShadow: '0 4px 30px rgba(204,0,0,0.5)' }}
        >
          {loading ? (
            <span className="flex items-center justify-center gap-3">
              <svg className="animate-spin w-6 h-6" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.3)" strokeWidth="4" />
                <path d="M12 2a10 10 0 0110 10" stroke="white" strokeWidth="4" strokeLinecap="round" />
              </svg>
              {lang === 'ar' ? 'جاري المعالجة...' : 'מעבד...'}
            </span>
          ) : (
            <span>{t.placeOrder} — {t.nis}{total.toFixed(0)} ←</span>
          )}
        </button>

        {!selected && (
          <p className="text-center text-red-400 text-sm">* يرجى اختيار طريقة الدفع</p>
        )}
        {selected && !address && (
          <p className="text-center text-red-400 text-sm">* يرجى إدخال عنوان التوصيل</p>
        )}
      </div>

      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}
