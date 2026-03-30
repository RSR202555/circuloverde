export type TipoChamado = "preventiva" | "emergencial";
export type StatusChamado = "novo" | "em_andamento" | "concluido";

export interface Chamado {
  id: string;
  nome_produtor: string;
  localidade: string;
  tipo: TipoChamado;
  descricao: string;
  status: StatusChamado;
  created_at: string;
}

export interface NewsletterEmail {
  id: string;
  email: string;
  created_at: string;
}

export interface ProdutoView {
  produto_sku: string;
  views: number;
}

export interface Produto {
  sku: string;
  nome: string;
  badge: string;
  disponibilidade: string;
  imagem: string;
  especificacoes: string[];
  descricao: string;
}

export interface Categoria {
  id: string;
  nome: string;
  icone: string;
  produtos: Produto[];
}

export interface Catalogo {
  categorias: Categoria[];
}
