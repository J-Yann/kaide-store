import { Component, OnInit } from '@angular/core';
import { IProdutos } from '../produtos';
import { ProdutosService } from '../produtos.service'; /*Retirando minha varivale 'const produtos' de 'IProdutos'*/
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit { 
  my_products: IProdutos[] | undefined; /*Mudaddo para 'undefined'*/
  constructor(
    /*Chamando o ProdutosService*/
    private produtosService: ProdutosService,
    private url: ActivatedRoute
  ) {}
   

  ngOnInit(): void {
    /*
      Metódo para retornar todos os produtos para minha classe (module) de componente central (página de produtos), sem ultilizar
      a propia variavel 'const produtos' de 'IProdutos'.

      Veja mais em Extras 3!

      this.my_products = this.produtosService.getAll();

      mais essa instrução foi trocada pelo "const produtos = this.produtosService.getAll();" parametros da rota a seguir
    */
    const produtos = this.produtosService.getAll();
    this.url.queryParamMap.subscribe(paramUrl => {

      const searchProduct = paramUrl.get("searchProduct");
      
      if (searchProduct){
        this.my_products = produtos.filter(produto => produto.nome.includes(searchProduct));
        return;
      }else{
        this.my_products = produtos;
      }

    })

  }

}
