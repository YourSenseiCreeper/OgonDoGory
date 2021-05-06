import { BlogPost, DataService, IAnimal, MailEntry } from './../../data.service';
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'admin-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['../../app/adoption/adoption.component.scss', './dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit{
    
    public animals: IAnimal[] = [];
    public presentedAnimals: IAnimal[] = [];

    public mails: MailEntry[] = [];
    public mailsPage = 1;
    public mailsPageSize = 4;

    public articles: BlogPost[] = [];
    public articlesPage = 1;
    public articlesPageSize = 4;

    searchForm: FormGroup = new FormGroup({});
    
    constructor(private dataService: DataService, private fb: FormBuilder) {
        this.searchForm = fb.group({
            query: new FormControl('', null)
        });
        this.searchForm.valueChanges.subscribe(v => this.filterAnimals(v));
    }

    ngOnInit(): void {
        this.animals = this.dataService.getAllAnimalsRandom();
        this.mails = this.dataService.getMailbox();
        this.articles = this.dataService.getBlogPosts();
        this.presentedAnimals = this.animals;
    }

    filterAnimals(values: any){
        var lowerQuery = values.query.toLowerCase();
        this.presentedAnimals = this.animals.filter(a => a.name.toLowerCase().startsWith(lowerQuery) || a.species.toLowerCase().startsWith(lowerQuery));
    }

}
