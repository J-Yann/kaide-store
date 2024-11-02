import { Injectable } from '@angular/core';
import { IProdutos, produtos } from './produtos';

@Injectable({
  providedIn: 'root'
})
/*
   Responsavel por retonar e gerenciar todos os meus produtos e encontra um produto especifico
    deacordo com ID do produto, dentro do banco de dados de produtos
*/
export class ProdutosService {

  produto: IProdutos[] = produtos;

  constructor() { }

  /*
    Metódo para receber todos os produtos de dentro do banco de dados do 'produtos'
  */
 getAll(){
  return this.produto;
 }
 /*
  Metódo para retonar aquele produto que tenha o ID atrveis (getOne) de uma condição que eu especificar (.find)
 */
 getOne(produtoId: number){
  return this.produto.find(produtos => produtos.id_produto === produtoId);
 }

}
