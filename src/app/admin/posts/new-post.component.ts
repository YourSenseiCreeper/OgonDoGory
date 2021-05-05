import { BlogPost } from './../../data.service';
import { Router } from '@angular/router';
import { DataService, MailEntry } from '../../data.service';
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'admin-post-new',
    templateUrl: './new-post.component.html',
    styleUrls: ['../../app/adoption/adoption.component.scss', './new-post.component.scss']
})
export class NewPostComponent implements OnInit {
    
    postForm: FormGroup;
    errorMessage: string = '';

    constructor(
        private formBuilder: FormBuilder,
        private dataService: DataService,
        private router: Router
    ) {
        this.postForm = this.formBuilder.group({
            title: new FormControl('', null),
            publicationDate: new FormControl('', null),
            text: new FormControl('', null)
        });
    }

    ngOnInit(): void {
        this.postForm.valueChanges.subscribe(v => {
            if (this.errorMessage !== '') {
                this.errorMessage = '';
            }
        })
    }

    send() {
        let raw = this.postForm.getRawValue();
        let paragraphs = raw.text.split('\n');
        if (raw.title !== '' && raw.publicationDate !== '' && raw.text !== '') {
            this.dataService.addBlogPost(new BlogPost(raw.title, 'Admin', new Date(raw.publicationDate.year, raw.publicationDate.month, raw.publicationDate.day), paragraphs));
            this.router.navigate(['admin/dashboard']);
        } else {
            this.errorMessage = "Brakuje tytułu lub adresata!";
        }
    }
}
