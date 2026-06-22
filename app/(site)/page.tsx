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
                Equipamentos KREBS
              </span>
              <h1 className="text-5xl lg:text-7xl font-headline font-extrabold text-primary tracking-tight leading-tight mb-6">
                O Nordeste cada <br />
                <span className="text-secondary">vez mais verde.</span>
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
              <div className="aspect-[3/2] rounded-3xl overflow-hidden shadow-2xl relative">
                <img
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  src="/imagem 1.jpeg"
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
                    Suporte
                  </span>
                  <span className="text-[9px] font-bold text-on-surface-variant">
                    especializado
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
                    Controle na Palma da Mão
                  </span>
                </div>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Com a tecnologia Kube By B-hyve você pode controlar os seus equipamentos de onde estiver, através de celular ou tablet.
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Seção de Vídeo */}
        <section className="max-w-7xl mx-auto px-8 mb-24">
          <div className="bg-surface-container-low p-8 md:p-12 rounded-3xl border border-outline-variant/10 shadow-sm">
            <div className="max-w-3xl mx-auto text-center mb-8">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold tracking-widest uppercase mb-4">
                Apresentação
              </span>
              <h2 className="text-3xl font-headline font-extrabold text-primary mb-4">
                Círculo Verde & KREBS
              </h2>
              <p className="text-on-surface-variant text-sm md:text-base">
                Parceria de sucesso que tem transformado o Nordeste!
              </p>
            </div>
            <div className="max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-lg border border-outline-variant/10">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/3OD2VdQYRvg"
                title="Equipamentos KREBS em Ação"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>

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
                <div className="relative aspect-[3/2] w-full overflow-hidden">
                  <img
                    alt="O Pivô do Brasil"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src="/imagem 2.jpeg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-8 left-8 right-8">
                    <h3 className="text-3xl font-bold text-white mb-2">
                      O Pivô do Brasil
                    </h3>
                    <p className="text-white/80 text-sm max-w-lg">
                      Comercializado na Bahia, Piauí e Pernambuco pela Revenda Círculo Verde
                    </p>
                  </div>
                </div>
                <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6 bg-surface-container-lowest">
                  <div className="space-y-1">
                    <div className="text-[10px] font-bold text-secondary uppercase tracking-widest">
                      Estados
                    </div>
                    <div className="text-sm font-bold text-primary">
                      Bahia, Piauí e Pernambuco
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-[10px] font-bold text-secondary uppercase tracking-widest">
                      Automação
                    </div>
                    <div className="text-sm font-bold text-primary">
                      KUBE By B-Hyve
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-[10px] font-bold text-secondary uppercase tracking-widest">
                      Modelo
                    </div>
                    <div className="text-sm font-bold text-primary">
                      Pivô de Irrigação Central
                    </div>
                  </div>
                </div>
                <div className="px-8 pb-8 flex flex-wrap gap-4">
                  <button className="bg-primary text-on-primary px-6 py-3 rounded-xl font-bold text-sm hover:opacity-90 transition-all">
                    Solicitar Orçamento
                  </button>
                </div>
              </div>
              <div className="lg:col-span-5 flex flex-col gap-6">
                <div className="bg-primary p-8 rounded-3xl shadow-lg relative overflow-hidden flex flex-col justify-center h-full min-h-[250px]">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/10 rounded-full blur-2xl"></div>
                  <div className="space-y-6">
                    <div>
                      <div className="text-3xl font-black text-secondary-container">10 Anos</div>
                      <div className="text-on-primary/80 text-sm font-semibold uppercase tracking-wider">de atuação</div>
                    </div>
                    <div>
                      <div className="text-3xl font-black text-secondary-container">+400</div>
                      <div className="text-on-primary/80 text-sm font-semibold uppercase tracking-wider">Equipamentos Vendidos</div>
                    </div>
                    <div>
                      <div className="text-3xl font-black text-secondary-container">+15.000</div>
                      <div className="text-on-primary/80 text-sm font-semibold uppercase tracking-wider">hectares irrigados</div>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-outline-variant/10 flex-1">
                  <h4 className="text-lg font-bold text-primary mb-6 flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary">
                      insights
                    </span>
                    Vantagem Competitiva
                  </h4>
                  <div className="space-y-4">
                    {[
                      "Manutenção simplificada",
                      "Peças nacionais",
                      "Suporte técnico ágil",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-3 py-1">
                        <span className="w-5 h-5 rounded bg-secondary text-on-secondary flex items-center justify-center flex-shrink-0">
                          <span className="material-symbols-outlined text-[14px] font-black">
                            check
                          </span>
                        </span>
                        <span className="text-sm font-semibold text-primary">
                          {item}
                        </span>
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
                    Frota própria em atividade na Bahia, Piauí e Pernambuco
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


      </main>
      <Footer />
    </>
  );
}
