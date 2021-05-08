import { Router } from '@angular/router';
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DataService, MailEntry } from 'src/app/data.service';

@Component({
    selector: 'admin-mail-list',
    templateUrl: './mail-list.component.html',
    styleUrls: ['../../../app/adoption/adoption.component.scss', './mail-list.component.scss']
})
export class MailListComponent implements OnInit {
    
    loginForm: FormGroup;
    mailbox: MailEntry[] = [];
    allMails: number = 0;
    unreadMails: number = 0;
    mailsPage = 1;
    mailsPageSize = 10;
    
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
        // this.loginForm.valueChanges.subscribe(v => {
        //     if (this.errorMessage !== '') {
        //         this.errorMessage = '';
        //     }
        // });
        this.mailbox = this.dataService.getMailbox();
        this.allMails = this.mailbox.length;
        this.unreadMails = this.mailbox.filter(m => !m.opened).length;
    }

    openMail(mail: MailEntry) {
        mail.opened = !mail.opened;
        this.unreadMails = this.mailbox.filter(m => !m.opened).length;
    }

    send() {
        let raw = this.loginForm.getRawValue();
        let paragraphs = raw.message.split('\n');
        if (raw.title !== '' && raw.recipient !== '') {
            this.dataService.sendNewMail(new MailEntry(0, raw.title, 'kontakt@ogondogory.pl', raw.recipient, new Date(), false, paragraphs));
            this.router.navigate(['admin/dashboard']);
        }
    }
}
