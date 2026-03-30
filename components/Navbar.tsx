import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl shadow-sm">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <Link
          href="/"
          className="text-2xl font-black text-emerald-900 tracking-tighter font-headline"
        >
          Círculo Verde
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className="text-emerald-900/70 hover:text-emerald-900 transition-all duration-300 font-body"
          >
            Início
          </Link>
          <Link
            href="/#produtos"
            className="text-emerald-700 font-bold border-b-2 border-emerald-500 pb-1 font-body"
          >
            Produtos
          </Link>
          <Link
            href="#"
            className="text-emerald-900/70 hover:text-emerald-900 transition-all duration-300 font-body"
          >
            Dicas
          </Link>
          <Link
            href="#"
            className="text-emerald-900/70 hover:text-emerald-900 transition-all duration-300 font-body"
          >
            Sobre Nós
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden lg:flex items-center gap-2 text-xs font-bold text-primary/60 bg-primary/5 px-3 py-1.5 rounded-full border border-primary/10">
            <span className="material-symbols-outlined text-[14px]">verified</span>
            Trusted by 5000+ Farmers
          </span>
          <button className="bg-primary text-on-primary px-6 py-2.5 rounded-xl font-body font-bold text-sm hover:opacity-90 transition-all active:scale-95 shadow-sm">
            Fale Conosco
          </button>
        </div>
      </div>
    </nav>
  );
}
