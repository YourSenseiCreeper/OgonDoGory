import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { DataService, MailEntry } from '../../data.service';
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'admin-mail-new',
    templateUrl: './new-mail.component.html',
    styleUrls: ['../../app/adoption/adoption.component.scss', './new-mail.component.scss']
})
export class NewMailComponent implements OnInit {
    
    loginForm: FormGroup;
    errorMessage: string = '';

    constructor(
        private formBuilder: FormBuilder,
        private dataService: DataService,
        private router: Router
    ) {
        this.loginForm = this.formBuilder.group({
            title: new FormControl('', null),
            recipient: new FormControl('', null),
            message: new FormControl('', null)
        });
    }

    ngOnInit(): void {
        this.loginForm.valueChanges.subscribe(v => {
            if (this.errorMessage !== '') {
                this.errorMessage = '';
            }
        })
    }

    send() {
        let raw = this.loginForm.getRawValue();
        let paragraphs = raw.message.split('\n');
        if (raw.title !== '' && raw.recipient !== '') {
            this.dataService.sendNewMail(new MailEntry(raw.title, 'kontakt@ogondogory.pl', raw.recipient, new Date(), false, paragraphs));
            this.router.navigate(['admin/dashboard']);
        } else {
            this.errorMessage = "Brakuje tytułu lub adresata!";
        }
    }
}
