export interface Book {
  id?: number; // opcional, pois só existe após salvar no banco
  titulo: string;
  autor: string;
  editora: string;
  imagem: string | null; // base64 ou null
  curso_id: number;
  disciplina: string;
  descricao: string;
  exemplares: number;
  disponiveis: number;
}

export interface BookCompleto {
  id?: number; // opcional, pois só existe após salvar no banco
  titulo: string;
  autor: string;
  descricao: string;
  editora: string;
  imagem: string | null; // base64 ou null
  curso: string;
  disciplina: string;
  exemplares: number;
  disponiveis: number;
}
