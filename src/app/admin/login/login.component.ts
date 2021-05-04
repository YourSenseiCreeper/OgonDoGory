import { Router } from '@angular/router';
import { DataService } from './../../data.service';
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'admin-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    
    loginForm: FormGroup;
    errorMessage: string = '';

    constructor(
        private formBuilder: FormBuilder,
        private dataService: DataService,
        private router: Router
    ) {
        this.loginForm = this.formBuilder.group({
            login: new FormControl('', null),
            password: new FormControl('', null)
        });
    }

    ngOnInit(): void {
        this.loginForm.valueChanges.subscribe(v => {
            if (this.errorMessage !== '') {
                this.errorMessage = '';
            }
        })
    }

    login() {
        let raw = this.loginForm.getRawValue();
        if (this.dataService.hasUserWithLoginAndPassword(raw.login, raw.password)) {
            this.router.navigate(['admin/']);
        } else {
            this.errorMessage = "Niepoprawne dane logowania!";
        }
    }
}
