import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { ApiService } from 'src/app/service/api/api.service';


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


  constructor (
    private _http: HttpClient,
    private _api: ApiService,
  ) {}

  async trigger (route: string, event?: any) {
    let requestBody, r, id;
    if (event) {
      if (event.target.id != null) {
        this.response = "";
        this._setIdAsNone();
        id = event.target.id;
        document.getElementById(`response${id}`)!.style.display = "block";
      }
    }
    switch (route) {
      case '/auth/login':
        requestBody = new FormData();
        requestBody.append('username', 'adm@adm.com.br');
        requestBody.append('password', 'Admin123@');
        r = await this._api.post(route, requestBody, null);
        // console.log(r.getSuccess())
        if (r.getSuccess()) { //activate success/error button
          this.response = "POST request was successfully done!";
          document.getElementById("response0")!.style.color = "green";
        } else {
          this.response = r.getResponse().message;
          document.getElementById("response0")!.style.color = "red";
        }
        break;

      case '/auth/me':
        r = await this._api.get(route);
        if (r.getSuccess()) { //activate success/error button
          this.response = "GET request was successfully fetched!";
          console.log("response", r.getResponse());
          document.getElementById("response1")!.style.color = "green";
        } else {
          this.response = r.getResponse().message;
          document.getElementById("response1")!.style.color = "red";
        }
        break;

      case '/user/create':
        requestBody = {
          email: "teste33@teste.com",
          name: "teste33",
          role: "NORMAL_USER",
          telephone: "34 9 9999-9999",
          password: "Teste123@"
        };
        // this._api.post(route,JSON.stringify(requestBody));
        r = await this._api.post(route, requestBody, null);
        if (r.getSuccess()) { //activate success/error button
          this.response = "POST request was successfully done!";
          document.getElementById("response2")!.style.color = "green";
        } else {
          this.response = r.getResponse().message;
          document.getElementById("response2")!.style.color = "red";
        }
        break;

      case '/user/me/talks':
        r = await this._api.get(route);
        if (r.getSuccess()) { //activate success/error button
          this.response = "GET request was successfully fetched!";
          console.log(r.getResponse())
          document.getElementById("response3")!.style.color = "green";
        } else {
          this.response = r.getResponse().message;
          document.getElementById("response3")!.style.color = "red";
        }
        break;

      case '/talk':
        r = await this._api.get(route);
        if (r.getSuccess()) { //activate success/error button
          console.log("response", r.getResponse());
          this.response = "GET request was successfully fetched!";
          document.getElementById("response4")!.style.color = "green";
        } else {
          this.response = r.getResponse().message;
          document.getElementById("response4")!.style.color = "red";
        }
        break;

      case '/talk/create':
        requestBody = {title: "title 2"};
        // this._api.post(route,JSON.stringify(requestBody));
        r = await this._api.post(route, requestBody, null);
        if (r.getSuccess()) { //activate success/error button
          this.response = "POST request was successfully done!";
          document.getElementById("response5")!.style.color = "green";
        } else {
          this.response = r.getResponse().message;
          document.getElementById("response5")!.style.color = "red";
        }
        break;

      case '/post/create':
        requestBody = {
          base_text: "2nd post",
          talk_id: 11
        };
        r = await this._api.post(route, requestBody, null);
        if (r.getSuccess()) { //activate success/error button
          this.response = "POST request was successfully done!";
          document.getElementById("response6")!.style.color = "green";
        } else {
          this.response = r.getResponse().message;
          document.getElementById("response6")!.style.color = "red";
        }
        break;

      case '/post':
        r = await this._api.get(route);
        if (r.getSuccess()) { //activate success/error button
          this.response = "GET request was successfully fetched!";
          console.log("response", r.getResponse());
          document.getElementById("response7")!.style.color = "green";
        } else {
          this.response = r.getResponse().message;
          document.getElementById("response7")!.style.color = "red";
        }
        break;

        case '/post/like':
          let post_id = 14;
          r = await this._api.post(route, null, post_id);
          if (r.getSuccess()) { //activate success/error button
            this.response = "POST request was successfully done!";
            console.log("response", r.getResponse());
            document.getElementById("response8")!.style.color = "green";
          } else {
            this.response = r.getResponse().message;
            document.getElementById("response8")!.style.color = "red";
          }
          break;

    }
  }


  private _setIdAsNone (): void {
    for (let i = 0 ; i < 9 ; i++) {
      document.getElementById(`response${i}`)!.style.display = "none";
    }
  }

}
