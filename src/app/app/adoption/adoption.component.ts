import { Animal, DataService } from './../../data.service';
import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
    selector: 'app-adoption',
    templateUrl: './adoption.component.html',
    styleUrls: ['./adoption.component.scss']
})
export class AdoptionComponent implements OnInit {
    
    public animals: Animal[] = [];
    
    constructor(private title: Title, private dataService: DataService) {
    }

    ngOnInit() {
        this.title.setTitle("Do adopcji");
        this.animals = this.dataService.getAllDogs();
    }
}