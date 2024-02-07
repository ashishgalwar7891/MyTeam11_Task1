import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm !: FormGroup

  constructor(private fb:FormBuilder, private authService:AuthService,private router:Router,private _snackBar: MatSnackBar) { }

  ngOnInit(){
    this.loginForm = this.fb.group({
      email: ['',Validators.required, Validators.email],
      password: ['',Validators.required]
    })
  }

  login(){
    this.authService.login(this.loginForm.value).subscribe({
      next:(res:any)=>{
        if(res.token){
          localStorage.setItem('token',res.token)
          this.router.navigate(['/dashboard']);
        }else{
          alert('Invalid Credentials')
        }
      },
      error:(err)=>{
        alert(err.error.message)
      }
    })
  }
}
