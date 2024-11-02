import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificacaoService {

  constructor(
    private Snackbar: MatSnackBar
  ) { }

  open_mensagem(mensagem: string){
    this.Snackbar.open(mensagem, "OK", {
      //Configurações adicionais para minha SnackBar
      duration: 3000, //A caixa irá durar 3s na tela
      verticalPosition: "bottom", //Irá ficar na posição vetical em cima
      horizontalPosition: "center", //Irá ficar na posição horizontal no centro
    })

  }

}
