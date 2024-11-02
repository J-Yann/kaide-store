import { Component, OnInit } from '@angular/core';
import { IProdutosCarrinho } from '../produtos';
import { CarrinhoService } from '../carrinho.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  itens_do_carrinho: IProdutosCarrinho[] = [];
  total = 0;

  constructor(

    private itens: CarrinhoService,
    private route: Router

  ) { }

  ngOnInit(): void {
    
  this.itens_do_carrinho = this.itens.obterCarrinho();
  this.calcularTotal();

  }

  //Para atualizar a janela após remover o produto especifico. Só fazer os mesmos procedimentos.
  removerProduto(produtoId: number){
    this.itens_do_carrinho = this.itens_do_carrinho.filter(item => item.id_produto !== produtoId);
    this.itens.removerProdutoCarrinho(produtoId);
    this.calcularTotal();
  }

  //Metódo do total
  calcularTotal(){
    //A função reduce vai pecorrer no meu vetor da esquerda para direta, com isso pegando os valores especificos e multiplncado-os. Veja mais nos extras. 
    this.total = this.itens_do_carrinho.reduce((acumulador, resultadoTotal) => acumulador + (resultadoTotal.quantidade * resultadoTotal.custo), 0);
  }

  compraTudo(){
    window.alert("Compra realizada com sucesso! Aproveite.");
    this.itens.limparCarrinho();
    //Após a comprar vai para página princinpal
    this.route.navigate(["produtos"]);
  }

}
