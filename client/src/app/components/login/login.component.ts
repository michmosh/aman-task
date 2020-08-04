import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(  private fb: FormBuilder,
                private route: ActivatedRoute,
                private router: Router,
                private authService: AuthService) {
    
   }

  ngOnInit() {
    this.form = this.fb.group({
      username: ['', Validators.email],
      password: ['', Validators.required]
    });
  }

  onSubmit(){
    if(this.form.valid){
      let postData = {
        email:this.form.controls.username.value,
        password: this.form.controls.password.value
      }
      this.authService.login(postData)
    }
    
  }

}
