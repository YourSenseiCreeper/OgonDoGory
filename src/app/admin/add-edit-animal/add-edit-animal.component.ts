import { Animal, BlogPost } from '../../data.service';
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
    previewUrl = 'https://via.placeholder.com/250';

    constructor(
        private formBuilder: FormBuilder,
        private dataService: DataService,
        private router: Router
    ) {
        this.animalForm = this.formBuilder.group({
            image: new FormControl('', null),
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
        });
    }

    fileUpload(fileInput: any) {
        var fileData = <File> fileInput.target.files[0];
        this.animalForm.get('image')?.setValue(fileData.name);

        // Show preview 
        var mimeType = fileData.type;
        if (mimeType.match(/image\/*/) == null) {
            return;
        }
    
        var reader = new FileReader();      
        reader.readAsDataURL(fileData); 
        reader.onload = (_event) => { 
            this.previewUrl = reader.result as string; 
        }
    }

    send() {
        let raw = this.animalForm.getRawValue();
        let paragraphs = raw.description.indexOf('\n') !== -1 ? raw.description.split('\n') : [raw.description];
        let keywords = raw.keywords.indexOf(',') !== -1 ? raw.keywords.split(',') : [raw.keywords];
        let foundDate = new Date(raw.foundDate.year, raw.foundDate.month, raw.foundDate.day);
        let isDog = raw.isDogIsCat === "Pies" ? true : false;
        let isCat = !isDog;
        if (raw.name !== '') {
            this.dataService.addAnimal(new Animal(0, raw.name, raw.age, isDog, isCat, raw.species, foundDate, paragraphs, keywords, raw.image));
            this.router.navigate(['admin/dashboard']);
        } else {
            this.errorMessage = "Brakuje tytułu lub adresata!";
        }
    }
}
