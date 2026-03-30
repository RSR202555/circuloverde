"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { StatusChamado } from "@/lib/types";

interface Props {
  chamadoId: string;
  statusAtual: StatusChamado;
}

const statusOptions: StatusChamado[] = ["novo", "em_andamento", "concluido"];

export default function AtualizarStatusButton({ chamadoId, statusAtual }: Props) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleChange(novoStatus: StatusChamado) {
    setLoading(true);
    const supabase = createClient();
    await supabase
      .from("chamados")
      .update({ status: novoStatus })
      .eq("id", chamadoId);
    setLoading(false);
    router.refresh();
  }

  return (
    <select
      value={statusAtual}
      onChange={(e) => handleChange(e.target.value as StatusChamado)}
      disabled={loading}
      className="bg-gray-800 text-white text-xs rounded-lg px-3 py-2 border border-gray-700 focus:border-emerald-500 focus:ring-0"
    >
      {statusOptions.map((s) => (
        <option key={s} value={s}>
          {s.replace("_", " ")}
        </option>
      ))}
    </select>
  );
}
