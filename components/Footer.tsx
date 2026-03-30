import Link from "next/link";
import NewsletterForm from "./NewsletterForm";

export default function Footer() {
  return (
    <footer className="bg-emerald-950 text-emerald-50">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-8 py-20 max-w-7xl mx-auto">
        <div className="col-span-1">
          <Link
            href="/"
            className="text-2xl font-black text-emerald-50 mb-8 block tracking-tighter font-headline"
          >
            Círculo Verde
          </Link>
          <p className="text-emerald-200/60 text-sm leading-relaxed mb-8">
            Soluções avançadas para irrigação de precisão. Tecnologia KREBS a
            serviço da produtividade e sustentabilidade no campo brasileiro.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors"
            >
              <span className="material-symbols-outlined text-sm">public</span>
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors"
            >
              <span className="material-symbols-outlined text-sm">share</span>
            </a>
          </div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest font-bold text-emerald-400 mb-8">
            Soluções
          </div>
          <ul className="space-y-4">
            <li>
              <Link
                href="/catalogo?categoria=pivos"
                className="text-emerald-200/60 text-sm hover:text-emerald-400 transition-colors"
              >
                Pivôs Centrais
              </Link>
            </li>
            <li>
              <Link
                href="/catalogo?categoria=controle"
                className="text-emerald-200/60 text-sm hover:text-emerald-400 transition-colors"
              >
                Automação Smart
              </Link>
            </li>
            <li>
              <Link
                href="/catalogo"
                className="text-emerald-200/60 text-sm hover:text-emerald-400 transition-colors"
              >
                Catálogo Completo
              </Link>
            </li>
            <li>
              <Link
                href="#chamado"
                className="text-emerald-200/60 text-sm hover:text-emerald-400 transition-colors"
              >
                Consultoria Técnica
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest font-bold text-emerald-400 mb-8">
            Sede Operacional
          </div>
          <p className="text-emerald-200/60 text-sm leading-relaxed">
            Av. Agroindustrial, 2500
            <br />
            Distrito Industrial - Rio Verde, GO
            <br />
            CEP: 75900-000
            <br />
            <br />
            <span className="text-emerald-400 font-bold">
              contato@circuloverde.com.br
            </span>
          </p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest font-bold text-emerald-400 mb-8">
            Newsletter Técnica
          </div>
          <p className="text-xs text-emerald-200/40 mb-4 leading-relaxed">
            Receba atualizações sobre novas tecnologias de irrigação.
          </p>
          <NewsletterForm />
        </div>
      </div>
      <div className="border-t border-white/5 px-8 py-6 max-w-7xl mx-auto">
        <p className="text-emerald-200/30 text-xs text-center">
          © {new Date().getFullYear()} Círculo Verde. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
