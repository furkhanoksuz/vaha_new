import React, { useRef, useState } from "react";
import { motion } from "motion/react";
import { Database, Network, ShieldCheck, Zap } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1];

const SpotlightCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const divRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const div = divRef.current;
    const rect = div.getBoundingClientRect();
    
    div.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    div.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      className={`relative overflow-hidden rounded-3xl border border-white/10 bg-[#121212] transition-colors duration-300 group/spotlight ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-10 mix-blend-screen opacity-0 group-hover/spotlight:opacity-100"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.06), transparent 40%)`,
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
    <section className="py-32 px-6 border-t border-white/[0.03] bg-[#0A0A0A]">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-20 text-center md:text-left">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: EASE }}
            className="text-4xl md:text-6xl font-semibold tracking-tighter text-white mb-6 leading-tight"
          >
            Sınırları yeniden tanımlayın. <br/>
            <span className="text-zinc-500">Maliyetleri kontrol altına alın.</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5 auto-rows-[340px] md:auto-rows-[400px]">
          
          {/* Card 1 - Span 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: EASE }}
            className="md:col-span-2 flex"
          >
            <SpotlightCard className="w-full flex flex-col md:flex-row justify-between p-8 md:p-10 card-gradient group">
              <div className="flex flex-col justify-start max-w-[320px] relative z-10">
                 <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(255,255,255,0.05)] backdrop-blur-md">
                   <ShieldCheck className="w-6 h-6 text-zinc-300" />
                 </div>
                 <h3 className="text-2xl font-medium text-white mb-4 tracking-tight">Önleyici Mimari</h3>
                 <p className="text-base text-zinc-400 leading-relaxed font-medium">
                   Otopsi yapmaz, önleyici mimari ile çalışır. Tarayıcı katmanında kuralları beklemeden işletir ve riski kaynağında engeller.
                 </p>
              </div>
              <div className="hidden md:flex relative flex-1 ml-10 overflow-hidden rounded-2xl border border-white/10 bg-[#0A0A0A]">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:24px_24px]" />
                
                {/* Animated scanner line */}
                <motion.div 
                  className="absolute left-0 right-0 top-0 h-32 bg-gradient-to-b from-transparent via-white/5 to-white/10 border-b border-white/20 mix-blend-screen"
                  animate={{ y: [-100, 400] }}
                  transition={{ duration: 3, ease: "linear", repeat: Infinity }}
                />

                <div className="absolute left-8 top-12 p-3.5 bg-[#121212] border border-white/10 rounded-xl shadow-xl shrink-0 flex flex-col gap-2 min-w-[200px]">
                   <div className="text-[10px] text-zinc-500 font-mono mb-1">Request #1920</div>
                   <div className="flex items-center gap-3">
                     <div className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                     <div className="h-1.5 w-full bg-white/10 rounded-full" />
                   </div>
                </div>
                
                <div className="absolute left-16 top-36 p-3.5 bg-[#121212] border border-red-500/30 rounded-xl shadow-[0_0_30px_rgba(239,68,68,0.1)] shrink-0 flex flex-col gap-2 min-w-[200px] ring-1 ring-red-500/20 backdrop-blur-md">
                   <div className="text-[10px] text-zinc-500 font-mono mb-1 flex justify-between">
                     <span>Request #1921</span>
                     <span className="text-red-400 font-bold bg-red-400/10 px-1.5 py-0.5 rounded">BLOCKED</span>
                   </div>
                   <div className="flex items-center gap-3">
                     <div className="w-2 h-2 rounded-full bg-red-500 shrink-0 shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
                     <div className="h-1.5 w-full bg-red-500/20 rounded-full" />
                   </div>
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
            <SpotlightCard className="w-full flex flex-col p-8 md:p-10 card-gradient overflow-hidden group">
               <div className="absolute right-0 top-0 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(255,255,255,0.03)_0%,transparent_70%)] rounded-full transition-colors duration-500 pointer-events-none" />
               
               {/* Decorative Abstract Vectors */}
               <div className="absolute top-12 right-10 flex gap-2.5 items-end h-10">
                 <motion.div style={{ originY: 1 }} animate={{ scaleY: [0.4, 1, 0.4] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} className="w-1.5 h-10 bg-white/10 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.05)] lg:block hidden" />
                 <motion.div style={{ originY: 1 }} animate={{ scaleY: [0.6, 1.2, 0.6] }} transition={{ duration: 2, delay: 0.2, repeat: Infinity, ease: "easeInOut" }} className="w-1.5 h-10 bg-white/10 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.05)] lg:block hidden" />
                 <motion.div style={{ originY: 1 }} animate={{ scaleY: [0.5, 0.8, 0.5] }} transition={{ duration: 2, delay: 0.4, repeat: Infinity, ease: "easeInOut" }} className="w-1.5 h-10 bg-white/20 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.1)]" />
                 <motion.div style={{ originY: 1 }} animate={{ scaleY: [1, 0.4, 1] }} transition={{ duration: 2, delay: 0.6, repeat: Infinity, ease: "easeInOut" }} className="w-1.5 h-10 bg-white/10 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.05)]" />
               </div>

               <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(255,255,255,0.05)] relative z-10 backdrop-blur-md">
                 <Zap className="w-6 h-6 text-zinc-300" />
               </div>
               <div className="mt-auto relative z-10 w-[95%]">
                 <h3 className="text-2xl font-medium text-white mb-4 tracking-tight">Anlamsal Önbellek</h3>
                 <p className="text-base text-zinc-400 leading-relaxed font-medium">
                   Benzer promptlar API'ye gitmeden doğrudan <span className="text-white drop-shadow-sm font-semibold">10ms</span> içinde önbellekten yanıtlanır.
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
            <SpotlightCard className="w-full flex flex-col p-8 md:p-10 card-gradient relative group overflow-hidden">
               <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-[radial-gradient(circle,rgba(255,255,255,0.06)_0%,transparent_70%)] rounded-full pointer-events-none transition-all duration-700 group-hover:bg-[radial-gradient(circle,rgba(255,255,255,0.08)_0%,transparent_70%)]" />
               
               <motion.div 
                 className="absolute -right-16 -top-16 border-[40px] border-white/[0.02] rounded-[80px] w-80 h-80 pointer-events-none/50"
                 animate={{ rotate: [12, 45, 12] }}
                 transition={{ duration: 20, ease: "linear", repeat: Infinity }}
               />
               
               <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center mb-8 relative z-10 shadow-[0_0_20px_rgba(255,255,255,0.05)] backdrop-blur-md">
                 <Database className="w-6 h-6 text-zinc-300" />
               </div>
               <div className="mt-auto relative z-10">
                 <h3 className="text-2xl font-medium text-white mb-4 tracking-tight">Veri Egemenliği</h3>
                 <p className="text-base text-zinc-400 leading-relaxed font-medium">
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
            <SpotlightCard className="w-full flex flex-col p-8 md:p-10 card-gradient relative overflow-hidden group">
               <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.03),transparent_60%)] pointer-events-none z-0 transition-opacity duration-700 group-hover:opacity-100 opacity-60" />
               
               <div className="relative z-10 filter-none mb-12">
                 <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.05)] z-10 backdrop-blur-md mb-6">
                   <Network className="w-6 h-6 text-zinc-300" />
                 </div>
                 <h3 className="text-2xl font-medium text-white mb-4 tracking-tight">Altyapı Bağımsızlığı</h3>
                 <p className="text-base text-zinc-400 leading-relaxed font-medium">
                   Tek bir modele kilitlenmeyin. Şirket içi yerel modeller de dahil olmak üzere istediğiniz LLM altyapısıyla çalışır.
                 </p>
               </div>
               
               <div className="relative w-full h-[220px] flex items-center justify-center pointer-events-none z-0 mt-auto opacity-70 group-hover:opacity-100 transition-opacity duration-700">
                  {/* Circular Orbit Animation */}
                  <div className="relative w-full max-w-[280px] aspect-square flex items-center justify-center">
                     
                     {/* Vaha Hub */}
                     <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border border-white/20 bg-[#0A0A0A] flex items-center justify-center font-bold text-lg md:text-xl text-zinc-200 shadow-[0_0_40px_rgba(255,255,255,0.05)] ring-1 ring-white/10 backdrop-blur-md relative z-10">
                        VAHA
                        <div className="absolute inset-0 rounded-full border border-white/10 scale-[1.3] animate-ping opacity-20" style={{ animationDuration: '3s' }} />
                     </div>

                     {/* Orbit Rings */}
                     <div className="absolute inset-0 rounded-full border border-white/5" />
                     <div className="absolute inset-4 rounded-full border border-white/5 border-dashed" />
                     <div className="absolute inset-10 rounded-full border border-white/5" />

                     {/* Orbiting Elements */}
                     <motion.div 
                       className="absolute inset-0"
                       animate={{ rotate: 360 }}
                       transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                     >
                       <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full border border-white/10 bg-[#0a0a0ade] backdrop-blur-sm flex items-center justify-center text-[10px] font-medium text-zinc-400 shadow-xl">GCP</div>
                     </motion.div>
                     
                     <motion.div 
                       className="absolute inset-4"
                       animate={{ rotate: -360 }}
                       transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                     >
                       <div className="absolute top-1/2 -right-4 -translate-y-1/2 w-10 h-10 rounded-full border border-white/10 bg-[#0a0a0ade] backdrop-blur-sm flex items-center justify-center text-[10px] font-medium text-zinc-400 shadow-xl">OAI</div>
                     </motion.div>
                     
                     <motion.div 
                       className="absolute inset-0"
                       animate={{ rotate: 360 }}
                       transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                     >
                       <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full border border-white/10 bg-[#0a0a0ade] backdrop-blur-sm flex items-center justify-center text-[10px] font-medium text-zinc-400 shadow-xl">ANTH</div>
                     </motion.div>
                     
                     <motion.div 
                       className="absolute inset-10"
                       animate={{ rotate: -360 }}
                       transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                     >
                       <div className="absolute top-1/2 -left-3 -translate-y-1/2 w-10 h-10 rounded-full border border-white/10 bg-[#0a0a0ade] backdrop-blur-sm flex items-center justify-center text-[10px] font-medium text-zinc-400 shadow-xl">LCL</div>
                     </motion.div>
                  </div>
               </div>
            </SpotlightCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

