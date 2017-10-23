import { Produto } from '../produto/produto.class';
import { Cliente } from '../cliente/cliente';

export class Venda {
    id: number;
    produtos: Produto[];
    cliente: Cliente;
    data: Date;
    total: number;
}
