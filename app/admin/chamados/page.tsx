import { createClient } from "@/lib/supabase/server";
import { Chamado } from "@/lib/types";
import AtualizarStatusButton from "./AtualizarStatusButton";

export default async function ChamadosPage() {
  const supabase = await createClient();
  const { data: chamados } = await supabase
    .from("chamados")
    .select("*")
    .order("created_at", { ascending: false });

  const statusColor: Record<string, string> = {
    novo: "bg-amber-600/20 text-amber-400",
    em_andamento: "bg-blue-600/20 text-blue-400",
    concluido: "bg-emerald-600/20 text-emerald-400",
  };

  return (
    <div>
      <h1 className="text-3xl font-black text-white mb-2">Chamados Técnicos</h1>
      <p className="text-gray-400 mb-8">{chamados?.length ?? 0} chamado(s) no total</p>

      <div className="bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-800">
              <th className="text-left px-6 py-4 text-gray-400 font-medium">Produtor</th>
              <th className="text-left px-6 py-4 text-gray-400 font-medium">Localidade</th>
              <th className="text-left px-6 py-4 text-gray-400 font-medium">Tipo</th>
              <th className="text-left px-6 py-4 text-gray-400 font-medium">Data</th>
              <th className="text-left px-6 py-4 text-gray-400 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {chamados && chamados.length > 0 ? (
              chamados.map((chamado: Chamado) => (
                <tr key={chamado.id} className="border-b border-gray-800 last:border-0 hover:bg-gray-800/50">
                  <td className="px-6 py-4">
                    <p className="text-white font-medium">{chamado.nome_produtor}</p>
                    {chamado.descricao && (
                      <p className="text-gray-500 text-xs mt-0.5 line-clamp-1">{chamado.descricao}</p>
                    )}
                  </td>
                  <td className="px-6 py-4 text-gray-300">{chamado.localidade}</td>
                  <td className="px-6 py-4">
                    <span className={`text-xs px-2 py-1 rounded-full font-bold ${
                      chamado.tipo === "emergencial"
                        ? "bg-red-600/20 text-red-400"
                        : "bg-blue-600/20 text-blue-400"
                    }`}>
                      {chamado.tipo}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-400 text-xs">
                    {new Date(chamado.created_at).toLocaleDateString("pt-BR")}
                  </td>
                  <td className="px-6 py-4">
                    <AtualizarStatusButton
                      chamadoId={chamado.id}
                      statusAtual={chamado.status}
                    />
                  </td>
                </tr>
              ))
            ) : (
               <tr>
                <td colSpan={5} className="text-center py-12 text-gray-500">
                  Nenhum chamado recebido ainda.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
