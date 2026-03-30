import { createClient } from "@/lib/supabase/server";

export default async function DashboardPage() {
  const supabase = await createClient();

  const [
    { count: totalChamados },
    { count: novosChamados },
    { count: totalEmails },
    { data: ultimosChamados },
    { data: topProdutos },
  ] = await Promise.all([
    supabase.from("chamados").select("*", { count: "exact", head: true }),
    supabase.from("chamados").select("*", { count: "exact", head: true }).eq("status", "novo"),
    supabase.from("newsletter").select("*", { count: "exact", head: true }),
    supabase.from("chamados").select("*").order("created_at", { ascending: false }).limit(5),
    supabase.from("produto_views").select("*").order("views", { ascending: false }).limit(5),
  ]);

  const stats = [
    { label: "Total de Chamados", value: totalChamados ?? 0, icon: "support_agent", color: "bg-emerald-600" },
    { label: "Chamados Novos", value: novosChamados ?? 0, icon: "notifications_active", color: "bg-amber-600" },
    { label: "Emails Newsletter", value: totalEmails ?? 0, icon: "mail", color: "bg-blue-600" },
  ];

  return (
    <div>
      <h1 className="text-3xl font-black text-white mb-2">Dashboard</h1>
      <p className="text-gray-400 mb-8">Visão geral da plataforma</p>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
            <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center mb-4`}>
              <span className="material-symbols-outlined text-white">{stat.icon}</span>
            </div>
            <div className="text-3xl font-black text-white mb-1">{stat.value}</div>
            <div className="text-gray-400 text-sm">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Últimos chamados */}
        <div className="bg-gray-900 rounded-2xl border border-gray-800 p-6">
          <h2 className="text-white font-bold mb-4">Últimos Chamados</h2>
          {ultimosChamados && ultimosChamados.length > 0 ? (
            <div className="space-y-3">
              {ultimosChamados.map((chamado: any) => (
                <div key={chamado.id} className="flex items-center justify-between py-3 border-b border-gray-800 last:border-0">
                  <div>
                    <p className="text-white text-sm font-medium">{chamado.nome_produtor}</p>
                    <p className="text-gray-400 text-xs">{chamado.localidade}</p>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full font-bold ${
                    chamado.status === "novo" ? "bg-amber-600/20 text-amber-400" :
                    chamado.status === "em_andamento" ? "bg-blue-600/20 text-blue-400" :
                    "bg-emerald-600/20 text-emerald-400"
                  }`}>
                    {chamado.status.replace("_", " ")}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-sm">Nenhum chamado ainda.</p>
          )}
        </div>

        {/* Produtos mais vistos */}
        <div className="bg-gray-900 rounded-2xl border border-gray-800 p-6">
          <h2 className="text-white font-bold mb-4">Produtos Mais Vistos</h2>
          {topProdutos && topProdutos.length > 0 ? (
            <div className="space-y-3">
              {topProdutos.map((p: any) => (
                <div key={p.produto_sku} className="flex items-center justify-between py-3 border-b border-gray-800 last:border-0">
                  <span className="text-white text-sm font-medium">{p.produto_sku}</span>
                  <span className="text-emerald-400 text-sm font-bold">{p.views} views</span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-sm">Nenhuma visualização ainda.</p>
          )}
        </div>
      </div>
    </div>
  );
}
