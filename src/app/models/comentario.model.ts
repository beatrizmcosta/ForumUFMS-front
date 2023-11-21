import { Usuario } from './usuario.model';
import { Pergunta } from './pergunta.model';

export interface Comentario extends Usuario {
  descricao: string;
  data: string;
  usuario: Usuario;
  pergunta: Pergunta;
}