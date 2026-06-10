import { motion } from "motion/react";
import { Command, Search, ShieldAlert, Zap, Lock, CreditCard } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1];

export function DashboardMockup() {
  return (
    <section className="py-32 px-6 bg-[#0A0A0A] overflow-hidden flex items-center justify-center relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-zinc-900/10 to-[#0A0A0A] pointer-events-none" />
      
      <div className="max-w-[700px] w-full relative z-10">
        
        <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold tracking-tighter text-white mb-3">Tam Kontrol Parmak Uçlarınızda</h2>
            <p className="text-zinc-500 font-medium">Hızlı, klavye odaklı ve anında yanıt veren yönetim paneli.</p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="rounded-2xl border border-white/[0.08] bg-[#121212] shadow-2xl flex flex-col overflow-hidden ring-1 ring-white/5"
        >
          {/* Mock Header */}
          <div className="px-4 py-3 flex items-center gap-3 border-b border-white/[0.08]">
            <Search className="w-4 h-4 text-zinc-500" />
            <input 
              type="text" 
              placeholder="Find policies, check alerts, or jump to billing..." 
              className="bg-transparent border-none text-sm text-white w-full focus:outline-none placeholder:text-zinc-600"
              readOnly
            />
            <div className="flex gap-1 shrink-0">
               <kbd className="!bg-white/5 !border-white/10 text-zinc-500 !px-2">ESC</kbd>
            </div>
          </div>

          <div className="p-3 bg-[#0c0c0c]">
             {/* Staggered List Items */}
             <div className="px-3 py-2 text-[11px] font-medium text-zinc-600 uppercase tracking-widest">Suggestions</div>
             
             {[
               { icon: <ShieldAlert className="w-4 h-4 text-rose-400" />, label: "Review 'Shadow AI' security flags", tag: "2 High" },
               { icon: <Zap className="w-4 h-4 text-emerald-400" />, label: "Optimize Token Caching", tag: "Saving ₺8k/mo" },
               { icon: <Lock className="w-4 h-4 text-indigo-400" />, label: "Update KVKK Data Policies", tag: "Required" },
               { icon: <CreditCard className="w-4 h-4 text-zinc-400" />, label: "Manage Department Budgets", tag: "Finance" }
             ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + (i * 0.05), ease: EASE }}
                  className={`mx-1 my-0.5 px-3 py-2.5 rounded-lg flex items-center justify-between text-sm cursor-pointer group transition-colors ${
                    i === 0 ? "bg-white/[0.06] border border-white/[0.05]" : "hover:bg-white/[0.03] border border-transparent"
                  }`}
                >
                  <div className="flex items-center gap-3 text-zinc-300 group-hover:text-white transition-colors">
                    {item.icon}
                    <span className="font-medium">{item.label}</span>
                  </div>
                  <div className="text-[11px] px-2 py-0.5 rounded-full bg-white/5 text-zinc-500 border border-white/5 group-hover:text-zinc-400 transition-colors">
                    {item.tag}
                  </div>
                </motion.div>
             ))}
          </div>

          {/* User Footer context */}
          <div className="border-t border-white/[0.05] bg-[#0A0A0A] px-4 py-2 flex items-center justify-between text-xs text-zinc-500">
             <div className="flex items-center gap-2">
               <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-cyan-500 to-indigo-500" />
               <span className="font-medium">Oksuzm Furkan</span>
             </div>
             <div className="flex items-center gap-3">
               <span>vaha-sentinel</span>
               <div className="flex items-center gap-1">
                 <Command className="w-3 h-3" />
                 <span>O</span>
               </div>
             </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
