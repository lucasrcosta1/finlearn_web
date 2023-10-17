import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, firstValueFrom, throwError } from 'rxjs';
import { ApiResponse } from 'src/app/models/api/ApiResponse.model';
import { FrequentQuestion } from 'src/app/models/contact/FrequentQuestion.model';
import { User } from 'src/app/models/user/User.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  response = "";

  constructor(
    private _http: HttpClient,
  ) { }


  public async post (route: string, requestBody: any, post_id: number | null, headers?: HttpHeaders): Promise<ApiResponse> {
    let apiResponse = new ApiResponse();
    try {
      if (!headers) headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')!}`);
      if (post_id == null) post_id = 0;
      const params = new HttpParams().set('post_id', post_id!.toString());
      const response: any = await firstValueFrom(this._http.post(environment.HTTP_REQUEST + route, requestBody, {headers, params})
      .pipe (
        catchError((error: HttpErrorResponse) => {
          // Handle error response
          console.log("api service error", error);
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
      if (response.access_token) localStorage.setItem('token', response.access_token);
      apiResponse.setSuccess(true);
      apiResponse.setResponse(response);
      // console.log(apiResponse);
      return apiResponse;
    } catch (error) {
      console.error('An error occurred:', error);

      apiResponse.setSuccess(false);
      apiResponse.setResponse(error);
      return apiResponse;
    }
  }

  public async get (route: string, headers?: HttpHeaders): Promise<ApiResponse> {
    let apiResponse = new ApiResponse();
    try {
      if (!headers) headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')!}`);
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

      // console.log('POST request successful:', response);
      apiResponse.setSuccess(true);
      apiResponse.setResponse(response);
      return apiResponse;
    } catch (error: any) {
      console.error('An error occurred:', error);

      apiResponse.setSuccess(false);
      apiResponse.setResponse(error);
      return apiResponse;
    }
  }

  /**
   * Get frequent questions from api.
   * @returns 
   */
  getFrequentQuestions (): Promise<FrequentQuestion[]> {

    // const apiUrl = 'https://your-api-url/frequent-questions';

    // return this._http.get<FrequentQuestion[]>(apiUrl);
    return new Promise(
      (resolve, error) => {
        resolve([
          {id: 0, name: "Usuário 1", subject: " Pergunta 1", description: "Aliquam laoreet pellentesque ligula, nec tristique justo gravida at. Vivamus a risus consequat ante vulputate dapibus vel in erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed blandit placerat felis, id condimentum sapien facilisis sed. Nam et diam dui. Proin quis nibh at libero pellentesque sollicitudin vitae fringilla mi. Aliquam et tincidunt augue. Donec eleifend ligula sed mauris posuere, vitae tincidunt mauris porttitor. Nullam tempus augue velit, dignissim semper odio feugiat vel. Sed blandit placerat felis, id condimentum sapien facilisis sed. Nam et diam dui. Proin quis nibh at libero pellentesque sollicitudin vitae fringilla mi. Aliquam et tincidunt augue. Donec eleifend ligula sed mauris posuere, vitae tincidunt mauris porttitor. Nullam tempus augue velit, dignissim semper odio feugiat vel. Aliquam et tincidunt augue. Donec eleifend ligula sed mauris posuere, vitae tincidunt mauris porttitor. Nullam tempus augue velit, dignissim semper odio feugiat vel. Sed blandit placerat felis, id condimentum sapien facilisis sed. Nam et diam dui. Proin quis nibh at libero pellentesque sollicitudin vitae fringilla mi. Aliquam et tincidunt augue. Donec eleifend ligula sed mauris posuere, vitae tincidunt mauris porttitor. Nullam tempus augue velit, dignissim semper odio feugiat vel. Sed blandit placerat felis, id condimentum sapien facilisis sed. Nam et diam dui. Proin quis nibh at libero pellentesque sollicitudin vitae fringilla mi. Aliquam et tincidunt augue. Donec eleifend ligula sed mauris posuere, vitae tincidunt mauris porttitor. Nullam tempus augue velit, dignissim semper odio feugiat vel?", answer: "Aliquam laoreet pellentesque ligula, nec tristique justo gravida at. Vivamus a risus consequat ante vulputate dapibus vel in erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed blandit placerat felis, id condimentum sapien facilisis sed. Nam et diam dui. Proin quis nibh at libero pellentesque sollicitudin vitae fringilla mi. Aliquam et tincidunt augue. Donec eleifend ligula sed mauris posuere, vitae tincidunt mauris porttitor. Nullam tempus augue velit, dignissim semper odio feugiat vel. Sed blandit placerat felis, id condimentum sapien facilisis sed. Nam et diam dui. Proin quis nibh at libero pellentesque sollicitudin vitae fringilla mi. Aliquam et tincidunt augue. Donec eleifend ligula sed mauris posuere, vitae tincidunt mauris porttitor. Nullam tempus augue velit, dignissim semper odio feugiat vel. Aliquam et tincidunt augue. Donec eleifend ligula sed mauris posuere, vitae tincidunt mauris porttitor. Nullam tempus augue velit, dignissim semper odio feugiat vel. Sed blandit placerat felis, id condimentum sapien facilisis sed. Nam et diam dui. Proin quis nibh at libero pellentesque sollicitudin vitae fringilla mi. Aliquam et tincidunt augue. Donec eleifend ligula sed mauris posuere, vitae tincidunt mauris porttitor. Nullam tempus augue velit, dignissim semper odio feugiat vel. Sed blandit placerat felis, id condimentum sapien facilisis sed. Nam et diam dui. Proin quis nibh at libero pellentesque sollicitudin vitae fringilla mi. Aliquam et tincidunt augue. Donec eleifend ligula sed mauris posuere, vitae tincidunt mauris porttitor. Nullam tempus augue velit, dignissim semper odio feugiat vel?", expanded: false},
          {id: 1, name: "Usuário 2", subject: " Pergunta 2", description: "Aliquam laoreet pellentesque ligula, nec tristique justo gravida at. Vivamus a risus consequat ante vulputate dapibus vel in erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed blandit placerat felis, id condimentum sapien facilisis sed. Nam et diam dui. Proin quis nibh at libero pellentesque sollicitudin vitae fringilla mi. Aliquam et tincidunt augue. Donec eleifend ligula sed mauris posuere, vitae tincidunt mauris porttitor. Nullam tempus augue velit, dignissim semper odio feugiat vel?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum accumsan volutpat. Nulla facilisi. Duis rhoncus iaculis turpis, at congue velit egestas venenatis. Suspendisse eu sapien sed ipsum rutrum efficitur. Fusce luctus elementum hendrerit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris euismod interdum purus ut tempor. Suspendisse ut rutrum dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.", expanded: false},
          {id: 2, name: "Usuário 3", subject: " Pergunta 3", description: "Aliquam laoreet pellentesque ligula, nec tristique justo gravida at. Vivamus a risus consequat ante vulputate dapibus vel in erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed blandit placerat felis, id condimentum sapien facilisis sed. Nam et diam dui. Proin quis nibh at libero pellentesque sollicitudin vitae fringilla mi. Aliquam et tincidunt augue. Donec eleifend ligula sed mauris posuere, vitae tincidunt mauris porttitor. Nullam tempus augue velit, dignissim semper odio feugiat vel?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum accumsan volutpat. Nulla facilisi. Duis rhoncus iaculis turpis, at congue velit egestas venenatis. Suspendisse eu sapien sed ipsum rutrum efficitur. Fusce luctus elementum hendrerit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris euismod interdum purus ut tempor. Suspendisse ut rutrum dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.", expanded: false},
          {id: 3, name: "Usuário 4", subject: " Pergunta 4", description: "Aliquam laoreet pellentesque ligula, nec tristique justo gravida at. Vivamus a risus consequat ante vulputate dapibus vel in erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed blandit placerat felis, id condimentum sapien facilisis sed. Nam et diam dui. Proin quis nibh at libero pellentesque sollicitudin vitae fringilla mi. Aliquam et tincidunt augue. Donec eleifend ligula sed mauris posuere, vitae tincidunt mauris porttitor. Nullam tempus augue velit, dignissim semper odio feugiat vel?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum accumsan volutpat. Nulla facilisi. Duis rhoncus iaculis turpis, at congue velit egestas venenatis. Suspendisse eu sapien sed ipsum rutrum efficitur. Fusce luctus elementum hendrerit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris euismod interdum purus ut tempor. Suspendisse ut rutrum dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.", expanded: false},
          {id: 4, name: "Usuário 5", subject: " Pergunta 5", description: "Aliquam laoreet pellentesque ligula, nec tristique justo gravida at. Vivamus a risus consequat ante vulputate dapibus vel in erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed blandit placerat felis, id condimentum sapien facilisis sed. Nam et diam dui. Proin quis nibh at libero pellentesque sollicitudin vitae fringilla mi. Aliquam et tincidunt augue. Donec eleifend ligula sed mauris posuere, vitae tincidunt mauris porttitor. Nullam tempus augue velit, dignissim semper odio feugiat vel?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum accumsan volutpat. Nulla facilisi. Duis rhoncus iaculis turpis, at congue velit egestas venenatis. Suspendisse eu sapien sed ipsum rutrum efficitur. Fusce luctus elementum hendrerit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris euismod interdum purus ut tempor. Suspendisse ut rutrum dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.", expanded: false},
          {id: 5, name: "Usuário 6", subject: " Pergunta 6", description: "Aliquam laoreet pellentesque ligula, nec tristique justo gravida at. Vivamus a risus consequat ante vulputate dapibus vel in erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed blandit placerat felis, id condimentum sapien facilisis sed. Nam et diam dui. Proin quis nibh at libero pellentesque sollicitudin vitae fringilla mi. Aliquam et tincidunt augue. Donec eleifend ligula sed mauris posuere, vitae tincidunt mauris porttitor. Nullam tempus augue velit, dignissim semper odio feugiat vel?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum accumsan volutpat. Nulla facilisi. Duis rhoncus iaculis turpis, at congue velit egestas venenatis. Suspendisse eu sapien sed ipsum rutrum efficitur. Fusce luctus elementum hendrerit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris euismod interdum purus ut tempor. Suspendisse ut rutrum dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.", expanded: false},
          {id: 6, name: "Usuário 7", subject: " Pergunta 7", description: "Aliquam laoreet pellentesque ligula, nec tristique justo gravida at. Vivamus a risus consequat ante vulputate dapibus vel in erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed blandit placerat felis, id condimentum sapien facilisis sed. Nam et diam dui. Proin quis nibh at libero pellentesque sollicitudin vitae fringilla mi. Aliquam et tincidunt augue. Donec eleifend ligula sed mauris posuere, vitae tincidunt mauris porttitor. Nullam tempus augue velit, dignissim semper odio feugiat vel?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum accumsan volutpat. Nulla facilisi. Duis rhoncus iaculis turpis, at congue velit egestas venenatis. Suspendisse eu sapien sed ipsum rutrum efficitur. Fusce luctus elementum hendrerit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris euismod interdum purus ut tempor. Suspendisse ut rutrum dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.", expanded: false},
          {id: 7, name: "Usuário 8", subject: " Pergunta 8", description: "Aliquam laoreet pellentesque ligula, nec tristique justo gravida at. Vivamus a risus consequat ante vulputate dapibus vel in erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed blandit placerat felis, id condimentum sapien facilisis sed. Nam et diam dui. Proin quis nibh at libero pellentesque sollicitudin vitae fringilla mi. Aliquam et tincidunt augue. Donec eleifend ligula sed mauris posuere, vitae tincidunt mauris porttitor. Nullam tempus augue velit, dignissim semper odio feugiat vel?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum accumsan volutpat. Nulla facilisi. Duis rhoncus iaculis turpis, at congue velit egestas venenatis. Suspendisse eu sapien sed ipsum rutrum efficitur. Fusce luctus elementum hendrerit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris euismod interdum purus ut tempor. Suspendisse ut rutrum dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.", expanded: false},
        ]);
      }
    );

  }

  /**
   * Authenticate user.
   * @param user 
   * @todo Organize method.
   */
  login (user: User) {

    const route   = '/auth/login';
    // const body    = `username=${encodeURIComponent(user.username)}&password=${encodeURIComponent(user.password)}`;
    // const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    // this._http.post<FrequentQuestion[]>(environment.HTTP_REQUEST + route, requestBody, {headers, params});

  }

  /**
   * Create user.
   * @param user 
   * @todo Organize method.
   */
  createUser (user: User) {
    const route = '/user/create';
    // // console.log( this.registerForm.value.role)
    // let requestBody: User = {
    //   name: this.registerForm.value.name,
    //   email: this.registerForm.value.email,
    //   password: this.registerForm.value.password,
    //   role: "NORMAL_USER",
    //   telephone: this.registerForm.value.telephone
    // };
    // // console.log(user);

    // let firstR = await this._api.post(route, requestBody, null);
    // // console.log(firstR);
    // if (firstR.getSuccess()) {
    //   this.spinner.emit(false);
    //   route = '/auth/login';
    //   const body = `username=${encodeURIComponent(requestBody.email)}&password=${encodeURIComponent(requestBody.password)}`;
    //   const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    //   let secondR = await this._api.post(route, body, null, headers);
    //   // console.log(secondR);
    //   if (secondR.getSuccess()) {
    //     // console.log(secondR);

    //     localStorage.setItem('id', secondR.getResponse()?.user.id);
    //     localStorage.setItem('email', secondR.getResponse()?.user.email);
    //     localStorage.setItem('token', secondR.getResponse()?.access_token);
    //     localStorage.setItem('username', secondR.getResponse()?.user.name);

    //     this._loginService.setUser(new User(secondR.getResponse().user));

    //     // this.spinner.emit(true);
    //     // this._router.navigate(['/']);

    //     this._snackBarService.openSnackBar(2, `Bem vindo ${secondR.getResponse()?.user.name}!`);
    //   } else {
    //     this._snackBarService.openSnackBar(3,'Internal Error');
    //   }
    // } else {
    //   this._snackBarService.openSnackBar(3, firstR.getResponse().message);
    // }

    // this.spinner.emit(true);
    // this._router.navigate(['/']);

  }

}
