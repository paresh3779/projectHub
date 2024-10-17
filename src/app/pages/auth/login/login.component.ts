import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { EmailValidator, PasswordValidator } from 'src/app/core/helpers';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy{
  loginForm: FormGroup;
  formSubmitted: boolean = false;
  formProcessing: boolean = false;
  constructor(
    private formBuilder: FormBuilder
  ){}
  ngOnInit(){
    this.loginFormBuild();
  }

  loginFormBuild(){
    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.required, EmailValidator()]],
      password: ["", [Validators.required, PasswordValidator()]]
    });
    // this.loginForm = new FormGroup({
    //   email: new FormControl("", [Validators.required]),
    //   password: new FormControl("", [Validators.required])
    // });
  }

  get loginFormMeta() {
    return this.loginForm.controls;
  }

  login(){
    this.formProcessing = true;
    this.formSubmitted = true;
    if(this.loginForm.valid){
      this.formSubmitted = false;
      console.log(this.loginForm.value);
    }
    clearInterval(interval);
    var interval = setInterval(()=>this.formProcessing = false, 10000);
  }

  ngOnDestroy() {

  }
}

