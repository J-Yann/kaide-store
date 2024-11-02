import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {
  //Veja em extras 2 para saber sobre essas funções

  inputs_forms = this.fb.group({
    //Key: ["name?", [options?]]
    name: ["", [
      //Validação para esse input ser considerado correto!
      Validators.minLength(4),
      Validators.required //É obrigatório preencher esse campo
    ]],
    assunto: ["", [
      Validators.minLength(6),
      Validators.required
    ]],
    tell: ["", [
      Validators.minLength(11),
      Validators.required
    ]],
    email: ["", [
      Validators.email, //Validação já propia para email
      Validators.required
    ]],
    mensage: ["", [
      Validators.minLength(20),
      Validators.required
    ]]
  });

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  enviarFormulario(){
    window.alert("Sua resposta foi regitrada!");
    this.inputs_forms.reset(); //Para limpar o meu formulário
  }

}
