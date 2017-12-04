import { Produto } from '../produto/produto.class';
import { Cliente } from '../cliente/cliente';

export class Venda {
    id: number;
    produto: Produto[];
    cliente_id: number;
    data: Date;
    total: number;
}
