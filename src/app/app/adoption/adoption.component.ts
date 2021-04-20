import { IAnimal, DataService } from './../../data.service';
import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-adoption',
    templateUrl: './adoption.component.html',
    styleUrls: ['./adoption.component.scss']
})
export class AdoptionComponent implements OnInit {
    
    public animals: IAnimal[] = [];
    
    constructor(private title: Title, private router: Router, private route: ActivatedRoute, private dataService: DataService) {
    }

    ngOnInit() {
        this.title.setTitle("Do adopcji");
        let lastRoute = this.router.url.slice(this.router.url.lastIndexOf('/')+1);
        if (lastRoute === "wszystkie") this.animals = this.dataService.getAllAnimalsRandom();
        if (lastRoute === "koty") this.animals = this.dataService.getAllCats();
        if (lastRoute === "psy") this.animals = this.dataService.getAllDogs();
    }
}