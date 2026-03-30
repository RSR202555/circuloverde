import catalogoData from "@/data/catalogo.json";
import { Catalogo } from "@/lib/types";
import { createClient } from "@/lib/supabase/server";

export default async function AdminCatalogoPage() {
  const supabase = await createClient();
  const catalogo = catalogoData as Catalogo;

  const { data: views } = await supabase
    .from("produto_views")
    .select("*");

  const viewsMap = Object.fromEntries(
    (views ?? []).map((v) => [v.produto_sku, v.views])
  );

  const todosProdutos = catalogo.categorias.flatMap((cat) =>
    cat.produtos.map((p) => ({ ...p, categoria: cat.nome }))
  );

  return (
    <div>
      <h1 className="text-3xl font-black text-white mb-2">Catálogo de Produtos</h1>
      <p className="text-gray-400 mb-8">{todosProdutos.length} produto(s) em {catalogo.categorias.length} categorias</p>

      <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700 mb-8">
        <p className="text-amber-400 text-sm flex items-center gap-2">
          <span className="material-symbols-outlined text-[18px]">info</span>
          Para adicionar ou editar produtos, edite o arquivo <code className="bg-gray-800 px-2 py-0.5 rounded text-emerald-400">data/catalogo.json</code> e faça um novo deploy.
        </p>
      </div>

      {catalogo.categorias.map((cat) => (
        <div key={cat.id} className="mb-8">
          <h2 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-emerald-500">{cat.icone}</span>
            {cat.nome}
          </h2>
          <div className="bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left px-6 py-3 text-gray-400 font-medium">Produto</th>
                  <th className="text-left px-6 py-3 text-gray-400 font-medium">SKU</th>
                  <th className="text-left px-6 py-3 text-gray-400 font-medium">Disponibilidade</th>
                  <th className="text-left px-6 py-3 text-gray-400 font-medium">Views</th>
                </tr>
              </thead>
              <tbody>
                {cat.produtos.map((produto) => (
                  <tr key={produto.sku} className="border-b border-gray-800 last:border-0">
                    <td className="px-6 py-4 text-white font-medium">{produto.nome}</td>
                    <td className="px-6 py-4 text-gray-400 font-mono text-xs">{produto.sku}</td>
                    <td className="px-6 py-4">
                      <span className="text-xs bg-emerald-600/20 text-emerald-400 px-2 py-1 rounded-full">
                        {produto.disponibilidade}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-300">{viewsMap[produto.sku] ?? 0}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
}
