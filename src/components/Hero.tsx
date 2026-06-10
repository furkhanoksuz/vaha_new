import { motion } from "motion/react";
import { ArrowRight, ChevronRight } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1];

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden flex flex-col items-center justify-center text-center px-6 min-h-screen">
      
      <motion.div
        initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, ease: EASE }}
        className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full border border-white/10 bg-white/[0.03] text-xs font-medium text-zinc-300 backdrop-blur-md hover:bg-white/[0.06] transition-colors cursor-pointer"
      >
        <div className="w-2 h-2 rounded-full bg-cyan-400 blur-[1px]" />
        <span>Vaha Sentinel Platform 2.0 Yayında</span>
        <ChevronRight className="w-3 h-3 text-zinc-500" />
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
        className="max-w-[900px] text-5xl md:text-7xl font-semibold tracking-tighter leading-[1.1] text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/50 mb-6"
      >
        Kurumsal AI Maliyetleri İçin <br className="hidden md:block" />
        Davranışsal Yönetişim
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
        className="max-w-[600px] text-lg text-zinc-400 mb-10 leading-relaxed font-medium"
      >
        VAHA, kontrol edilemeyen yapay zeka kullanımının finansal, operasyonel ve 
        yasal risklerini tarayıcı katmanında engelleyen merkezi platformdur.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
        className="flex flex-col sm:flex-row items-center gap-4"
      >
        <button className="group flex items-center justify-center gap-2 w-full sm:w-auto bg-white text-black px-6 py-3 rounded-full text-[14px] font-medium hover:bg-zinc-200 transition-all active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.25)]">
          Hemen Başlayın <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
        </button>
        <button className="group flex items-center justify-center gap-3 w-full sm:w-auto bg-transparent border border-white/10 px-6 py-3 rounded-full text-[14px] font-medium text-white hover:bg-white/[0.03] transition-all active:scale-95">
          <span>Platformu İncele</span>
          <div className="flex items-center gap-0.5 opacity-50 group-hover:opacity-100 transition-opacity">
            <kbd className="!bg-white/10 !border-white/10">Opt</kbd>
            <kbd className="!bg-white/10 !border-white/10">I</kbd>
          </div>
        </button>
      </motion.div>
      
      {/* Abstract Dashboard / Command Menu Mock Representation below hero */}
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.95, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.2, delay: 0.5, ease: EASE }}
        className="mt-20 w-full max-w-[1000px] relative"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent z-10 w-full h-full pointer-events-none" />
        <div className="glass-panel overflow-hidden border-white/10 shadow-[0_0_100px_rgba(255,255,255,0.05)] ring-1 ring-white/5 relative">
          <div className="h-10 border-b border-white/10 bg-white/[0.02] flex items-center px-4 gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-zinc-800" />
              <div className="w-3 h-3 rounded-full bg-zinc-800" />
              <div className="w-3 h-3 rounded-full bg-zinc-800" />
            </div>
          </div>
          <div className="h-[400px] w-full bg-[#0A0A0A] bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] p-8 flex flex-col gap-4 items-center justify-start relative">
             <div className="w-full max-w-2xl bg-[#121212] border border-white/10 rounded-xl shadow-2xl overflow-hidden mt-8 ring-1 ring-white/5">
                <div className="flex items-center border-b border-white/10 p-3 px-4 text-sm text-zinc-500 gap-3">
                  <div className="w-4 h-4 rounded-sm border border-zinc-700 flex items-center justify-center text-[10px]">C</div>
                  <span className="text-zinc-400">Run security audit...</span>
                </div>
                <div className="p-2">
                  <div className="px-3 py-2 text-xs text-zinc-600 font-medium">Suggestions</div>
                  <div className="mx-2 my-1 p-2 rounded-lg bg-white/5 border border-white/5 flex items-center text-sm text-zinc-300 gap-3">
                     <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                     Analyze recent token usage
                  </div>
                  <div className="mx-2 my-1 p-2 rounded-lg hover:bg-white/5 border border-transparent flex items-center text-sm text-zinc-500 gap-3 transition-colors">
                     <div className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
                     Block unauthorized 'Shadow AI' requests
                  </div>
                </div>
             </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
