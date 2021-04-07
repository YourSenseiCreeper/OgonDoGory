import { Animal, DataService } from '../../data.service';
import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-adoption-details',
    templateUrl: './adoption-details.component.html',
    styleUrls: ['./adoption-details.component.scss']
})
export class AdoptionDetailsComponent implements OnInit {
    
    public animals: Animal[] = [];
    
    constructor(private title: Title,
        private dataService: DataService,
        private activetedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.title.setTitle("Do adopcji");
        this.activetedRoute.params.subscribe(v => v);
        this.animals = this.dataService.getAllDogs();
    }
}