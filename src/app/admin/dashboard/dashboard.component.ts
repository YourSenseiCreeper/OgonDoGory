import { DataService, IAnimal } from './../../data.service';
import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'admin-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['../../app/adoption/adoption.component.scss', './dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit{
    
    public animals: IAnimal[] = [];
    public presentedAnimals: IAnimal[] = [];
    
    constructor(private dataService: DataService) {}

    ngOnInit(): void {
        this.animals = this.dataService.getAllAnimalsRandom();
        this.presentedAnimals = this.animals;
    }

}
