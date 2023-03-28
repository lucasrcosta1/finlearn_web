import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Suporte } from 'src/app/models/login/suporte.model';

@Component({
  selector: 'app-suporte',
  templateUrl: './suporte.component.html',
  styleUrls: ['./suporte.component.css']
})
export class SuporteComponent {

formulario: FormGroup
suporte: Suporte = new Suporte()

constructor(private _formBuilder  : FormBuilder){
  this.formulario = this._formBuilder.group({
      email   :     [this.suporte.email,    [Validators.required, Validators.email]],
      descricao:     [this.suporte.descricao, [Validators.required]],
    });
    console.log(this.formulario.value)
}

onSubmit(){
  console.log("teste",this.formulario.value)
}
}
