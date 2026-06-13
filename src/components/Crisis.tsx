import { motion } from "motion/react";
import { AlertCircle, FileText, Database } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1];

const crises = [
  {
    icon: <Database className="w-5 h-5 text-zinc-100" />,
    title: "Finansal Kriz",
    description: "%30 token enflasyonu. Kontrolsüz API kullanımları ve kotaların hızla tükenmesi."
  },
  {
    icon: <AlertCircle className="w-5 h-5 text-zinc-100" />,
    title: "Operasyonel Darboğaz",
    description: "Günlük 100K+ istek arasında kaybolan görünürlük. Manuel dashboard hataları."
  },
  {
    icon: <FileText className="w-5 h-5 text-zinc-100" />,
    title: "Regülasyon Riski",
    description: "KVKK ihlali potansiyeli. İzinsiz AI araçlarına sızan hassas müşteri verileri."
  }
];

export function CrisisSection() {
  return (
    <section className="py-32 px-6 bg-[#0A0A0A]">
      <div className="max-w-[1000px] mx-auto">
        <div className="flex flex-col md:flex-row gap-16 md:gap-24">
          
          <div className="md:w-1/2 flex flex-col justify-center">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: EASE }}
              className="text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-6 leading-tight"
            >
              Kurumsal AI için karanlık çağ
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
              className="text-zinc-400 font-medium leading-relaxed"
            >
              Geleneksel teknoloji izleme panelleri (APM) veya yerleşik bulut araçları, 
              LLM'lerin karmaşık yapısı ve token bazlı optimizasyonlarını yönetmek için yetersizdir.
            </motion.p>
          </div>

          <div className="md:w-1/2 flex flex-col gap-10 border-l border-white/[0.05] pl-8 md:pl-12">
            {crises.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.2 + (i * 0.1), ease: EASE }}
                className="relative"
              >
                <div className="absolute -left-[45px] top-1 w-5 h-5 rounded-full bg-[#0A0A0A] border border-white/[0.1] shadow-[0_0_10px_rgba(255,255,255,0.1)] flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-white" />
                </div>
                <div className="flex items-center gap-3 mb-3">
                   <div className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.08]">
                      {item.icon}
                   </div>
                   <h3 className="text-lg font-medium text-white tracking-tight">{item.title}</h3>
                </div>
                <p className="text-zinc-500 font-medium text-sm leading-relaxed max-w-[400px]">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
