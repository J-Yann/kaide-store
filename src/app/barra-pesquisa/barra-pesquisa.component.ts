import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barra-pesquisa',
  templateUrl: './barra-pesquisa.component.html',
  styleUrls: ['./barra-pesquisa.component.css']
})
export class BarraPesquisaComponent implements OnInit {

  search_product = "";

  constructor(
    //Pegando o meu ActiverRouter
    private route: Router

  ) { }

  ngOnInit(): void {
  }
  //Metódo para navegar até a página "produtos" e levar os meus dados da variavel "search_product" atraves do "queryParams" jutamente com função .navigate
  search (){

    if(this.search_product){
      this.route.navigate(["produtos"], { queryParams: {searchProduct: this.search_product} });
      //Ultilize o "searchProduct" na verificação de produtos. Ou seja troque-a pelo "search_product" na linha 34
      return;
    }else{
      this.route.navigate(["produtos"]);
      //Caso ache um valor nulo ou valor errado volte para página
    }

  }

}
