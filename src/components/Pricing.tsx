import { motion } from "motion/react";

const EASE = [0.16, 1, 0.3, 1];

const plans = [
  {
    name: "Starter",
    price: "$4",
    unit: "/user",
    description: "KOBİ ve küçük ekipler için temel analiz.",
    features: [
      "Ana Dashboard",
      "Tarayıcı katmanı güvencesi",
      "Temel raporlama modülü"
    ]
  },
  {
    name: "Pro",
    price: "$220",
    unit: "/dept",
    description: "AI kullanımının yoğun olduğu departmanlar.",
    features: [
      "Departman bütçe yönetimi",
      "KVKK/BDDK uyum raporu",
      "Gölge AI gerçek zamanlı tespit"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "$1k",
    unit: "/mo",
    description: "Büyük yapılar ve özel SLA.",
    features: [
      "Sınırsız ölçeklenme",
      "Kurumsal ESG raporlama",
      "Özel destek ve entegrasyon"
    ]
  }
];

export function PricingSection() {
  return (
    <section className="py-32 px-6 bg-[#0A0A0A]">
      <div className="max-w-[1000px] mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE }}
            className="text-3xl md:text-5xl font-semibold tracking-tighter text-white mb-4"
          >
            Ölçeklenebilir yatırım.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
            className="text-zinc-500 font-medium"
          >
            Tasarruf edilen token maliyetlerinden daha düşük fiyatlar.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.7, delay: i * 0.1, ease: EASE }}
               className={`relative glass-panel flex flex-col p-8 card-gradient ${
                 plan.popular ? 'border-zinc-500/30' : ''
               }`}
             >
                {/* Popular Gradient Glow at top edge */}
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-zinc-400 to-transparent shadow-[0_0_15px_rgba(255,255,255,0.4)]" />
                )}
               
               <div className="mb-6">
                 <h3 className="text-lg font-semibold text-white tracking-tight mb-2">{plan.name}</h3>
                 <p className="text-[13px] text-zinc-500 font-medium min-h-[40px]">{plan.description}</p>
               </div>

               <div className="flex items-baseline gap-1 mb-8">
                 <span className="text-4xl font-semibold tracking-tighter text-white">{plan.price}</span>
                 <span className="text-sm text-zinc-500 font-medium">{plan.unit}</span>
               </div>

               <div className="flex flex-col gap-3 py-6 border-t border-white/[0.05] flex-1">
                 {plan.features.map((feature, j) => (
                   <div key={j} className="flex gap-3 text-[13px] text-zinc-300 font-medium">
                     <span className="text-zinc-600">-</span>
                     {feature}
                   </div>
                 ))}
               </div>

               <button className={`w-full py-2.5 rounded-full text-[13px] font-medium transition-all ${
                 plan.popular 
                   ? 'bg-white text-black hover:bg-zinc-200' 
                   : 'bg-white/[0.03] text-white border border-white/[0.05] hover:bg-white/[0.08]'
               }`}>
                 Start with {plan.name}
               </button>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
