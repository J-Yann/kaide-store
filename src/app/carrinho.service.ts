import { Injectable } from '@angular/core';
import { IProdutosCarrinho } from './produtos';

@Injectable({
  providedIn: 'root'
})

/*
Esse serviço será reponsavél por gerenciar o carrinho após ativar o metódo "addNotificacao()" ou seja
o produto que foi adicionado. Para comprar.
*/

export class CarrinhoService {

  //variável principal para obter os dados produto seleciondo como id, name e etc... Terá direto (extends) ao meu objeto "IProdutos"
  itens: IProdutosCarrinho[] = [];

  constructor() { }
  //Metódo para obter todos os produtos adicionados ao carrinho
  obterCarrinho(){
    //Irá retonar os dados do carrinho de meu localstorege, ataveis de uma chave ("carrinho" ou "nome do item(s)") 
    //A função "JSON.parse()" faz com que meu valor em string vira para um objeto (uma classe abstrata)
    this.itens = JSON.parse(localStorage.getItem("carrinho") || "[]");
    return this.itens;
  }
  //Metódo para adicionar os dados do produto para o meu carrinho
  adcionarAoCarrinho(produto: IProdutosCarrinho){
    this.itens.push(produto); //Inserindo um novo vetor de dados (novo produto) em itens e suas especificações
    localStorage.setItem("carrinho", JSON.stringify(this.itens)); //Salvado a informação de uma nova inserção dentro do  meu vetor chamado "carrinho"
    //Obs.: a função "JSON.srtingfy" faz com que meu valor em objeto (uma classe abstrata) vire uma string e meu "localStorage" só aceita valores em string
    // Já que meu vetor "itens" é uma lista de objetos.
  }

  //metódo para remover um produto espcifico do carrinho
  removerProdutoCarrinho(id_Produto: number){
    /*
    Essa função (filter nesse contexto) vai criar um novo array this.itens que exclui o item com o id_produto especificado. O array original é substituído pelo novo 
    array filtrado, então a exclusão é "permanente" no contexto do objeto this. Em outras palavras, o item será removido do array this.itens 
    de forma definitiva.
    */
    this.itens = this.itens.filter(item => item.id_produto !== id_Produto);
    //Salvando novamente no meu localstorage
    localStorage.setItem("carrinho", JSON.stringify(this.itens));
  }


  //Metódo para limpar o carrinho ou meu vetor do carrinho, e meu localstorege
  limparCarrinho(){
    this.itens = [];
    localStorage.clear();
  }
  //Agora configurando o esses metódos para os arquivos "detelhes-produto.component.ts" e o "header da loja (header.component.ts)"
}
