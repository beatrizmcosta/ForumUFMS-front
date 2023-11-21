import { Usuario } from './usuario.model';
import { Pergunta } from './pergunta.model'

export interface PerguntasSalvas {
  usuario: Usuario;
  pergunta: Pergunta;
}