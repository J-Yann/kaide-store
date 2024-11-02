import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarrinhoService } from 'src/app/carrinho.service';
import { NotificacaoService } from 'src/app/notificacao.service';
import { IProdutos, IProdutosCarrinho } from 'src/app/produtos';
import { ProdutosService } from 'src/app/produtos.service';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css']
})
export class DetalhesProdutoComponent implements OnInit {

  my_product: IProdutos | undefined;
  quantidade = 1;

  constructor(
    private produtosService: ProdutosService,
    /*Resposavel por trabalhar ou modificar os parametros da routa ou URL*/
    private route: ActivatedRoute,
    private snackBar: NotificacaoService,
    private carrinho: CarrinhoService
  ) { }

  ngOnInit(): void {
    /*
      Pegando a função exata (this.route.snapshot.paramMap) para pegar um atributo ou paramentro de dentro da URL ao abrir esse componente
    */
   const routeParams = this.route.snapshot.paramMap;
   /*
    O meu 'produtoId' vai receber o 'id' (paramRoute.get("id")) que está dentro da minha URL
    Ex:/produtos/'1' (Meu id do produto)
    atraveis da condição anterior, só que, irei passar para 'Number();' 
   */
   const produtoId = Number(routeParams.get("id"));
   /*
    Agora irei passar para minha variavel 'my_product' o metódo 'getOne()' que irá receber o meu 'produtoId' transformado em number e ele vai comparar qual id
    possui dentro do vetor de produtos.
   */
   this.my_product = this.produtosService.getOne(produtoId);
  }

  addNotificacao(){
    this.snackBar.open_mensagem("Adicionado ao carrinho!");
    //Após isso, criando o produto adiconado ao meu carrinho
    const produto: IProdutosCarrinho = {
      //Nesse produto vai estar todas as informções da página de agora ou seja do produto, por causa do "this.my_product = this.produtosService.getOne(produtoId);"
      ...this.my_product!, 
      //Obs.: " ! " serve para dizer que esse produto sempre vai existir e mão existir (undefined)
      // E a quantidade desse produto.
      quantidade: this.quantidade
    }
    //Adcioando o produto criado
    this.carrinho.adcionarAoCarrinho(produto);

  }

}
