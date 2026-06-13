import { ReactNode } from 'react';

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-zinc-800">
      <header className="fixed top-0 w-full z-50 border-b border-white/[0.08] bg-[#0A0A0A]/70 backdrop-blur-xl">
        <div className="max-w-[1200px] mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-md bg-white flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.2)]">
              <div className="w-2 h-2 rounded-sm bg-black" />
            </div>
            <span className="font-medium text-sm tracking-tight text-white">vaha</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-6 text-[13px] font-medium text-zinc-400">
            <a href="#" className="hover:text-white transition-colors">Ürün</a>
            <a href="#" className="hover:text-white transition-colors">Yöntem</a>
            <a href="#" className="hover:text-white transition-colors">Fiyatlandırma</a>
            <a href="#" className="hover:text-white transition-colors">Müşteriler</a>
          </nav>
          
          <div className="flex items-center gap-4">
            <button className="text-[13px] font-medium text-zinc-300 hover:text-white transition-colors">
              Giriş
            </button>
            <button className="bg-white text-black px-4 py-1.5 rounded-full text-[13px] font-medium hover:bg-zinc-200 transition-colors shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              Kayıt Ol
            </button>
          </div>
        </div>
      </header>
      
      <main className="flex-1 pt-14">
        {children}
      </main>

      <footer className="border-t border-white/[0.08] bg-[#0A0A0A] py-16 px-6">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8 text-[13px] text-zinc-500">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-[4px] bg-white flex items-center justify-center opacity-80">
              <div className="w-2 h-2 rounded-[2px] bg-black" />
            </div>
            <span className="font-medium text-zinc-300">Vaha Inc.</span>
          </div>
          <div className="flex gap-8">
            <a href="mailto:contact@getvaha.co" className="hover:text-zinc-300 transition-colors">İletişim: contact@getvaha.co</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
