import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
    selector: 'app-adoption',
    templateUrl: './adoption.component.html',
})
export class AdoptionComponent implements OnInit {
    
    constructor(private title: Title) {
    }

    ngOnInit() {
        this.title.setTitle("Do adopcji");
    }
}