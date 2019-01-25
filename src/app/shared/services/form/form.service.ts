import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
    providedIn: 'root'
})
export class FormService {

    public loginForm: FormGroup = new FormGroup({
        email: new FormControl('', [Validators.email]),
        password: new FormControl('', Validators.required)
    });

    public registerForm: FormGroup = new FormGroup({
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.required),
        username: new FormControl('', [Validators.required, Validators.minLength(2)]),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(8)])
    });

    constructor() { }

    initLoginForm() {
        this.loginForm.setValue({
            email: '',
            password: ''
        });
    }

    initRegisterForm() {
      this.registerForm.setValue({
          firstName: '',
          lastName: '',
          username: '',
          email: '',
          password: ''
      });
    }

}
