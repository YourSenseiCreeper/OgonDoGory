import { IAnimal, DataService } from './../../data.service';
import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbDate, NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: 'app-adoption',
    templateUrl: './adoption.component.html',
    styleUrls: ['./adoption.component.scss']
})
export class AdoptionComponent implements OnInit {
    
    public animals: IAnimal[] = [];
    public presentedAnimals: IAnimal[] = [];
    searchGroup: FormGroup = new FormGroup({});
    isCollapsed = true;
    selectedGatunek: string = '';
    gatunki: string[] = ['Pies', 'Kot'];
    date: NgbDateStruct = new NgbDate(2021, 4, 21);
    
    constructor(private title: Title,
        private router: Router,
        private route: ActivatedRoute,
        private dataService: DataService,
        private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.searchGroup = this.formBuilder.group({
            anyText: new FormControl('', null),
            gatunek: new FormControl('', null),
            ageFrom: new FormControl(null, Validators.pattern("^[0-9]+$")),
            ageTo: new FormControl(null, Validators.pattern("^[0-9]+$")),
            foundFrom: new FormControl(null, null),
            foundTo: new FormControl(null, null),
            keywords: new FormControl('', null)
        })
        this.searchGroup.valueChanges.subscribe(value => {
            this.filter(value);
            // this.presentedAnimals = this.animals.filter(a => a.name.toLowerCase().includes(value.anyText.toLowerCase()));
        })
        this.title.setTitle("Do adopcji");
        let lastRoute = this.router.url.slice(this.router.url.lastIndexOf('/')+1);
        if (lastRoute === "wszystkie") this.animals = this.dataService.getAllAnimalsRandom();
        if (lastRoute === "koty") this.animals = this.dataService.getAllCats();
        if (lastRoute === "psy") this.animals = this.dataService.getAllDogs();
        this.presentedAnimals = this.animals;
        this.searchGroup.get('')?.setValue('afd');
    }

    toggleFilters(): void {
        this.isCollapsed = !this.isCollapsed;
        // this.filter();
    }

    filter(values: any) {
        let filteredAnimals = this.animals;
        if (values.anyText) {
            let text = values.anyText.toLowerCase();
            filteredAnimals = filteredAnimals.filter(a => a.name.toLowerCase().includes(text) 
                || a.descriptionParagraphs.some(p => p.toLowerCase().includes(text)));
        }
        if (values.gatunek) {
            if (values.gatunek == 'Pies')
                filteredAnimals = filteredAnimals.filter(a => a.isDog);
            if (values.gatunek === 'Kot')
                filteredAnimals = filteredAnimals.filter(a => a.isCat);
        }
        if (values.ageFrom) {
            filteredAnimals = filteredAnimals.filter(a => a.age >= values.ageFrom);
        }
        if (values.ageTo) {
            filteredAnimals = filteredAnimals.filter(a => a.age <= values.ageTo);
        }

        if (values.foundFrom) {
            filteredAnimals = filteredAnimals.filter(a => a.foundDate >= values.foundFrom);
        }
        if (values.foundTo) {
            filteredAnimals = filteredAnimals.filter(a => a.foundDate <= values.foundTo);
        }
        
        if (values.keywords) {
            let keywords = values.keywords.split(',');
            filteredAnimals = filteredAnimals.filter(a => a.keywords.some(aa => keywords.includes(aa)));
        }
        this.presentedAnimals = filteredAnimals;
    }

}