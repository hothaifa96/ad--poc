import { Star, Heart, Award, Truck, Shield, Users } from 'lucide-react'
import { useLang } from '../context/LanguageContext'
import { customerReviews } from '../data/mockData'
import Navbar from '../components/Navbar'
import CartSidebar from '../components/CartSidebar'

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={14}
          className={i <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-white/20'}
        />
      ))}
    </div>
  )
}

export default function AboutPage() {
  const { t, lang } = useLang()

  const values = [
    { icon: Shield, label_ar: 'جودة مضمونة', label_he: 'איכות מובטחת', desc_ar: 'نضمن أعلى معايير الجودة في كل قطعة', desc_he: 'אנו מבטיחים את הסטנדרטים הגבוהים ביותר', color: '#CC0000' },
    { icon: Heart, label_ar: 'حلال 100%', label_he: '100% חלאל', desc_ar: 'جميع منتجاتنا مذبوحة وفق الشريعة الإسلامية', desc_he: 'כל המוצרים שלנו שחוטים לפי השריעה האסלאמית', color: '#16A34A' },
    { icon: Truck, label_ar: 'توصيل سريع', label_he: 'משלוח מהיר', desc_ar: 'نوصل طلبك طازجاً إلى باب منزلك', desc_he: 'אנו מספקים את הזמנתך טרי עד דלת ביתך', color: '#3B82F6' },
    { icon: Award, label_ar: 'خبرة 20 عاماً', label_he: '20 שנות ניסיון', desc_ar: 'أكثر من عقدين من الخبرة في تقديم أفضل اللحوم', desc_he: 'יותר משני עשורים של ניסיון', color: '#F59E0B' },
  ]

  const stats = [
    { value: '20+', label_ar: 'سنة خبرة', label_he: 'שנות ניסיון' },
    { value: '5000+', label_ar: 'عميل سعيد', label_he: 'לקוחות מרוצים' },
    { value: '50+', label_ar: 'منتج طازج', label_he: 'מוצרים טריים' },
    { value: '4.9★', label_ar: 'تقييم عملائنا', label_he: 'דירוג לקוחות' },
  ]

  return (
    <div className="min-h-screen bg-brand-black">
      <Navbar />
      <CartSidebar />

      <div className="pt-16 pb-24">

        {/* Hero */}
        <div
          className="relative overflow-hidden mx-4 mt-4 rounded-3xl mb-10"
          style={{ minHeight: 260 }}
        >
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(135deg, #0A0A0A 0%, #3D0000 50%, #1A0000 100%)' }}
          />
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1588347785102-2944afe78c95?w=800&fit=crop')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="relative z-10 p-8 flex flex-col items-center text-center">
            <div
              className="w-24 h-24 rounded-2xl mx-auto mb-5 overflow-hidden"
              style={{ boxShadow: '0 0 40px rgba(204,0,0,0.6)', border: '2px solid rgba(204,0,0,0.5)' }}
            >
              <img src="/logo.jpeg" alt="أبو دغش" className="w-full h-full object-cover" />
            </div>
            <h1
              className="text-4xl font-black mb-2"
              style={{
                background: 'linear-gradient(135deg, #FFFFFF 30%, #CC0000 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {lang === 'ar' ? 'أبو دغش' : 'אבו דגש'}
            </h1>
            <p className="text-brand-gray-light text-base max-w-sm">
              {lang === 'ar'
                ? 'أجود اللحوم الطازجة، موصولة إلى باب منزلك منذ أكثر من 20 عاماً'
                : 'הבשר הטרי הטוב ביותר, מסופק לדלת ביתך כבר למעלה מ-20 שנה'}
            </p>
            <div className="flex gap-3 mt-5 flex-wrap justify-center">
              {['طازج يومياً', 'حلال 100%', 'توصيل سريع'].map((pill, i) => (
                <span
                  key={i}
                  className="glass px-4 py-1.5 rounded-full text-xs font-semibold text-white border border-white/10"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="px-4 space-y-10">

          {/* Stats */}
          <section>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-5 text-center"
                  style={{ background: '#1A1A1A', border: '1px solid rgba(255,255,255,0.06)', animation: `fadeSlideUp 0.4s ease-out ${i * 0.1}s both` }}
                >
                  <p className="text-3xl font-black text-brand-red mb-1">{s.value}</p>
                  <p className="text-white/60 text-sm">{lang === 'ar' ? s.label_ar : s.label_he}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Our Story */}
          <section>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-1 h-8 rounded-full bg-brand-red" />
              <h2 className="text-2xl font-black text-white">{t.ourStory}</h2>
            </div>
            <div
              className="rounded-3xl p-6 relative overflow-hidden"
              style={{ background: '#111', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <div
                className="absolute top-0 left-0 w-32 h-32 rounded-full opacity-10"
                style={{ background: '#CC0000', filter: 'blur(40px)' }}
              />
              <div className="relative z-10 space-y-4">
                <p className="text-white/80 leading-relaxed text-sm">
                  {lang === 'ar'
                    ? 'بدأت قصة أبو دغش منذ أكثر من عشرين عاماً، حين قرر مؤسسنا تقديم أجود اللحوم الطازجة لأبناء المجتمع. بدأنا بمحل صغير وتوسعنا عاماً بعد عام بفضل ثقة عملائنا الكرام.'
                    : 'סיפורה של אבו דגש החל לפני יותר מעשרים שנה, כאשר המייסד שלנו החליט לספק את הבשר הטרי הטוב ביותר לבני הקהילה. התחלנו בחנות קטנה והתרחבנו שנה אחר שנה.'}
                </p>
                <p className="text-white/80 leading-relaxed text-sm">
                  {lang === 'ar'
                    ? 'اليوم نفخر بخدمة آلاف العملاء يومياً، مع الحفاظ على نفس المبادئ التي بُنينا عليها: الجودة، الطزاجة، والأمانة. كل قطعة لحم تمر من يدنا تحمل معها شغفنا والتزامنا بأعلى معايير الجودة.'
                    : 'היום אנו גאים לשרת אלפי לקוחות מדי יום, תוך שמירה על אותם עקרונות שעליהם נבנינו: איכות, טריות ויושרה. כל נתח בשר שעובר בידינו נושא את התשוקה שלנו.'}
                </p>
              </div>
            </div>
          </section>

          {/* Values */}
          <section>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-1 h-8 rounded-full bg-brand-red" />
              <h2 className="text-2xl font-black text-white">{t.ourValues}</h2>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {values.map((v, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-5"
                  style={{ background: '#1A1A1A', border: '1px solid rgba(255,255,255,0.06)', animation: `fadeSlideUp 0.4s ease-out ${i * 0.1}s both` }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                    style={{ background: `${v.color}22` }}
                  >
                    <v.icon size={20} style={{ color: v.color }} />
                  </div>
                  <p className="text-white font-bold text-sm mb-1">{lang === 'ar' ? v.label_ar : v.label_he}</p>
                  <p className="text-white/50 text-xs leading-relaxed">{lang === 'ar' ? v.desc_ar : v.desc_he}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Customer Reviews */}
          <section>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-1 h-8 rounded-full bg-brand-red" />
              <div>
                <h2 className="text-2xl font-black text-white">{t.customerReviews}</h2>
                <p className="text-brand-gray-light text-xs">
                  {lang === 'ar' ? 'ماذا يقول عملاؤنا' : 'מה אומרים הלקוחות שלנו'}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {customerReviews.map((review, i) => (
                <div
                  key={review.id}
                  className="rounded-2xl p-5"
                  style={{
                    background: '#1A1A1A',
                    border: '1px solid rgba(255,255,255,0.06)',
                    animation: `fadeSlideUp 0.4s ease-out ${i * 0.08}s both`,
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-brand-red/30">
                      <img
                        src={review.image}
                        alt={lang === 'ar' ? review.name_ar : review.name_he}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none'
                          e.target.parentElement.style.background = 'linear-gradient(135deg,#CC0000,#990000)'
                        }}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-white font-bold text-sm">
                          {lang === 'ar' ? review.name_ar : review.name_he}
                        </p>
                        <span className="text-white/30 text-xs">
                          {lang === 'ar' ? review.date_ar : review.date_he}
                        </span>
                      </div>
                      <StarRating rating={review.rating} />
                      <p className="text-white/70 text-sm mt-2 leading-relaxed">
                        {lang === 'ar' ? review.text_ar : review.text_he}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Contact banner */}
          <section>
            <div
              className="rounded-3xl p-6 text-center relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #1A0000, #3D0000)' }}
            >
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1544025162-d76594e8efa5?w=800&fit=crop')`,
                  backgroundSize: 'cover',
                }}
              />
              <div className="relative z-10">
                <Users size={32} className="text-brand-red mx-auto mb-3" />
                <h3 className="text-white font-black text-xl mb-2">
                  {lang === 'ar' ? 'تواصل معنا' : 'צור קשר'}
                </h3>
                <p className="text-white/70 text-sm mb-4">
                  {lang === 'ar' ? 'نحن هنا لخدمتك على مدار الساعة' : 'אנחנו כאן לשירותך 24/7'}
                </p>
                <div className="flex gap-3 justify-center flex-wrap">
                  <a
                    href="tel:+972501234567"
                    className="px-6 py-2.5 rounded-full font-bold text-white text-sm transition-all hover:scale-105"
                    style={{ background: 'linear-gradient(135deg, #CC0000, #990000)' }}
                  >
                    📞 {lang === 'ar' ? 'اتصل بنا' : 'התקשר אלינו'}
                  </a>
                  <a
                    href="https://wa.me/972501234567"
                    className="px-6 py-2.5 rounded-full font-bold text-white text-sm border border-white/20 transition-all hover:scale-105 hover:border-brand-red"
                  >
                    💬 WhatsApp
                  </a>
                </div>
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
  )
}
