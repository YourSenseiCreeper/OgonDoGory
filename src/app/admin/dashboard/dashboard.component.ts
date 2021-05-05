import { BlogPost, DataService, IAnimal, MailEntry } from './../../data.service';
import { Component, OnInit } from "@angular/core";

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
    
    constructor(private dataService: DataService) {}

    ngOnInit(): void {
        this.animals = this.dataService.getAllAnimalsRandom();
        this.mails = this.dataService.getMailbox();
        this.articles = this.dataService.getBlogPosts();
        this.presentedAnimals = this.animals;
    }

}
