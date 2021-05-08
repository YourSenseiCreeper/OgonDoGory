import { Router } from '@angular/router';
import { DataService, MailEntry } from '../../data.service';
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'admin-species-dictionary',
    templateUrl: './species-dictionary.component.html',
    styleUrls: ['../../app/adoption/adoption.component.scss', './species-dictionary.component.scss']
})
export class SpeciesDictionaryComponent implements OnInit {
    
    dogSpeciesForm: FormGroup;
    dogSpecies: Array<string> = [];

    catSpeciesForm: FormGroup;
    catSpecies: Array<string> = [];

    errorMessageDog: string = '';
    errorMessageCat: string = '';

    constructor(
        private formBuilder: FormBuilder,
        private dataService: DataService
    ) {
        this.dogSpeciesForm = this.formBuilder.group({
            speciesName: new FormControl('', null)
        });
        this.catSpeciesForm = this.formBuilder.group({
            speciesName: new FormControl('', null)
        });
    }

    ngOnInit(): void {
        this.dogSpecies = this.dataService.getDogSpecies();
        this.catSpecies = this.dataService.getCatSpecies();

        this.dogSpeciesForm.valueChanges.subscribe(v => {
            if (this.errorMessageDog !== '') {
                this.errorMessageDog = '';
            }
        });
        this.catSpeciesForm.valueChanges.subscribe(v => {
            if (this.errorMessageCat !== '') {
                this.errorMessageCat = '';
            }
        });
    }

    addDogSpecies() {
        let raw = this.dogSpeciesForm.getRawValue();
        if (raw.speciesName !== '') {
            this.dataService.addDogSpecie(raw.speciesName);
        } else {
            this.errorMessageDog = "Nazwa rasy jest pusta!";
        }
    }

    addCatSpecies() {
        let raw = this.catSpeciesForm.getRawValue();
        if (raw.speciesName !== '') {
            this.dataService.addCatSpecies(raw.speciesName);
        } else {
            this.errorMessageCat = "Nazwa rasy jest pusta!";
        }
    }
}
