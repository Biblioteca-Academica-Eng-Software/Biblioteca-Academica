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
  nome: string;
  disciplina: string;
  exemplares: number;
  disponiveis: number;
}

export interface ResponseEmprestimo {
  message: string;
  devolucao_prevista: string;
}

export interface ResponseStatusLivro {
  id: number;
  user_id: number;
  book_id: number;
  data_reserva: string;
  data_devolucao: string;
  status: number;
}

export interface ResponseHistorico {
  id: number;
  user_id: number;
  book_id: number;
  data_reserva: string;
  data_devolucao: string;
  status: number;
  titulo: string;
  autor: string;
  editora: string;
  imagem: any;
  curso_id: number;
  disciplina: string;
  descricao: string;
  exemplares: number;
  disponiveis: number;
}
