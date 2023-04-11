import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user/User.model';
import { LoginService } from 'src/app/service/login/login.service';

@Component({
  selector: 'app-simple-register',
  templateUrl: './simple-register.component.html',
  styleUrls: ['./simple-register.component.css']
})
export class SimpleRegisterComponent {
  public registerForm   : FormGroup;
  public machingEmail           : boolean = false;
  public machingPassword        : boolean = false;



  private loginService  : LoginService = new LoginService(this.router, this.http);

  constructor (
    private router        : Router,
    private formBuilder   : FormBuilder,
    private http          : HttpClient,
  ) {
    this.registerForm = this.formBuilder.group({
      name            : [null, [Validators.required]],
      telephone       : [null, [Validators.required]],
      email           : [null, [Validators.required, Validators.email]],
      confirmEmail    : [null, [Validators.required, Validators.email]],
      password        : [null, [Validators.required, Validators.minLength(6)]],
      confirmPassword : [null, [Validators.required, Validators.minLength(6)]],
      // birthDate    : [null, [Validators.required]],
      role            : [null, [Validators.required]],
    });
  }

  teste() {

    let user: User = {
      name: 'admin',
      email: 'adm@adm.com.br',
      password: 'Admin123@',
      role: 'NORMAL_USER',
      telephone: '+5534999999999'
    };
    // let user: User = {
    //   name: this.registerForm.value.name,
    //   email: this.registerForm.value.email,
    //   password: this.registerForm.value.password,
    //   role: this.registerForm.value.role.toString(),
    //   telephone: this.registerForm.value.telephone
    // };
    // user.role = user.role.split('');

    let a = user.role.replace("'","");
    console.log("a",a);
    console.log("user",user.role)
  }

  /**
   * Submit user registry.
   * @todo DB is not saving data as User type.
   * @todo verify whether password and confirmPassword fields are the same. Same to email.
   * @todo validators should give user an error message in the screen
   */
  public onSubmit (): void{
    // if (this.registerForm.value.email !== this.registerForm.value.confimEmail) {
    //   return;
    // }
    // if (this.registerForm.value.password !== this.registerForm.value.confirmPassword) {
    //   return;
    // }

    // let user = new User (this.registerForm.value);
    // console.log(user);



    // let user: User = {
    //   name: 'admin',
    //   email: 'adm@adm.com.br',
    //   password: 'Admin123@',
    //   role: 'NORMAL_USER',
    //   telephone: '+5534999999999'
    // };
    let b = this.registerForm.value.role;
    let a = b.replace("'","");
    a = a.replace("'","")

    let user: User = {
      name: this.registerForm.value.name,
      email: this.registerForm.value.email,
      password: this.registerForm.value.password,
      role: a,
      telephone: this.registerForm.value.telephone
    };

    console.log(user);

    this.loginService.registerUser(user);
  }

  public celMask (inputElement: HTMLInputElement): void {
    let telephone = inputElement.value;

    telephone = telephone.replace(/\D/g, '');

    if (telephone.length <= 10) {
      telephone = telephone.replace(/^(\d{2})(\d)/g, '($1) $2');
    } else {
      telephone = telephone.replace(/^(\d{2})(\d{1})(\d{4})(\d)/g, '($1) $2 $3-$4');
    }

    inputElement.value = telephone;
  }

   // Getter for accessing the form control in the template
  //  get name() {
  //   let name = this.registerForm.get('name')?.value;
  //   console.log(name);
  //   return name;
  // }
}
