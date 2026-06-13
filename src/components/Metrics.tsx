import { motion } from "motion/react";

const EASE = [0.16, 1, 0.3, 1];

const stats = [
  {
    value: "32%",
    label: "Token İsrafı",
    description: "Verimsiz promptlar yüzünden boşa giden bütçe"
  },
  {
    value: "68%",
    label: "Gölge Yapay Zeka",
    description: "İzinsiz girilen şirket verilerinin oranı"
  },
  {
    value: "15+",
    label: "Saat Kayıp",
    description: "Manuel log inceleme için harcanan vakit"
  }
];

export function Metrics() {
  return (
    <section className="py-24 px-6 border-y border-white/[0.05] bg-[#0A0A0A] relative z-10">
      <div className="max-w-[1200px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="grid md:grid-cols-3 gap-px bg-white/[0.05] rounded-2xl overflow-hidden border border-white/[0.05]"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.1, ease: EASE }}
              className="bg-[#0A0A0A] p-10 flex flex-col justify-center items-center text-center group"
            >
              <div className="text-5xl md:text-6xl font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500 mb-4 transition-transform duration-500 group-hover:scale-105">
                {stat.value}
              </div>
              <h3 className="text-zinc-200 font-medium mb-2">{stat.label}</h3>
              <p className="text-sm text-zinc-500 max-w-[200px] leading-relaxed mx-auto">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
