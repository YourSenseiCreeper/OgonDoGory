import { BlogPost, DataService } from './../../data.service';
import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['../app.component.scss', './homepage.component.scss']
})
export class HomepageComponent implements OnInit {
    
    posts: BlogPost[] = [];
    showedPosts: BlogPost[] = [];

    constructor(private title: Title, private dataService: DataService) {}

    ngOnInit() {
        this.title.setTitle("Strona główna");
        this.posts = this.dataService.getBlogPosts();
        this.showedPosts = this.posts.slice(0, 2);
    }

    showNext() {
        this.showedPosts = this.posts.slice(0, this.showedPosts.length + 2);
    }
}