import { BlogPost } from '../../data.service';
import { Router } from '@angular/router';
import { DataService } from '../../data.service';
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'admin-add-edit-animal',
    templateUrl: './add-edit-animal.component.html',
    styleUrls: ['../../app/adoption/adoption.component.scss', './add-edit-animal.component.scss']
})
export class AddEditAnimalComponent implements OnInit {
    
    animalForm: FormGroup;
    errorMessage: string = '';

    constructor(
        private formBuilder: FormBuilder,
        private dataService: DataService,
        private router: Router
    ) {
        this.animalForm = this.formBuilder.group({
            imageUrl: new FormControl('', null),
            foundDate: new FormControl('', null),
            age: new FormControl('', null),
            name: new FormControl('', null),
            isDogIsCat: new FormControl('', null),
            keywords: new FormControl('', null),
            species: new FormControl('', null),
            description: new FormControl('', null)
        });
    }

    ngOnInit(): void {
        this.animalForm.valueChanges.subscribe(v => {
            if (this.errorMessage !== '') {
                this.errorMessage = '';
            }
        })
    }

    send() {
        let raw = this.animalForm.getRawValue();
        let paragraphs = raw.text.split('\n');
        if (raw.title !== '' && raw.publicationDate !== '' && raw.text !== '') {
            this.dataService.addBlogPost(new BlogPost(0, raw.title, 'Admin', new Date(raw.publicationDate.year, raw.publicationDate.month, raw.publicationDate.day), paragraphs));
            this.router.navigate(['admin/dashboard']);
        } else {
            this.errorMessage = "Brakuje tytułu lub adresata!";
        }
    }
}
