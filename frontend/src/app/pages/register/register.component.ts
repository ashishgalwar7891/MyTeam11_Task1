import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordsMatchValidator } from 'src/app/helper/validators/password_match_validator';
import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    formBuilder = inject(FormBuilder)

  constructor(private authService:AuthService,private router:Router,private _snackBar: MatSnackBar) { }

  registerForm!:FormGroup

  ngOnInit(): void {
      this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      confirmPassword: ['', Validators.required],
    },{
      validators: PasswordsMatchValidator('password','confirmPassword')
    });
  }

  register(){
    this.authService.register(this.registerForm.value).subscribe({
      next:(res:any)=>{
        this.registerForm.reset();
        this.router.navigate(['/login']);
        alert(res.message)
      },
      error:(err)=>{
        alert(err.error)
      }
    })
  }
}
