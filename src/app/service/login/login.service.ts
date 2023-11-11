import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, observable } from 'rxjs';
import { AppComponent } from 'src/app/app.component';
import { Login } from 'src/app/models/login/login.model';
import { User } from 'src/app/models/user/User.model';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private token: string = '';
  private user = new BehaviorSubject<User>(new User());

  public appComponent = new AppComponent();

  constructor(
    private router: Router,
    private http: HttpClient,
  ) { }


  /**
   * Register a new user.
   * @todo Check if user saved to the DB is User type.
   * @todo The token saved isn't valid. Shouldn't receive an valid token in the response?
   */
  registerUser (user: User): Observable<any>  {
    return new Observable((observer) => {
      this.http.post<any>(environment.HTTP_REQUEST + '/user/create', user).subscribe({
        next: (response) => {
          if (response) {
            // this.appComponent.login = false;
            this.redirectToHome();
            console.log(response);
            localStorage.setItem('id', response);
            localStorage.setItem('email', user.email);
            localStorage.setItem('username', user.name);
            localStorage.setItem("token",`Bearer ${response.access_token}`);
            observer.next(response);
          }
        },
        error: (error) => {
          observer.error(error.error.detail);
        }
      });
    });
  }

  registerUserAlternative (user: User) {
    return this.http.post(environment.HTTP_REQUEST + '/user/create', user);
  }

  /**
   * Once login was successfully checked, user is redirect to the home page.
   */
  public redirectToHome (): void {
    this.router.navigate(['/home']);
  }

  /**
   * Once login wasn't successfull, user is redirect to the login page.
   */
  public redirectToAuth (): void {
    this.router.navigate(['/auth/login']);
  }


  /**
   * Login user.
   * @param data
   * @returns
   */
  login(data) {
    let user  = new FormData(); // form url-encoded not JSON.
    user.append('username', data.username);
    user.append('password', data.password);
    return this.http.post(environment.HTTP_REQUEST + '/auth/login', user);
  }

  public setToken (token: string) {
    this.token = token;
  }
  public getToken () {
    return this.token!;
  }

  public setUser (user: User) {
    this.user.next(user);
  }
  public getUser (): Observable<User> {
    return this.user.asObservable();
  }
}
