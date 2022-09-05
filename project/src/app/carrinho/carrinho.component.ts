import { IProdutoCarrinho } from './../produtos';
import { CarrinhoService } from './../carrinho.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  itensCarrinho: IProdutoCarrinho[]= [];
  total= 0;
  constructor(
    public carrinhoService: CarrinhoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.itensCarrinho = this.carrinhoService.obtemCarrinho();
    this.caulculaTotal();
  }

  caulculaTotal(){
    this.total = this.itensCarrinho.reduce((prev, curr)=> (prev + curr.preco * curr.quantidade), 0);
  }

  removeProdutoCarrinho(produtoId: number){
    this.itensCarrinho = this.itensCarrinho.filter(item => item.id !== produtoId);
    this.carrinhoService.removerProdutoCarrinho(produtoId);
    this.caulculaTotal();
  }

  comprar(){
    alert("Compra concluída com sucesso.");
    this.carrinhoService.limparCarrinho();
    this.router.navigate(["produtos"]);
  }

}
