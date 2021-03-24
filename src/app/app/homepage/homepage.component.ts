import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
})
export class HomepageComponent implements OnInit {
    
    constructor(private title: Title) {
    }

    ngOnInit() {
        this.title.setTitle("Strona główna");
    }
}