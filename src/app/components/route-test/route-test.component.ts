import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable, catchError, firstValueFrom, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';


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
        r = await this._post(route, requestBody);
        if (r) { //activate success/error button
          this.response = "POST request was successfully done!";
          document.getElementById("response0")!.style.color = "green";
        } else {
          document.getElementById("response0")!.style.color = "red";
        }
        break;

      case '/auth/me':
        r = this._get(route);
        if (r) { //activate success/error button
          this.response = "GET request successfully fetched!";
          document.getElementById("response1")!.style.color = "green";
        } else {
          document.getElementById("response1")!.style.color = "red";
        }
        break;

      case '/user/create':
        requestBody = {
          email: "teste31@teste.com",
          name: "teste31",
          role: "NORMAL_USER",
          telephone: "34 9 9999-9999",
          password: "Teste123@"
        };
        // this._post(route,JSON.stringify(requestBody));
        r = await this._post(route, requestBody);
        if (r) { //activate success/error button
          this.response = "POST request was successfully done!";
          document.getElementById("response2")!.style.color = "green";
        } else {
          document.getElementById("response2")!.style.color = "red";
        }
        break;

      case '/user/me/talks':
        r = this._get(route);
        if (r) { //activate success/error button
          this.response = "GET request successfully fetched!";
          document.getElementById("response3")!.style.color = "green";
        } else {
          document.getElementById("response3")!.style.color = "red";
        }
        break;

      case '/talk':
        r = this._get(route);
        if (r) { //activate success/error button
          this.response = "GET request successfully fetched!";
          document.getElementById("response4")!.style.color = "green";
        } else {
          document.getElementById("response4")!.style.color = "red";
        }
        break;

      case '/talk/create':
        requestBody = {title: "title 1"};
        // this._post(route,JSON.stringify(requestBody));
        r = await this._post(route, requestBody);
        if (r) { //activate success/error button
          this.response = "POST request was successfully done!";
          document.getElementById("response5")!.style.color = "green";
        } else {
          document.getElementById("response5")!.style.color = "red";
        }
        break;

      case '/post/create':
        requestBody = {
          base_text: "post 1",
          talk_id: 0
        };
        // this._post(route,JSON.stringify(requestBody));
        r = await this._post(route, requestBody);
        if (r) { //activate success/error button
          this.response = "POST request was successfully done!";
          document.getElementById("response6")!.style.color = "green";
        } else {
          document.getElementById("response6")!.style.color = "red";
        }
        break;

      case '/post':
        r = this._get(route);
        if (r) { //activate success/error button
          this.response = "GET request successfully fetched!";
          document.getElementById("response7")!.style.color = "green";
        } else {
          document.getElementById("response7")!.style.color = "red";
        }
        break;
    }
  }

  private async _post (route: string, requestBody: any): Promise<boolean> {
    try {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')!}`);
      const response: any = await firstValueFrom(this._http.post(environment.HTTP_REQUEST + route, requestBody, {headers})
      .pipe (
        catchError((error: HttpErrorResponse) => {
          // Handle error response
          if (typeof(error.error.detail) == 'string') { //not an object
            // console.error('An error occurred:', error.error.detail);
            this.response = error.error.detail;
          } else {
            // console.error('An error occurred:', error.error.detail[0]);
            this.response = error.error.detail[0].msg;
          }
          return throwError(() => new Error(this.response));
          // window.alert('An error occurred:' + error.error.detail);
        })
      ));
      // console.log('POST request successful:', response);
      localStorage.setItem('token', response.access_token);
      return true;
    } catch (error) {
      console.error('An error occurred:', error);
      return false;
    }
  }

  private async _get (route: string): Promise<boolean> {
    try {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')!}`);
      const response: any = await firstValueFrom(this._http.get(environment.HTTP_REQUEST + route, {headers})
      .pipe (
        catchError((error: HttpErrorResponse) => {
          // Handle error response
          if (typeof(error.error.detail) == 'string') { //not an object
            // console.error('An error occurred:', error.error.detail);
            this.response = error.error.detail;
          } else {
            console.error('An error occurred:', error);
            this.response = error.error.detail[0].msg;
          }
          return throwError(() => new Error(this.response));
          // window.alert('An error occurred:' + error.error.detail);
        })
      ));
      console.log('POST request successful:', response);
      return true;
    } catch (error) {
      console.error('An error occurred:', error);
      return false;
    }
  }

  private _createPostRequest (route: string, requestBody: any): Observable<any> {
    return this._http.post(environment.HTTP_REQUEST + route, requestBody);
  }

  private _createGetRequest (route: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')!}`);
    return this._http.get(environment.HTTP_REQUEST + route, {headers});
  }

  private _setIdAsNone (): void {
    for (let i = 0 ; i < 8 ; i++) {
      document.getElementById(`response${i}`)!.style.display = "none";
    }
  }

}
