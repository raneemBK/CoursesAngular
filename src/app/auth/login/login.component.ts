import { Component, NgModule } from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {FormControl, Validators, FormsModule, ReactiveFormsModule, FormGroup, NgModel} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {merge} from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { MatDialogModule } from '@angular/material/dialog';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule,MatDialogModule,
    
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
 
  constructor(public auth: AuthService){}

  // loginData.email

  loginData = {
    email: '',
    pass: '',
  };
  loginUser(){
    //console.log(this.email.value, this.password.value)
    this.auth.login(this.loginData);
    
  }
}
