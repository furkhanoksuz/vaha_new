import React, { useRef, useState } from "react";
import { motion } from "motion/react";
import { Database, Network, ShieldCheck, Zap } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1];

const SpotlightCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const div = divRef.current;
    const rect = div.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`relative overflow-hidden rounded-2xl border border-white/10 bg-[#0F0F0F] transition-all duration-300 ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-10"
        style={{
          opacity,
          background: `radial-gradient(500px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.08), transparent 40%)`,
        }}
      />
      <div className="relative z-20 h-full">
        {children}
      </div>
    </div>
  );
};

export function SolutionsSection() {
  return (
    <section className="py-32 px-6 border-t border-white-[0.03] bg-[#0A0A0A]">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: EASE }}
            className="text-3xl md:text-5xl font-semibold tracking-tighter text-white mb-6"
          >
            Sınırları yeniden tanımlayın. <br/>
            <span className="text-zinc-500">Maliyetleri kontrol altına alın.</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4 auto-rows-[300px] md:auto-rows-[340px]">
          
          {/* Card 1 - Span 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: EASE }}
            className="md:col-span-2 flex"
          >
            <SpotlightCard className="w-full flex justify-between p-8 card-gradient">
              <div className="flex flex-col justify-between max-w-[280px]">
                 <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                   <ShieldCheck className="w-5 h-5 text-zinc-300" />
                 </div>
                 <div>
                   <h3 className="text-xl font-medium text-white mb-2 tracking-tight">Önleyici Mimari</h3>
                   <p className="text-sm text-zinc-400 leading-relaxed font-medium">
                     Otopsi yapmaz, önleyici mimari ile çalışır. Tarayıcı katmanında kuralları beklemeden işletir.
                   </p>
                 </div>
              </div>
              <div className="hidden md:flex relative flex-1 ml-8 overflow-hidden rounded-l-xl border-y border-l border-white/10 bg-white/[0.02]">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:16px_16px]" />
                <div className="absolute left-8 top-12 p-3 bg-zinc-900 border border-white/10 rounded-lg shadow-xl shrink-0 flex items-center gap-3">
                   <div className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                   <div className="h-2 w-24 bg-white/10 rounded-full" />
                </div>
                <div className="absolute left-16 top-28 p-3 bg-zinc-900 border border-red-500/30 rounded-lg shadow-xl shrink-0 flex items-center gap-3 ring-1 ring-red-500/20">
                   <div className="w-2 h-2 rounded-full bg-red-500 shrink-0 shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
                   <div className="font-mono text-[10px] text-red-400">BLOCKED_BY_POLICY</div>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Card 2 - Span 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
            className="md:col-span-1 flex"
          >
            <SpotlightCard className="w-full flex flex-col p-8 card-gradient">
               <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                 <Zap className="w-5 h-5 text-zinc-300" />
               </div>
               <div className="mt-auto">
                 <h3 className="text-xl font-medium text-white mb-2 tracking-tight">Anlamsal Önbellek</h3>
                 <p className="text-sm text-zinc-400 leading-relaxed font-medium">
                   Benzer promptlar API'ye gitmeden doğrudan 10ms içinde önbellekten yanıtlanır.
                 </p>
               </div>
            </SpotlightCard>
          </motion.div>

          {/* Card 3 - Span 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
            className="md:col-span-1 flex"
          >
            <SpotlightCard className="w-full flex flex-col p-8 card-gradient relative group">
               <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
                  <Database className="w-24 h-24 text-zinc-500" strokeWidth={1} />
               </div>
               <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 relative z-10 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                 <Database className="w-5 h-5 text-zinc-300" />
               </div>
               <div className="mt-auto relative z-10">
                 <h3 className="text-xl font-medium text-white mb-2 tracking-tight">Veri Egemenliği</h3>
                 <p className="text-sm text-zinc-400 leading-relaxed font-medium">
                   Veriyi buluta çıkarmaz, mutlak veri güvenliği ve regülasyon uyumu sağlar.
                 </p>
               </div>
            </SpotlightCard>
          </motion.div>

          {/* Card 4 - Span 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
            className="md:col-span-2 flex"
          >
            <SpotlightCard className="w-full flex flex-col justify-end p-8 card-gradient relative">
               <div className="absolute top-8 left-8 w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                 <Network className="w-5 h-5 text-zinc-300" />
               </div>
               
               <div className="absolute inset-x-8 top-24 bottom-32 flex items-center justify-center opacity-60">
                  {/* Mock abstract node graph */}
                  <div className="flex gap-12 items-center">
                     <div className="w-12 h-12 rounded-full border border-white/20 bg-white/5 flex items-center justify-center font-mono text-xs">A</div>
                     <div className="w-8 h-[1px] bg-white/20 relative"><div className="absolute inset-0 bg-white shadow-[0_0_10px_white] w-1/2" /></div>
                     <div className="w-16 h-16 rounded-full border border-white/30 bg-white/10 flex items-center justify-center font-mono text-xl text-white shadow-[0_0_30px_rgba(255,255,255,0.1)]">LLM</div>
                     <div className="w-8 h-[1px] bg-white/20 relative"><div className="absolute right-0 inset-y-0 bg-white shadow-[0_0_10px_white] w-1/2" /></div>
                     <div className="w-12 h-12 rounded-full border border-white/20 bg-white/5 flex items-center justify-center font-mono text-xs">B</div>
                  </div>
               </div>

               <div className="mt-auto max-w-[400px]">
                 <h3 className="text-xl font-medium text-white mb-2 tracking-tight">Altyapı Bağımsızlığı</h3>
                 <p className="text-sm text-zinc-400 leading-relaxed font-medium">
                   Tek bir modele kilitlenmeyin. Şirket içi yerel modeller de dahil olmak üzere istediğiniz altyapı ile çalışır.
                 </p>
               </div>
            </SpotlightCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
