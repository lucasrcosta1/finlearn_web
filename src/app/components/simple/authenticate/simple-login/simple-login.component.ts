import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login/login.service';

@Component({
  selector: 'app-simple-login',
  templateUrl: './simple-login.component.html',
  styleUrls: ['./simple-login.component.css','../simple-register/simple-register.component.css']
})
export class SimpleLoginComponent {
  public loginForm              : FormGroup;
  public machingEmail           : boolean = false;
  public machingPassword        : boolean = false;


  private loginService  : LoginService = new LoginService(this.router,this.http);

  constructor (
    private router: Router,
    private formBuilder  : FormBuilder,
    private http: HttpClient,
  ) {
    this.loginForm = this.formBuilder.group({
      email           : [null, [Validators.required, Validators.email]],
      // password        : [null, [Validators.required, Validators.minLength(6)]],
      password        : [null, [Validators.required]],
    });
  }

  /**
   * Check whether user is logged or not.
   * @todo User type to be sent should be this.http.post<User> instead of this.http.post<any>.
   */
  onSubmit (): void {
    console.log(this.loginForm.value);

    this.loginService.isLogged(this.loginForm.value).subscribe(
      data => console.log(data)

      // error => console.error(error)

        // console.log(typeof(response));
        // console.log(response.status);
        // if (response.detail)

    );
  }

  /**
   * Pass register to be handled by the api.
   * @todo Add login verification (google - https://www.youtube.com/watch?v=1hMvJsSDnvU)
   * @param api
   */
  public outsideLogin (api: string): void {
    console.log('connect Api');
    this.loginService.connectApiClicked(api);
    // this._loginService.isLoggedIn(this.user.email, this.user.password);
  }
}
