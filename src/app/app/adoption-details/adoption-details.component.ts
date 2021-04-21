import { IAnimal, DataService, Animal } from '../../data.service';
import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';

@Component({
    selector: 'app-adoption-details',
    templateUrl: './adoption-details.component.html',
    styleUrls: ['./adoption-details.component.scss']
})
export class AdoptionDetailsComponent implements OnInit {
    
    public animal = new Animal(0, 'Ładowanie', 1, true, false, '', new Date(), ['Linia 1', 'Linia 2'], [], '../../../assets/dog-1866530_1280.jpg');
    
    constructor(private title: Title,
        private dataService: DataService,
        private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.title.setTitle("Do adopcji");
        this.activatedRoute.paramMap.subscribe(paramMap => {
            let animalId = Number(paramMap.get('id'));
            this.animal = this.dataService.get(animalId);
            this.title.setTitle(this.animal.name);
        });
    }
}