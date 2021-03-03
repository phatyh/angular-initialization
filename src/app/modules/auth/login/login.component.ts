import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  returnUrl: string = '';
  loginForm: FormGroup = this.createLoginForm();
  buttonDisabled: boolean = false;
  isSubmit: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParamMap.get('return-url') || '/';
  }

  createLoginForm(): FormGroup {
    return this.formBuilder.group({
      email: ['', [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(16)
      ]],
      remember: [true],
    });
  }

  get f(): { [key: string]: AbstractControl; } { return this.loginForm.controls; }

  login(): void {
    this.isSubmit = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }

    this.loginForm.value
  }

}
