import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {
  formContato = this.fb.group({
    nome:["", [
      Validators.minLength(4),
      Validators.required
  ]],
  assunto: ["", [
    Validators.minLength(4),
      Validators.required
  ]],
  telefone:["", [
    Validators.minLength(4),
      Validators.required
  ]],
  email: ["",[
    Validators.minLength(4),
      Validators.required
  ]],
  mensagem: ["", [
    Validators.minLength(4),
      Validators.required
  ]]
  })
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  enviarFormulario(){
    alert("Mensagem enviada. Você não receberá resposta de mensagens enviadas neste formulário.")
    this.formContato.reset();
  }

}
