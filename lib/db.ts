import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import { createClient as createSupabaseServerClient } from "@/lib/supabase/server";
import fs from "fs";
import path from "path";

const hasSupabase = 
  process.env.NEXT_PUBLIC_SUPABASE_URL && 
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY &&
  !process.env.NEXT_PUBLIC_SUPABASE_URL.includes("xxxx");

const staticSupabase = hasSupabase
  ? createSupabaseClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )
  : null;

async function getSupabaseClient() {
  if (!hasSupabase) return null;
  try {
    return await createSupabaseServerClient();
  } catch {
    return staticSupabase;
  }
}

const localDbPath = path.join(process.cwd(), "data", "local_db.json");

interface LocalDbSchema {
  chamados: any[];
  categorias: any[];
  produtos: any[];
}

function getLocalDb(): LocalDbSchema {
  if (!fs.existsSync(localDbPath)) {
    const staticCatalogPath = path.join(process.cwd(), "data", "catalogo.json");
    let initialCategorias: any[] = [];
    let initialProdutos: any[] = [];
    
    if (fs.existsSync(staticCatalogPath)) {
      try {
        const staticData = JSON.parse(fs.readFileSync(staticCatalogPath, "utf-8"));
        initialCategorias = (staticData.categorias || []).map((c: any) => ({
          id: c.id,
          nome: c.nome,
          icone: c.icone
        }));
        initialProdutos = (staticData.categorias || []).flatMap((c: any) => 
          (c.produtos || []).map((p: any) => ({
            ...p,
            categoria_id: c.id
          }))
        );
      } catch (e) {
        console.error("Erro ao carregar catalogo.json inicial:", e);
      }
    }

    const initialDb = { chamados: [], categorias: initialCategorias, produtos: initialProdutos };
    saveLocalDb(initialDb);
    return initialDb;
  }
  
  try {
    return JSON.parse(fs.readFileSync(localDbPath, "utf-8"));
  } catch {
    return { chamados: [], categorias: [], produtos: [] };
  }
}

function saveLocalDb(data: LocalDbSchema) {
  const dir = path.dirname(localDbPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(localDbPath, JSON.stringify(data, null, 2), "utf-8");
}

export async function getChamados() {
  const supabase = await getSupabaseClient();
  if (supabase) {
    const { data, error } = await supabase
      .from("chamados")
      .select("*")
      .order("created_at", { ascending: false });
    if (!error) return data || [];
  }
  return getLocalDb().chamados.sort((a, b) => 
    new Date(b.created_at || 0).getTime() - new Date(a.created_at || 0).getTime()
  );
}

export async function insertChamado(chamado: {
  nome_produtor: string;
  localidade: string;
  telefone: string;
  tipo: string;
  descricao?: string;
}) {
  const supabase = await getSupabaseClient();
  if (supabase) {
    const { data, error } = await supabase
      .from("chamados")
      .insert(chamado)
      .select();
    if (!error) return { success: true, data };
    return { success: false, error: error.message };
  }
  
  const db = getLocalDb();
  const newChamado = {
    id: Math.random().toString(36).substring(2, 9),
    ...chamado,
    status: "novo",
    created_at: new Date().toISOString()
  };
  db.chamados.push(newChamado);
  saveLocalDb(db);
  return { success: true, data: [newChamado] };
}

export async function updateChamadoStatus(id: string, status: string) {
  const supabase = await getSupabaseClient();
  if (supabase) {
    const { error } = await supabase
      .from("chamados")
      .update({ status })
      .eq("id", id);
    if (!error) return { success: true };
    return { success: false, error: error.message };
  }
  
  const db = getLocalDb();
  const idx = db.chamados.findIndex(c => c.id === id);
  if (idx !== -1) {
    db.chamados[idx].status = status;
    saveLocalDb(db);
    return { success: true };
  }
  return { success: false, error: "Chamado não encontrado" };
}

export async function getCategorias() {
  const supabase = await getSupabaseClient();
  if (supabase) {
    const { data, error } = await supabase.from("categorias").select("*");
    if (!error) return data || [];
  }
  return getLocalDb().categorias;
}

export async function getProdutos() {
  const supabase = await getSupabaseClient();
  if (supabase) {
    const { data, error } = await supabase.from("produtos").select("*");
    if (!error) return data || [];
  }
  return getLocalDb().produtos;
}

export async function insertProduto(produto: any) {
  const supabase = await getSupabaseClient();
  if (supabase) {
    const { data, error } = await supabase.from("produtos").insert(produto).select();
    if (!error) return { success: true, data };
    return { success: false, error: error.message };
  }
  
  const db = getLocalDb();
  db.produtos.push(produto);
  saveLocalDb(db);
  return { success: true, data: [produto] };
}

export async function updateProduto(sku: string, updates: any) {
  const supabase = await getSupabaseClient();
  if (supabase) {
    const { data, error } = await supabase.from("produtos").update(updates).eq("sku", sku).select();
    if (!error) return { success: true, data };
    return { success: false, error: error.message };
  }
  
  const db = getLocalDb();
  const idx = db.produtos.findIndex(p => p.sku === sku);
  if (idx !== -1) {
    db.produtos[idx] = { ...db.produtos[idx], ...updates };
    saveLocalDb(db);
    return { success: true, data: [db.produtos[idx]] };
  }
  return { success: false, error: "Produto não encontrado" };
}

export async function deleteProduto(sku: string) {
  const supabase = await getSupabaseClient();
  if (supabase) {
    const { error } = await supabase.from("produtos").delete().eq("sku", sku);
    if (!error) return { success: true };
    return { success: false, error: error.message };
  }
  
  const db = getLocalDb();
  const filtered = db.produtos.filter(p => p.sku !== sku);
  if (filtered.length !== db.produtos.length) {
    db.produtos = filtered;
    saveLocalDb(db);
    return { success: true };
  }
  return { success: false, error: "Produto não encontrado" };
}

export async function seedLocalDb(data: { categorias: any[], produtos: any[] }) {
  const db = getLocalDb();
  db.categorias = data.categorias;
  db.produtos = data.produtos;
  saveLocalDb(db);
}
