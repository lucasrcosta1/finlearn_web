import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/service/api/api.service';
import { SnackbarService } from 'src/app/service/snackbar/snackbar.service';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: localStorage.getItem("auth-key")!
  })
};
@Component({
  selector: 'app-route-test',
  templateUrl: './route-test.component.html',
  styleUrls: ['./route-test.component.css']
})
export class RouteTestComponent {
  response = "";
  loginForm: FormGroup;

  constructor (
    private _formBuilder: FormBuilder,
    private _http: HttpClient,
    private _apiService: ApiService,
    private _snackbarService: SnackbarService,
  ) {

    this.loginForm = this._formBuilder.group({email: null, password: null});

  }

  async trigger (route: string, event?: any) {
    // let requestBody, r, id;
    // if (event) {
    //   if (event.target.id != null) {
    //     this.response = "";
    //     this._setIdAsNone();
    //     id = event.target.id;
    //     document.getElementById(`response${id}`)!.style.display = "block";
    //   }
    // }
    // switch (route) {
    //   case '/auth/login':
    //     requestBody = new FormData();
    //     requestBody.append('username', 'adm@adm.com.br');
    //     requestBody.append('password', 'Admin123@');
    //     r = await this._api.post(route, requestBody, null);
    //     // console.log(r.getSuccess())
    //     if (r.getSuccess()) { //activate success/error button
    //       this.response = "POST request was successfully done!";
    //       document.getElementById("response0")!.style.color = "green";
    //     } else {
    //       this.response = r.getResponse().message;
    //       document.getElementById("response0")!.style.color = "red";
    //     }
    //     break;

    //   case '/auth/me':
    //     r = await this._api.get(route);
    //     if (r.getSuccess()) { //activate success/error button
    //       this.response = "GET request was successfully fetched!";
    //       console.log("response", r.getResponse());
    //       document.getElementById("response1")!.style.color = "green";
    //     } else {
    //       this.response = r.getResponse().message;
    //       document.getElementById("response1")!.style.color = "red";
    //     }
    //     break;

    //   case '/user/create':
    //     requestBody = {
    //       email: "teste33@teste.com",
    //       name: "teste33",
    //       role: "NORMAL_USER",
    //       telephone: "34 9 9999-9999",
    //       password: "Teste123@"
    //     };
    //     // this._api.post(route,JSON.stringify(requestBody));
    //     r = await this._api.post(route, requestBody, null);
    //     if (r.getSuccess()) { //activate success/error button
    //       this.response = "POST request was successfully done!";
    //       document.getElementById("response2")!.style.color = "green";
    //     } else {
    //       this.response = r.getResponse().message;
    //       document.getElementById("response2")!.style.color = "red";
    //     }
    //     break;

    //   case '/user/me/talks':
    //     r = await this._api.get(route);
    //     if (r.getSuccess()) { //activate success/error button
    //       this.response = "GET request was successfully fetched!";
    //       console.log(r.getResponse())
    //       document.getElementById("response3")!.style.color = "green";
    //     } else {
    //       this.response = r.getResponse().message;
    //       document.getElementById("response3")!.style.color = "red";
    //     }
    //     break;

    //   case '/talk':
    //     r = await this._api.get(route);
    //     if (r.getSuccess()) { //activate success/error button
    //       console.log("response", r.getResponse());
    //       this.response = "GET request was successfully fetched!";
    //       document.getElementById("response4")!.style.color = "green";
    //     } else {
    //       this.response = r.getResponse().message;
    //       document.getElementById("response4")!.style.color = "red";
    //     }
    //     break;

    //   case '/talk/create':
    //     requestBody = {title: "title 2"};
    //     // this._api.post(route,JSON.stringify(requestBody));
    //     r = await this._api.post(route, requestBody, null);
    //     if (r.getSuccess()) { //activate success/error button
    //       this.response = "POST request was successfully done!";
    //       document.getElementById("response5")!.style.color = "green";
    //     } else {
    //       this.response = r.getResponse().message;
    //       document.getElementById("response5")!.style.color = "red";
    //     }
    //     break;

    //   case '/post/create':
    //     requestBody = {
    //       base_text: "2nd post",
    //       talk_id: 11
    //     };
    //     r = await this._api.post(route, requestBody, null);
    //     if (r.getSuccess()) { //activate success/error button
    //       this.response = "POST request was successfully done!";
    //       document.getElementById("response6")!.style.color = "green";
    //     } else {
    //       this.response = r.getResponse().message;
    //       document.getElementById("response6")!.style.color = "red";
    //     }
    //     break;

    //   case '/post':
    //     r = await this._api.get(route);
    //     if (r.getSuccess()) { //activate success/error button
    //       this.response = "GET request was successfully fetched!";
    //       console.log("response", r.getResponse());
    //       document.getElementById("response7")!.style.color = "green";
    //     } else {
    //       this.response = r.getResponse().message;
    //       document.getElementById("response7")!.style.color = "red";
    //     }
    //     break;

    //     case '/post/like':
    //       let post_id = 14;
    //       r = await this._api.post(route, null, post_id);
    //       if (r.getSuccess()) { //activate success/error button
    //         this.response = "POST request was successfully done!";
    //         console.log("response", r.getResponse());
    //         document.getElementById("response8")!.style.color = "green";
    //       } else {
    //         this.response = r.getResponse().message;
    //         document.getElementById("response8")!.style.color = "red";
    //       }
    //       break;

    //     // case '/practice':
    //     //   r = await this._api.post(route, requestBody, null);
    //     //   if (r.getSuccess()) { //activate success/error button
    //     //     this.response = "POST request was successfully done!";
    //     //     console.log("response", r.getResponse());
    //     //     document.getElementById("response8")!.style.color = "green";
    //     //   } else {
    //     //     this.response = r.getResponse().message;
    //     //     document.getElementById("response8")!.style.color = "red";
    //     //   }
    //     //   break;

    // }

  }


  submitLogin (): void {

    if (this.loginForm.value.email && this.loginForm.value.password) {
      this._apiService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe({
        next: (next) => {

          this.response = `User '${next.user.name}' is authenticated`;
          document.getElementById("response0")!.style.display = "block"
          document.getElementById("response0")!.style.color = "green";
          

        },
        error: (error) => {

          this.response = `Error: '${error.error.detail}'.`;
          document.getElementById("response0")!.style.display = "block"
          document.getElementById("response0")!.style.color = "red";

        }
      });
    } else {

      this._snackbarService.openSnackBar(3, "You've got to fill the email and password's input in order to post the request.");

    }

  }

  private _setIdAsNone (): void {
    for (let i = 0 ; i < 9 ; i++) {
      document.getElementById(`response${i}`)!.style.display = "none";
    }
  }

}
