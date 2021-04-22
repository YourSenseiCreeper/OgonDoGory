import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
    selector: 'app-alarm-telephone',
    templateUrl: './alarm-telephone.component.html',
    styleUrls: ['./alarm-telephone.component.scss'],
})
export class AlarmTelephoneComponent implements OnInit {
    
    constructor(private title: Title) {
    }

    ngOnInit() {
        this.title.setTitle("Telefon alarmowy");
    }
}