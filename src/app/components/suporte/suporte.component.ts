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

  // title = 'projeto-pds1';
  // public login = true;

  //Remove bellow after test is finished:
//   public clicked_p1: boolean = false;
//   public clicked_p2: boolean = false;
//   public clicked_p3: boolean = false;
//   public clicked_p4: boolean = false;

// enableClick () {
//     this.clicked_p1 = !this.clicked_p1;
//   }
}
