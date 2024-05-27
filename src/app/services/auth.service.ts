import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,private router: Router) { }

  
  login(req: any) {
    debugger
    const body = {
      Username: req.email,
      Password: req.pass,
    };
  
    const headerDoc = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };
  
    const request = {
      headers: new HttpHeaders(headerDoc),
    };
  
    this.http.post('https://localhost:7118/api/Authentication/Login', body, request).subscribe(
     
      (res: any) => {
        const responce = {
          token: res.toString(),
        };
        // Save token in the local storage
        localStorage.setItem('token', responce.token);
        const data: any = jwtDecode(responce.token);
  
        localStorage.setItem('user', JSON.stringify(data));
        const name = data['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'];
        const role = data['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
        const pass = data['password'];
        
        if (role == '2') {
          this.router.navigate(['admin/index']);
        } else if (role == '1') {
          console.log(data.name);
          this.router.navigate(['user/index']);
        }
  
        console.log(data); 
        console.log("data.name:", name);
        console.log("data.Role:", role);
        console.log("data.Password:", pass);
        console.log("typeof data.Role:", typeof role);

        console.log("JWT Token:", localStorage.getItem('token'));
      },
      (err) => {
        console.log(err);
       
      }
    );
  }
}
