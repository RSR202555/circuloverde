import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChamadoForm from "@/components/ChamadoForm";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        {/* Hero */}
        <header className="max-w-7xl mx-auto px-8 mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold tracking-widest uppercase mb-6">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                Tecnologia KREBS
              </span>
              <h1 className="text-5xl lg:text-7xl font-headline font-extrabold text-primary tracking-tight leading-tight mb-6">
                Inteligência em <br />
                <span className="text-secondary">Irrigação.</span>
              </h1>
              <p className="text-lg text-on-surface-variant max-w-md leading-relaxed mb-8">
                Elevando a produtividade do agronegócio com engenharia de
                precisão e suporte técnico ininterrupto.
              </p>
              <div className="flex items-center gap-6">
                <div className="text-sm font-semibold text-primary">
                  Aprovado por líderes do setor
                </div>
              </div>
            </div>
            <div className="relative group">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative">
                <img
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvgLwmP_h7RmYjYCWz65fi1T7BwdZrm0MnirFZbKW3Xl5yARg0WSNFSq7N7lLHlBVIa8tMMTiyHRxko5pbgfPrlmJMDBXlR1G3_fAOpTBKKhCqpIugk-gyOw_hvb9qxi4Xh-47ZWX06YTdS0BQkjAr3qxFg2ZnXNf7zUWxl2hXuBr7lQ2oy_f8mGOz9Yt0Wi1U4unWrhrfx3qpXF2fRKr1ys_uXvlFwPMGRba6N6YqO8OW4CpEkmLKMyLKF9qWwq6qLZ6IAK-5ywc"
                  alt="Vista aérea de sistema de irrigação por pivô central"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent"></div>
              </div>
              <div className="absolute -top-6 -right-6 glass-effect bg-white/80 p-5 rounded-2xl shadow-xl border border-white/50 animate-bounce duration-[3000ms]">
                <div className="flex flex-col items-center gap-1">
                  <span
                    className="material-symbols-outlined text-secondary text-3xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    workspace_premium
                  </span>
                  <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">
                    Excellence
                  </span>
                  <span className="text-[9px] font-bold text-on-surface-variant">
                    Award 2024
                  </span>
                </div>
              </div>
              <div className="absolute -bottom-8 -left-8 glass-effect bg-white/70 p-8 rounded-2xl shadow-2xl max-w-xs border border-white/40">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                    <span
                      className="material-symbols-outlined text-secondary"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      precision_manufacturing
                    </span>
                  </div>
                  <span className="text-sm font-bold text-primary font-headline uppercase tracking-tighter">
                    Performance Monitorada
                  </span>
                </div>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Sensores integrados KREBS permitem monitoramento 24/7 de vazão
                  e pressão em tempo real.
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Seção Pivôs KREBS */}
        <section
          id="produtos"
          className="bg-surface-container-low py-24 mb-24 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform origin-top translate-x-32"></div>
          <div className="max-w-7xl mx-auto px-8 relative z-10">
            <div className="max-w-3xl mb-16">
              <h2 className="text-4xl font-headline font-extrabold text-primary mb-6">
                Venda de Pivôs KREBS
              </h2>
              <p className="text-on-surface-variant text-lg leading-relaxed">
                Referência mundial em durabilidade e precisão. Nossos sistemas
                são projetados para resistir às condições mais severas do campo
                brasileiro com o menor custo operacional do mercado.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              <div className="lg:col-span-7 bg-white rounded-3xl overflow-hidden shadow-xl border border-outline-variant/10 group">
                <div className="relative h-96 overflow-hidden">
                  <img
                    alt="KREBS Pivot Central"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBozTSxcm7P-hpUqPsrl0sHimnI5ZMOIV1NTfyl90x__5ypRAZTUQl0fs50Hbm2AkzQONlrLO1HTjZq-VW30_7E_gLgEpLQqd2giX8p-G2HUk0xqxoEILUSMuskp5HTB16YZ5ZtNE8bQfIYL1RimuMGsy3HbatUUTacmNYUlXMsFdjN1kuOFtwnrnfILbJXJov7c6SuWQMRM5aHuNpOVUNFlXEkjrIOD-ivlOUySNygyZXw7wUDxJQddnmx-3ZVbDZzbkr9cAJqgKs"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-8 left-8 right-8">
                    <h3 className="text-3xl font-bold text-white mb-2">
                      KREBS Pivot Central
                    </h3>
                    <p className="text-white/80 text-sm max-w-lg">
                      Engenharia alemã adaptada à realidade tropical brasileira,
                      garantindo uniformidade hídrica total.
                    </p>
                  </div>
                </div>
                <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6 bg-surface-container-lowest">
                  <div className="space-y-1">
                    <div className="text-[10px] font-bold text-secondary uppercase tracking-widest">
                      Material
                    </div>
                    <div className="text-sm font-bold text-primary">
                      Aço Galvanizado a Fogo
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-[10px] font-bold text-secondary uppercase tracking-widest">
                      Controle
                    </div>
                    <div className="text-sm font-bold text-primary">
                      Rede 4G / LoRa Smart
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-[10px] font-bold text-secondary uppercase tracking-widest">
                      Alcance
                    </div>
                    <div className="text-sm font-bold text-primary">
                      Até 1.000m de raio
                    </div>
                  </div>
                </div>
                <div className="px-8 pb-8 flex flex-wrap gap-4">
                  <button className="bg-primary text-on-primary px-6 py-3 rounded-xl font-bold text-sm hover:opacity-90 transition-all flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">
                      download
                    </span>
                    Download Technical Datasheet (PDF)
                  </button>
                  <button className="border-2 border-primary text-primary px-6 py-3 rounded-xl font-bold text-sm hover:bg-primary/5 transition-all">
                    Solicitar Orçamento
                  </button>
                </div>
              </div>
              <div className="lg:col-span-5 flex flex-col gap-6">
                <div className="bg-primary p-8 rounded-3xl shadow-lg relative overflow-hidden">
                  <div className="text-on-primary/60 text-[10px] font-bold tracking-[0.2em] uppercase mb-4">
                    Garantia KREBS
                  </div>
                  <div className="text-5xl font-black text-secondary-container mb-4">
                    10 Anos
                  </div>
                  <p className="text-on-primary/70 text-sm leading-relaxed mb-6">
                    Cobertura estrutural líder do setor contra corrosão e fadiga
                    de material.
                  </p>
                  <div className="flex items-center gap-2 text-on-primary text-xs font-bold">
                    <span className="material-symbols-outlined text-secondary-container">
                      shield
                    </span>
                    Certificação de Qualidade ISO 9001
                  </div>
                </div>
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-outline-variant/10 flex-1">
                  <h4 className="text-lg font-bold text-primary mb-6 flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary">
                      insights
                    </span>
                    Vantagem Competitiva
                  </h4>
                  <div className="space-y-5">
                    {[
                      {
                        label: "Economia de Energia",
                        value: "+22%",
                        pct: "85%",
                      },
                      {
                        label: "Eficiência Hídrica",
                        value: "+18%",
                        pct: "92%",
                      },
                      {
                        label: "Vida Útil Estimada",
                        value: "25+ Anos",
                        pct: "98%",
                      },
                    ].map((item) => (
                      <div key={item.label}>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium text-on-surface-variant">
                            {item.label}
                          </span>
                          <span className="text-xs font-bold text-secondary">
                            {item.value}
                          </span>
                        </div>
                        <div className="w-full h-1.5 bg-surface-container rounded-full overflow-hidden">
                          <div
                            className="h-full bg-secondary rounded-full"
                            style={{ width: item.pct }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção Chamado Técnico */}
        <section id="chamado" className="max-w-7xl mx-auto px-8 mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <div className="order-2 lg:order-1">
              <ChamadoForm />
            </div>
            <div className="order-1 lg:order-2 space-y-10 lg:sticky lg:top-32">
              <div className="space-y-6">
                <h2 className="text-5xl font-headline font-extrabold text-primary leading-tight">
                  Suporte que não para.
                </h2>
                <p className="text-on-surface-variant text-xl leading-relaxed">
                  Entendemos que no agronegócio o tempo é o recurso mais
                  valioso. Nossa equipe móvel está posicionada estrategicamente
                  para atender sua fazenda em tempo recorde.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-8 bg-white rounded-3xl border border-outline-variant/10 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mb-6">
                    <span
                      className="material-symbols-outlined text-3xl"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      speed
                    </span>
                  </div>
                  <div className="font-bold text-primary text-lg mb-2">
                    Atendimento 24h
                  </div>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    Plantão técnico especializado para emergências 7 dias por
                    semana.
                  </p>
                </div>
                <div className="p-8 bg-white rounded-3xl border border-outline-variant/10 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mb-6">
                    <span
                      className="material-symbols-outlined text-3xl"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      local_shipping
                    </span>
                  </div>
                  <div className="font-bold text-primary text-lg mb-2">
                    Logística Ágil
                  </div>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    Frota própria rastreada com laboratórios móveis para reparos
                    em campo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Peças de Reposição */}
        <section className="max-w-7xl mx-auto px-8 mb-32">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-headline font-extrabold text-primary mb-4">
                Peças de Reposição
              </h2>
              <p className="text-on-surface-variant text-lg">
                Catálogo completo de componentes originais testados sob
                rigorosos padrões de qualidade.
              </p>
            </div>
            <Link
              href="/catalogo"
              className="group flex items-center gap-3 text-primary font-bold hover:text-secondary transition-colors"
            >
              Ver Catálogo Digital
              <span className="w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                sku: "K-001",
                nome: "Anel Coletor",
                badge: "KREBS Original",
                imagem: "/produtos/Anel coletor.jpg",
                icone: "settings",
              },
              {
                sku: "K-004",
                nome: "Bocais Especiais",
                badge: "Irrigação KREBS",
                imagem: "/produtos/Bocais (R$9,05).jpg",
                icone: "opacity",
              },
              {
                sku: "K-023",
                nome: "Câmara de Ar 14-9-24",
                badge: "Reposição Oficial",
                imagem: "/produtos/Câmara de ar 14-9-24.jpg",
                icone: "developer_board",
              },
            ].map((produto) => (
              <div
                key={produto.sku}
                className="group relative bg-white rounded-3xl border border-outline-variant/10 overflow-hidden hover:shadow-2xl transition-all duration-500 p-8"
              >
                <div className="flex justify-between items-start mb-6">
                  <span className="text-[10px] font-black text-secondary uppercase tracking-widest bg-secondary/10 px-3 py-1 rounded-full">
                    {produto.badge}
                  </span>
                  <span className="text-on-surface-variant text-[10px] font-medium">
                    SKU: {produto.sku}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">
                  {produto.nome}
                </h3>
                <div className="relative h-56 w-full mb-6 flex items-center justify-center bg-surface-container-low rounded-2xl overflow-hidden">
                  {produto.imagem ? (
                    <img
                      src={produto.imagem}
                      alt={produto.nome}
                      className="max-w-[80%] max-h-[80%] object-contain group-hover:scale-110 transition-transform duration-700 mix-blend-multiply"
                    />
                  ) : (
                    <span className="material-symbols-outlined text-primary/20 text-9xl group-hover:scale-110 transition-transform duration-700">
                      {produto.icone}
                    </span>
                  )}
                </div>
                <Link
                  href="/catalogo"
                  className="w-full block text-center bg-primary/5 text-primary font-bold py-3 rounded-xl text-sm hover:bg-primary hover:text-white transition-all"
                >
                  Ver no Catálogo
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Pulse */}
        <section className="max-w-7xl mx-auto px-8 mb-24">
          <div className="bg-primary p-16 rounded-3xl relative overflow-hidden flex flex-col md:flex-row items-center justify-around gap-12 text-center shadow-2xl">
            {[
              { valor: "1.2k+", label: "Pivôs Ativos" },
              { valor: "98%", label: "Uptime Sistêmico" },
              { valor: "24/7", label: "Rede de Monitoramento" },
            ].map((stat, i) => (
              <div key={i} className="relative z-10">
                <div className="flex justify-center items-center gap-3 mb-3">
                  <div className="w-3 h-3 rounded-full bg-secondary-fixed animate-ping"></div>
                  <div className="text-5xl font-headline font-black text-on-tertiary">
                    {stat.valor}
                  </div>
                </div>
                <div className="text-[10px] font-black text-secondary-container uppercase tracking-[0.3em]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
