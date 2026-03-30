import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { nome_produtor, localidade, tipo, descricao } = body;

  if (!nome_produtor || !localidade || !tipo) {
    return NextResponse.json(
      { error: "Campos obrigatórios não preenchidos." },
      { status: 400 }
    );
  }

  const supabase = await createClient();

  const { error } = await supabase.from("chamados").insert({
    nome_produtor,
    localidade,
    tipo,
    descricao,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true }, { status: 201 });
}
