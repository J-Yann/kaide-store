import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../carrinho.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    //Para obter a quantidade em que estar dentro da minha chave "carrinho"
    public carrinho: CarrinhoService
  ) {}

  ngOnInit(): void {
  }

}
