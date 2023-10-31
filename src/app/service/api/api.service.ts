import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, firstValueFrom, throwError } from 'rxjs';
import { ApiResponse } from 'src/app/models/api/ApiResponse.model';
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
}
