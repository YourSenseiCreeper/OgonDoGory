import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";

export class Option {
    constructor(public option: string, public header: string, public text: string[]) {}
}
@Component({
    selector: 'app-how-to-help',
    templateUrl: './how-to-help.component.html',
    styleUrls: ['./how-to-help.component.scss'],
})
export class HowToHelpComponent implements OnInit {
    
    selectedOption = ""
    selectedOptionObject: Option = new Option('', '', []);
    options: string[] = [];
    optionsWithText: Option[] = [
        {option: "Mam czas i chęci", header: 'Czas to najcenniejsza waluta', text: ["Jakiś tekst"]},
        {option: "Mam trochę pieniędzy", header: 'Każdy grosz się liczy', text: ["Jakiś tekst"]},
        {option: "Mam trochę miejsca w domu", header: 'Co moje to twoje', text: ["Jakiś tekst"]},
        {option: "Mam znajomości", header: 'Od słowa do słowa', text: ["Jakiś tekst"]},
        {option: "Mam inny pomysł", header: 'Słuchamy!', text: ["Jakiś tekst"]}
    ];

    constructor(private title: Title) {
        this.options = this.optionsWithText.map(o => o.option);
    }

    selectOption(option: string) {
        this.selectedOptionObject = this.optionsWithText.find(o => o.option === option) as Option;
    }

    ngOnInit() {
        this.title.setTitle("Jak pomagać?");
    }
}