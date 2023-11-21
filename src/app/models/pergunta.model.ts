import { Usuario } from './usuario.model';
import { Disciplina } from './disciplina.model'

export interface Pergunta extends Usuario {
  descricao: string;
  data: string;
  usuario: Usuario;
  disciplina: Disciplina;
}